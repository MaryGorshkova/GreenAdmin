
// window.onresize = Show();
// window.addEventListener('resize', Show, true);
document.onLoad = Show();

function Show(){
	if ((window.innerWidth-1150) > 170){
		newColumn();
	}
}

function newColumn(){
	var cont = document.getElementById("content");
	//alert(cont.offsetWidth);
	cont.style.width = "1238px";

	var sample = document.getElementById("month_caption");
	var newDiv = sample.cloneNode(true);
	var t = newDiv.childNodes[1].childNodes[1].childNodes[0].lastElementChild;
	t.innerText = "Май 2015";
	var caption = document.getElementById('row01');
	caption.insertBefore(newDiv, caption.childNodes[13]);

	var sample = document.getElementById("parent03");
	var newElem = sample.cloneNode(true);
	var row02 = document.getElementById("data");
	row02.insertBefore(newElem, row02.childNodes[4]);

}