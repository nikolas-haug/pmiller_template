// for the scroll to top button

const scrollButton = document.querySelector('.scroll__top-btn');

function scrollBtnDisplay() {
    if (window.scrollY > 50) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

function topFunction() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

window.addEventListener('scroll', scrollBtnDisplay);
scrollButton.addEventListener('click', topFunction);

// for the dropdown skull navigation

const skull = document.querySelector('.main__logo');
const navCollapse = document.querySelector('.main__collapse');

function openMenu() {
    navCollapse.classList.toggle('main__nav--open');
}

skull.addEventListener('click', openMenu);

// For the bands page modals - TO DO - Update this for seaparated modal content

window.addEventListener('scroll', scrollBtnDisplay);
scrollButton.addEventListener('click', topFunction);

const modalBtn = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal__wrapper');
const xBtn = document.querySelector('.modal__header--btn');
const header = document.querySelector('.modal__header');

const modContent = document.querySelector('.modal__content');

function openModal() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
}

function closeModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modContent.scrollTop = 0;
}

function animateNav() {
    console.log(modContent.scrollTop);
    if (modContent.scrollTop > 25) {
        header.style.background = 'skyblue';
    } else {
        header.style.background = 'transparent';
    }
}

modalBtn.addEventListener('click', openModal);
xBtn.addEventListener('click', closeModal);
modContent.addEventListener('scroll', animateNav);

// End new styles for fixed header modal
//=================================================

// varible for the modals
const bandImgs = document.querySelectorAll('.bands__main--item');
// const modal = document.querySelector('.modal-div');

function openModal() {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    // document.querySelector('.modal-content').innerHTML = 'opened modal!';
};
function closeModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
};

// event listener for each band image
bandImgs.forEach(band => band.addEventListener('click', openModal));

// event listener for closing the modal
modal.addEventListener('click', closeModal, false);