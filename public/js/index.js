
function init(){
	let url = '/api/ejercicio';
	let settings = {
		method: 'GET'
	}

	document.getElementById("post").addEventListener("click", function(e) {
		var id  = document.getElementById("Name").value;
		var tIni = document.getElementById("tiempoini").value;

		let url2 = '/api/EjerecioAn'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				tiempoInicio: parseInt(tIni)
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
		
	});

	document.getElementById("post2").addEventListener("click", function(e) {
		var id  = document.getElementById("Name2").value;
		var tFin = document.getElementById("tiempofinal").value;

		let url2 = '/api/EjercicioAn2'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				tiempoFinal: parseInt(tFin)
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});

	document.getElementById("post3").addEventListener("click", function(e) {
		var id  = document.getElementById("Name3").value;
		var nIvel = document.getElementById("Nivel").value;

		let url2 = '/api/EjercicioAn3'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				nivel: parseInt(nIvel)
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});

	document.getElementById("post4").addEventListener("click", function(e) {
		var id  = document.getElementById("Name4").value;
		var tAcum = document.getElementById("tAcum").value;

		let url2 = '/api/EjercicioAn4'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				tiempoAcumulado: parseInt(tAcum)
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});

	document.getElementById("post5").addEventListener("click", function(e) {
		var id  = document.getElementById("Name5").value;
		var dAcum = document.getElementById("dAcum").value;

		let url2 = '/api/EjercicioAn5'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				diasAcum: parseInt(dAcum)
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});


	fetch(url, settings)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.listOfVPs').append(`<li>
				${responseJSON[i].nombre} - Tiene tiempo de Inicio: ${responseJSON[i].tiempoInicio} 
										</li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();