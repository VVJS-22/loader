const page = document.querySelector(".wrapper");

const loader = document.querySelector(".loader-wrapper");


window.addEventListener('load',showPage)

function showPage() {
    const show = setTimeout(loadEnd,4000);
}

function loadEnd() {
    page.classList.toggle('flex');
    loader.classList.toggle('flex');
}

