'use strict';

module.exports = {     
 
 
	octoIni: () => {
		var fs = require('fs-extra');
		var github = require('octonode'); 
		var readlineSync = require('readline-sync');
		var tokenApi;
		
		 var username = readlineSync.question('Introduzca su nombre de usuario en Github: ');
		 var password = readlineSync.question('Introduzca su contraseña en Github: ', {
		 	hideEchoBack: true
		 });
		 
		 
		github.auth.config({ username, password }).login({
		  scopes: ['user', 'repo'],
		  note: 'Token para Gitbook'
		}, 
		(err, id, token) => {
		  tokenApi = token;
		  if (err) return err;
		  console.log(err);
		  console.log(id);
		  console.log(token); // Ahora si tenemos el token de github!!
		  
		 
		});
		
		 var directoriomonito = process.env.HOME;
		
		fs.mkdirSync(directoriomonito + '/.gitbook-start');
			
		var pac = directoriomonito + '/.gitbook-start/';
		console.log(tokenApi);
		fs.writeFile(pac + 'config.json', tokenApi, function(err){
			if (err) throw err;
			
		});
		
		
              
		
	},
	
	octoRepo: () => {

		var github = require('octonode');
		var fs = require('fs-extra');
		var tokenApi;
		fs.readFile(process.env.HOME + '/.gitbook-start/config.json', 'utf8', (err, data) => {
			if (err) throw err;
			tokenApi = data;
		});
		var client = github.client(tokenApi);
		var ghme = client.me();
		
	
		

		ghme.repo({
		  "name": "Hello-World",
		  "description": "This is your first repo",
		}); //repo
	
		
		
	}
	
	
	
};