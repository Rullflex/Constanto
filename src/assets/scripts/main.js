import UIkit from "uikit";
import { app, form } from "../../modules/scripts/_core";

UIkit.util.ready(function () {
  app.init();

  // FORM
  form.init("form");
  UIkit.scrollspy(".s7");
  document.querySelector(`.s7`).addEventListener("inview", (event) => {});

  const videoIds = [
    "Ej13OcxvGSk",
    "6ZUYIoNZxX4",
    "IGePPl1gBlM",
    "VS5e5CLJ7tE",
    "bqL7duGwUqo",
  ];
  // document.querySelectorAll(`.s7__slider-item-video`).forEach((el, idx) => {
  //   el.insertAdjacentHTML(
  //     `beforeend`,
  //     `<iframe src="https://www.youtube-nocookie.com/embed/${videoIds[idx]}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" width="100%" height="100%" frameborder="0" allowfullscreen uk-responsive uk-video="automute: false hidden"></iframe>`
  //   );
  // });

  // app.letListClickActive(document.querySelector(`ul.list`))
  // app.dynamicVideo()
  // app.videoSpy(`#video .popup__body`, 'fmT2FFVuWDA')
  // app.mapSpy(`#map`, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.681137224115!2d45.91315441602808!3d51.592407112304684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c599cd81712b%3A0x2ebcd457d28444b3!2z0YPQuy4g0J_QsNC90YTQuNC70L7QstCwLCA1Mywg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8sIDQxMDAzMw!5e0!3m2!1sru!2sru!4v1618227745566!5m2!1sru!2sru')

  // const quiz = new Quiz()
  // quiz.create()
});
