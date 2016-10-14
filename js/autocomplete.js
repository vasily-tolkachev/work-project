'use strict';

(function() {
	document.getElementById('hostcall-btn').onclick = function() {
		document.getElementById('consultFormTextarea').value="Хочу заказать оборудование Hostcall";
	}
	document.getElementById('medbells-btn').onclick = function() {
		document.getElementById('consultFormTextarea').value="Хочу заказать оборудование Medbells";
	}
	document.getElementById('medbeep-btn').onclick = function() {
		document.getElementById('consultFormTextarea').value="Хочу заказать оборудование Medeep";
	}
	document.getElementById('pulsar-btn').onclick = function() {
		document.getElementById('consultFormTextarea').value="Хочу заказать оборудование Пульсар";
	}
	$('#modal-consult').on('hide.bs.modal', function () {
		document.getElementById('consultFormTextarea').value="";
	})
})();