<template>
 <div class="container">
     <div class="table-name">
         <img src="./../assets/logo.png" style="width:20px;" alt="重点API名称">{{ titlename }}
     </div>
    <dv-scroll-board :config="config" @click="clickCell($event)" style="width:90%;height:250px;margin:5px auto;" />
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
 methods: {
    clickCell(event) {
        this.$router.push({ 
            path:'/apiProject', 
            params: {
                apiProject: event.ceil
            }
        })
    }
 },
 mounted(){
	this.config = {
        index: true,
        align: ['center'],
        rowNum: 7,
        headerBGC: '#1981f6',
        headerHeight: 45,
        oddRowBGC: 'rgba(9, 37, 50, 0.1)',
        evenRowBGC: 'rgba(10, 32, 50, 0.1)',
        data: [
            ['行1列1'],
            ['行2列1'],
            ['行3列1'],
            ['行4列1'],
            ['行5列1'],
            ['行6列1'],
            ['行7列1'],
            ['行8列1'],
            ['行9列1'],
            ['行10列1']
        ]
    }
 }
}
</script>

<style scoped lang="scss">
.container {
    color: #ffffff;
}
</style>
