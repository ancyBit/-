// 原图
var small=document.querySelector(".product-left");
// 大图
var big=document.querySelector(".right-img");
// 遮罩
var shade=document.querySelector(".shade");
// 控制显示与隐藏
small.addEventListener("mouseover",function(){
    big.style.display="block"
    shade.style.display="block"

})
small.addEventListener("mouseout",function(){
    big.style.display="none"
    shade.style.display="none"
})
var topContent=document.querySelector(".top-content");
var navigation=document.querySelector(".navigation");
var productHead=document.querySelector(".product-head");
small.addEventListener("mousemove",function(e){   
    var x=e.clientX-159.6;
    var y=e.clientY+32-topContent.offsetHeight-navigation.offsetHeight-productHead.offsetHeight;
    x=x-shade.offsetWidth/2
    y=y-shade.offsetHeight/2
    x=x<0?0:x
    x=x>small.offsetWidth-shade.offsetWidth?small.offsetWidth-shade.offsetWidth:x
    y=y<0?0:y
    y=y>small.offsetHeight-shade.offsetHeight?small.offsetHeight-shade.offsetHeight:y
    shade.style.top=y+"px";
    shade.style.left=x+"px"    
    // 遮挡层的移动距离/大图的移动距离=遮挡层最大的移动距离/大图最大的移动距离
    // 遮挡层的最大移动距离
    var a=small.offsetWidth-shade.offsetWidth;
    console.log(a)
    // 大图横向最大的移动距离
    var bigImg=document.querySelector(".right-img img");
    var moveX=bigImg.offsetWidth-big.offsetWidth;
    // 大图纵向最大的移动距离
    var moveY=bigImg.offsetHeight-big.offsetHeight;
    // 大图的移动距离
    var bigMovex=x*moveX/(small.offsetWidth-shade.offsetWidth);
    var bigMovey=y*moveY/(small.offsetHeight-shade.offsetHeight);
    
    bigImg.style.marginLeft=-bigMovex+"px"
    bigImg.style.marginTop=-bigMovey+"px"

})
var versions=document.querySelectorAll(".versions div")
versions.forEach(function(item,index){
   item.addEventListener("click",function(){
    for(let i=0;i<versions.length;i++){
        if(versions[i].classList.contains("add")){
            versions[i].classList.remove("add")
        }
        versions[index].classList.add("add")
    }
   })
})

