import Mock from 'mockjs'
const users = Mock.mock('/users/data', (req, res) => {
  return {
    meta: {
      msg: '成功',
      status: 200
    },
    data: ['张三', '历史i', '王五', '李二']
  }
})
export default users
