import Mock from 'mockjs'

const data=[
  {
    "title":"1",
    "content":"123"
  },
  {
    "title":"2",
    "content":"123"
  },
  {
    "title":"3",
    "content":"123"
  },
  {
    "title":"4",
    "content":"123"
  },
  {
    "title":"5",
    "content":"123"
  },
  {
    "title":"6",
    "content":"123"
  },
  {
    "title":"7",
    "content":"123"
  },
  {
    "title":"8",
    "content":"123"
  },
  {
    "title":"9",
    "content":"123"
  },
  {
    "title":"10",
    "content":"123"
  }
];

Mock.setup({
    timeout: '1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
 
Mock.mock(RegExp("/server/remberScroll" + ".*"), 'get', (options)=>{
  console.log(options)
  return Mock.mock(data);
})

export default Mock;