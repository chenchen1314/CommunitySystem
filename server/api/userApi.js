var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
// 注册居民账户接口
router.post('/registerUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    
    conn.query(sql, [params.username,params.password,params.tel], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//注册参加住户的请求
router.post('/registerZhuHu', (req, res) => {
    var sql = $sql.user.addzhuhu;
    var params = req.body;
    conn.query(sql, [params.roomNumber], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//注册参加name信息
router.post('/registerName', (req, res) => {
    var sql = $sql.user.addName;
    var params = req.body;
    
    conn.query(sql, [params.name,params.sex], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});






     
//查询login的信息    
        router.get("/selectLogin",(req,res)=>{
            var sql=$sql.user.selectlogin;
            conn.query(sql,function(err,result){
                if(result){
                    jsonWrite(res, result);
                    console.log(result)
                }
            })

        });

//manageUser 
router.get("/selectAllUser",(req,res)=>{
    var sql=$sql.user.selectAllUser;
    conn.query(sql,function(err,result){
        if(result){
            jsonWrite(res, result);
            console.log(result)
        }
    })

});





router.get("/selectInfo",(req,res)=>{
    var sql=$sql.user.select;
    conn.query(sql,function(err,result){
        if(result){
            jsonWrite(res, result);
            console.log(result)
        }
    })
})
module.exports = router;