<template>
<div>
   
    <div class='Notice'>
        <ul >
            <li>精选鲜花,更优质</li>
            <li>恒温冷链,更新鲜</li>
            <li>次晨即达,跟快速</li>
        </ul>
        <div class="gonggao">

            <p><span>宜花公告</span><a href="#">客服电话： 4000504560 店家查看...</a></p>
        </div>
    </div>
    <div class='menu'>
        <ul>
            <li><a href="#"><img src="../assets/index_headimg/l1.jpg"/></a></li>
            <li><a href="#"><img src="../assets/index_headimg/l2.jpg"/></a></li>
            <li><a href="#"><img src="../assets/index_headimg/l3.jpg"/></a></li>
            <li><a href="#"><img src="../assets/index_headimg/l4.jpg"/></a></li>
            <li><a href="#"><img src="../assets/index_headimg/l5.jpg"/></a></li>
            <li><a href="#"><img src="../assets/index_headimg/l6.jpg"/></a></li>

        </ul>
    </div>
    <div style="margin: 10px 0 10px 0"></div>
    <div class='qg'><a href="#"><img src="../assets/index_headimg/39530c1ee499d2239c4bab4c286f709.jpg" alt=""/></a></div>

    <div class='miaosha'>
        <div><h3>今日秒杀 <b>13：18：10</b></h3><span>更多></span>  </div>
        <div>
            <ul CLASS="mishao-ul">
                <li><a href="#"><img src="../assets/index_headimg/p1.jpg" alt=""/>
                <div>
                    <p><span>月胜百合</span>锦州索尔邦-B-10...头-微开</p>
                    <b>登录后看价格</b>
                </div>
                </a></li>
                <li><a href="#"><img src="../assets/index_headimg/p2.jpg" alt=""/>
                    <div>
                        <p><span>庆宝花卉</span>云南粉色相思梅-0.6kg/扎</p>
                        <b>登录后看价格</b>
                    </div>
                </a></li>
                <li><a href="#"><img src="../assets/index_headimg/p3.jpg" alt=""/>
                    <div>
                        <p><span>爱伍玫瑰</span>云南卡罗拉C-20枝/扎</p>
                        <b class='b3'>登录后看价格</b>
                    </div>
                </a></li>
                <li><a href="#"><img src="../assets/index_headimg/p4.jpg" alt=""/>
                    <div>
                        <p><span>国兰草花</span>云南粉色龙胆A-0.8kg/扎</p>
                        <b>登录后看价格</b>
                    </div>
                </a></li>
                <li><a href="#"><img src="../assets/index_headimg/p5.jpg" alt=""/>
                    <div>
                        <p><span>谷庆花卉</span>云南多头玫瑰...枝/扎-多头</p>
                        <b>登录后看价格</b>
                    </div>
                </a></li>
                <li><a href="#"><img src="../assets/index_headimg/p6.jpg" alt=""/>
                    <div>
                        <p><span>刘静花卉</span>云南洪福B-20枝/扎-单头-生</p>
                        <b>登录后看价格</b>
                    </div>
                </a></li>

            </ul>
        </div>
    </div>
</div>    
    </template>
    <style scoped>
        a{
            text-decoration: none;
            color:#000;
        }
    
        ul li{
            list-style: none;
        }
        
        .Notice ul{
            padding: 0;
            display: flex;
            flex-direction:  row;
            justify-content:space-around;
        }
        .Notice ul li{
            display: block;
            width: 33%;
            height: 40px;
            text-align: center;
            line-height: 40px;


        }
        .gonggao{
            height: 60px;
            text-align: center;
            line-height: 60px;
        }

        .gonggao span{
            color:darkred;
            background: palevioletred;
            padding: 5px 8px;
            border-radius: 5px;
        }
        .gonggao a{
            margin-left: 15px;
            text-decoration: none;

        }
        .menu{
            width: 100%;

            margin-top: 50px;
            text-align: center;
            margin-bottom: 50px;
        }
        .menu ul{
            padding: 0;
            width: 100%;

            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-between  ;

        }
        .menu ul li{
            display: block;
           
            margin: 10px 0 10px 0;
             flex-basis:30%;
        }

        .menu ul li img{
            width:100%;
            height: 100%

        }

        .qg{
            margin: 50px 0 50px 0;
        }
        .qg  img{
            width: 100%;
            height:150px ;
        }
        .miaosha{
            width: 100%;
            margin-bottom:90px;
        }
        .miaosha h3{
            display: inline-block;
           margin: 0;
            padding: 0;
        }
        .miaosha h3 b{
            font-size: 16px;
        }
        .miaosha div h3+span{
            float: right;
        }
        .mishao-ul{
            padding: 0;
            width: 100%;
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content: space-between  ;
        }
        .miaosha div ul li{
            display: inline-block;
             flex-basis:30%;
            text-align: center;
            margin: 10px 0 10px 0 ;
        }
        .miaosha div ul li img{
            width: 100%;
            
            border-radius: 5px;
        }
         .miaosha div ul li a span{
             font-size:8px;
             border:1px solid #a99666;
             border-radius:5%;
             color:#a99666;
         }    
        .miaosha div ul li p{
            font-size:14px;
        }
        .miaosha div ul li a div b{
            color:#e22529;
            font-size:15px;
            font-weight: 500;
        }
        
    </style>
