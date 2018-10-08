var express=require('express');
var app=express();
var url = require("url");
var fs = require("fs");
var conn=require('./module/connmysql');
var session=require("express-session");
 app.use(session({'secret':'wy'}));
// var imgCode=require('./modules/imgCode');
var md5=require('./module/md5');
var bodyParser=require('body-parser');
var urlencode=bodyParser.urlencoded();


app.get('/getCode',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    });
   
   var svg=imgCode(request,response);
   request.session.code=svg[1];
   response.end(JSON.stringify(svg));
   
});

//请求验证码
app.get('/getCode',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*'
    });
   var svg=imgCode(request,response);
   request.session.code=svg[1];
   response.end(JSON.stringify(svg));
   
});
//验证码是否正确
app.post('/defCode',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Credentials": "true"    
    });
    request.body.trueCode==request.session.code ?  response.end('true') :  response.end('false');
});
//验证用户名密码是否正确
app.post('/login',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        // "Access-Control-Allow-Credentials": "true"    
    });
    
    console.log(request.body);
   
    var name=request.body.pass;
    console.log(name);
  
    var password=request.body.checkPass;

    var sql= 'select * from login where admin="'+name+'" and pass="'+password+'"';
     conn.query(sql,(err,result)=>{
        //   console.log(err)
         result.length!=0?response.end('登录成功'): response.end('你的用户名或密码错误');
        // console.log(result);
        // response.end(result)
     })

});


//修改密码
app.post('/personData',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });


    var name =  request.body.name;
    var pass =  request.body.pass;
    var sql =' update login set pass="'+pass+'" where admin="'+name+'"';
    conn.query(sql,(err,result)=>{
         response.end(JSON.stringify(result));
    })


});


// app.post('/resetname',(request,response)=>{
//     response.writeHead(200,{
//         'content-type':'text/html;charset=utf-8',
//         'Access-Control-Allow-Origin':'*',
//     });
//     // update MyGuests set name='Mary' where id=1
//      var  name = request.query.name;
//      var  password=request.query.password;
//     var sql =' update login set pass="'+"123"+'" where name="'+'老王'+'"';
//     conn.query(sql,(err,result)=>{
//          response.end('a')
//     })

   

// });

//获取商品列表
app.get('/goodslist',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    
    var sql='select * from goodslist ';
    conn.query(sql,(err,result)=>{
        response.end(JSON.stringify(result));
    })


});

//获取分类信息
app.get('/fenlei',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    // var name=  request.query.name;
    var sql='select * from typelist ';
    conn.query(sql,(err,result)=>{
        response.end(JSON.stringify(result));
    })


});

//插入用户信息
//获取商品列表
app.post('/data_management',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.body);
    var gender = request.body.gender;
    var nickname = request.body.nickname;
    var remark = request.body.remark;
    var phone = request.body.phone;
    var email = request.body.email;
    var id = request.body.id;

   
    // var sql = 'insert into userlist (name,iphone,email,juese,status) values ("'+name+'","'+iphone+'","'+email+'","'+juese+'","'+status+'")';
    // update 表 set (字段1=值1, 字段2=值2) where 条件
    // sql =' update login set pass="'+"123"+'" where name="'+'老王'+'"';
    // var sql='insert into login(nickname,gender,phone,email,remark) values ("'+nickname+'","'+gender+'","'+phone+'","'+email+'","'+remark+'")';

    var  sql ='update login set nickname="'+nickname+'",gender="'+gender+'",phone="'+phone+'",email="'+email+'",remark="'+remark+'" where id="'+id+'"';
        conn.query(sql,(err,result)=>{
            console.log(err)
            result.length!=0?response.end('更新成功'): response.end('失败');
        })
});

//分页
app.get('/goods',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.query);

    // var start=request.query.start;
    // var count=request.query.count;

    // var start=1;
    // var count=5;

    var sql = 'select * from goodslist'
    conn.query(sql,(err,result)=>{
        // console.log(err)
        // // console.log(result)
        // //获取商品总数量
        // var length=result.length;
        // //查询商品
        // var sql="select * from goodslist order by id limit '"+start+"','"+count+"'";
        // conn.query(sql,(err,result)=>{
        //       // console.log(result);
              response.end(JSON.stringify(result));
        })

})



//获取用户信息
app.get('/user',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.query)
    var name=  request.query.name;
    var sql='select * from login where admin="'+name+'"';
    conn.query(sql,(err,result)=>{
        response.end(JSON.stringify(result));
    })


});

app.get('/userlist',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    })
     var sql='select * from login ';
    conn.query(sql,(err,result)=>{
        response.end(JSON.stringify(result));
    })
})

// 分页
app.get('/good',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.query);

    var start=request.query.star;
    var count=request.query.count;
    
    // var sql='select * from goodslist ';
    // conn.query(sql,(err,result)=>{
    //       response.end(JSON.stringify(result));
    // }) 

    var sql='select * from goodslist order by id limit '+start+','+count+'';
    conn.query(sql,(err,result)=>{
            console.log(err)
          response.end(JSON.stringify(result));
    })

})

//根据id号删除当前信息
app.get('/delectgoods',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    console.log(request.query);

    var id = request.query.id;

    var sql = 'delete from goodslist where id ="'+id+'"';
    conn.query(sql,(err,result)=>{
        console.log(result)

        result.length!=0?response.end('删除成功'): response.end('失败');
    })

})
//根据id号删除当前信息
app.get('/delectuser',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    console.log(request.query);

    var id = request.query.id;

    var sql = 'delete from login where id ="'+id+'"';
    conn.query(sql,(err,result)=>{
        console.log(result)

        result.length!=0?response.end('删除成功'): response.end('失败');
    })

})

app.get('/delectfenlei',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    console.log(request.query);

    var id = request.query.id;

    var sql = 'delete from typelist where id ="'+id+'"';
    conn.query(sql,(err,result)=>{
        console.log(result)

        result.length!=0?response.end('删除成功'): response.end('失败');
    })

})



//添加商品
app.post('/addgoods',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.body);
    var goodstype = request.body.goodstype;
    var goodsname = request.body.goodsname;
    var price = request.body.price;
    var state = request.body.state;
   
   

    var sql='insert into goodslist(goodstype,goodsname,price,state) values ("'+goodstype+'","'+goodsname+'","'+price+'","'+state+'")';

        conn.query(sql,(err,result)=>{
            console.log(err)
            result.length!=0?response.end('添加成功'): response.end('失败');
        })
});
//添加用户
app.post('/adduser',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.body);
    var admin = request.body.admin;
    var phone = request.body.phone;
    var email = request.body.email;
    var Role = request.body.Role;
    var asse = request.body.asse;
    
   
   

    var sql='insert into login(admin,phone,email,Role,asse) values ("'+admin+'","'+phone+'","'+email+'","'+Role+'","'+asse+'")';

        conn.query(sql,(err,result)=>{
            console.log(err)
            result.length!=0?response.end('添加成功'): response.end('失败');
        })
});
//添加分类
app.post('/addfenlei',urlencode,(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });

    console.log(request.body);
    var typename = request.body.typename;
    
    
   
   

    var sql='insert into typelist(typename) values ("'+typename+'")';

        conn.query(sql,(err,result)=>{
            console.log(err)
            result.length!=0?response.end('添加成功'): response.end('失败');
        })
});
//实现搜索的接口
app.get('/search',(request,response)=>{
    response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
    console.log(request.query);

    var name = request.query.user;
    var type = request.query.region;

    // var sql = 'select * from goodslist where goodstype like '%'卫衣'%' and goodsname like '%'圆领'%''
    var sql = `select * from goodslist where goodsname like '%${name}%' and goodstype like '%${type}%'`;
    conn.query(sql,(err,result)=>{
        console.log(err)
        response.end(JSON.stringify(result));
    })
})
app.post('/upload',urlencode,(request,response)=>{
     response.writeHead(200,{
        'content-type':'text/html;charset=utf-8',
        'Access-Control-Allow-Origin':'*',
    });
      console.log(request.body);
      var chunks = [];
            req.on("data", chunk=>{
                chunks.push(chunk); 
            });
            req.on("end", ()=>{
                var arr = [];
                var data = Buffer.concat(chunks);
             
                for( var i=0,len=data.length; i<len; i++ ){
                  
                    if( data[i]==13 && data[i+1]==10 ){
                
                        arr.push(i);
                    }
                }
                var str = data.slice(arr[3]+2, arr[4]);
                //console.log(filename)
                console.log(str);
                fs.writeFileSync("./upload/"+new Date().getTime()+".jpg", str);
                res.end("ok");
            });
            

      response.end('结束')
})

app.listen(8888)