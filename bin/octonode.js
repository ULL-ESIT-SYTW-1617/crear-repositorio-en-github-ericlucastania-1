'use strict';

module.exports = {     
 
 
	octoIni: () => {
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
				"id": "",
				"dataUser":{
					"repo": "",
					"email": "",
					"name": ""
				}
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
			
			
			var directorioHome = process.env.HOME;
			
			try{
				auth().then(function(resolve,reject){
					fs.mkdirSync(directorioHome + '/.gitbook-start');
					var pac = directorioHome + '/.gitbook-start/';
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
	
	octoRepo: () => {
		
		return new Promise((resolve,reject) => {
			var github = require('octonode');
			var readlineSync = require('readline-sync');
			var dir = readlineSync.question('Introduzca su nombre del repositorio a crear en Github: ');
			
			
			var configJson = require(process.env.HOME + '/.gitbook-start/config.json');
			var client = github.client(configJson.token);
			var ghme = client.me();
			ghme.repo({ 
			  "name": dir,
			  "description": "This is your Gitbook-Start repository",
			}, (err, status, body, headers) => {
				console.log(body);
				require('shelljs/global');
				if (err) throw err;
				resolve(exec('git remote add origin ' + status.ssh_url + ' ;git add .;git commit -m "inicializando repo";git push'));
			}); //repo
		});
	}
	
			
};