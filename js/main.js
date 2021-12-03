// Choises JS
// Pass single element
const element = document.querySelector('.el_choice-js');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
  itemSelectText: '',
});

// Yandex map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  var coordinates = [48.87219657376512, 2.354223999999991];
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: coordinates,
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17,
    // Не добавляем никаких элементов управления
    controls: []
  });

  var myPlacemark = new ymaps.Placemark(
    coordinates,
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '../img/map__pointer.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-14, -40],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

// Simplebar
new SimpleBar(
  document.querySelector('.el_scrollbar'),
  {
    autoHide: false,
  }
);

// Inputmask
var selector = document.querySelector('.el_phone-input');
Inputmask({
  'mask': '+7(999) 999-99-99',
  placeholder: "_"
}).mask(selector);

// Just-validate
JustValidate = new window.JustValidate('.el_form', {
  rules: {
    customName: {
      required: true,
      maxLength: 30,
    },
    customPhone: {
      required: true,
      function: () => {
        var phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10;
      }
    },
    customEmail: {
      required: true,
      maxLength: 40,
      email: true,
    }
  },
  messages: {
    customName: {
      required: 'Как вас зовут?',
      maxLength: 'Имя указано некорректно',
    },
    customPhone: {
      required: 'Укажите ваш телефон',
      function: 'Телефон указан некорректно',
    },
    customEmail: {
      required: 'Укажите ваш e-mail',
      maxLength: 'E-mail указан некорректно',
      email: 'E-mail указан некорректно',
    }
  },
  colorWrong: 'ff5c00'
});