'use strict'
{
//ハンバーガーメニューアイコン
const hamMenu = document.querySelector('.ham-menu');
const nav = document.getElementById('nav');


//ハンバーガーメニューをクリックした時の処理
hamMenu.addEventListener('click', ()=> {
  hamMenu.classList.toggle('active');
  nav.classList.toggle('active');
});

nav.addEventListener('click', ()=> {
  hamMenu.classList.toggle('active');
  nav.classList.toggle('active');
});


//reason スクロール
const reasonLeft = document.getElementById('reason-left');
const reasonRight = document.getElementById('reason-right');
{
  function scrollLeft(entries) {
    if (entries[0].isIntersecting) {
      reasonLeft.classList.add("scroll");
    }
  }
  const observerLeft = new IntersectionObserver(scrollLeft);

  observerLeft.observe(reasonLeft);
}
{
  function scrollRight(entries) {
    if (entries[0].isIntersecting) {
      reasonRight.classList.add("scroll");
    }
  }
  const observer = new IntersectionObserver(scrollRight);

  observer.observe(reasonRight);
}

//voices アニメーション
  {
  const voices = document.querySelectorAll('.voices');
  console.log(voices);

  for (let i = 0; i < voices.length; i++) {
    function balloon(entries) {
      if (entries[0].isIntersecting) {
        voices[i].classList.add("balloon");
      }
    }
    const observerBalloon = new IntersectionObserver(balloon);

    observerBalloon.observe(voices[i]);
  }
  }
}
