window.onload = function () {
    // 轮播图
    var img = document.querySelector(".content img");
    var timer = null;
    var num = 12;
    img.src = "img/"+num + ".jpg";
    dealImg()
    var content = document.querySelector(".content");
    content.addEventListener("mouseenter", function () {
        clearInterval(timer)
    });
    content.addEventListener("mouseleave", function () {
        dealImg();
    });
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    // 左点击
    left.addEventListener("click", function () {
        num--;
        if (num == 11) {
            num = 16
        }
        dealNum()
        img.src = "img/"+num + ".jpg"
    })
    // 右点击
    right.addEventListener("click", function () {
        num++;
        if (num == 17) {
            num = 12
        }
        dealNum()
        img.src = "img/"+num + ".jpg"
    })
    // 按钮点击
    var clickBtn = document.querySelectorAll(".clickBtn");
    clickBtn.forEach(function (item, index) {
        item.addEventListener("click", function () {
            num = index + 12;
            img.src = "img/"+num + ".jpg"
            for (let i = 0; i < clickBtn.length; i++) {
                if (clickBtn[i].classList.contains("item")) {
                    clickBtn[i].classList.remove("item")
                }
            }
            item.classList.add("item");

        })
    })
    function dealImg() {
        timer = setInterval(function () {
            num++
            if (num == 17) {
                num = 12
            }
            dealNum()
            img.src = "img/"+num + ".jpg"
        }, 3000)
    }
    function dealNum() {
        for(let i=0;i<clickBtn.length;i++){
            if(clickBtn[i].classList.contains("item")){
                clickBtn[i].classList.remove("item")
            }
            var a=num-12
            clickBtn[a].classList.add("item")
        }
        // clickBtn.forEach(function (item,index) {
        //     var a = num - 12
        //     if (clickBtn[index].classList.contains("item")) {
        //         clickBtn[index].classList.remove("item")
        //         }
        //     clickBtn[a].classList.add("item");
        // })
    }
    // 倒计时
    setInterval(function () {
        var dayTime = document.querySelector(".day");
        var houseTime = document.querySelector(".house");
        var minutesTime = document.querySelector(".minutes");
        var today = new Date();
        var time1 = today.getTime();
        var setToday = new Date("2020,10,1")
        var time2 = setToday.getTime();
        var time = time2 - time1;
        var day = Math.floor(time / (1000 * 60 * 60 * 24))
        var house = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(time % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(time % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
        if (day < 10) {
            day = "0" + day
        }
        if (house < 10) {
            house = "0" + house
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        dayTime.innerHTML = day;
        houseTime.innerHTML = house;
        minutesTime.innerHTML = minutes;
    }, 1000)
    var items = document.querySelectorAll(".swiper-product div");
    var itemList = document.querySelector(".swiper-product");
    var len = items.length / 4;
    var itemIndex = 0; 
    var timers=null
    dealanimal()
    var xiaomi=document.querySelector(".xiaomi");
    xiaomi.addEventListener("mouseenter", function () {
        clearInterval(timers)
    });
    xiaomi.addEventListener("mouseleave", function () {
        dealanimal();
    });
    function dealanimal(){
        timers=setInterval(function () {
                var movelen = 0; 
                itemIndex++;
                if (itemIndex == len) {
                    movelen = 0;
                    itemIndex = 0;
                } else {
                    movelen = itemIndex * 978;
                }
                itemList.style.cssText = "transform: translateX(-" + movelen + "px); transition-duration:1000ms;";
            }, 2000);
    }
    // 左点击
    var leftClick=document.querySelector(".xiaomi i:nth-child(1)");
   
    leftClick.addEventListener("click",function(e){
        e.preventDefault();
        itemIndex--;
        if(itemIndex==-1){
            itemIndex=len-1
        }
        movelen = itemIndex * 978;
        itemList.style.cssText = "transform: translateX(-" + movelen + "px); transition-duration:1000ms;";
    })
    // 右点击
    var rightClick=document.querySelector(".xiaomi i:nth-child(2)");
    rightClick.addEventListener("click",function(e){
        e.preventDefault();
        itemIndex++;console.log()
        if(itemIndex==len){
            itemIndex=0
        }
        movelen = itemIndex * 978;
        itemList.style.cssText = "transform: translateX(-" + movelen + "px); transition-duration:1000ms;";
    })
}