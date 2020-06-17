let express = require( "express" );
let morgan = require( "morgan" );
let mongoose = require( "mongoose" );
let bodyParser = require( "body-parser" );
let { VPList } = require('./model');
let { DATABASE_URL, PORT } = require('./config');

let app = express();
let jsonParser = bodyParser.json();
mongoose.Promise = global.Promise;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  if (req.method === "OPTIONS") {
    return res.send(204);
  }
  next();
});

app.use( express.static( "public" ) );

app.use( morgan( "dev" ) );


// app.post( "/api/users/register", jsonParser, (req, res, next) => {
// 	let {username, password} = req.body;

// 	// Validations missing

// 	let user = {username, password};
// 	UserList.register(user)
// 		.then(newUser => {
// 			return res.status( 201 ).json( newUser );
// 		})
// 		.catch( error => {
// 			res.statusMessage = "Something went wrong with the DB. Try again later.";
// 			return res.status( 500 ).json({
// 				status : 500,
// 				message : "Something went wrong with the DB. Try again later."
// 			})
// 		});
// });

// app.post( "/api/users/login", jsonParser, (req, res, next) => {
// 	let {username, password} = req.body;

// 	// Validations missing

// 	let user = {username, password};
// 	UserList.login(user)
// 		.then(goodUser => {
// 			return res.status( 202 ).json( goodUser );
// 		})
// 		.catch( error => {
// 			res.statusMessage = "Something went wrong with the DB. Try again later.";
// 			return res.status( 500 ).json({
// 				status : 500,
// 				message : "Something went wrong with the DB. Try again later."
// 			})
// 		});
// });

app.get( "/api/ejercicio", ( req, res, next ) => {
	VPList.get()
		.then( vicepresidencia => {
			return res.status( 200 ).json( vicepresidencia );
		})
		.catch( error => {
			res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
			return res.status( 500 ).json({
				status : 500,
				message : "No pudimos accesar a la base de datos. Intenta más tarde."
			})
		});
});

app.post("/api/EjercicioAn2", jsonParser, (req, res, next) =>{
	let tiempoFinal = req.body.tiempoFinal;
	let id = req.body.id;

	VPList.postTiempoFinal(id, tiempoFinal)
	.then( persona =>{
		return res.status( 201 ).json({
			message: "Se cambio el valor",
			status: 201,
			Persona: persona
		});
	})
	.catch( error => {
		res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
		return res.status( 500 ).json({
			 status : 500,
			 message : "No pudimos accesar a la base de datos. Intenta más tarde."
		 });
	});
});

app.post("/api/EjercicioAn3", jsonParser, (req, res, next) =>{
	let nivel = req.body.nivel; //Body en el apiutil de alexa
	let id = req.body.id;
	// let id = req.body.id;

	VPList.postNivel(id,nivel)
		.then( persona => {
			return res.status( 201 ).json({
				message : "Se cambio el valor",
				status : 201,
				Persona : persona
		   });
	   })
	   .catch( error => {
		   res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
		   return res.status( 500 ).json({
				status : 500,
				message : "No pudimos accesar a la base de datos. Intenta más tarde."
			});
		});
})

app.post("/api/EjercicioAn4", jsonParser, (req, res, next) =>{
	let tiempoAcum = req.body.tiempoAcumulado; //Body en el apiutil de alexa
	let id = req.body.id;
	// let id = req.body.id;

	VPList.postTiempoAcum(id,tiempoAcum)
		.then( persona => {
			return res.status( 201 ).json({
				message : "Se cambio el valor",
				status : 201,
				Persona : persona
		   });
	   })
	   .catch( error => {
		   res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
		   return res.status( 500 ).json({
				status : 500,
				message : "No pudimos accesar a la base de datos. Intenta más tarde."
			});
		});
})

app.post("/api/EjercicioAn5", jsonParser, (req, res, next) =>{
	let dAcum = req.body.diasAcum; //Body en el apiutil de alexa
	let id = req.body.id;
	// let id = req.body.id;

	VPList.postDiasAcum(id,dAcum)
		.then( persona => {
			return res.status( 201 ).json({
				message : "Se cambio el valor",
				status : 201,
				Persona : persona
		   });
	   })
	   .catch( error => {
		   res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
		   return res.status( 500 ).json({
				status : 500,
				message : "No pudimos accesar a la base de datos. Intenta más tarde."
			});
		});
})



app.post( "/api/EjerecioAn", jsonParser, ( req, res, next ) => {
	console.log(req.body);
	let inicio = req.body.tiempoInicio; //Body en el apiutil de alexa
 	let id = req.body.id;
 	// let id = req.body.id;

 	VPList.postTiempoInicio(id,inicio)
 		.then( persona => {
 			return res.status( 201 ).json({
 				message : "Se cambio el valor",
 				status : 201,
 				Persona : persona
			});
		})
		.catch( error => {
			res.statusMessage = "No pudimos accesar a la base de datos. Intenta más tarde.";
			return res.status( 500 ).json({
 				status : 500,
 				message : "No pudimos accesar a la base de datos. Intenta más tarde."
 			});
		 });
		
 });

let server;

function runServer(port, databaseUrl){
	return new Promise( (resolve, reject ) => {
		mongoose.connect(databaseUrl, response => {
			if ( response ){
				return reject(response);
			}
			else{
				server = app.listen(port, () => {
					console.log( "App is running on port " + port );
					resolve();
				})
				.on( 'error', err => {
					mongoose.disconnect();
					return reject(err);
				})
			}
		});
	});
}

function closeServer(){
	return mongoose.disconnect()
		.then(() => {
			return new Promise((resolve, reject) => {
				console.log('Closing the server');
				server.close( err => {
					if (err){
						return reject(err);
					}
					else{
						resolve();
					}
				});
			});
		});
}

runServer( PORT, DATABASE_URL )
	.catch( err => {
		console.log( err );
	});

module.exports = { app, runServer, closeServer };