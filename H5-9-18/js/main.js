var game = {
	data:null,
	RN:4,
	CN:4,
	state:0,
	PLAYING:2,
	RUNNING:1,
	GAMEOVER:0,
	score:0,
	start:function(){
		this.state = this.RUNNING;
		//
		this.data = [];
		for (row = 0;row<this.RN;row++) {
			this.data[row] = [];
			for (col = 0;col<this.CN;col++) {
				this.data[row][col] = 0;
			}
		}
		this.score = 0;
		
		var div = document.getElementById("btns");
		div.style.display = "none";
		//
		this.randomNum();
		this.randomNum();
		//
		this.updataView();
	},
	
	isfull:function(){
		for (row = 0;row<this.RN;row++) {
			for (col = 0;col<this.CN;col++) {
				if(this.data[row][col] == 0){
					return false;
				}	
			}
		}
		return true;
	},
	
	randomNum:function(){
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
	
	updataView:function() {
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
		var span = document.getElementById("score");
		span.innerHTML = this.score;
		if (this.isGAMEOVER()) {
			this.state = this.GAMEOVER;
			var div = document.getElementById("btns");
			div.style.display = "block";	
		}
	},
	isGAMEOVER:function(){
		if (this.isfull()) {
			for(row = 0;row<this.RN;row++){
				for (col=0;col<this.CN;col++) {
					if (this.data[row][col] == this.data[row][row+1]) {
						return false;
					}else if(this.data[row][col] == this.data[row+1][col]){
						return false;
					}
				}
			}
			this.state = this.GAMEOVER;
			return true;
		}else{
			return false;
		}
	},
	moveLeft:function () {
		var beforString = this.data.toString();
		for (row = 0;row<this.RN;row++) {
			for (col = 0;col<this.RN;col++) {
				this.nextRightNum(row,col);
			}
		}
		var afterString = this.data.toString();
		if (beforString != afterString) {
			this.randomNum();
			this.isGAMEOVER();
			this.updataView();
		}
	},
	
	moveUp:function () {
		var beforString = this.data.toString();
		for (row = 0;row<this.RN;row++) {
			for (col = 0;col<this.RN;col++) {
				this.nextRightNum(row,col);
			}
		}
		var afterString = this.data.toString();
		if (beforString != afterString) {
			this.randomNum();
			this.isGAMEOVER();
			this.updataView();
		}
	},
	
	nextRightNum:function(r,c) {
		for (next=c+1;next<this.RN;next++) {
			if (this.data[r][next]!=0) {
				if (this.data[r][c] == this.data[r][next]) {
					this.data[r][c]*=2;
					this.data[r][next]=0;
					this.score += this.data[r][c];
					c++;
				}else if(this.data[r][c] == 0){
					this.data[r][c] = this.data[r][next];
					this.data[r][next] = 0;
				}else{
					break;
				}
			}
		}
	}
}
window.onload = function () {
	game.start();
	
	document.onkeydown = function() {
		if (game.state != game.PLAYING) {
			var event=window.event||arguments[0];
			if (game.state == game.RUNNING) {
				if (event.keyCode == 37) {
					game.moveLeft();
					console.log(1);
				}else if (event.keyCode == 38) {
					game.moveUp();
					console.log(2);
				}
			}else{
				
			}
		}
	}
}