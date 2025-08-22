'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallBounding = wall.getBoundingClientRect();

document.addEventListener('click', (e) => {
  // write code here
  const target = e.target.closest('.wall');

  if (target) {
    const x = e.clientX;
    const y = e.clientY;

    const wallWidth = parseFloat(getComputedStyle(wall).width);
    const wallHeight = parseFloat(getComputedStyle(wall).height);
    const leftBorder = parseFloat(getComputedStyle(wall).borderLeftWidth);
    const topBorder = parseFloat(getComputedStyle(wall).borderTopWidth);

    const moveX = x - wallBounding.x - leftBorder - spider.offsetWidth / 2;
    const moveY = y - wallBounding.y - topBorder - spider.offsetHeight / 2;

    const moveXmax = wallWidth - spider.offsetWidth;
    const moveYmax = wallWidth - spider.offsetHeight;

    if (moveX > wallWidth - spider.offsetWidth) {
      spider.style.left = `${moveXmax}px`;
    } else if (moveX < 0) {
      spider.style.left = '';
    } else {
      spider.style.left = `${moveX}px`;
    }

    if (moveY > wallHeight - spider.offsetHeight) {
      spider.style.top = `${moveYmax}px`;
    } else if (moveY < 0) {
      spider.style.top = '';
    } else {
      spider.style.top = `${moveY}px`;
    }
  } else {
  }
});
