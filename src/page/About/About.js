import Reveal from 'util/Reveal';

export default {
  name: 'About',
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
      const config = { activeClass: this.$style.active };
      list.forEach(item => {
        this.reveal.add(item, config);
      });
    },
  },
};
