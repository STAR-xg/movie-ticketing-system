<template>
  <div>
    <div style="display: flex; grid-gap: 10px">
      <div style="flex: 1; display: flex; align-items: center; height: 120px" class="card">
        <div style="flex: 1; text-align: center">
          <img src="@/assets/imgs/电影数量.png" alt="" style="width: 80px; height: 80px">
        </div>
        <div style="flex: 1">
          <div style="margin-bottom: 10px; font-size: 20px">电影数量</div>
          <div style="font-size: 20px; font-weight: bold">{{ data.baseData.filmNum }}</div>
        </div>
      </div>
      <div style="flex: 1; display: flex; align-items: center; height: 120px" class="card">
        <div style="flex: 1; text-align: center">
          <img src="@/assets/imgs/入驻影院.png" alt="" style="width: 80px; height: 80px">
        </div>
        <div style="flex: 1">
          <div style="margin-bottom: 10px; font-size: 20px">入驻影院</div>
          <div style="font-size: 20px; font-weight: bold">{{ data.baseData.cinemaNum }}</div>
        </div>
      </div>
      <div style="flex: 1; display: flex; align-items: center; height: 120px" class="card">
        <div style="flex: 1; text-align: center">
          <img src="@/assets/imgs/今日票房.png" alt="" style="width: 80px; height: 80px">
        </div>
        <div style="flex: 1">
          <div style="margin-bottom: 10px; font-size: 20px">今日票房</div>
          <div style="font-size: 20px; font-weight: bold">{{ (data.baseData.todayPrice * 1).toFixed(2) }}</div>
        </div>
      </div>
      <div style="flex: 1; display: flex; align-items: center; height: 120px" class="card">
        <div style="flex: 1; text-align: center">
          <img src="@/assets/imgs/总计金额.png" alt="" style="width: 80px; height: 80px">
        </div>
        <div style="flex: 1">
          <div style="margin-bottom: 10px; font-size: 20px">总计票房</div>
          <div style="font-size: 20px; font-weight: bold">{{ (data.baseData.totalPrice * 1).toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {reactive} from "vue";
import request from "@/utils/request.js";
import {ElMessage} from "element-plus";

const data = reactive({
  baseData: {}
})

const loadBaseData = () => {
  request.get('/statistics/base').then(res => {
    if (res.code === '200') {
      data.baseData = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
loadBaseData()
</script>
