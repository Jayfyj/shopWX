import Mock from 'mockjs'

const data = [
  { url: '/devModelFile', text: '开发说明和方式' },
  { url: '/textAlignPage', text: '控制字体位置' },
  { url: '/rememberListPage', text: '记录列表位置' },
  { url: '/videoFullPage', text: '视频全屏滚动切换' },
  { url: '/dragChooseAllPage', text: '拖拽排列全反选' },
  { url: '/echartsPage', text: 'echarts页面' },
  { url: '/pickerTimePage', text: 'vue-better-calendar时间选择' },
  { url: '/welfareLotteryPage', text: '福利彩票选球' },
  // { url: '/timeSliderPage', text: '时间计时进度条' },
  { url: '/pdfToImgPage', text: 'pdf转图片页面' },
  { url: '/faceRecognitionPage', text: '人脸识别页面' }
]

Mock.setup({
  timeout: '1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

Mock.mock(RegExp('/server/homeMenu' + '.*'), 'get', (options) => {
  console.log(options)
  return Mock.mock({ data, code: '0000' })
})

export default Mock
