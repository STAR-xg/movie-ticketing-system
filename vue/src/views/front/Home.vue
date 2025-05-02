<template>
  <div style="width: 70%; margin: 20px auto; display: flex">
    <div style="flex: 1">
      <div style="display: flex; align-items: center">
        <div style="flex: 1; font-size: 22px; color: #ef4238">正在热播（{{ data.data1?.length }}部）</div>
        <div style="width: 80px; text-align: right; color: #ef4238; cursor: pointer" @click="$router.push('/front/film')">全部 ></div>
      </div>
      <div style="margin-top: 20px">
        <el-row :gutter="15">
          <el-col :span="6" v-for="item in data.playingData" style="margin-bottom: 20px">
            <img :src="item.img" alt="" style="width: 100%; height: 260px; border-top-left-radius: 5px; border-top-right-radius: 5px">
            <el-button type="primary" plain style="width: 100%; height: 35px" @click="navTo('/front/filmDetail?id=' + item.id)">购票</el-button>
          </el-col>
        </el-row>
      </div>
      <div style="flex: 1; margin-top: 20px">
        <div style="display: flex; align-items: center">
          <div style="flex: 1; font-size: 22px; color: #2d98f3">即将上映（{{ data.data2?.length }}部）</div>
          <div style="width: 80px; text-align: right; color: #2d98f3; cursor: pointer"@click="$router.push('/front/film')">全部 ></div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <el-row :gutter="15">
          <el-col :span="6" v-for="item in data.noPlayData" style="margin-bottom: 20px; cursor: pointer" @click="navTo('/front/filmDetail?id=' + item.id)">
            <img :src="item.img" alt="" style="width: 100%; height: 260px; border-top-left-radius: 5px; border-top-right-radius: 5px">
            <div style="margin-top: 5px; font-size: 18px">{{ item.title }}</div>
            <div style="margin-top: 5px; font-size: 16px; color: orange">{{ item.start }} 上映</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="width: 300px; margin-left: 50px; background-color: #7f7fd5; min-height: 1000px">

    </div>
  </div>
</template>
<script setup>
import router from "@/router/index.js";
import { reactive } from "vue";
import request from "@/utils/request.js";
import {ElMessage} from "element-plus";

const data = reactive({
  data1: [],
  data2: [],
  playingData: [],
  noPlayData: []
})

const navTo = (url) => {
  location.href = url
}


const load = () => {
  request.get('/film/selectAll').then(res => {
    if (res.code === '200') {
      data.data1 = res.data.filter(v => v.status === '已上映')
      data.data2 = res.data.filter(v => v.status === '待上映')
      // 如果多出8个，我们切割一下
      if (data.data1 && data.data1.length > 8) {
        data.playingData = data.data1.slice(0, 8)
      } else {
        data.playingData = data.data1
      }
      // 如果多出8个，我们切割一下
      if (data.data2 && data.data2.length > 8) {
        data.noPlayData = data.data2.slice(0, 8)
      } else {
        data.noPlayData = data.data2
      }
    } else {
      ElMessage.error(res.msg)
    }
  })
}
load()
</script>