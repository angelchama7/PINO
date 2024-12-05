// Variables globales
let cart = [];
let currentImageIndex = 0;
const images = [
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/400/0000FF",
    "https://via.placeholder.com/400/FF0000",
    "https://via.placeholder.com/400/008000"
];

// Función para cambiar la imagen en el carrusel
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('carousel-image').src = images[currentImageIndex];
}

// Función para agregar imagen al carrito
function addToCart(imageSrc) {
    cart.push(imageSrc);
    updateCartCount();
    updateCartDetails();
}

// Función para actualizar el número de productos en el carrito
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Función para mostrar los detalles del carrito
function updateCartDetails() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<img src="${item}" alt="Producto" width="50"> <span>Producto ${index + 1}</span>`;
        cartItemsContainer.appendChild(cartItem);
    });
    document.getElementById('cart-details').style.display = 'block';
}

// Función para limpiar el carrito
function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDetails();
    document.getElementById('cart-details').style.display = 'none';
}

// Mostrar/ocultar el carrito al hacer clic en el ícono
document.querySelector('.cart').addEventListener('click', () => {
    const cartDetails = document.getElementById('cart-details');
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
});

// Inicializar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    changeImage(0);
});
