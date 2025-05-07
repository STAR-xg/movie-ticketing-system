<template>
  <div>
    <div class="front-header">
      <div class="front-header-left">
        <img src="@/assets/imgs/logo1.png" alt="">
        <div class="title">电影购票网站</div>
      </div>
      <div class="front-header-center">
        <el-menu :default-active="router.currentRoute.value.path" router mode="horizontal">
          <el-menu-item index="/front/home">首页</el-menu-item>
          <el-menu-item index="/front/film">电影</el-menu-item>
          <el-menu-item index="/front/cinema">影院</el-menu-item>
          <el-menu-item index="/front/charts">排行榜</el-menu-item>
          <el-menu-item index="/front/orders">购票记录</el-menu-item>
        </el-menu>
      </div>
      <div class="front-header-right">
        <div v-if="!data.user.id">
          <el-button @click="router.push('/login')">登录</el-button>
          <el-button @click="router.push('/register')">注册</el-button>
        </div>
        <div v-else>
          <el-dropdown style="cursor: pointer; height: 60px">
            <div style="display: flex; align-items: center">
              <img style="width: 40px; height: 40px; border-radius: 50%;" :src="data.user.avatar" alt="">
              <span style="margin-left: 5px;">{{ data.user.name }}</span><el-icon><arrow-down /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/front/person')">个人资料</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/front/collect')">想看列表</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/front/notice')">系统公告</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="router.push('/front/password')">修改密码</el-dropdown-item>
              </el-dropdown-menu>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="main-body">
      <RouterView @updateUser="updateUser" />
      <div style="background-color: #3c3c3c;height: 400px;margin-top: 40px">
        <div style="width: 50%;margin: 0 auto;display: flex;color: #c2c2c2">
          <div style="flex: 1;margin-top: 20px">
            <div style="padding: 10px 0;font-size: 18px">电影购票网站</div>
            <div style="padding: 5px 0">上亿电影工作人员共同打造的"电影网站"</div>
            <div style="padding: 5px 0">60,00000 多次购票记录</div>
            <div style="padding: 5px 0">600,000 个细分分类</div>
            <div style="padding: 5px 0">760,000,000 次电影播放记录</div>
            <div style="padding: 5px 0">38,000+ 电影影片</div>
          </div>
          <div style="flex: 1;margin-top: 20px">
            <div style="padding: 10px 0;font-size: 18px">关于我们</div>
            <div style="padding: 5px 0">关于电影购票网站联系我们</div>
            <div style="padding: 5px 0">隐私政策商标声明</div>
            <div style="padding: 5px 0">服务协议</div>
            <div style="padding: 5px 0">电影购票网站服务协议</div>
            <div style="padding: 5px 0">网络信息侵权通知指引</div>
            <div style="padding: 5px 0">电影购票网站服务监督员</div>
            <div style="padding: 5px 0">网站地图加入电影购票网站</div>
          </div>
          <div style="flex: 1;margin-top: 20px">
            <div style="padding: 10px 0;font-size: 18px">电影咨询服务</div>
            <div style="display: flex">
              <div style="flex: 1;padding: 10px 0">电影咨询</div>
              <div style="flex: 1;padding: 5px 0">影片了解</div>
            </div>
            <div style="display: flex">
              <div style="flex: 1;padding: 10px 0">影院问答</div>
              <div style="flex: 1;padding: 5px 0">电影详情</div>
            </div>
            <div style="display: flex">
              <div style="flex: 1;padding: 10px 0">影片选择</div>
              <div style="flex: 1;padding: 5px 0">座位选择</div>
            </div>
            <div style="display: flex">
              <div style="flex: 1;padding: 10px 0">APP下载</div>

            </div>
            <div style="padding: 5px 0">友情链接：<a style="margin-left:10px;color: red;" href="https://space.bilibili.com/432113931">武哥聊编程</a> <a style="margin-left:10px;color: red;" href="https://space.bilibili.com/402779077">程序员青戈</a> </div>
          </div>
        </div>
        <div style="width: 100%;text-align: center;color: #c2c2c2;margin-top: 40px;font-size: 20px">
          购买电影票，就上电影购票网站
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import router from "@/router/index.js";
  import { reactive } from "vue";
  import request from "@/utils/request.js";

  const data = reactive({
    user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
    top: '',
    noticeData: []
  })

  const logout = () => {
    localStorage.removeItem('xm-user')
    router.push('/login')
  }

  const updateUser = () => {
    data.user =  JSON.parse(localStorage.getItem('xm-user') || '{}')
  }

  const loadNotice = () => {
    request.get('/notice/selectAll').then(res => {
      data.noticeData = res.data
      let i = 0
      if (data.noticeData && data.noticeData.length) {
        data.top = data.noticeData[0].content
        setInterval(() => {
          data.top = data.noticeData[i].content
          i++
          if (i === data.noticeData.length) {
            i = 0
          }
        }, 2500)
      }
    })
  }
  loadNotice()
</script>

<style scoped>
@import "@/assets/css/front.css";
</style>