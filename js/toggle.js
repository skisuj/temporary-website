function classToggle(){
  const navs = document.querySelectorAll('.navbar-items');
  navs.forEach(nav => nav.classList.toggle('show-items'));
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.navbar-hamburger')
         .addEventListener('click', classToggle);
});
