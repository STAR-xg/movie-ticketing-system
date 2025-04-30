<template>
  <div>
    <div style="background: linear-gradient(to right, #46187e, #32046b, #32115b); height: 320px">
      <div style="width: 55%; margin: 0 auto; height: 320px; display: flex; align-items: center">
        <img :src="data.filmData.img" alt="" style="width: 280px; height: 320px">
        <div style="flex: 1; color: white; padding: 20px 35px">
          <div style="font-size: 26px">{{ data.filmData.title }}</div>
          <div style="font-size: 16px">{{ data.filmData.english }}</div>
          <div style="margin-top: 15px">
            <span style="margin-right: 5px" v-for="item in data.filmData.types">{{ item }}</span>
          </div>
          <div style="margin-top: 5px">{{ data.filmData.areaName }} / {{ data.filmData.time }}分钟</div>
          <div style="margin-top: 5px">{{ data.filmData.start }} 中国大陆上映</div>
          <div style="display: flex; margin-top: 55px">
            <div style="flex: 1; margin-right: 5px">
              <el-button style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white">
                <el-icon size="large"><Star /></el-icon> <span style="margin-left: 5px">想看</span>
              </el-button>
            </div>
            <div style="flex: 1; margin-left: 5px">
              <el-button style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white">
                <el-icon size="large"><ChatDotSquare /></el-icon> <span style="margin-left: 5px">评分</span>
              </el-button>
            </div>
          </div>
          <el-button style="background-color: #ef4238; border: none; color: white; width: 100%; margin-top: 10px; height: 40px; font-size: 16px">特惠购票</el-button>
        </div>
        <div style="width: 250px; color: white">
          <div style="font-size: 12px">影片口碑</div>
          <div style="display: flex; align-items: center">
            <div style="width: 100px; font-weight: bold; font-size: 16px"><span style="font-size: 30px">{{ data.filmData.score }}</span> 分</div>
            <div style="flex: 1">
              <el-rate v-model="data.filmData.score" disabled/>
              <div>2人评分</div>
            </div>
          </div>
          <div style="margin-top: 10px; font-size: 12px">累计票房</div>
          <div style="margin-top: 5px; font-weight: bold; font-size: 16px"><span style="font-size: 25px">500.23</span> 元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import request from "@/utils/request.js";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";

const data = reactive({
  filmId: router.currentRoute.value.query.id,
  filmData: {}
})
const loadFilm = () => {
  data.filmId = router.currentRoute.value.query.id
  request.get('/film/selectById/' + data.filmId).then(res => {
    if (res.code === '200') {
      data.filmData = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
loadFilm()
</script>

<style scoped>

</style>
