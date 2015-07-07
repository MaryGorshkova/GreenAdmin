

window.addEventListener('resize', Show, true);
document.onLoad = GetReady();

var columnsCount;
var firstMonth;
var lastMonth;
var month_dictionary;

function GetReady(){
	columnsCount = 0;
	firstMonth = 2;
	lastMonth = 3;
	Show();
}

function SetMonth(){
	month_dictionary = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	var atScreenQty = 2 + columnsCount;

	for (var i = firstMonth; i <= lastMonth; i++) {
		var cap = document.getElementById('month_' + i);
		t = cap.childNodes[1].childNodes[1].childNodes[0].lastElementChild;
		t.innerText = month_dictionary[i] + " 2015";
	};

}

function Show(){	

	while ((window.innerWidth-1150 - (170*columnsCount)) > 170){
		columnsCount = columnsCount + 1;
		newColumn();
	}
	if (window.innerWidth < (1150 + (170 * columnsCount))) {
		RemoveColumns();
	};

	SetHeight();

	SetMonth();
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

	//captions
	var sample = document.getElementsByClassName("big1");
	sample = sample[0];
	var newDiv = sample.cloneNode(true);
	newDiv.id = "month_" + (parseInt(lastMonth) +1);
	// var t = newDiv.childNodes[1].childNodes[1].childNodes[0].lastElementChild;
	// t.innerText = "Май 2015";
	var caption = document.getElementById('row01');
	caption.insertBefore(newDiv, caption.childNodes[findChild(caption)]);
	lastMonth = parseInt(lastMonth) + 1;


	//data column
	var sample = document.getElementById("parent03");
	var newElem = sample.cloneNode(true);
	newElem.id = "parent03_new";
	var row02 = document.getElementById("data");
	row02.insertBefore(newElem, row02.childNodes[4]);

	//pages
	var pages = document.getElementById("pages");
	pages.style.width = (1068 + (170 * columnsCount)).toString() + "px";
	pages.innerHTML = innerHTMLtext();
}

function innerHTMLtext(){
	return '<em>←</em>' +
						'<span>01-02<div class="line"></div></span><span class="space"></span>' +
						'<span class="selected">03-05<div class="line"></div></span><span class="space"></span>' +
						'<span>06-08<div class="line"></div></span><span class="space"></span>' +
						'<span>9-11<div class="line"></div></span><span class="space"></span>' +
						'<span>12<div class="line"></div></span><span class="space"></span>' +
						'<em>→</em>';
}

function findChild(caption){
	for (var i = 0; i <= caption.childNodes.length; i++) {
		if (caption.childNodes[parseInt(i)].nextSibling.id == "cell09_caption"){
			return i;
		};
	};
}

function RemoveColumns(){
	var w = window.innerWidth;
	var wcount = 1150 + 170 * columnsCount;

	while (w < (1150 + 170 * columnsCount) && w > 1150){
		columnsCount = columnsCount -1;
		var cont = document.getElementById("content");
		cont.style.width = (1068 + (170 * columnsCount)).toString() + "px";

		var sample = document.getElementById("month_" + lastMonth);
		var caption = document.getElementById('row01');
		caption.removeChild(sample);
		lastMonth = parseInt(lastMonth) - 1;

		var col = document.getElementById("parent03_new");
		var data = document.getElementById("data");
		data.removeChild(col);

		var pages = document.getElementById("pages");
		pages.style.width = (1068 + (170 * columnsCount)).toString() + "px";
	}
}


//------------navigation buttons-------------

function moveLeft(){
	
	if (firstMonth == 0){
		return;
	};

	for (var i = lastMonth; i >= firstMonth; i--) {
		var element = document.getElementById("month_" + i);
		element.id = "month_" + (parseInt(i) - 1);
	};

	firstMonth = parseInt(firstMonth) - 1;
	lastMonth = parseInt(lastMonth) - 1;

	SetMonth();
}

function moveRight(){
	
	if (lastMonth == 11){
		return;
	};

	for (var i = lastMonth; i >= firstMonth; i--) {
		var element = document.getElementById("month_" + i);
		element.id = "month_" + (parseInt(i) + 1);
	};

	firstMonth = parseInt(firstMonth) + 1;
	lastMonth = parseInt(lastMonth) + 1;

	SetMonth();
}

function overLeft(){
	if (firstMonth == 0) {
		return;
	};

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
	if (lastMonth == 11){
		return;
	}

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