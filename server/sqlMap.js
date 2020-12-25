
// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into logindata(identity,usertitle,username,password,title,tel)  values(4,"我是住户",?,?,"住户",?);',
        addzhuhu:"insert into zhuhu(roomNumber) values(?);",
        addName:"insert into user(sex,name) values(?,?);",
        select:"select * from logindata",
        selectlogin:"select * from logindata",
        selectAllUser:"select a.roomNumber,a.userImage,b.tel,b.userID,b.title,c.`name` from zhuhu a,logindata b,`user` c where a.userID=b.userID && b.userID=c.userID"
    }, 
   
}
// select a.roomNumber,b.tel,b.userID,b.title,c.`name` from zhuhu a,logindata b,`user` c where a.userID=b.userID && b.userID=c.userID
module.exports = sqlMap;