  // 匀速动画 盒子当前位置 + 固定值移动
        //  缓动动画  盒子当前位置 + 变化的值（（目标值-当前位置）/10）
        //  动画封装   obj 目标对象 target 目标位置 
        function animate(obj,target,callback) {
            // 让元素只有一个定时器执行，不然会出bug 需要清除多余定时器只留一个
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                // 步长值写在定时器里边
                // 步长值需取整数，不然会有位置差值问题
                var step = (target - obj.offsetLeft) / 10;
               step= step > 0 ? Math.ceil(step) : Math.floor(step); 
    if(obj.offsetLeft == target) {
        // 停止定时器
        clearInterval(obj.timer);
        // 回调函数callback位置
        if(callback){
            callback();
        }
        // 第二种写法
        // 短路运算，&&要求左右结果都为true时才执行
        
        // callback && callback();


    }
    // 把每次移动的步长值慢慢变小 步长公式：（目标值-当前位置）/10
    obj.style.left = obj.offsetLeft+ step +"px";
},15);
        }