'use strict';

module.exports = {     
 
 
	octoIni: () => {
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
			console.log(token);
			console.log(id);
		  json[token] = token;
		  json[id] = id;
		  console.log(json);
		  if (err) return err;
		  //console.log(err);
		  //console.log(id);
		  //console.log(token); // Ahora si tenemos el token de github!!
		  
		 
		});
		
		var directoriomonito = process.env.HOME;
		
		try{
			fs.mkdirSync(directoriomonito + '/.gitbook-start');
			var pac = directoriomonito + '/.gitbook-start/';
			fs.writeFile(pac + 'config.json', json, function(err){
				if (err) throw err;
				
			});
		}
		catch(err){
			console.log("leyendo directorio...");	
		}
		
			
		
		
		
              
		
	},
	
	octoRepo: (dir) => {

		var github = require('octonode');
		var configJson = require(process.env.HOME + '/.gitbook-start/config.json');

		var client = github.client(configJson.token);
		console.log(configJson);
		console.log(configJson.token);
		var ghme = client.me();
		

		ghme.repo({
		  "name": dir,
		  "description": "This is your Gitbook-Start repository",
		}); //repo
	
		
	}
	
	
	
};