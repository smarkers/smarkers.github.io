var game = {
 	data:null,//二维数组，存储每个格子的数字
	RN:4,
	CN:4,
	state:0,
	RUNNING:1,
	GAMEOVER:0,
	score:0,
	start:function(){
		this.state=this.RUNNING;//设置游戏状态
		//初始化
		this.data = [];
		for (row = 0;row<this.RN;row++) {
			this.data[row] = [];
			for (col = 0;col<this.CN;col++) {
				this.data[row][col] = 0;
			}
		}
		this.score = 0;
		//产生一个随机数
		this.randomNum();
		//刷新页面
		this.updataView();
		
	},
	randomNum:function() {
		if (!this.isfull()) {
			while (true){
				var row = parseInt(Math.random()*(this.RN));
				var col = parseInt(Math.random()*(this.CN));
				if (this.data[row][col] == 0) {
					this.data[row][col] = Math.random()>0.9?4:2;
					break;
				}
			}
			
		}
	},
	isfull:function() {
		for (row = 0;row<this.RN;row++) {
			for (col = 0;col<this.CN;col++) {
				if(this.data[row][col] == 0){
					return false;
				}	
			}
		}
		return true;
	},
	updataView:function(){
		for (row = 0;row<this.RN;row++) {
			for (col = 0;col<this.CN;col++) {
				var num = document.getElementById("c"+row+col);
				if(this.data[row][col] != 0){
					num.innerHTML = this.data[row][col];
					num.className = "cell n"+this.data[row][col];
				}else{
					num.innerHTML = " ";
					num.className = "cell"
				}
			}
		}
		
	}
	
}
game.start();
