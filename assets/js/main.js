// ============== MODAL ==========
const modalFunctions = (function () {
  const openModalTarget = document.querySelectorAll('[data-open-modal-target]');
  const btnCloseModals = document.querySelectorAll('.btn-close-modal');
  const overlay = document.getElementById('overlay');
  const curModals = [];

  openModalTarget.forEach((modalTarget) => {
    modalTarget.addEventListener('click', (e) => {
      e.preventDefault();

      const targetName = document.querySelector(modalTarget.dataset.openModalTarget);

      if (targetName.id !== 'modal-contact' && targetName.id !== 'modal-navigation') {
        changeUI(modalTarget, targetName);
      }

      curModals.forEach(curModal => {
        closeModal(curModal);
      });
      curModals.push(targetName);

      openModal(targetName);

    })
  });

  btnCloseModals.forEach((button) => {
    button.addEventListener('click', () => {
      const modalTarget = button.closest('.modal');
      closeModal(modalTarget);
    })
  });

  overlay.addEventListener('click', () => {
    const modalTargets = document.querySelectorAll('.modal.active');

    modalTargets.forEach((modalTarget) => {
      closeModal(modalTarget);
    });
  });


  function openModal(targetName) {
    if (targetName !== null) {
      targetName.classList.add('active');
      overlay.classList.add('active');
    }
  }

  function closeModal(modalTarget) {
    if (modalTarget !== null) {
      modalTarget.classList.remove('active');
      overlay.classList.remove('active');
    }
  }

  function changeUI(modalTarget, targetName) {
    const targetIcon = modalTarget.parentNode.children[0].children[0].className;
    const targetTitle = modalTarget.parentNode.children[0].children[1].textContent;
    const targetDes = modalTarget.parentNode.children[1].innerHTML;

    targetName.children[0].children[0].children[0].children[0].className = targetIcon;
    targetName.children[0].children[0].children[1].textContent = targetTitle;
    targetName.children[0].children[1].innerHTML = targetDes;
  }
})();
// =============== END MODAL ================

// =============== CAROUSEL IMAGE ==============
const carouselSlide = (function () {
  const carousels = document.querySelectorAll('.carousel');
  const carouselBtns = document.querySelectorAll('[data-carousel-btn]');
  const auto = true;
  const intervalTime = 5000;
  let carouselInterval;

  const nextSlide = () => {
    const cur = document.querySelector('.current');

    cur.classList.remove('current');
    if (cur.nextElementSibling) {
      cur.nextElementSibling.classList.add('current');
    } else {
      carousels[0].classList.add('current');
    }
  }

  const prevSlide = () => {
    const cur = document.querySelector('.current');

    cur.classList.remove('current');
    if (cur.previousElementSibling) {
      cur.previousElementSibling.classList.add('current');
    } else {
      carousels[carousels.length - 1].classList.add('current');
    }
  }

  if (auto) {
    carouselInterval = setInterval(nextSlide, intervalTime)
  };

  carouselBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      if (btn.id == 'next') {
        nextSlide();
      } else {
        prevSlide();
      };

      if (auto) {
        clearInterval(carouselInterval);
        setTimeout(() => { carouselInterval = setInterval(nextSlide, intervalTime) });
      }
    })
  });
})();

// =============== CAROUSEL IMAGE ==============

const submitBtns = document.querySelectorAll('.btn-submit');
const inputName = document.querySelector('.form-text');
const inputEmail = document.querySelector('.form-mail');
const inputMess = document.querySelector('.form-mess');


inputName.addEventListener('blur', () => {
  checkName(inputName.value)
})

function checkName (val) {
  let mess = val.trim() ? val : 'Error';
  console.log(mess)
};


