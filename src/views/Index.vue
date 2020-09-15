<template>
  <div class="index border">
    <transition name="fade">
      <div class="model" v-if="showModel">
        <KeyBoard class="keyboard" :initSpeed="setObj.speed" :initTime="setObj.time" @input="handleInput"></KeyBoard>
      </div>
    </transition>

    <div class="left">
      <div class="heder ">
        <div class="line"></div>
        <div class="c-item">
          <div class="label">混制</div>
          <div class="circle"></div>
        </div>
        <div class="c-item">
          <div class="label">转移</div>
          <div class="circle"></div>
        </div>
        <div class="c-item">
          <div class="label">清洗</div>
          <div class="circle"></div>
        </div>
        <div class="c-item">
          <div class="label">灭菌</div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="machine_container ">
        <div class="lf-line">
          <div class="process" style="background: #caf982"></div>
        </div>
        <div class="machine-img">
          <img width="100%" src="../assets/machine.png" alt="" />
        </div>
        <div class="lf-line" style="marginLeft: 8px">
          <div class="process" style="background: #80ffff"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <Circle1 msg="1" width="20" height="20" color="#fff" borderWidth="1.5"></Circle1>
        <span style="margin-left: 10px">混制</span>
      </div>
      <div class="content flex-column">
        <div class="row">
          <div class="title"></div>
          <div class="title">设定值</div>
          <div class="title">当前数据</div>
          <div class="title">暂停</div>
          <div class="last"></div>
        </div>
        <div class="row">
          <div class="col ">
            <div class="logo">Logo</div>
          </div>
          <div class="col ">
            <div class="set" @click="handleSet">
              <SetValue :rpm="setObj.speed" :time="setObj.time"></SetValue>
            </div>
          </div>
          <div class="col ">
            <div class="data">
              <Recentdata value="70" time="15"></Recentdata>
            </div>
          </div>
          <div class="col ">
            <div class="status">
              <Countdown></Countdown>
            </div>
          </div>
          <div class="last ">
            <Circle1 msg="吸料" width="60" height="60"></Circle1>
          </div>
        </div>
        <div class="row">
          <div class="col ">
            <div class="logo">Logo</div>
          </div>
          <div class="col ">
            <div class="set">
              <SetValue rpm="70" time="15"></SetValue>
            </div>
          </div>
          <div class="col ">
            <div class="data">
              <Recentdata :value="0" processWidth="0"></Recentdata>
            </div>
          </div>
          <div class="col ">
            <div class="status">
              <Countdown></Countdown>
            </div>
          </div>
          <div class="last ">
            <Circle1 msg="投料" width="60" height="60" color="#10f20a"></Circle1>
          </div>
        </div>
        <div class="row">
          <div class="col ">
            <div class="logo">Logo</div>
          </div>
          <div class="col ">
            <div class="set">
              <SetValue></SetValue>
            </div>
          </div>
          <div class="col ">
            <div class="data">
              <Recentdata processWidth="0"></Recentdata>
            </div>
          </div>
          <div class="col ">
            <div class="status">
              <Countdown></Countdown>
            </div>
          </div>
          <div class="last ">
            <Circle1 msg="计量" width="60" height="60"></Circle1>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="row">
          <div class="col ">
            <Circle1 msg="加热"></Circle1>
          </div>
          <div class="col ">
            <Circle1 msg="冷却"></Circle1>
          </div>
          <div class="col ">
            <Circle1 msg="加压"></Circle1>
          </div>
          <div class="col ">
            <Circle1 msg="真空"></Circle1>
          </div>
          <div class="last ">
            <Circle1 msg="取样"></Circle1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "../components/Countdown.vue";
import Circle1 from "../components/Circle1.vue";
import SetValue from "../components/SetValue.vue";
import Recentdata from "../components/Recentdata.vue";
import KeyBoard from "../components/KeyBoard.vue";

export default {
  name: "App",
  components: {
    Countdown,
    Circle1,
    SetValue,
    Recentdata,
    KeyBoard
  },
  data() {
    return {
      showModel: false,
      setObj: {
        speed: "2500",
        time: "15"
      }
    };
  },
  methods: {
    handleSet() {
      this.showModel = true;
    },
    handleInput(data) {
      this.setObj = data;
      // console.log(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  position: relative;
  display: flex;
  width: 1000px;
  height: 520px;
  .left {
    display: flex;
    width: 300px;
    flex-direction: column;
    padding: 20px 0px 50px 0;
    align-items: center;
    .heder {
      position: relative;
      display: flex;
      width: 200px;
      height: 40px;
      justify-content: space-between;
      align-items: center;
      .line {
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 192px;
        height: 1px;
        border-top: 1px dashed #ccc;
      }
      .c-item {
        display: flex;
        flex-direction: column;
        .label {
          font-size: 12px;
        }
        .circle {
          margin-top: 4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: yellowgreen;
        }
      }
    }
    .machine_container {
      width: 100%;
      flex: 1;
      padding-top: 25px;
      border-right: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .machine-img {
        width: 200px;
      }

      .lf-line {
        height: 60px;
        width: 6px;
        border-radius: 4px;
        background: #fff;
        display: flex;
        align-items: flex-end;
        .process {
          width: 100%;
          height: 60%;
          border-radius: 4px;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 30px 0 20px;
    .header {
      display: flex;
      align-items: center;
      height: 60px;
      text-align: left;
    }
    .content {
      flex: 1;
      padding-left: 80px;
    }
    .footer {
      display: flex;
      padding-left: 80px;
      flex-direction: row;
      align-items: center;
      height: 80px;
    }
    .row {
      display: flex;
      // flex: 1;
      // margin-top: 12px;
      flex-direction: row;
      // justify-content: space-between;
      .title {
        display: flex;
        width: 100px;
        height: 40px;
        justify-content: center;
        align-items: center;
      }
      .col {
        display: flex;
        width: 100px;
        height: 100px;
        // padding: 10px;
        justify-content: center;
        align-items: center;
        .logo {
          display: flex;
          width: 60px;
          height: 60px;
          justify-content: center;
          align-items: center;
          background: #fff;
          color: #000;
        }

        .status {
          width: 80px;
          height: 80px;
          // border: 1px solid red;
        }
      }
      .last {
        display: flex;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
  .model {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #314444, $alpha: 0.4);
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
