let index = 0;
const images = document.querySelectorAll('#carrossel img');

function showImage(i) {
    images.forEach((img, idx) => {
        img.style.display = idx === i ? 'block' : 'none';
    });
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

setInterval(nextImage, 4000);
window.onload = () => showImage(index);

function filtrarFotos(categoria) {
    const fotos = document.querySelectorAll('.foto');
    fotos.forEach(foto => {
        if (categoria === 'todas' || foto.classList.contains(categoria)) {
            foto.style.display = 'block';
        } else {
            foto.style.display = 'none';
        }
    });
}

document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#carrossel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[currentIndex].classList.add('active');
    setInterval(showNextImage, 3000); // Troca de imagem a cada 3 segundos
});

let index = 0;

function showNextImage() {
    const carrossel = document.querySelector('.carrossel-imagens');
    const images = document.querySelectorAll('.carrossel-imagens img');
    index = (index + 1) % images.length;
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextImage, 3000);

