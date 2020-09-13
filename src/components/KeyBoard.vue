<template>
  <div class="keyboard-container">
    <div class="title">
      <span>均衡参数设定</span>
      <span class="close" @click="handleClose">关闭</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="input">
          <div class="item">
            <div class="label">速度</div>
            <div class="value" @click="changeFlag('speed')">{{ speed }}</div>
          </div>
          <div class="item">
            <div class="label">时间(mins)</div>
            <div class="value" @click="changeFlag('time')">{{ time }}</div>
          </div>
        </div>
        <div class="keyboard" @click.stop="handleKeyPress">
          <div class="key-row">
            <div class="key-cell" data-num="1">1</div>
            <div class="key-cell" data-num="2">2</div>
            <div class="key-cell" data-num="3">3</div>
          </div>
          <div class="key-row">
            <div class="key-cell" data-num="4">4</div>
            <div class="key-cell" data-num="5">5</div>
            <div class="key-cell" data-num="6">6</div>
          </div>
          <div class="key-row">
            <div class="key-cell" data-num="7">7</div>
            <div class="key-cell" data-num="8">8</div>
            <div class="key-cell" data-num="9">9</div>
          </div>
          <div class="key-row">
            <div class="key-cell" data-num=".">.</div>
            <div class="key-cell" data-num="0">0</div>
            <div class="key-cell" data-num="back">back</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div style="font-size: 12px">当前温度(℃)</div>
        <div class="temperature">14</div>
        <div class="countdown"><Countdown :width="80" :height="80" initAngle="0"> </Countdown></div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "./Countdown.vue";
export default {
  components: { Countdown },
  props: {
    initSpeed: {
      default: ""
    },
    initTime: {
      default: ""
    }
  },
  data() {
    return {
      // show: true
      speed: this.initSpeed,
      time: this.initTime,
      flag: "speed"
    };
  },
  methods: {
    handleKeyPress(el) {
      let num = el.target.dataset.num;
      if (!num) return;
      if (num == "back") {
        // console.log("...back");
        this.handleDeleteKey();
      } else {
        // console.log(num);
        this.handleNumKey(num);
      }
    },
    handleNumKey(num) {
      if (this.flag == "speed") {
        if (this.speed.includes(".") && num == ".") return;
        this.speed = this.speed + num;
        // console.log(this.speed);
      } else if (this.flag == "time") {
        if (this.time.includes(".") && num == ".") return;
        this.time = this.time + num;
        // console.log(this.time);
      }
    },
    handleDeleteKey() {
      if (this.flag == "speed") {
        let tmp = this.speed;
        if (!tmp.length) return;
        this.speed = tmp.substring(0, tmp.length - 1);
        // console.log("speed");
        // console.log(this.speed);
      } else if (this.flag == "time") {
        let tmp = this.time;
        if (!tmp.length) return;
        this.time = tmp.substring(0, tmp.length - 1);
        // console.log(this.time);
      }
    },
    changeFlag(value) {
      this.flag = value;
    },
    handleClose() {
      this.$parent.showModel = false;
      let data = {
        speed: this.speed,
        time: this.time
      };
      this.$emit("input", data);
    }
  }
};
</script>

<style scoped lang="scss">
.keyboard-container {
  width: 360px;
  height: 300px;
  padding: 15px;
  background: #000;
  .title {
    // height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content {
    display: flex;
    flex-direction: row;
    padding-top: 10px;
  }
  .left {
    width: 180px;
    .input {
      display: flex;
      width: 148px;
      flex-direction: row;
      .item {
        flex: 1;
        overflow: hidden;
        .label {
          font-size: 12px;
        }
        .value {
          color: #000;
          height: 26px;
          margin-right: 5px;
          background: #fff;
        }
      }
    }
  }
  .keyboard {
    margin-top: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    // text-align: center;
    // justify-content: center;
    align-items: center;
    flex: 1;
    .countdown {
      width: 80px;
      height: 80px;
      position: relative;
    }
  }
  .key-row {
    display: flex;
    flex-direction: row;
    // border: 1px solid red;
    // text-align: center;
    .key-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      color: #000;
      background: #7e7e7e;
      cursor: pointer;
      margin: 4px;
    }
  }
  .temperature {
    font-size: 36px;
    color: #02a7f0;
  }
  .close {
    cursor: pointer;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 2px;
    background: #f59a23;
  }
}
</style>
