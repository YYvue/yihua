// 引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require("body-parser");
// 配置第三方模块
// 配置连接池
var pool = mysql.createPool({
	host: "127.0.0.1",
	prot: "3306",
	user: "root",
	password: "",
	database: "tdxm",
	connectionLimit: 15
});
// 配置跨域
var server = express();
server.use(cors({
	origin: ["http://127.0.0.1:3001", "http://localhost:3001"],
	credentials: true
}));
server.use(session({
	secret: "128位字符串",
	resave: true,
	saveUninitialized: true
}));
//body中间件
server.use(bodyParser.urlencoded({
 extended:false
}));
server.listen(3000);
server.use(express.static("public"));
// 获取商品分类
server.get("/spfl", (req, res) => {
	var sql = "SELECT id,lb,lbbh FROM tdxm_lb";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send({
				code: "请求分类成功",
				data: result
			})
		} else {
			res.send({
				code: "请求分类失败"
			})
		}
	})
})
// 商品介绍
server.get("/spjs", (req, res) => {
	var sql = "SELECT id,spmc,sp_url,splb FROM tdxm_sp";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send({
				code: "请求商品成功",
				data: result
			})
		} else {
			res.send({
				code: "请求商品失败"
			})
		}
	})
})
// 商品详情
server.get("/spxq", (req, res) => {
	var spid=req.query.spid;
	var sql = "SELECT kc,hy,gs,yhzs,price,imgs FROM tdxm_spxq WHERE spid=?";
	pool.query(sql,[spid],(err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			res.send({
				code: "1",
				data: result,
			})
		} else {
			res.send({
				code: "-1"
			})
		}
	})
})
//登录
server.post("/login",(req,res)=>{
	var uname=req.body.uname;
	var upwd=req.body.upwd;	
	var sql="SELECT id,nc FROM tdxm_user WHERE uname=?AND upwd=md5(?)";
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err)throw err;
		if(result.length==0){
			res.send({code:-1,msg:"用户登录失败"})
		}else{
			req.session.uid=result[0].id;
			var yhid=req.session.uid;
			var nc=result[0].nc;
			res.send({code:1,msg:"用户登录成功",yhid:yhid,nc:nc})};
	})
})
// 添加购物车
server.get("/tj",(req,res)=>{
	var obj=req.query;
	var spmc=obj.spmc;
	var spsl=obj.spsl;
	var spjg=obj.spjg;
	var yhid=obj.yhid;
	var url=obj.url;
	var sql="INSERT INTO tdxm_yhgwc VALUES(?,?,?,?,?,?,?);"
	pool.query(sql,[null,spmc,spsl,spjg,yhid,url,null],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send({code:1})
		}else{
			res.send({code:0})
		}
	})
})
// 显示购物车
server.get("/gwc",(req,res)=>{
	var yhid=req.query.yhid;
	var sql="SELECT * FROM tdxm_yhgwc WHERE yhid=? and ztm is ?"
	pool.query(sql,[yhid,null],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send({code:1,data:result})
		}else{
			res.send({code:0})
		}
	})
})
// 如果数量为0,删除此购物车
server.get("/sc",(req,res)=>{
	var id=req.query.id;
	console.log(id);
	var sql="DELETE FROM tdxm_yhgwc WHERE id in (?)"
	pool.query(sql,[id],(err,result)=>{
		if(err)throw err;
		if(result.affectedRows>0){
			res.send("删除成功")
		}else{
			res.send("删除失败")
		}
	})
})
//修改支付成功状态码
server.get('/paywin',(req,res)=>{
	var idx=req.query.idx;
	console.log(idx)
	// idx=idx.join(',')
	// console.log(idx,typeof idx);
	var sql='UPDATE tdxm_yhgwc SET ztm="已付款" WHERE id in (?)';//ztm 1为已经支付
	pool.query(sql,[idx],(err,result)=>{
		if(err) throw err;
		// console.log(result)
		if(result.affectedRows>0){
			res.send('修改成功')			
		}else{
			res.send('修改失败')
		}
	})

})
//支付页面退出接口
server.get('/payerr',(req,res)=>{
	var idx=req.query.idx;
	console.log(idx)
	// idx=idx.join(',')
	// console.log(idx,typeof idx);
	var sql='UPDATE tdxm_yhgwc SET ztm="未付款" WHERE id in (?)';//ztm 0为待支付
	pool.query(sql,[idx],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('修改成功')			
		}else{
			res.send('修改失败')
		}
	})

})


//注册
server.post('/reg',(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var nc=req.body.nc;
  var sql='INSERT INTO tdxm_user(uname,upwd,nc)values(?,md5(?),?)';
  pool.query(sql,[uname,upwd,nc],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
	  res.send({code:1,msg:"用户注册成功"});
	}else{
	res.send({code:-1,msg:"用户登录失败"});
	}
  });
});	

//判断账户是否存在
server.post('/pd',(req,res)=>{
  var uname=req.body.uname;
var sql="SELECT id FROM tdxm_user WHERE uname=?";
  pool.query(sql,[uname],(err,result)=>{
  	if(err)throw err;
	// console.log(result);
  	if(result.length>0){
  		res.send({code:1});
  	}	
  })
});
	
//获取已付款状态码
server.get('/hq1',(req,res)=>{
	var sql='SELECT * from tdxm_yhgwc where  ztm="已付款"';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

server.get('/hq0',(req,res)=>{
	var sql='SELECT * from tdxm_yhgwc where  ztm="未付款"';
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

server.get('/hqall',(req,res)=>{
	var sql="SELECT * from tdxm_yhgwc where ztm ='已付款'or ztm='未付款'";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})