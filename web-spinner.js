/*
	web spinner by FoolRobot copyright 2017
	MIT licence
 */

class webSpinner{

	constructor(option){
		var {
			parent,
			show
		} = option
		if(typeof parent === 'string'){
			parent = document.querySelector(parent);
		}
		var pos = parent.getBoundingClientRect();
		var height = pos.height;
		var width = pos.width;
		if(height > width) height = width;
		else if(height < width) width = height;
		var left = pos.width - width;
		var top = pos.height - height;
		left = left === 0 ? '' : 'left:' + Math. round(left/2) + 'px;';
		top = top === 0 ? '' : 'top:' + Math. round(top/2) + 'px;';
		parent.innerHTML = '<div class="web-spinner-loader" style="width:' + width + 'px;height:' +  height + 'px;' + left + top + '"><div class="web-spinner-spin"></div><div class="web-spinner-spin"></div><div class="web-spinner-spin"></div></div>'
		this.contener = parent.firstChild;
		if(show === true){
			this.count = 0;
			this.show();
		}else{
			this.count = 0;
			this.hide();
			}
	}

	show(){
		this.count++;
		if(this.count === 1){
			this.contener.style.display = '';
		}
	}

	hide(){
		this.count--;
		if(this.count < 1){
			this.contener.style.display = 'none';
			if(this.count < 0) this.count = 0;
		}
	}
}