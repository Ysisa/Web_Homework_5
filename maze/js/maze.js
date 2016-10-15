document.onselectstart = function() {
	return false;
}

window.onload = function() {
	var flag = 0;
	var judge = 0;

	document.getElementById('start').onmouseover = function() {
		if (!flag) {
			flag = 1;
		}
	}

	document.getElementById('topblock').onmouseover = function() {
		if (flag) {
			document.getElementById('topblock').style.backgroundColor = "red";
			flag = 0;
			alert("Gameover!");
		}
	}

	document.getElementById('topblock').onmouseout = function() {
		document.getElementById('topblock').style.backgroundColor = "#EEEEEE";
	}

	document.getElementById('middle-left').onmouseover = function() {
		if (flag) {
			document.getElementById('middle-left').style.backgroundColor = "red";
			flag = 0;
			alert("Gameover!");
		}
	}

	document.getElementById('middle-left').onmouseout = function() {
		document.getElementById('middle-left').style.backgroundColor = "#EEEEEE";
	}

	document.getElementById('middle-bottom').onmouseover = function() {
		if (flag) {
			document.getElementById('middle-bottom').style.backgroundColor = "red";
			flag = 0;
			alert("Gameover!");
		}
	}

	document.getElementById('middle-bottom').onmouseout = function() {
		document.getElementById('middle-bottom').style.backgroundColor = "#EEEEEE";
	}

	document.getElementById('middle-right').onmouseover = function() {
		if (flag) {
			document.getElementById('middle-right').style.backgroundColor = "red";
			flag = 0;
			alert("Gameover!");
		}
	}

	document.getElementById('middle-right').onmouseout = function() {
		document.getElementById('middle-right').style.backgroundColor = "#EEEEEE";
	}

	document.getElementById('bottom').onmouseover = function() {
		if (flag) {
			document.getElementById('bottom').style.backgroundColor = "red";
			flag = 0;
			alert("Gameover!");
		}
	}

	document.getElementById('bottom').onmouseout = function() {
		document.getElementById('bottom').style.backgroundColor = "#EEEEEE";
	}

	document.getElementById('five').onmouseover = function() {
		judge = 1;
	}

	document.getElementById('end').onmouseover = function() {
		if (judge && flag) {
			flag = 0;
			judge = 0;
			alert("You win~");
		} else if (judge == 0 && flag) {
			alert("Please don't cheat.");
			//document.getElementById('cheat').className = 'appear';
			flag = 0;
		}
	}
}
