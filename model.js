let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let audioSchemas = mongoose.Schema({
	nombre: { type : String },
	habilidad: { type : String },
	nvlCE: { type : String },
	ulthabilidad: { type : String },
	experiencia: { type : String },
	satisfaccion: { type : String }
});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Vicepresidencia = mongoose.model( 'audioaprende', audioSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Vicepresidencia.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}
	,
	 postHabilidad : function( id, hability ){
		 console.log(id);
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {habilidad: hability}, (err) => {
			if (err) {
				throw Error(error);
			}
		 });
	 }
	 ,
	 postultHab: function(id, ultHab){
		console.log(id);
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {ulthabilidad: ultHab}, (err, doc) =>{
			 if(err){
				 throw Error(error);
			 }
			 return doc
		 });
	 }, 
	 postNivelCE: function(id, nivel){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {nvlCE: nivel}, (err) =>{
			 if(err){
				 throw Error(error);
			 }
		 });
	 },
	 postExp: function(id, exp){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {experiencia: exp}, (err) =>{
			 if(err){
				 throw Error(error);
			 }
		 });
	 },
	 postSatisfaccion: function(id, satis){
		 return Vicepresidencia.findOneAndUpdate({nombre: id}, {satisfaccion: satis}, (err) => {
			 if(err){
				 throw Error(error);
			 }
		 });
	 }
};

module.exports = { VPList };


