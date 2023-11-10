function filterMovies() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const selectedRating = document.getElementById('rating-filter').value;

  const movieList = document.querySelectorAll('#movie-list li');
  movieList.forEach((movieItem) => {
    const movieName = movieItem.innerText.toLowerCase();
    const movieRating = parseInt(movieItem.getAttribute('data-rating'));

    if (movieName.includes(searchQuery) && (selectedRating === "all" || movieRating >= parseInt(selectedRating))) {
      movieItem.style.display = 'list-item';
    } else {
      movieItem.style.display = 'none';
    }
  });
}
function generateStars() {
  const movieList = document.querySelectorAll('#movie-list li');
  movieList.forEach((movieItem) => {
    const rating = parseInt(movieItem.getAttribute('data-rating'));
    const starDiv = movieItem.querySelector('.stars');
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '<span class="gold-star">*</span>';
      } else {
        stars += '<span class="grey-star">*</span>';
      }
    }
    starDiv.innerHTML = stars;
  });
}
window.onload = function() {
  generateStars();
}