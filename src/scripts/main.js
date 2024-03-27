import Alpine from "alpinejs";
import "@splidejs/splide/css";
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';



document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
} );
Splide.defaults = {
    type   : 'loop',
    autoWidth: true,
    perPage: 3,
    rewind: true,
    gap: 32,
    perMove: 1,
    arrows: true,
    pagination: true,
    drag: true,
    lazyLoad: 'sequential',
    breakpoints:{
        640: {
            perPage: 2,
        },
        1024:{
            arrows: false,
            pagination: true,
            gap: 16
        }
    }
}

// Получаем ссылку на модальное окно и кнопку для его открытия
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var background = document.getElementById("bgModal");
// Получаем ссылку на элемент закрытия модального окна
var span = document.getElementById("close");
var body = document.getElementsByClassName("body");

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
    background.style.display = "block";
    body.style.overflow = "clip";

}

// Когда пользователь нажимает на "×" (закрыть), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
    background.style.display = "none";
}

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.Alpine = Alpine;

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {});
