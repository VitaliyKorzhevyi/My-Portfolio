let e=document.querySelector(".sidebar"),t=document.querySelector("#btn"),n=document.querySelector(".bx-search");function c(){e.classList.contains("open")?t.classList.replace("bx-menu","bx-arrow-back"):t.classList.replace("bx-arrow-back","bx-menu")}function s(){var e=function(){var e="";return $("section").each((function(){var t=$(this).offset().top;$(window).scrollTop()>=t-200&&(e=$(this).attr("id"))})),e}();$(".nav-list li").removeClass("active"),$(".nav-list li").each((function(){$(this).find("a").attr("href")=="#"+e&&$(this).addClass("active")}))}t.addEventListener("click",(()=>{e.classList.toggle("open"),c()})),n.addEventListener("click",(()=>{e.classList.toggle("open"),c()})),$(window).on("scroll",(function(){s()})),$(document).ready((function(){s()})),$0.style.outline="1px solid red";
//# sourceMappingURL=index.ec3b1449.js.map
