(function($,window,document,undefined){
	var methods = {
		init: function(rules){
			return this;
		},
		isChecked: function(){
			return $(this).is(":checked");
		},
		isNotChecked: function(){
			return ! methods.isChecked.call(this)
		},
		isBlank: function(){
			var val = $(this).val();
			return (val=="" || val==undefined || val==null)? true : false;
		},
		isNotBlank: function(){
			return ! methods.isBlank.call(this)
		},
		isValidNumber: function(){
			var val = $(this).val();
			return /^\d*\.?\d+$/.test(val);
		},
		isValidEmail: function(){
			var val = $(this).val();
			var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(val);
		},
		isValidUrl: function(){
			var val = $(this).val();
			var regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
			return regex.test(val);
		},
		isValidCustomerCode: function(){
			var val = $(this).val();
			var regex = /(^1[.]\d{6}\d?$)|(^2[.]\d\d$)|(^2[.]\d\d[.]?\d\d[.]?\d\d$)|(^2[.]\d\d[.]?\d\d$)|(^3[.]\d\d\d$)|(^3[.]\d\d\d[.]?\d\d$)|(^3[.]\d\d\d[.]?\d\d[.]?\d\d$)|(^4[.]\d\d\d\d$)|(^4[.]\d\d\d\d[.]?\d\d$)|(^4[.]\d\d\d\d[.]?\d\d[.]?\d\d$)|(^5[.]\d\d\d\d\d$)|(^5[.]\d\d\d\d\d[.]?\d\d$)|(^5[.]\d\d\d\d\d[.]?\d\d[.]?\d\d$)|(^5[.]\d\d\d\d\d[.]?\d\d[.]?\d\d[.]?\d\d\d\d\d$)/;
			return regex.test(val);
		},
		isValidBankAccount: function(){
			var val = $(this).val();
			var regex = /^([a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16})|([0-9]{3}[-,\s]?[0-9]{7}[-,\s]?[0-9]{2})$/;
			return regex.test(val);
		},
		isValidZipBe: function(){
			var val = $(this).val();
			var regex = /^(B-)?\d{4}$/;
			return regex.test(val);
		},
		isValidMobilePhoneBe:function(val){
			var val = $(this).val();
			var regex = /^(?:04[7,8,9]\d[\s,\/,.]?\d\d[\s,.]?\d\d[\s,.]?\d\d\s*[\n,\r]?){1,15}$/;
			return regex.test(val);
		},
		isEqual: function(el){
			var val1 = $(this).val();
			var val2 = $(el).val();
			return val1 === val2;
		},
		hasMinLength: function(length){
			var val = $(this).val();
			var length = length || 1;
			return val.length >= length;
		},
		hasMaxLength: function(length){
			var val = $(this).val();
			var length = length || 99999;
			return val.length <= length;
		},
		markField: function(type,msg){
			var field = $(this),
				group = field.parents('.form-group'),
				msg = msg || "",
				type = type || "error";
			if(group){
				group.removeClass('has-success has-warning has-error has-info');
				group.addClass('has-' + type);
				group.find('.help-inline').toggle(msg != "").html(msg);
			}
		},
		_markFormTemplate: function(data){
			data.type = (data.type == 'error')? 'danger' : data.type;
			
			var str = '';
			str += '<div class="alert alert-' +data.type +'">';
			str += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
			str += data.msg; 
			str += '</div>';
			return str;
		},
		markForm: function(type,msg){
			var form = $(this),
				type = type || 'error';
			if(msg && type != 'none'){
				form.find('.errors').html(methods._markFormTemplate({type:type,msg:msg}))
			}
		}
	}

	$.fn.validate = function(method) {  
		// Method calling logic
	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on validate' );
	    } 
	}
})(jQuery,window,document);