<template>
  <div class="layout-header" @click="setisShowSearch(false)">
    <div class="navicon">
      <i class="el-icon-s-home" @click="gohome"></i>
      <i class="el-icon-minus" @click="screendown"></i>
      <i class="el-icon-top-right" @click="screenup"></i>
    </div>
    <div class="down-wrap" v-if="getisShowLyric == true" @click="setHideLyric">
      <div class="img-wrap">
        <img src="~assets/img/miniplayer/down.svg" alt="" />
      </div>
    </div>
    <div class="navroute" v-else>
      <i class="el-icon-arrow-left" @click="goback"></i>
      <i class="el-icon-arrow-right" @click="tonext"></i>
    </div>
    <div class="search">
      <div class="search-box">
        <i class="el-icon-search"></i>
        <input
          type="text"
          class="search-input"
          v-model="value"
          placeholder="搜索"
          @click.stop="setisShowSearch(true)"
          @keyup.enter="tosearch"
        />
      </div>
      <i class="el-icon-magic-stick"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "LayoutHeader",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    tosearch() {
      if (this.value == "") {
        return;
      } else {
        this.$router.push({ path: "/layout/search/" + this.value });
        this.getsearchSongs({
          keywords: this.value,
          limit: 30,
          offset: 0,
          type: 1,
        });
      }
    },
    goback() {
      this.$router.back(1);
    },
    tonext() {
      this.$router.go(1);
    },
    screenup() {
      let element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    },
    screendown() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
    gohome() {
      this.$router.push("/layout/discovery");
    },
    ...mapMutations(["setisShowSearch", "setHideLyric"]),
    ...mapActions(["getsearchSongs"]),
  },
  computed: {
    ...mapGetters(["getisShowLyric"]),
  },
};
</script>

<style scoped>
.layout-header {
  height: 49px;
  overflow: hidden;
  background: #d74d45;
}

.navicon {
  height: 100%;
  width: 70px;
  float: left;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  font-size: 12px;
}

.navicon > i {
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  text-align: center;
  line-height: 14px;
}

.navicon .el-icon-s-home {
  background: #ed655a;
}

.navicon .el-icon-minus {
  background: #e0c04c;
}

.navicon .el-icon-top-right {
  background: #72be47;
}

.navroute {
  height: 100%;
  float: left;
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
}

.down-wrap {
  height: 100%;
  float: left;
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
}

.down-wrap .img-wrap {
  height: 22px;
  width: 22px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2px;
  cursor: pointer;
}

.down-wrap .img-wrap:hover {
  background: #ca4841;
}

.down-wrap .img-wrap img {
  width: 100%;
  height: 100%;
}

.navroute > i {
  cursor: pointer;
}

.search {
  float: right;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin-right: 30px;
}

.search-box {
  height: 25px;
  width: 160px;
  background: #dd6861;
  display: flex;
  text-align: center;
  border-radius: 5px;
  padding-right: 10px;
  padding-left: 5px;
}

.search-box .el-icon-search {
  width: 10%;
  height: 100%;
  line-height: 25px;
  color: #efb6b2;
  font-size: 12px;
}

.search-input {
  width: 90%;
  height: 100%;
  background: #dd6861;
  padding-left: 10px;
  color: #efb6b2;
  font-size: 12px;
  line-height: 25px;
}

.search-input::-webkit-input-placeholder {
  color: #efb6b2;
}

.el-icon-magic-stick {
  color: #efb6b2;
  margin-left: 15px;
}
</style>