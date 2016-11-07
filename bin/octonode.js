'use strict';

module.exports = {     
 
 
	octoIni: () => {
<<<<<<< HEAD
		 var fs = require('fs-extra');
		 var github = require('octonode'); 
		 var readlineSync = require('readline-sync');
		 var username = readlineSync.question('Introduzca su nombre de usuario en Github: ');
		 var password = readlineSync.question('Introduzca su contraseña en Github: ', {
		 	hideEchoBack: true
		 });
		 
		 var json = {
			"token": "",
			"id": ""
		 };
		 
		github.auth.config({ username, password }).login({
		  scopes: ['user', 'repo'],
		  note: 'Token para Gitbook'
		}, 
		(err, id, token) => {
		  json.token = token;
		  json[id] = id;
		  if (err) return err;
		  //console.log(err);
		  //console.log(id);
		  //console.log(token); // Ahora si tenemos el token de github!!
		  
		 
		});
		function auth(){
			return new Promise((resolve,reject) => {
				github.auth.config({ username, password }).login({
				  scopes: ['user', 'repo'],
				  note: 'Token para Gitbook'
				}, 
				(err, id, token) => {
				  resolve(json.token = token);
				  resolve(json.id = id);
				  if (err) return err;
				  //console.log(err);
				  //console.log(id);
				  //console.log(token); // Ahora si tenemos el token de github!!
				  
				 
				});
			});
		} 
		

		
		var directoriomonito = process.env.HOME;
		
		try{

			fs.mkdirSync(directoriomonito + '/.gitbook-start');
			var pac = directoriomonito + '/.gitbook-start/';
			fs.writeFile(pac + 'config.json', json, function(err){
				console.log("aqui da el error");
				if (err) throw err;
				console.log("aqui da el error");

			auth().then(function(resolve,reject){
				fs.mkdirSync(directoriomonito + '/.gitbook-start');
				var pac = directoriomonito + '/.gitbook-start/';
				console.log(json);
				fs.writeFile(pac + 'config.json',JSON.stringify(json), function(err){
					if (err) throw err;
					console.log("guardando el json correctamente..");
				});

			});
=======
		 return new Promise((resolviendo,reject) => {
			 var fs = require('fs-extra');
			 var github = require('octonode'); 
			 var readlineSync = require('readline-sync');
			 var username = readlineSync.question('Introduzca su nombre de usuario en Github: ');
			 var password = readlineSync.question('Introduzca su contraseña en Github: ', {
			 	hideEchoBack: true
			 });
			 
			 var json = {
				"token": "",
				"id": ""
			 };
			function auth(){
				return new Promise((resolve,reject) => {
					github.auth.config({ username, password }).login({
					  scopes: ['user', 'repo'],
					  note: 'Token para Gitbook'
					}, 
					(err, id, token) => {
					  resolve(json.token = token);
					  resolve(json.id = id);
					  if (err) return err;
					  //console.log(err);
					  //console.log(id);
					  //console.log(token); // Ahora si tenemos el token de github!!
					  
					 
					});
				});
			} 
>>>>>>> f1ddedfcfd2212f34418abfc0e00c7002e8919b9
			
			
			var directoriomonito = process.env.HOME;
			
			try{
				auth().then(function(resolve,reject){
					fs.mkdirSync(directoriomonito + '/.gitbook-start');
					var pac = directoriomonito + '/.gitbook-start/';
					console.log(json);
					fs.writeFile(pac + 'config.json',JSON.stringify(json), function(err){
						if (err) throw err;
						else resolviendo(console.log("guardando el json correctamente.."));
						
					});
				});
				
			}
			catch(err){
				console.log(err);
				resolviendo(console.log("leyendo directorio..."));	
			}
			
		});
		
              
	},
	
	octoRepo: (dir) => {
		var github = require('octonode');
		
		
		
		var configJson = require(process.env.HOME + '/.gitbook-start/config.json');
		var client = github.client(configJson.token);

		var ghme = client.me();
		
		ghme.repo({
		  "name": dir,
		  "description": "This is your Gitbook-Start repository",
		}, () => {
			console.log("Repo creado.");
		}); //repo
	
	}
	
	
	
};