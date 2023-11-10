function filterMovies() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const selectedRating = document.getElementById('rating-filter').value;
  let x = document.createElement("H3");
  let t = document.createTextNode("No Results");
  x.setAttribute("id","nores");
  x.appendChild(t);
  const ref = document.getElementById("foot");

  const movieList = document.querySelectorAll('#movie-list li');
  let count = 0;
  movieList.forEach((movieItem) => {
    const movieName = movieItem.innerText.toLowerCase();
    const movieRating = parseInt(movieItem.getAttribute('data-rating'));
    
    if (movieName.includes(searchQuery) && (selectedRating === "all" || movieRating >= parseInt(selectedRating))) {
      movieItem.style.display = 'list-item';
      if (document.getElementById("nores") != null) {
        document.getElementById("nores").remove();
      }
    } else {
      movieItem.style.display = 'none';
      count ++;
    }
  });
  if (movieList.length == count){
    if (document.getElementById("nores") == null){
      ref.parentNode.insertBefore(x, ref);
    }
  }
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