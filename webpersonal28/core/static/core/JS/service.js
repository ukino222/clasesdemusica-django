function calcularPrecio() {
	var tipoClase = document.getElementById("tipoClase").value;
	var cantidadSesiones = parseInt(document.getElementById("cantidadSesiones").value);
	var precioSesion = 0;
	if (tipoClase == "individual") {
		precioSesion = 2500;
	} else if (tipoClase == "grupal") {
		precioSesion = 1500;
	} else if (tipoClase == "enLinea") {
		precioSesion = 2000;
	}
	var montoAPagar = precioSesion * cantidadSesiones;
	document.getElementById("montoAPagar").innerHTML = "$" + montoAPagar;
}
function inicializarMercadoPago() {
	MercadoPago.setPublishableKey('damidiez'); /*Falta crear id Integrador*/
	var tipoClase = document.getElementById("tipoClase").value;
	var cantidadSesiones = parseInt(document.getElementById("cantidadSesiones").value);
	var descripcion = "Clases de guitarra (" + tipoClase + ")";
	var precioSesion = 0;
	if (tipoClase == "individual") {
		precioSesion = 2500;
	} else if (tipoClase == "grupal") {
		precioSesion = 1500;
	} else if (tipoClase == "enLinea") {
		precioSesion = 2000;
	}
	var importe = precioSesion * cantidadSesiones;
	var preference = {
		items: [
			{
				title: descripcion,
				quantity: cantidadSesiones,
				unit_price: precioSesion
			}
		],
		back_urls: {
			success: 'https://stunning-pothos-b5d582.netlify.app/pago_exitoso',
			pending: 'https://stunning-pothos-b5d582.netlify.app/pago_pendiente',
			failure: 'https://stunning-pothos-b5d582.netlify.app/pago_fallido'
		},
		auto_return: 'approved'
	};
	MercadoPago.createPreference(preference, function(result){
		
		window.location.href = result.init_point;
	});
	
}