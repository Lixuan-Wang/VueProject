<template>
 <div class="container">
    <div class="cardTotal">
        <div>API总数</div>
        <div class="card">1</div>
        <div class="card">1</div>
        <div class="card">1</div>
        <div class="card">1</div>
    </div>
    <div class="card-container">
        <div class="card-left">
        <div class="station-info">
            API项目总数
            <span>442</span>
        </div>
        </div>
        <commonRanking :titlename="'3'" class="card-middle"></commonRanking>
        <div class="card-right">
        <div class="station-info">
            访问用户总数
            <span>331</span>
        </div>
        </div>
    </div>
 </div>
</template>

<script>
import commonRanking from './../components/commonRanking.vue'

export default {
 data() {
  return {

  }
 },
 components: {
    commonRanking
 }
}
</script>

<style scoped lang="scss">
.cardTotal {
  height: 120px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  color: #ffffff;
  .card {
    background-color: rgba(4, 49, 128, .6);
    color: #08e5ff;
    height: 70px;
    width: 70px;
    font-size: 45px;
    font-weight: bold;
    line-height: 70px;
    text-align: center;
    margin: 5px;
  }
}
.card-container {
    position: relative;
    flex: 1;
    display: flex;
    .card-middle {
        width: 60%;
        height: 180px;
    }
    .card-left, .card-right {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        color: #ffffff;
        span {
            font-size: 30px;
            font-weight: bold;
        }
        .station-info {
            height: 180px;
            // display: flex;
            align-items: center;
        }
    }
    .card-left {
        align-items: flex-end;
        span {
        margin-left: 20px;
        }
    }
    .card-right {
        align-items: flex-start;
        span {
        margin-right: 20px;
        }
    }
}
</style>
