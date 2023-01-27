function showImage() {
    let rand = Math.ceil(Math.random() * 9);
    rand = Math.round(rand);
    document.querySelector('img').src = 'images/' + rand + '.jpg'
}

showImage();
document.querySelector('.btn').addEventListener('click', showImage);