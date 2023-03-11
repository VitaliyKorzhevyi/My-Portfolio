import './js/sidebar';

// ===================== SCROLL SECTION ACTIVE LINK =====================


// Функция для определения текущей секции на странице
function getCurrentSection() {
  var currentSection = '';
  $('section').each(function() {
    var sectionTop = $(this).offset().top;
    if ($(window).scrollTop() >= sectionTop - 200) {
      currentSection = $(this).attr('id');
    }
  });
  return currentSection;
}

// Функция для подсветки активного элемента в боковом меню
function highlightActiveMenuItem() {
  var currentSection = getCurrentSection();
  $('.nav-list li').removeClass('active');
  $('.nav-list li').each(function() {
    var menuItemHref = $(this).find('a').attr('href');
    if (menuItemHref == '#' + currentSection) {
      $(this).addClass('active');
    }
  });
}

// Вызываем функцию при прокрутке страницы
$(window).on('scroll', function() {
  highlightActiveMenuItem();
});

// Вызываем функцию при загрузке страницы
$(document).ready(function() {
  highlightActiveMenuItem();
});


$0.style.outline = "1px solid red"