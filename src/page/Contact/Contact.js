import { TweenLite, Power4 } from 'gsap';
import Reveal from 'util/Reveal';

export default {
  name: 'Contact',
  data() {
    return {
      list: [
        149,
        151,
        152,
        153,
        154,
        155,
        156,
        157,
        158,
        159,
        160,
        161,
        162,
        163,
        164,
        165,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        174,
        175,
        176,
        177,
        178,
        179,
        180,
      ],
    };
  },
  created() {
    this.reveal = new Reveal();
  },
  mounted() {
    this.addToReveal();
  },
  methods: {
    addToReveal() {
      const list = this.$refs.list || [];
      const config = {
        onActivation: this.onActivation,
        forceTransparent: true,
        percentReveal: 75,
      };
      list.forEach((item, index) => {
        this.reveal.add(item, {
          ...config,
          onActivationParams: index % 3,
        });
      });
    },
    onActivation($el, index) {
      const img = $el.querySelector('img');
      const delay = window.innerWidth >= 768 ? index * 0.25 : 0;
      TweenLite.from(img, 1.5, {
        rotationY: '45deg',
        // rotationZ: '-15deg',
        // rotationX: '15deg',
        ease: Power4.easeOut,
        delay,
      });
      TweenLite.from($el, 1, {
        autoAlpha: 0,
        ease: Power4.easeOut,
        delay,
      });
    },
  },
};
