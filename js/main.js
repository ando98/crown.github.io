function get (id) {
	return document.getElementById(id);
}
get("contentWrapper").onmouseover = function () {
	get("wrapperText").className = "content-wrapper-text-hover"
}
get("contentWrapper").onmouseout = function () {
	get("wrapperText").className = "content-wrapper-text"
}
var img = ["img/slide1.jpg","img/slide2.jpg","img/slide3.jpg","img/slide4.jpg","img/slide5.jpg","img/slide6.jpg","img/slide7.jpg","img/slide8.jpg","img/slide9.jpg","img/slide10.jpg","img/slide11.jpg","img/slide12.jpg","img/slide13.jpg","img/slide14.jpg","img/slide15.jpg","img/slide16.jpg","img/slide17.jpg","img/slide18.jpg","img/slide19.jpg","img/slide20.jpg","img/slide21.jpg","img/slide22.jpg","img/slide23.jpg","img/slide24.jpg"],
	text = ["ԱԿՑԻԱ 30.000 դրամ (վարձույթ)","ԱԿՑԻԱ 40.000 դրամ (վարձույթ)","ԱԿՑԻԱ 50.000 դրամ (վարձույթ)"],
	x = 0,
	y = 0,
	itemImg = document.getElementsByClassName("item-content");

function slide () {
	if((x >= 0 && x <= 2) || (x >= 5 && x <= 11) || (x >= 14 && x <= 15) || x == 21)
		y = 0;
	if((x >= 3 && x <= 4) || (x >= 12 && x <= 13) || (x >= 22 && x <= 23))
		y = 1;
	if(x >= 16 && x <= 20)
		y = 2;
}

itemImg[0].onmouseover = function () {
	itemImg[0].className = "item-content item-content-hover item-1"
}
itemImg[0].onmouseout = function () {
	itemImg[0].className = "item-content n-hover item-1"
}
itemImg[0].onmouseup = function () {
	x = 22;
	slide();
	get("photo").style.backgroundImage = "url("+ img[x] +")";
	get("price").innerHTML = text[y];
}
itemImg[1].onmouseover = function () {
	itemImg[1].className = "item-content item-content-hover item-2"
}
itemImg[1].onmouseout = function () {
	itemImg[1].className = "item-content n-hover item-2"
}
itemImg[1].onmouseup = function () {
	x = 16;
	slide();
	get("photo").style.backgroundImage = "url("+ img[x] +")";
	get("price").innerHTML = text[y];
}
itemImg[2].onmouseover = function () {
	itemImg[2].className = "item-content item-content-hover item-3"
}
itemImg[2].onmouseout = function () {
	itemImg[2].className = "item-content n-hover item-3"
}
itemImg[2].onmouseup = function () {
	x = 9;
	slide();
	get("photo").style.backgroundImage = "url("+ img[x] +")";
	get("price").innerHTML = text[y];
}

get("next").onmousedown = function (e) {
	if(e.button == 0) {
		x++;
		
		if(x == 24)
			x = 0;
		
		slide ();

		get("photo").style.backgroundImage = "url("+ img[x] +")";
		get("price").innerHTML = text[y];
	}
}
get("prev").onmouseup = function (e) {
	if(e.button == 0) {
		x--;
		
		if(x == -1)
			x = 23;
		
		slide ();

		get("photo").style.backgroundImage = "url("+ img[x] +")";
		get("price").innerHTML = text[y];
	}
}