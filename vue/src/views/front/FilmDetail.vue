<template>
  <div>
    <div style="background: linear-gradient(to right, #46187e, #32046b, #32115b); height: 380px">
      <div style="width: 55%; margin: 0 auto; height: 380px; display: flex; align-items: center">
        <img :src="data.filmData.img" alt="" style="width: auto; height: 380px;" >
        <div style="flex: 1; color: white; padding: 20px 35px">
          <div style="font-size: 26px">{{ data.filmData.title }}</div>
          <div style="font-size: 16px">{{ data.filmData.english }}</div>
          <div style="margin-top: 15px">
            <span style="margin-right: 5px" v-for="item in data.filmData.types">{{ item }}</span>
          </div>
          <div style="margin-top: 5px">{{ data.filmData.areaName }} / {{ data.filmData.time }}分钟</div>
          <div style="margin-top: 5px">{{ data.filmData.start }} 中国大陆上映</div>
          <div style="display: flex; margin-top: 40px">
            <div style="flex: 1; margin-right: 5px">
              <el-button v-if="data.collectFlag" @click="collect" style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white">
                <el-icon size="24" style="color: orange"><StarFilled /></el-icon><span style="margin-left: 5px">已想看</span>
              </el-button>
              <el-button v-else @click="collect" style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white">
                <el-icon size="large"><Star /></el-icon> <span style="margin-left: 5px">想看</span>
              </el-button>
            </div>
            <div style="flex: 1; margin-left: 5px">
              <el-button v-if="data.scoreFlag" style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white" @click="">
                <el-icon size="24" style="color: orange"><Comment /></el-icon> <span style="margin-left: 5px">已评分</span>
              </el-button>
              <el-button v-else style="width: 100%; height: 40px; font-size: 16px; background-color: #5a3686; border: none; color: white"
                         @click="scoreInit"
                         v-if="data.filmData.status === '已上映'">
                <el-icon size="large"><ChatDotSquare /></el-icon> <span style="margin-left: 5px">评分</span>
              </el-button>
            </div>
          </div>
          <el-button style="background-color: #ef4238; border: none; color: white; width: 100%; margin-top: 10px; height: 40px; font-size: 16px" @click="$router.push('/front/filmCinema?id=' + data.filmData.id)">特惠购票</el-button>
        </div>
        <div style="width: 250px; color: white">
          <div style="font-size: 12px">影片口碑</div>
          <div style="display: flex; align-items: center">
            <div style="width: 100px; font-weight: bold; font-size: 16px"><span style="font-size: 30px">{{ data.filmData.score }}</span> 分</div>
            <div style="flex: 1">
              <div><el-rate v-model="data.halfScore" disabled/></div>
              <div>{{ data.scoreTime }}人评分</div>
            </div>
          </div>
          <div style="margin-top: 10px; font-size: 12px">累计票房</div>
          <div style="margin-top: 5px; font-weight: bold; font-size: 16px"><span style="font-size: 25px">{{ (data.filmData.total * 1).toFixed(2) }}</span> 元</div>
        </div>
      </div>
    </div>
    <div style="width: 55%; margin: 50px auto; display: flex">
      <div style="flex: 1">
        <div style="font-size: 20px; border-left: 3px solid red; padding-left: 5px; line-height: 30px">剧情简介</div>
        <div style="margin-top: 10px; padding: 10px; line-height: 20px; color: #333333; text-align: justify">{{ data.filmData.content }}</div>
        <div style="font-size: 20px; border-left: 3px solid red; padding-left: 5px; line-height: 30px; margin-top: 40px">演职人员</div>
        <div style="margin-top: 20px" v-if="data.actorData && data.actorData.length > 0">
          <el-row :gutter="10">
            <el-col :span="5" v-for="item in data.actorData.filter(v => v.role === '导演')" style="margin-bottom: 20px">
              <div style="text-align: center; font-size: 16px">{{ item.role }}</div>
              <img :src="item.avatar" alt="" style="width: 100%; height: 110px; border-radius: 50%; margin: 10px 0">
              <div style="text-align: center">{{ item.name }}</div>
            </el-col>
            <el-col :span="5" v-for="item in data.actorData.filter(v => v.role === '编剧')" style="margin-bottom: 20px">
              <div style="text-align: center; font-size: 16px">{{ item.role }}</div>
              <img :src="item.avatar" alt="" style="width: 100%; height: 110px; border-radius: 50%; margin: 10px 0">
              <div style="text-align: center">{{ item.name }}</div>
            </el-col>
            <el-col :span="5" v-for="item in data.actorData.filter(v => v.role === '主演')" style="margin-bottom: 20px">
              <div style="text-align: center; font-size: 16px">{{ item.role }}</div>
              <img :src="item.avatar" alt="" style="width: 100%; height: 110px; border-radius: 50%; margin: 10px 0">
              <div style="text-align: center">{{ item.name }}</div>
            </el-col>
            <el-col :span="5" v-for="item in data.actorData.filter(v => v.role === '演员')" style="margin-bottom: 20px">
              <div style="text-align: center; font-size: 16px">{{ item.role }}</div>
              <img :src="item.avatar" alt="" style="width: 100%; height: 110px; border-radius: 50%; margin: 10px 0">
              <div style="text-align: center">{{ item.name }}</div>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px; padding-left: 20px" v-else>
          管理员暂未录入演职人员信息
        </div>
        <div style="font-size: 20px; border-left: 3px solid red; padding-left: 5px; line-height: 30px; margin-top: 40px">出品信息</div>
        <div style="margin-top: 20px; display: flex">
          <div style="flex: 1; border: 1px solid #eeebeb; display: flex; align-items: center; padding: 30px">
            <el-icon size="22" style="width: 60px"><VideoCamera /></el-icon>
            <div style="flex: 1; width: 0">
              <div style="font-size: 18px">出品发行</div>
              <el-popover
                  placement="top-start"
                  title="出品发行"
                  :width="220"
                  trigger="hover"
                  :content="data.filmData.employ"
              >
                <template #reference>
                  <div style="font-size: 16px; margin-top: 5px" class="line1">{{ data.filmData.employ }}</div>
                </template>
              </el-popover>
            </div>
          </div>
          <div style="flex: 1; border: 1px solid #eeebeb; display: flex; align-items: center; padding: 30px">
            <el-icon size="22" style="width: 60px"><VideoPlay /></el-icon>
            <div style="flex: 1">
              <div style="font-size: 18px">技术参考</div>
              <div style="font-size: 16px; margin-top: 5px">{{ data.filmData.time }} 分钟</div>
            </div>
          </div>
        </div>
        <div style="font-size: 20px; border-left: 3px solid red; padding-left: 5px; line-height: 30px; margin-top: 40px">票房</div>
        <div style="margin-top: 20px; display: flex; background-color: #f8f8f8; padding: 30px 40px">
          <div style="flex: 1">
            <div style="font-size: 26px; text-align: center; color: red">{{ data.priceRanking }}</div>
            <div style="font-size: 20px; text-align: center">票房排名</div>
          </div>
          <div style="flex: 1">
            <div style="font-size: 26px; text-align: center; color: red">{{ (data.todayPrice * 1).toFixed(2) }}</div>
            <div style="font-size: 20px; text-align: center">今日票房（元）</div>
          </div>
          <div style="flex: 1">
            <div style="font-size: 26px; text-align: center; color: red">{{ (data.filmData.total * 1).toFixed(2) }}</div>
            <div style="font-size: 20px; text-align: center">总票房（元）</div>
          </div>
        </div>
      </div>
      <div style="width: 360px; margin-left: 30px">
        <div style="font-size: 20px; border-left: 3px solid red; padding-left: 5px; line-height: 30px; margin-bottom: 20px">预告视频</div>
        <div style="display: flex; margin-bottom: 20px" v-if="data.videoData && data.videoData.length > 0" v-for="item in data.videoData">
          <img :src="item.img" alt="" style="width: 120px; height: 70px; border-radius: 5px; cursor: pointer; border: 1px solid #cccccc" @click="viewInit(item)">
          <div style="flex: 1; margin-left: 20px">
            <div style="line-height: 20px; height: 40px; font-weight: bold" class="line2">{{ item.name }}</div>
            <div style="line-height: 20px; margin-top: 10px">{{ item.time }}</div>
          </div>
        </div>
        <div style="margin-top: 20px; padding-left: 20px" v-else>
          暂无预告片
        </div>
      </div>
    </div>
    <el-dialog title="预告视频" v-model="data.formVisible" width="50%" destroy-on-close>
      <div style="padding: 30px">
        <div style="font-size: 26px; font-weight: bold; text-align: center">{{ data.filmData.title }} - 预告片</div>
        <div style="margin-top: 20px; color: #666666; font-size: 16px">{{ data.form.name }}</div>
        <div style="margin-top: 20px">
          <video :src="data.form.video" controls style="width: 100%"></video>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="电影评分" v-model="data.scoreVisible" width="40%" destroy-on-close>
      <el-form ref="form" label-width="70px" style="padding: 20px">
        <el-form-item prop="score" label="电影评分">
          <el-rate
              v-model="data.score"
              :max="10"
              show-score
              text-color="#ff9900"
              score-template="{value} 分"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="data.scoreVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitScore">提 交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>


<script setup>
import {reactive, ref} from "vue";
import request from "@/utils/request.js";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";

const data = reactive({
  user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
  filmId: router.currentRoute.value.query.id,
  filmData: {},
  videoData: [],
  form: {},
  formVisible: false,
  actorData: [],
  collectFlag: false,
  score: 10,
  scoreVisible: false,
  scoreFlag: false,
  scoreTime: 0,
  halfScore: 0,
  todayPrice: 0,
  priceRanking: 0,
})


const loadTodayPrice = () => {
  request.get('/orders/selectTodayPrice/' + data.filmId).then(res => {
    if (res.code === '200') {
      data.todayPrice = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
loadTodayPrice()
const loadPriceRanking = () => {
  request.get('/film/selectPriceRanking/' + data.filmId).then(res => {
    if (res.code === '200') {
      data.priceRanking = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
loadPriceRanking()


const scoreInit = () => {
  data.scoreVisible = true
}
const submitScore = () => {
  let scoreData = {
    filmId: data.filmId,
    score: data.score
  }
  request.post('/score/add', scoreData).then(res => {
    if (res.code === '200') {
      ElMessage.success('评分成功')
      data.scoreVisible = false
      loadFilm()
      loadScore()
      loadScoreTime()
    } else {
      ElMessage.error(res.msg)
    }
  })
}

const loadScore = () => {
  request.get('/score/selectAll', {
    params: {
      filmId: data.filmId,
      userId: data.user.id
    }
  }).then(res => {
    if (res.code === '200') {
      data.scoreFlag = res.data.length
    }
  })
}
const loadScoreTime = () => {
  request.get('/score/selectAll', {
    params: {
      filmId: data.filmId,
    }
  }).then(res => {
    if (res.code === '200') {
      data.scoreTime = res.data.length
    }
  })
}
loadScore()
loadScoreTime()

const loadCollect = () => {
  request.get('/collect/selectAll', {
    params: {
      userId: data.user.id,
      filmId: data.filmId
    }
  }).then(res => {
    if (res.code === '200') {
      data.collectFlag = res.data.length;
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const collect = () => {
  let collectData = {
    userId: data.user.id,
    filmId: data.filmId
  }
  request.post('/collect/add', collectData).then(res => {
    if (res.code === '200') {
      ElMessage.success('操作成功')
      loadCollect()
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const loadFilm = () => {
  data.filmId = router.currentRoute.value.query.id
  //data.halfScore = (data.filmData.score / 2).toFixed(1)
  request.get('/film/selectById/' + data.filmId).then(res => {
    if (res.code === '200') {
      data.filmData = res.data
      data.halfScore = (data.filmData.score / 2).toFixed(1)
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const loadVideo = () => {
  request.get('/video/selectAll', {
    params: {
      filmId: data.filmId
    }
  }).then(res => {
    if (res.code === '200') {
      data.videoData = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const loadActor = () => {
  request.get('/actor/selectAll', {
    params: {
      filmId: data.filmId
    }
  }).then(res => {
    if (res.code === '200') {
      data.actorData = res.data
    } else {
      ElMessage.error(res.msg)
    }
  })
}
const viewInit = (item) => {
  data.form = JSON.parse(JSON.stringify(item))
  data.formVisible = true
}
loadFilm()
loadVideo()
loadActor()
loadCollect()
</script>

<style scoped>
.line1 {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.line2 {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 超出几行省略 */
  overflow: hidden;
}
.el-col-5 {
  width: 20%;
  max-width: 20%;
}
</style>