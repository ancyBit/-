//全选按钮
var checkAll=document.querySelector(".checkAll")
//分选按钮
var check1=document.querySelectorAll(".check1")
//点击全选
checkAll.addEventListener("change",function(e){
    if(e.target.checked){
        check1.forEach(function(item,index){
			item.checked = true;
			var itemfather=item.parentElement.parentElement;
			 if(!itemfather.classList.contains("counter")){
			 	itemfather.classList.add("counter");
			 }
		})
		singlePrice()
    }
    else{
        check1.forEach(function(item,index){
			item.checked = false;
			var itemfather=item.parentElement.parentElement;
			 if(itemfather.classList.contains("counter")){
			 	itemfather.classList.remove("counter");
			 }
			})
		singlePrice()
    }
})
//点击分选
check1.forEach(function(item,index,arr){
	item.addEventListener("change",function(e){
		var parentItem = item.parentElement.parentElement;
		if(e.target.checked){
			var check1 = true;
			if(!parentItem.classList.contains("counter")){
				parentItem.classList.add("counter");
			} 
			for(let i=0;i<arr.length;i++){
				if(!arr[i].checked){
					check1 = false;
				}
			}
			if(check1){
				checkAll.checked = true;
			}
			singlePrice()
    		} else{ 
				if(parentItem.classList.contains("counter")){
					parentItem.classList.remove("counter");
				}
			checkAll.checked = false;	
			singlePrice()		
		}
	});
});
//商品的种数
function NumberGoods(){
	var total=document.getElementById("total");
	var single=document.querySelectorAll(".single");
	var num = 0;
	single.forEach(function(item,index){
        num=num+parseInt(item.value.trim());
	});
	total.innerText = num;
}
	NumberGoods()
//删除	
var handle=document.querySelectorAll(".handle")
handle.forEach(function(item,index){
	item.addEventListener("click",function(e){
        var judge=confirm("是否确实删除")
        if(judge==true){
            var father=item.parentElement;
			father.remove()
			NumberGoods()
		}
    },false)
})
//商品的个数，与最终的价格计算
function singlePrice(){
	//点击到的所有的每件商品(单选)
	var selGoods = document.querySelectorAll(".counter");	
	//最终的价格
	var totalPrice = document.getElementById("total-price");
	//选了多少件商品
	var zero=document.getElementById("zero");
	//商品的个数
	var selCount = 0;
	//一共的价格
	var selPrice = 0;
	//遍历点击到的商品
	selGoods.forEach(function(item){
		selCount=selCount+parseInt(item.querySelector(".single").value.trim());
		selPrice=selPrice+parseInt(item.querySelector(".subtotal span").innerText.trim());
	})	
	//商品的个数
	zero.innerText=selCount ;
	//一共的价格
	totalPrice.innerText=selPrice.toFixed(2) ;
}
singlePrice()

// 用户点击商品数量的+号
var  numPlus=document.querySelectorAll(".num_plus")//获取加号所在的标签
//遍历加点击事件
numPlus.forEach(function(item){
      item.addEventListener("click",function(e){
	  e.preventDefault();
	  var afather = item.parentElement.parentElement.parentElement;
	  //获取框内原来的值
	  var count=parseInt(afather.querySelector(".single").value.trim());
	  count=count+1
	  afather.querySelector(".single").value=count;
	  //价格变化
	  var goodsPrice=parseFloat(afather.querySelector(".price span").innerText);
	  var totalPrice = goodsPrice * count;
	  //变化的价格赋值
	  afather.querySelector(".subtotal span").innerText = totalPrice.toFixed(2)
	  NumberGoods()
	  singlePrice()
	})
})
//用户点击商品数量的-号
var numMinus=document.querySelectorAll(".num_minus");
numMinus.forEach(function(item){
	item.addEventListener("click",function(e){
		e.preventDefault();
		var afather = item.parentElement.parentElement.parentElement;
		//获取框内原来的值
		var count=parseInt(afather.querySelector(".single").value.trim());
		if(count == 1){
			alert("此商品已经是1了");
			return;
		} else{
			count = count-1;
		}
		afather.querySelector(".single").value=count;
		//价格变化
		var goodsPrice=parseFloat(afather.querySelector(".price span").innerText);
		var totalPrice = goodsPrice * count;
		//变化的价格赋值
		afather.querySelector(".subtotal span").innerText = totalPrice.toFixed(2)
		NumberGoods()
		singlePrice()
	})
})
var single=document.querySelectorAll(".single");
single.forEach(function(item){
	item.addEventListener("blur",function(e){
		let data = e.target.value.trim();
		console.log(data)
		if(isNaN(parseInt(data))){
			alert("请输入数字")
			e.target.value=1
		}
		singlePrice()
	})
	
})