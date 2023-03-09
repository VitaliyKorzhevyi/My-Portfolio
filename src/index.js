// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

// собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 180,
//       framesCount = 20;

// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
    
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
      
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });

// --------------------------- LOGO ---------------------------

// let video = document.querySelector('video');
// let videoText = document.querySelector('.video-text');

// video.onload = function() {
//   videoText.classList.remove("video-nun");
//   videoText.classList.add("video-play");
// };

// video.onerror = function() {
//   videoText.classList.add("video-nun");
//   videoText.classList.remove("video-play");
// };


// video.setAttribute('src', './video-bg/pexels-black-blue5.mp4');
// video.load();


// video.load();

// для banner

const logoBannerEl = document.querySelectorAll('.big-logo span');
let st = 0.1;
logoBannerEl.forEach((span) => {
  span.style.animationDelay = `${st}s`;
  st += 0.15;
});

// для header

const logoHeaderEl = document.querySelectorAll('.logo span');
let step = 0.1;
logoHeaderEl.forEach((span) => {
  span.style.animationDelay = `${step}s`;
  step += 0.1;
});

// для developer

const logoDeveloperEl = document.querySelectorAll('.developer-text span');
let delay = 0.1;

logoDeveloperEl.forEach((span) => {
  span.style.animationDelay = `${delay}s`;
  delay += 0.1;
});

// для about

const logoAboutEl = document.querySelectorAll('.text-logo-about span');
let move = 0.1;

logoAboutEl.forEach((span) => {
  span.style.animationDelay = `${move}s`;
  move += 0.1;
});

// для servises

const logoServisesEl = document.querySelectorAll('.text-logo-servises span');
let sec = 0.1;

logoServisesEl.forEach((span) => {
  span.style.animationDelay = `${sec}s`;
  sec += 0.13;
});

// для portfolio

const logoPortfolioEl = document.querySelectorAll('.text-logo-portfolio span');
let s = 0.1;

logoPortfolioEl.forEach((span) => {
  span.style.animationDelay = `${s}s`;
  s += 0.13;
});



// SIDEBAR

let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-arrow-back");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-arrow-back","bx-menu");//replacing the iocns class
   }
  }



