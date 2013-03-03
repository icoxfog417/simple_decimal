var sDec =(function(){
	function sDec(value,asRaw){
		this.value = 0;
		if(!(value === undefined || value == null || value == "")){
			if(!isNaN(value)){
				if(asRaw === undefined){
					this.value = parseFloat(value) * Math.pow(10,sDec.DECIMAL_PART); //multiply by decimal part					
				}else{
					this.value = parseFloat(value);
				}
			}
		}
	}
	
	sDec.DECIMAL_PART = 10;

	sDec.prototype.valueOf = function(){
		return this.value / Math.pow(10,sDec.DECIMAL_PART);
	}
	
	sDec.prototype.toString = function(){
		var val = this.valueOf().toFixed(sDec.DECIMAL_PART).replace(/0+$/,"");
		return val;
	}
	
	sDec.prototype.val = function(){
		 return this.value;
	}

	sDec.prototype.plus = function(value){
		var right = new sDec(value);
		var val = this.val() + right.val();
		return new sDec(val,true);
	}

	sDec.prototype.minus = function(value){
		var right = new sDec(value);
		var val = this.val() - right.val();
		return new sDec(val,true);
	}

	sDec.prototype.multi = function(value){
		var right = new sDec(value);
		var val = this.val() * right.val();
		return new sDec(val / Math.pow(10,sDec.DECIMAL_PART) ,true);
	}

	sDec.prototype.div = function(value){
		var right = new sDec(value);
		var val = Math.round( (this.val() / right.val() * Math.pow(10,sDec.DECIMAL_PART)));
		return new sDec(val,true);
	}			
	
	return sDec;
})();

exports.sDec = sDec;

