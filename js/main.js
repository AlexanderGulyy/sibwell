"use strict";

const jsAnime = document.querySelector(`.js-anime`);
for (var i = 0; i <= 40; i++) {
  const blocksBg = document.createElement(`div`);
  blocksBg.classList.add(`block-bg`);
  jsAnime.appendChild(blocksBg);
}

function animationBlock() {
  anime({
    targets: `.block-bg`,
    translateX: function () {
      return anime.random(-900, 800);
    },
    translateY: function () {
      return anime.random(-400, 400);
    },
    scale: function () {
      return anime.random(1, 3);
    },
    duration: 4000,
    easing: `easeInOutQuad`,
    complete: animationBlock,
  })

}
animationBlock();