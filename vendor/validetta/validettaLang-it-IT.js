(function($){
	$.fn.validettaLanguage = {};
	$.validettaLanguage = {
		init : function(){
			$.validettaLanguage.messages = {
				required	: 'Campo obbligatorio.',
				email		: 'E-mail non valida.',
				number		: 'Questo campo accetta solo valori numerici.',
				maxLength	: 'Questo campo accetta massimo {count} caratteri.',
				minLength	: 'Questo campo accetta minimo {count} caratteri.',
				maxChecked	: 'Si possono selezionare {count} opzioni al massimo.',
				minChecked	: 'Si devono selezionare almeno {count} opzioni.',
				maxSelected	: 'Si possono selezionare {count} opzioni al massimo.',
				minSelected	: 'Si devono selezionare almeno {count} opzioni.',
				notEqual	: 'I campi non coincidono.',
				different   : 'I campi non possono essere diversi',
				creditCard	: 'Carta di Credito non valida.'
			};
		}
	};
	$.validettaLanguage.init();
})(jQuery);