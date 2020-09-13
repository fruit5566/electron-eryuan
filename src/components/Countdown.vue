<template>
  <canvas id="canvas" class="canvas" ref="canvas" :width="width" :height="height" @click="countDown"></canvas>
</template>

<script>
export default {
  props: {
    width: {
      default: 100
    },
    height: {
      default: 100
    },
    lineWidth: {
      default: 5
    },
    initAngle: {
      default: null
    }
  },
  data() {
    return {
      ctx: null,
      beginAngle: -0.5 * Math.PI,
      time: 10,
      timer: null
    };
  },
  mounted() {
    if (this.initAngle) {
      this.init();
      this.countDown();
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      this.ctx = this.$refs.canvas.getContext("2d");
      let ctx = this.ctx;
      let x = this.width / 2;
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.strokeStyle = "#7e7e7e";
      // ctx.strokeStyle = "#fff";
      ctx.arc(this.width / 2, this.height / 2, this.width / 2 - this.lineWidth, -0.5 * Math.PI, 1.5 * Math.PI);
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(x - 8, x - 10);
      ctx.lineTo(x + 12, x);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.moveTo(x + 12, x);
      ctx.lineTo(x - 8, x + 12);
      ctx.stroke();
    },
    updateCanvas(beginAngle) {
      // console.log(this.width);
      // console.log(this.height);
      let x = this.width / 2;
      let y = this.height / 2;
      let ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.lineWidth = 4;
      ctx.beginPath();
      // ctx.strokeStyle = "#7e7e7e";
      ctx.strokeStyle = "#fff";
      ctx.arc(x, y, x - 4, -0.5 * Math.PI, 1.5 * Math.PI);

      ctx.stroke();
      ctx.closePath();

      ctx.save();

      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.strokeStyle = "#10f20a";
      ctx.arc(x, y, x - 4, beginAngle, 1.5 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x - 5, x - 10);
      ctx.lineTo(x - 5, x + 10);
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
      ctx.moveTo(x + 5, x - 10);
      ctx.lineTo(x + 5, x + 10);
      ctx.stroke();
    },
    countDown() {
      let time = this.time;
      let step = (2 * Math.PI) / ((time * 1000) / 16.7);

      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(() => {
          this.beginAngle = this.beginAngle + step;
          if (this.beginAngle > 1.5 * Math.PI) {
            clearInterval(this.timer);
            this.timer = null;
            this.init();
            this.beginAngle = -0.5 * Math.PI;
          } else {
            this.updateCanvas(this.beginAngle);
          }
        }, 16.7);
      }
    }
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style>
.canvas {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
</style>
