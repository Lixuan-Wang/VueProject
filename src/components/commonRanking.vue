<template>
 <div class="container">
     <dv-scroll-ranking-board :config="config" class="ranking" :style="{height: scrollerHeight}"  />
 </div>
</template>

<script>
export default {
 props: ["titlename"],
 data() {
  return {
    config: {
        type: Object
    }
  }
 },
 components: {

 },
 mounted(){
	this.config = {
        rowNum: this.titlename,
        data: [
            {
            name: '周口',
            value: 55
            },
            {
            name: '南阳',
            value: 120
            },
            {
            name: '西峡',
            value: 78
            },
            {
            name: '驻马店',
            value: 66
            },
            {
            name: '新乡',
            value: 80
            },
            {
            name: '信阳',
            value: 45
            },
            {
            name: '漯河',
            value: 29
            }
        ]
    }
 },
 computed: {
     scrollerHeight: function(){
         if(this.titlename==3){
             return '160px'
         }else{
             return '240px'
         }
     }
 }
}
</script>

<style scoped lang="scss">
.container {
    color: #ffffff;
}
.ranking {
    width:90%;
    margin:5px auto;
}
</style>
