window.addEventListener("load",function() {
    // 获取元素
    var arrowl = document.querySelector (".arrow-1");
    var arrowr = document.querySelector (".arrow-2");
    var lunbotu = document.querySelector(".lunbotu");
    var lunbotuWidth=lunbotu.clientWidth;
    // 鼠标经过左右按钮显示/隐藏
    // lunbotu.addEventListener("mouseenter",function(){
    //     arrowl.sytle.display = "block";
    //     arrowr.sytle.display = "block";
    // })
    // lunbotu.addEventListener("mouseleave",function(){
    //     arrowl.sytle.display = "none";
    //     arrowr.sytle.display = "none";
    // })
    // 右侧按钮点击事件
    var ul = lunbotu.querySelector('ul');
    var ol = lunbotu.querySelector('.crl');
    // console.log(ul.children.length);
    for (var i = 0; i<ul.children.length; i++){
        var li = document.createElement('li');
        // 记录当前小圆圈索引号，自定义属性做
        li.setAttribute('index',i);
        // li插进ol中
        ol.appendChild(li);
        // 给小圆圈绑定点击事件
        li.addEventListener('click',function(){
            // 先把所有li的current类名清除
            for (var i = 0;i<ol.children.length; i++){
                ol.children[i].className='';
            }
            // 给当前li添加current类名
            this.className = 'current';
            // 点击小圆，图片移动，核心移动ul
            // 点击小圆圈，拿到当前小圆圈索引号
            var index = this.getAttribute('index');
            // 索引值 同步num
            num = index;
            // 索引值 同步cle
            cle=index;
            
         
           console.log(lunbotuWidth);
           console.log(index);
            animate(ul,-index*lunbotuWidth);
        })
    }
    // 把ol第一个li设置为类名 current
    ol.children[0].className = 'current';
    // 克隆第一张图片 放在最后边
    var one =ul.children[0].cloneNode(true);
    ul.appendChild(one);
    //  点击按钮 图片滚动
    var num = 0;
    // cle控制小圆圈的播放
    var cle = 0;
    // 设置节流阀 flag
    var flag = true;
    arrowr.addEventListener("click",function(){

        if(flag) {
            // 关闭节流阀
            flag= false;
            // 走到克隆图片后 需要ul快速复原 让left值变为零
        if(num==ul.children.length-1){
            ul.style.left = 0;
            num = 0;

        }
       num++;
       animate(ul, -num*lunbotuWidth,function(){
        //    通过回调函数打开节流阀
           flag=true;
       });
    //    绑定按钮与小圆圈 同变化
    cle++;
    // 走到最后一张图片，cle值归零
    if(cle==ol.children.length) {
        cle = 0;
    }
    // 清除其他圆类名
      for(var i=0;i< ol.children.length;i++){
          ol.children[i].className = "";

      }
    // 当前圆类名定义
    ol.children[cle].className = 'current';

        }
    });

    //  左侧按钮设置
    arrowl.addEventListener("click",function(){
        // 左侧节流阀
       if(flag) {
           flag =false;
            // 走到克隆图片后 需要ul快速复原 让left值变为零
        if(num==0){
            num = ul.children.length-1;
            ul.style.left = -num * lunbotuWidth + 'px';
           

        }
       num--;
       animate(ul, -num*lunbotuWidth,function(){
        // 回调函数打开节流阀
           flag=true;
       });
    //    绑定按钮与小圆圈 同变化
    cle--;
    // cle<0，cle值变为图片最后一个索引值 0，1,2,3,4,
    if(cle < 0) {
        cle = ol.children.length-1;
    }
    // cle=cle>0 ? ol.children.length-1:cle;

      // 清除其他圆类名
      for(var i=0;i< ol.children.length;i++){
        ol.children[i].className = "";

    }
  // 当前圆类名定义
  ol.children[cle].className = 'current';
       }

  });
//   自动轮播 定时器
  var timer =  setInterval(function(){
    //   手动调用click事件
    arrowr.click();
  },2000);  
//   鼠标悬停关闭定时器
lunbotu.addEventListener("mouseenter",function(){
        clearInterval(timer);
        // 清除定时器变量
        timer = null;
    })
    // 鼠标离开重启定时器
    lunbotu.addEventListener("mouseleave",function(){
        timer =  setInterval(function(){
            //   手动调用click事件
            arrowr.click();
          },2000); 
        })

})


   
