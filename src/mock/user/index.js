import Mock from 'mockjs'

const data = {
  name: 'jay',
  personality: '开朗，阳光，幽默',
  sex: '男',
  job: '码农',
  perDes: '本人来自广东五邑地区，个人性格开朗，好看帅气，平易近人',
  dream: '买彩票实现一夜暴富，所以特意弄了彩票页面，选出暴富密码'
}

Mock.setup({
  timeout: '600-50000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

Mock.mock(RegExp('/server/user' + '.*'), 'get', (options) => {
  console.log(options)
  return Mock.mock({ data, code: '0000' })
})

export default Mock
