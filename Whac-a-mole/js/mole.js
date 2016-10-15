document.onselectstart = function() {
	return false;
}

window.onload = function() {
	// judge whether the game is running
	var flag = false;
	// count the time
	var t;
	// put the time into screen
	var x;
	// the list of 'li'
	var lists = document.getElementsByTagName('li');

	document.getElementById('start-stop').onclick = function() {
		if (!flag) {
			flag = true;
			x = 30;
			timedCount();
			begin();
			document.getElementById('gains').value = 0;
			document.getElementById('condition').value = "The game is running";
		} else {
			flag = false;
			x = -1;
			for (var i = 0; i < lists.length; i++) {
				lists[i].value = 0;
				lists[i].style.backgroundColor = "white";
			}
		}
	}

	function begin() {
		moleout();
		for (var i = 0; i < lists.length; i++) {
			lists[i].onclick = function(event) {
				var temp = event.target;
				if (temp.value == "1") {
					temp.style.backgroundColor = "white";
					moleout();
					document.getElementById('gains').value = eval(document.getElementById('gains').value) + 1;
				} else {
					if (x >= 0)
						document.getElementById('gains').value = eval(document.getElementById('gains').value) - 1;
				}
			}
		}
	}

	function moleout() {
		var temp = parseInt(Math.random() * 60);
		lists[temp].style.backgroundColor = "red";
		lists[temp].value = "1";
	}

	function timedCount() {
		if (flag && x >= 0) {
			document.getElementById('recorder').value = x;
			x = x - 1;
			t = setTimeout(timedCount, 1000);
		} else if (x = -1) {
			document.getElementById('condition').value = "Game over";
			document.getElementById('recorder').value = "";
			flag = false;
			alert("Game is over!\nYour score is " + document.getElementById('gains').value);
			for (var i = 0; i < lists.length; i++) {
				lists[i].value = 0;
				lists[i].style.backgroundColor = "white";
			}
		}
	}
}
