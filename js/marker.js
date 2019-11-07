/*document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.navbar-link a');

  window.addEventListener('scroll', e => {
    let sectionHeight = document.scrollingElement.scrollHeight / links.length - 1;
    let scrollPos = window.scrollY;
    if (inRange(scrollPos, 0, sectionHeight)) toggleClass(links[1], 'active');
    if (inRange(scrollPos, sectionHeight, sectionHeight * 2)) toggleClass(links[2], 'active');
    if (inRange(scrollPos, sectionHeight * 2, sectionHeight * 3)) toggleClass(links[3], 'active');
    if (inRange(scrollPos, sectionHeight * 3, sectionHeight * 4)) toggleClass(links[4], 'active');
    if (inRange(scrollPos, sectionHeight * 4, sectionHeight * 5)) toggleClass(links[5], 'active');
  });

  function toggleClass(on, cls) {
    links.forEach(link => link.classList.remove(cls));
    on.classList.add(cls);
  }

  function inRange(target, from, to) {
    return target >= from && target < to;
  }
});*/

var timer;
document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.navbar-link a');

  window.addEventListener('scroll', e => {
    let sectionHeight = document.scrollingElement.scrollHeight / links.length - 1;
    let scrollPos = window.scrollY;
    if (inRange(scrollPos, 0, sectionHeight)) toggleClass(links[1], 'active');
    if (inRange(scrollPos, sectionHeight, sectionHeight * 2)) toggleClass(links[2], 'active');
    if (inRange(scrollPos, sectionHeight * 2, sectionHeight * 3)) toggleClass(links[3], 'active');
    if (inRange(scrollPos, sectionHeight * 3, sectionHeight * 4)) toggleClass(links[4], 'active');
    if (inRange(scrollPos, sectionHeight * 4, sectionHeight * 5)) toggleClass(links[5], 'active');
  });

  function toggleClass(on, cls) {
    links.forEach(link => link.classList.remove(cls));
    on.classList.add(cls);
  }

  function inRange(target, from, to) {
    return target >= from && target < to;
  }
});
