
<template>

<div class="q-pa-md">
<q-pull-to-refresh :handler="refresher" pull-message="Pull down to refresh" refresh-message="refreshing">
  <!-- 内容，无论你喜欢什么-->
  <p v-for="(item,index) in [1,2,3,4,5]" :key="index">
    {{item}}Lorem ipsum dolor sit amet...
  </p>
</q-pull-to-refresh>

<div class="row">
  <div class="platform-android-only col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
  <div class="col-xs-12 col-sm-6 col-md-4">
    col
  </div>
</div>

    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
<q-btn-group push>
  <q-btn push label="One" />
  <q-btn push label="Two11"  />
  <q-btn push label="Three" />
</q-btn-group>
    <q-btn color="primary" label="Trigger" @click="trigger" />
  <!-- 图标 & 标签 -->
  <q-btn icon="create" label="New item" />

<q-btn-dropdown label="Button">
  <!-- 下拉内容 -->
  <q-list link>
  </q-list>
</q-btn-dropdown>

<q-toolbar color="primary">
  <!--
    对于工具栏标题，我们使用
    QToolbarTitle组件
  -->
  <q-toolbar-title>
    Title
  </q-toolbar-title>

  <!--
    在工具栏中，按钮最好
    配置为“flat, round, dense”并带有图标，
    但任何按钮都可以
  -->
  <q-btn flat round dense icon="mail" />
</q-toolbar>
     <q-tabs>
        <q-tab icon="mail">Mails</q-tab>
        <q-tab icon="alarm">Alarms</q-tab>
        <q-tab icon="movie">Movies</q-tab>
      </q-tabs>
<div>
    12231Battery {{ pounchInfo }}status is: <strong>{{ batteryStatus }}</strong>
  </div>
<q-breadcrumbs>
  <q-breadcrumbs-el label="Home" icon="home" />
  <q-breadcrumbs-el label="Components" icon="widgets" />
  <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
</q-breadcrumbs>

 <q-field
  icon="cloud"
  label="Your Gmail"
  helper="Helper"

  error-label="We need a valid email"
  :count="10"
>
  <q-input suffix="@gmail.com" value="12"  />
</q-field>
  <q-color v-model="modelHex" />

<q-editor v-model="modelHex" />

<q-uploader :url="url" />
1234
<input type="file" />
 <q-table
    title="Table Title"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
  <q-btn label="Alert" color="primary" @click="alert" />
<q-btn label="Email">
  <!-- 目标的直接子元素 -->
  <q-tooltip>
    <!--
      构成工具提示的DOM元素，
      在此例中是简单的文字：
    -->
    Some text as content of Tooltip
  </q-tooltip>

</q-btn>

<q-video
  src="https://ksv-video-publish.cdn.bcebos.com/0b13584b4fe0c4571bcec79d4ed4fbfb4c83adbd.mp4?auth_key=1558520181-0-0-448c2a21bde81d3ecbb351f5d5069775"
  style="width: 200px; height: 200px"
/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>

</template>

<style>
</style>

<script>
import {
  QAjaxBar, QPullToRefresh, QField, QInput, QColor, QEditor, QUploader, QTable, QTooltip, QVideo

} from 'quasar'
import 'whatwg-fetch'
import PouchDB from 'pouchdb'

// PouchDB.plugin(require('pouchdb-adapter-cordova-sqlite'))
// var taskDB = new PouchDB('taskLists22222', { adapter: 'cordova-sqlite' })
var taskDB = new PouchDB('taskLists22222')

console.log('taskDB12', taskDB)
const todo = {
  _id: new Date().toISOString(),
  title: '你好',
  completed: false
}
taskDB.put(todo, (err, result) => {
  if (!err) {
    console.log('Successfully posted a todo!')
  }
})
// import PouchDB from 'pouchdb'
export default {
  name: 'AjaxBar',
  // we manually trigger it (this is not needed if we
  // don't skip Ajax calls hijacking)
  components: {
    QAjaxBar,
    QPullToRefresh,
    QField,
    QInput,
    QColor,
    QEditor,
    QUploader,
    QTable,
    QTooltip,
    QVideo

  },
  data () {
    return {
      batteryStatus: 'determining...',
      pounchInfo: '',
      modelHex: '#C7044B',
      model: 30,
      url: 'http://1.1.1.195/upload.php',

      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: 'name',
          sortable: true
        },
        { name: 'calories', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      tableData: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        }
      ]
    }
  },
  created () {
    console.log('done')

    // this.pounchDB.info().then((result) => {
    //   console.log('dbinfo', result)
    //   this.pounchInfo = result
    //   // handle result
    // }).catch(function (err) {
    //   console.log(err)
    // })
    // var db = new PouchDB('my_database')
    // console.log('pounchDB', store.get('user'))

    // 我们注册事件, 参考插件的文档页面
    window.addEventListener('batterystatus', this.updateBatteryStatus, false)
  },
  mounted () {

  },
  beforeDestroy () {
    // 我们做一些清理工作;
    // 我们需要删除事件监听器
    window.removeEventListener('batterystatus', this.updateBatteryStatus, false)
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: 'Alert',
        message: 'Some message'
      }).onOk(() => {
        console.log('OK')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    },
    showNotify () {
      this.$q.notify((this.$q.platform.is.desktop ? 'Clicked' : 'Tapped') + ' on a context menu item.')
    },

    updateBatteryStatus (status) {
      this.batteryStatus = `Level: ${status.level}, plugged: ${status.isPlugged}`
    },
    refresher (done) {
      console.log('done', done)
      // done - - 当您进行所有必要的更新时调用的函数。
      //         不要忘记调用它，否则刷新消息
      //         将继续显示

      // 创建一些Ajax调用，然后调用done()
    },
    trigger () {
      console.log('this.q', this.$q)

      // console.log('q', this.$q.platform)
      const bar = this.$refs.bar
      bar.start()
      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>
