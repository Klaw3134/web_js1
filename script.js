const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('mainImage');

thumbs.forEach(img => {
    img.addEventListener('click', () => {
        mainImage.src = img.src.replace('/300/200', '/600/400');
    });

});