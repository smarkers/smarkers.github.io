onload=function(){
	var form=document.querySelector('#form');
	var aCheck=form.checks;//商品复选框
	checkAll=form.checkAll;//全选
	console.log(checkAll);
	var aAdd=document.querySelectorAll('.add');//+
	var aCut=document.querySelectorAll('.cut');//-
	var aPrice=document.querySelectorAll('.price');//单价
	var aTotal=document.querySelectorAll('.total-spa');//小计
	var aCount=document.querySelectorAll('.count-spa');//数量
	var aDel=document.querySelectorAll('.del-spa');//删除
	var allCount=document.querySelector('.allCount');//总数
	var oList=document.querySelector('.list-car');
	var aLi=document.querySelectorAll('.list-car li');
	var money=document.querySelector('.money');//价钱
	//重新计算总价格和总数
	total();
	//设置点击事件
	for(var i=0;i<aAdd.length;i++){
		(function (i){
			aAdd[i].onclick=function(){
			console.log(i)
		var num=Number(aCount[i].innerHTML)
		aCount[i].innerHTML=++num;
		//计算小计=单价*数量
		aTotal[i].innerHTML=(num*aPrice[i].innerHTML).toFixed(2)
		//重新计算总价格和总数量
		total();
		}
		//点击-
		aCut[i].onclick=function(){
		var num=Number(aCount[i].innerHTML)
		num--;
		if(num<1){num=1}
		aCount[i].innerHTML=num;
		//计算小计=单价*数量
		aTotal[i].innerHTML=(num*aPrice[i].innerHTML).toFixed(2)
		//重新计算价格和数量
		total();
		}
		//点击删除
		aDel[i].onclick=function(){
			oList.removeChild(aLi[i])
			aCheck=form.checks;
			total();
		}
		//商品复选框的点击
		aCheck[i].onclick=function(){
			var checked=document.querySelectorAll("[name=checks]:checked")
			checkAll.checked=checked.length==aCheck.length
			total();
		}
	})(i)
	}
	//全选按钮
	checkAll.onclick=function(){
		for(var i=0;i<aCheck.length;i++){
			aCheck[i].checked=checkAll.checked
		}
		total();
	}
	function total(){
		var sumCount=0;
		var sumMoney=0;
		var checked=document.querySelectorAll("[name=checks]:checked")
		//计算被选中li的小计
		for(var i=0;i<checked.length;i++){
			
			sumCount+= checked[i].parentNode.parentNode.querySelector('.count-spa').innerHTML*1
			sumMoney+= checked[i].parentNode.parentNode.querySelector('.total-spa').innerHTML*1
		}
		allCount.innerHTML=sumCount;
		money.innerHTML=sumMoney;
	}
}