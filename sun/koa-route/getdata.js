const Router = require('koa-router');
const router = new Router();
const Students = require('../model/students');
const Teacher = require('../model/teacher');

const permissions = null;
console.log('1')
router.post('/api/add/student',async(ctx)=>{
    let postData = ctx.request.body;
    console.log(postData)
    ctx.response.body = {status:200,msg:'这是post测试的返回数据',data: postData};
})
module.exports = router;