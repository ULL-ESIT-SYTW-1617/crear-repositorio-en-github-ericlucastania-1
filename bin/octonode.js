'use strict';

module.exports = {     
 
 
	octo: () => {
		var github = require('octonode'); 
		var client = github.client();
		var ghme = client.me();
		var readlineSync = require('readline-sync');
		 /*
		 var username = readlineSync.question('Introduzca su nombre de usuario en Github: ');
		 var password = readlineSync.question('Introduzca su contraseña en Github: ', {
		 	hideEchoBack: true
		 });
		 
		 
		github.auth.config({ username, password }).login({
		  scopes: ['user', 'repo'],
		  note: 'Token para Gitbook'
		}, 
		(err, id, token) => {
			
		  if (err) return err;
		  console.log(err);
		  console.log(id);
		  console.log(token); // Ahora si tenemos el token de github!!
		  
		 
		});*/
		
		 client = github.client({
		  id: '59762026',
		  secret: 'eeb5b2ee21683b47add11e4be3d1f92ecbcf08b1'
		});
		
		ghme.repo({
		  "name": "Hello-World",
		  "description": "This is your first repo",
		},function(stdout){
			console.log(stdout);
		}); //repo
		
	}
	
	
};