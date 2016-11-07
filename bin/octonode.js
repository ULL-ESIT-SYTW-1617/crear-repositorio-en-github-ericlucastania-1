'use strict';

module.exports = {     
 
 
	octoIni: () => {
		var github = require('octonode'); 
		var readlineSync = require('readline-sync');
		var tokenApi = '749d0b8aa224dfcc58c3ebefe3f4db13c0403c2b';
		 
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
		
		
		
	},
	
	ocoRepo: () => {
		
		var client = github.client(tokenApi);
		var ghme = client.me();
		
	
		

		ghme.repo({
		  "name": "Hello-World",
		  "description": "This is your first repo",
		}); //repo
	
		
		
	}
	
	
	
};