import Mock from 'mockjs'

const data = {
  fileValue:
}

Mock.setup({
  timeout: '1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

Mock.mock(RegExp('/server/base64PDF' + '.*'), 'get', (options) => {
  console.log(options)
  return Mock.mock({ data, code: '0000' })
})

export default Mock