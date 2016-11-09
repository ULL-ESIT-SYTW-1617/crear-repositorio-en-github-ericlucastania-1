'use strict';

module.exports = {     
 
 
	octoIni: (fs,github,readlineSync) => {
		 return new Promise((resolviendo,reject) => {
			 var username = readlineSync.question('Introduzca su nombre de usuario en Github: ');
			 var password = readlineSync.question('Introduzca su contraseña en Github: ', {
			 	hideEchoBack: true
			 });
			 
			 var json = {
				"token": "",
				"id": "",
				"user":{
					"repo": "",
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
					  if (err) return err;
					  resolve(json.token = token);
					  json.id = id;
					  json.user.name = username;
					});
				});
			} 
			
			
			var directoriomonito = process.env.HOME;
			
			try{
				auth().then(function(resolve,reject){
					fs.mkdirSync(directoriomonito + '/.gitbook-start');
					var pac = directoriomonito + '/.gitbook-start/';
					fs.writeFile(pac + 'config.json',JSON.stringify(json), function(err){
						if (err) throw err;
						else resolviendo(console.log("guardando el json correctamente.."));
						
					});
				});
				
			}
			catch(err){
				resolviendo(console.log("leyendo directorio..."));	
			}
			
		});
		
              
	},
	
	octoRepo: (fs,github,readlineSync,directorioUsuario) => {
		return new Promise((resolve,reject) => {
			//paquetes
			require('shelljs/global');
			var client = github.client(configJson.token);
			var ghme = client.me();
			//variables de entorno y rutas 
			var configJson = require(process.env.HOME + '/.gitbook-start/config.json');
			var directorioUsuario = process.cwd() + '/';
			var pck = require(directorioUsuario + 'package.json');
			var dir = readlineSync.question('Introduzca su nombre del repositorio a crear en Github: ');
			
			
			ghme.repo({
			  "name": dir,
			  "description": "This is your Gitbook-Start repository",
			}, (err, status, body, headers) => {
				if (err) throw err;
				pck.repository.url = status.ssh_url;
				
				fs.writeFile(directorioUsuario + 'package.json', JSON.stringify(pck));
				resolve(exec('git remote add origin ' + status.ssh_url + ' ;git add .;git commit -m "inicializando repo";git push'));
				
			}); //repo
			
		});
		
	}
	
	
	
};