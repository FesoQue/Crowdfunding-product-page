const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-list');
const navModal = document.querySelector('.nav-modal');
const isModalBtn = document.querySelector('.modalBtn');
const closeModal = document.querySelector('.close-modal');
const pledgeModal = document.querySelector('.modal-wrapper');
const selectPledge = document.querySelectorAll('.radio');
const inputPledge = document.querySelector('.hide-pledge');
const inputPledge2 = document.querySelector('.hide-pledge2');
const myForm = document.querySelectorAll('.pledge-form');

hamburger.addEventListener('click', () => {
  if (!hamburger.classList.contains('is-active')) {
    hamburger.classList.add('is-active');
    menu.classList.add('show-menu');
    navModal.classList.add('show-nav-modal');
    document.documentElement.style.overflow = 'hidden';
  } else {
    hamburger.classList.remove('is-active');
    menu.classList.remove('show-menu');
    navModal.classList.remove('show-nav-modal');
    document.documentElement.style.overflow = 'visible';
  }
});

const handleModal = () => {
  !pledgeModal.classList.contains('show-pledge-modal')
    ? pledgeModal.classList.add('show-pledge-modal')
    : pledgeModal.classList.remove('show-pledge-modal');
};

selectPledge.forEach((el) => {
  el.addEventListener('change', (e) => {
    const id = e.target.dataset.id;
    switch (id) {
      case 'one':
        inputPledge.classList.add('show-pledge');
        inputPledge2.classList.remove('show-pledge');
        break;
      case 'two':
        inputPledge2.classList.add('show-pledge');
        inputPledge.classList.remove('show-pledge');
    }
  });
});

myForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.type === 'submit') {
      handleClick();
    }
  });
});

const handleClick = () => {
  const thankYou = document.querySelector('.ty-modal-wrapper');
  let goItBtn = document.querySelector('.ty-btn');

  thankYou.classList.add('show-ty-modal');
  pledgeModal.classList.remove('show-pledge-modal');

  goItBtn.addEventListener('click', () => {
    thankYou.classList.remove('show-ty-modal');
  });
};

isModalBtn.addEventListener('click', handleModal);
closeModal.addEventListener('click', handleModal);
