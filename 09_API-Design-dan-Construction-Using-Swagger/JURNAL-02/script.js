fetch('/api/Movies')
    .then(response => response.json())
    .then(movies => {
        const list = document.getElementById('movieList');
        movies.forEach(movie => {
            const item = document.createElement('li');
            item.textContent = `${movie.title} - Directed by ${movie.director}`;
            list.appendChild(item);
        });
    })
    .catch(err => console.error(err));
