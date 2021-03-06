import UIkit from "uikit";
import { app, form } from "../../modules/scripts/_core";

UIkit.util.ready(function () {
  app.init();

  // FORM
  form.init("form");

  let sliderBtnMoreStateIndex = 0;
  const blockBaseHeight = 694;
  const blockFullHeight = 703;
  const $sliderWrap = document.querySelector(`.s6__projects-slider-wrap`);
  const $btnMore = document.querySelector(
    `.s6__projects-slider-btn-more-cases`
  );
  $btnMore.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (sliderBtnMoreStateIndex < 2) {
      $sliderWrap.style.cssText = `height: ${
        blockBaseHeight + blockFullHeight * (sliderBtnMoreStateIndex + 1)
      }px`;

      if (sliderBtnMoreStateIndex === 1) {
        $btnMore.innerText = "Скрыть кейсы";
      }

      sliderBtnMoreStateIndex++;
    } else {
      $btnMore.innerText = "Посмотреть еще кейсы";
      $sliderWrap.style.cssText = `height: ${blockBaseHeight}px`;
      sliderBtnMoreStateIndex = 0;
    }
  });
  const videos = [
    "O97l4dlCl4c",
    "ilka_m5tsjQ",
    "034vDaTGlj8",
    "KFIBqo2Jzrw",
    "MfrYHpBrBFY",
    "pJD5xIECyaI",
    "_3lLIVaTuvs",
    "MO8A6hMkjl0",
    "t7Z5akGyvU4",
    "SdUsMehkyzo",
    "PzVVKjW8sAw",
    "3Y-6U2YgYk0",
    "qj-g1eSeOUc",
    "toaqOBFI8jg",
  ];

  UIkit.scrollspy(".s3__slider-item");
  document.querySelectorAll(`.s3__slider-item`).forEach((el, idx) => {
    el.addEventListener("inview", (ev) => {
      el.insertAdjacentHTML(
        `beforeend`,
        `<iframe class="s3__slider-item-video s3__slider-item-image" src="https://www.youtube-nocookie.com/embed/${videos[idx]}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="100%" height="100%" frameborder="0" allowfullscreen data-uk-video="autoplay: false" hidden></iframe>`
      );

      UIkit.toggle(el.querySelector(".s3__slider-item-image"), {
        animation: "uk-animation-fade",
        target: "+",
      });
    });
  });

  const videoIds = [
    "Ej13OcxvGSk",
    "6ZUYIoNZxX4",
    "IGePPl1gBlM",
    "VS5e5CLJ7tE",
    "bqL7duGwUqo",
  ];

  UIkit.scrollspy(".s7__slider-item-wrap");
  document.querySelectorAll(`.s7__slider-item-wrap`).forEach((el, idx) => {
    el.addEventListener("inview", (ev) => {
      el.insertAdjacentHTML(
        `beforeend`,
        `<iframe class="s7__slider-item-video s7__slider-item-image" src="https://www.youtube-nocookie.com/embed/${videoIds[idx]}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="100%" height="100%" frameborder="0" allowfullscreen data-uk-video="autoplay: false" hidden></iframe>`
      );

      UIkit.toggle(el.querySelector(".s7__slider-item-image"), {
        animation: "uk-animation-fade",
        target: "+",
      });
    });
  });
  // document.querySelector(`.s7__slider-item-wrap`).addEventListener("inview", (event) => {
  //   document.querySelectorAll(`.s7__slider-item-video`).forEach((el, idx) => {
  //     el.insertAdjacentHTML(
  //       `beforeend`,
  //       `<iframe src="https://www.youtube-nocookie.com/embed/${videoIds[idx]}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="100%" height="100%" frameborder="0" allowfullscreen uk-responsive data-uk-video="autoplay: inview" hidden></iframe>`
  //     );
  //   });
  // });

  // app.letListClickActive(document.querySelector(`ul.list`))
  // app.dynamicVideo()
  // app.videoSpy(`#video .popup__body`, 'fmT2FFVuWDA')
  // app.mapSpy(`#map`, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.681137224115!2d45.91315441602808!3d51.592407112304684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c599cd81712b%3A0x2ebcd457d28444b3!2z0YPQuy4g0J_QsNC90YTQuNC70L7QstCwLCA1Mywg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8sIDQxMDAzMw!5e0!3m2!1sru!2sru!4v1618227745566!5m2!1sru!2sru')

  // const quiz = new Quiz()
  // quiz.create()
});
