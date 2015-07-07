
// window.onresize = Show();
window.addEventListener('resize', Show, true);
document.onLoad = GetReady();

var columnsCount;
var firstMonth = 0;

function GetReady(){
	columnsCount = 0;
	firstMonth = 3;
	//SetMonth();
	Show();
}

function Show(){
	if ((window.innerWidth-1150 - (170*columnsCount)) > 170){
		columnsCount = columnsCount + 1;
		newColumn();
	}
	if (window.innerWidth < (1150 + (170 * columnsCount))) {
		RemoveColumns();
	};

	SetHeight();
}

function SetHeight(){
	if (window.innerHeight > 600){
		var h = window.innerHeight - 350;	
		var data = document.getElementById('data');
		data.style.height = h.toString() + "px";
	}
	else{
		var body = document.getElementById('body');
		body.style.overflowY = "scroll";
	}
}

function newColumn(){
	var cont = document.getElementById("content");
	cont.style.width = (1068 + (170 * columnsCount)).toString() + "px";

	var sample = document.getElementById("month_caption");
	var newDiv = sample.cloneNode(true);
	newDiv.id = "new_month";
	var t = newDiv.childNodes[1].childNodes[1].childNodes[0].lastElementChild;
	t.innerText = "Май 2015";
	var caption = document.getElementById('row01');
	caption.insertBefore(newDiv, caption.childNodes[13]);

	var sample = document.getElementById("parent03");
	var newElem = sample.cloneNode(true);
	newElem.id = "parent03_new";
	var row02 = document.getElementById("data");
	row02.insertBefore(newElem, row02.childNodes[4]);

	var pages = document.getElementById("pages");
	pages.style.width = (1068 + (170 * columnsCount)).toString() + "px";
	pages.innerHTML = '<em>←</em>' +
						'<span>01-02<div class="line"></div></span><span class="space"></span>' +
						'<span class="selected">03-05<div class="line"></div></span><span class="space"></span>' +
						'<span>06-08<div class="line"></div></span><span class="space"></span>' +
						'<span>9-11<div class="line"></div></span><span class="space"></span>' +
						'<span>12<div class="line"></div></span><span class="space"></span>' +
						'<em>→</em>';
}

function RemoveColumns(){
	var w = window.innerWidth;
	var wcount = 1150 + 170 * columnsCount;

	while (w < (1150 + 170 * columnsCount) && w > 1150){
		columnsCount = columnsCount -1;
		var cont = document.getElementById("content");
		cont.style.width = (1068 + (170 * columnsCount)).toString() + "px";

		var sample = document.getElementById("new_month");
		var caption = document.getElementById('row01');
		caption.removeChild(sample);

		var col = document.getElementById("parent03_new");
		var data = document.getElementById("data");
		data.removeChild(col);

		var pages = document.getElementById("pages");
		pages.style.width = (1068 + (170 * columnsCount)).toString() + "px";
	}
}


//------------navigation buttons-------------


function overLeft(){
	var divArr = document.getElementsByClassName("action_left");
	for (item in divArr){
		var n = divArr[item];

		if (n.className=="action_left green"){
			n.className = "action_left green_activated";
		}
		else{
			n.className = "action_left activated";
		}		
	}

	var row2Amount = document.getElementsByClassName("action_left green");
	row2Amount.className = "action_left green_activated";

	var arrow = document.getElementById("left_arrow");
	arrow.className = "activated_left";
}

function outLeft(){
	var divArr = document.getElementsByClassName("action_left");
	for (item in divArr){
		var n = divArr[item];

		if (n.className=="action_left green_activated"){
			n.className = "action_left green";
		}
		else{
			n.className = "action_left";
		}		
	}

	var arrow = document.getElementById("left_arrow");
	arrow.className = "";
}

function overRight(){
	var divArr = document.getElementsByClassName("action_right");
	for (item in divArr){
		var n = divArr[item];

		if (n.className=="action_right green"){
			n.className = "action_right green_activated";
		}
		else{
			n.className = "action_right activated";
		}		
	}

	var row2Amount = document.getElementsByClassName("action_right green");
	row2Amount.className = "action_right green_activated";

	var arrow = document.getElementById("right_arrow");
	arrow.className = "activated_right";
}

function outRight(){
	var divArr = document.getElementsByClassName("action_right");
	for (item in divArr){
		var n = divArr[item];

		if (n.className=="action_right green_activated"){
			n.className = "action_right green";
		}
		else{
			n.className = "action_right";
		}		
	}

	var arrow = document.getElementById("right_arrow");
	arrow.className = "";
}


//-----------------input-----------------

function onFocus(element){
	element.className = "focused";
}

function onBlur(element){
	element.className = "";
}