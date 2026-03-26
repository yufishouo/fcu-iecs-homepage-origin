var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    loopAdditionalSlides: 1,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelectorAll('.index-video').forEach(element => {
    element.addEventListener('click', () => {
        swiper.autoplay.stop();
        let url = element.dataset.url;
        url = url.split('v=')[1];
        document.querySelector('#modalForVideo .modal-content').innerHTML = `<iframe src="https://www.youtube.com/embed/${url}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    });
});

document.querySelector('#modalForVideo').addEventListener('hide.bs.modal', () => {
    document.querySelector('#modalForVideo .modal-content').innerHTML = '';
    swiper.autoplay.start();
});

window.addEventListener('load', () => {
    try {
        const index_about = document.querySelector('.index-about-background');
        if (index_about && index_about.dataset && index_about.dataset.bgimg) {
            const bgimg = index_about.dataset.bgimg;
            const el = document.getElementsByClassName('index-about-background')[0];
            if (el) el.style.backgroundImage = `url(${location.origin + bgimg})`;
        }
    } catch (e) {
        // Prevent uncaught errors from breaking other scripts
        console.warn('Failed to apply index-about background image:', e);
    }
});
