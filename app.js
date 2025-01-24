const apiKey = '9b7a161539de84c80083462cc04ff166';  // Replace with your TMDb API key
const baseUrl = 'https://api.themoviedb.org/3';

// Function to search movies
async function searchMovies() {
    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery.trim() === "") {
        alert("Please enter a movie name!");
        return;
    }

    try {
        const response = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display movies
function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';  // Clear previous search results

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const moviePoster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image';

        movieDiv.innerHTML = `
            <img src="${moviePoster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;

        movieList.appendChild(movieDiv);
    });
}
