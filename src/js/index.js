import '../scss/styles.scss';
import Inputmask from 'inputmask';

document.getElementById('videoButton').addEventListener('click', function() {
  const videoUrl = 'https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT'; 
  window.open(videoUrl, '_blank'); 
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: -100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
    },
    on: {
      slideChange: () => {
   
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => slide.classList.remove('is-active'));

        const activeSlide = swiper.slides[swiper.activeIndex];
        if (activeSlide) {
          activeSlide.classList.add('is-active');
        }
      },
    },
  });

  const initialActiveSlide = swiper.slides[swiper.activeIndex];
  if (initialActiveSlide) {
    initialActiveSlide.classList.add('is-active');
  }
});







document.addEventListener('DOMContentLoaded', () => {
 
  const formButton = document.querySelectorAll('.tovar-card__button, .tovar-cards__button, .tovar-slidec__button');
  const popup = document.getElementById('popupForm');
  const popupClose = document.getElementById('popupClose');

  formButton.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });

  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  const form = document.getElementById('requestForm');
  const policyCheckbox = document.getElementById('policyCheckbox');

  form.addEventListener('submit', function (event) {
    if (!policyCheckbox.checked) {
      event.preventDefault(); 
      alert("Вы должны согласиться с политикой конфиденциальности.");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('requestForm');
  const inputs = form.querySelectorAll('input[required]');
  const phoneInput = document.getElementById('phone');


  Inputmask("+7 (999) 999-99-99").mask(phoneInput);

  form.addEventListener('submit', function (event) {
    let isValid = true;

    inputs.forEach(input => {
      const parent = input.closest('.form-group');

      const errorMessage = parent.querySelector('.error-message');
      if (errorMessage) errorMessage.remove();
      
    });

    if (!isValid) {
      event.preventDefault(); 
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('requestForm');
  const popup = document.getElementById('popupForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const formData = new FormData(form);

      fetch('http://localhost:8000/send_email.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          alert(data); 
          popup.style.display = 'none'; 
          form.reset(); 
      })
      .catch(error => {
          console.error('Ошибка:', error);
          alert('Произошла ошибка при отправке формы.');
      });
  });
});






