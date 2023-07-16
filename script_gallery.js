
const galleryBoxItems = document.querySelectorAll('.gallery__box_item');
const galleryBox = document.querySelector('.gallery__box');

let currentIndex = 0; // Индекс текущего элемента

galleryBoxItems.forEach((element, index) => {
  element.addEventListener('click', function() {
    currentIndex = index; // Запоминаем индекс выбранного элемента

    galleryBox.classList.toggle('gallery__box__active'); // Добавляем или удаляем класс

    galleryBoxItems.forEach((item) => {
      item.style.display = 'none'; // Устанавливаем стиль 'none' для всех элементов
    });

    this.style.display = 'flex'; // Присваиваем выбранному элементу стиль 'flex'

    const navigationButtons = document.querySelectorAll('.btn');
    navigationButtons.forEach((button) => {
      button.style.display = this.style.display === 'flex' ? 'flex' : 'none';
    });
  });
});

// Функция закрытия галереи

function clickClose() {
  galleryBox.classList.remove('gallery__box__active'); // Удаляем класс активного состояния галереи

  galleryBoxItems.forEach((item) => {
    item.style.display = 'flex'; // Возвращаем стиль 'flex' для всех элементов галереи
  });

  const navigationButtons = document.querySelectorAll('.btn');
  navigationButtons.forEach((button) => {
    button.style.display = 'none'; // Отключаем навигационные кнопки
  });
}


// функция навигации галереии
function clickPag(n, container) {
  if (container === 'gallery__box') {
    currentIndex += n; // Изменяем индекс текущего элемента

    if (currentIndex >= galleryBoxItems.length) {
      currentIndex = 0; // Переходим к первому элементу
    } else if (currentIndex < 0) {
      currentIndex = galleryBoxItems.length - 1; // Переходим к последнему элементу
    }

    galleryBoxItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = 'flex'; // Отображаем выбранный элемент
      } else {
        item.style.display = 'none'; // Скрываем остальные элементы
      }
    });
  }
}


