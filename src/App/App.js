import { TweenLite, Expo } from 'gsap';
import HeaderBox from '../component/HeaderBox';
import FooterBox from '../component/FooterBox';

export default {
  name: 'App',
  components: {
    HeaderBox,
    FooterBox,
  },
  data() {
    return {
      inTransition: false,
    };
  },
  watch: {
    $route() {
      this.scrollToTop();
    },
  },
  methods: {
    onEnter($el, done) {
      $el.style.position = 'absolute';
      TweenLite.from($el, 0.5, {
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: () => done(),
      });
    },
    onLeave($el, done) {
      $el.style.position = 'absolute';
      TweenLite.to($el, 0.5, {
        // rotationY: '5deg',
        autoAlpha: 0,
        ease: Expo.easeOut,
        onComplete: () => done(),
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
      // this.inTransition = true;
      // const scroll = { y: window.scrollY || window.pageYOffset };
      // TweenLite.to(scroll, 0.5, {
      //   y: 0,
      //   ease: Expo.easeOut,
      //   onUpdate: () => window.scrollTo(0, scroll.y),
      //   onComplete: () => {
      //     this.inTransition = false;
      //   },
      // });
    },
  },
};
