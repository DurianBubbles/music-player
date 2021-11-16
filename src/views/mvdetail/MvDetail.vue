<template>
  <div class="mvdetail">
    <div class="wrap">

    </div>
  </div>
</template>

<script>
export default {
  name: "MvDetail",
};
</script>

<style scoped>
.mvdetail {
  position: absolute;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 60px;
  background: #fff;
  overflow-y: scroll;
}

.wrap{
    width: 80%;
    margin: 0 auto;
    height: 300px;
    background: red;
}




::-webkit-scrollbar{
    background: #ededed;
    width:5px;
  } 

  ::-webkit-scrollbar-thumb{
    background: #D0D0D0;
  }
</style>