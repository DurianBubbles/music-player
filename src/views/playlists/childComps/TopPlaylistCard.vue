<template>
  <div class="topcard">
    <div class="img-wrap">
      <img
        src="https://p1.music.126.net/xNAsOG9zQ6o_uLUb5PqIaA==/109951165761368805.jpg?param=280y280"
        alt=""
      />
    </div>
    <div class="content">
      <div class="tag-wrap">精品歌单</div>
      <p class="name">光影留声：岁月沁润 醇醉迷人</p>
      <p class="desc">
        封面:克拉克.盖博 他们的歌声流淌于光影胶片，
        不再年轻的声音因时光岁月的浸润， 而愈发醇醉迷人…… 1.罗马假日
        (1953)(非原声，契合主题MV歌曲) 2.赤胆屠龙 (1959) 3.我自己的爱达荷 (1991)
        4.对她说 (2002) 5.画舫璇宫(1936)(电影里其实是Paul
        Robeson演唱，不过个人喜欢歌单里波叔的版本) 6.龙凤斗智 (1968)
        7.春风无限恨(1965) 8.正午 (1952) 9.侠骨柔情 (1946) 10.开罗紫玫瑰
        (1985)(礼帽1935) 11.随我婆娑 (1937) 12.雨中曲 (1952) 13.逃狱三王(2000)
        14.一夜风流(1934) 15.生活多美好 (1946) 16.卡萨布兰卡(1942)
        17.007.女王密使(1969) 18.魔力月光 (2014) 19.戏梦巴黎 (2003)
        20.机器人总动员 (2008) 21.蒙娜丽莎的微笑(2003) 22.午夜巴黎 (2011)
        23.遭遇陌生人 (2010) 24.人人都说我爱你(1997) 25.福禄双霸天 (1980)
        26.恋恋笔记本(2004) 27.廊桥遗梦(1995) 28.教父(1972) 29.乐士浮生录(1999)
        30.王牌特工2.黄金圈(2017) 31.午夜牛郎 (1969) 32.逍遥骑士 (1969)
        33.阿甘正传(1994) 34.肖生克的救赎(1994) 35.我心狂野(1990) 36.天生杀人狂
        (1994) 37.谋杀绿脚趾 (1998) 38.乌云背后的幸福线 (2012) 39.奇迹小子
        (2000) 40.醉乡民谣 (2013) 41.荒野生存(2007) 42.断背山(2005) 43.疯狂的心
        (2009) 44.寻找小糖人 (2012) 45.言语的秘密生活 (2005) 46.迁徙的鸟 (2001)
        47.这个杀手不太冷(1994) 48.银河护卫队2 (2017) 49.百万美元酒店 (2000)
        50.诺丁山 (1999)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPlaylistCard",
};
</script>

<style scoped>
.topcard {
  width: 80%;
  height: 172px;
  margin: 0 auto;
  background: #666;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  margin-bottom: 10px;
}

.topcard .img-wrap{
    width: 140px;
    height: 140px;
    margin-right: 15px;
}

.topcard .img-wrap img{
    width: 100%;
    height: 100%;
}

.content{
    height: 140px;
    flex: 1;
    text-align: left;
    overflow: hidden;
}

.content .tag-wrap{
    width: 90px;
    height: 26px;
    border: 1px solid #e7aa5a;
    font-size: 12px;
    padding: 2px 10px;
    color: #e7aa5a;
    border-radius: 5px;
    text-align: center;
    line-height: 22px;
}

.content .name{
    color: #fff;
    font-weight: 700;
    line-height: 35px;
    font-size: 16px;
}

.content .desc{
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-size: 0.85714rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 9px;
}
</style>