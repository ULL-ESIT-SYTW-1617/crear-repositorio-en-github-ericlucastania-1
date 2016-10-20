#!/usr/bin/env node



var path = require('path');
var ejs = require('ejs');
var fs = require('fs-extra');
var argv = require('minimist')(process.argv.slice(2));
var gitConfig = require('git-config');

var exec = require('child_process').exec;
var path = require('path');


var re = /.ejs/g;

//Rutas interesantes
var rutaTemplate = path.join(__dirname, '..','template');
var rutaModules = path.join(__dirname, '..','..');

//Cosas de Tania
var opcionesValidas = ['d', 'a', 'r', 'i', 'f', 'w'];
var flag = true;


//variables funcionamiento
var sum=0;

var defaultname,defaultemail;





// Empezamos comprobando las opciones validas
function comprobarOpcion(opc) {
for (var i=0; i<opcionesValidas.length; i++) {
	if ((opcionesValidas[i] == opc))
		return true;
}
return false;
}

// Recorremos argumentos con minimist
for (var i in argv) {
if ((sum !=0) && (sum%2 == 0)) {
	if(comprobarOpcion(i)==false){
		flag = false;
		break;
	}
}
sum += 2;
}
  

gitConfig(function (err, config) {
	
	if(err)
		console.log(err);
	//opciones por defecto GitHub	
	defaultname = config.user.name;
	defaultemail = config.user.email;
	(() => {
		var names = fs.readdirSync(rutaModules);	
		console.log(names);
		
	})();
});
	

/* 

	if (flag){
		var autor = argv.a || defaultautor;
		
		// Creamos la carpeta
		
		var dir = argv.d || defaultdir;
		fs.mkdirsSync(direct + dir);
		
		//Ver los nombres de los archivos dentro de las carpetas
		var names = fs.readdirSync(ruta + '/..' + '/template/');
		
		var recursive = (names,folder) => {
			for (var i in names){
			
				if(names[i].match(re)){
				
					//Renderizamos el fichero
					var data = ejs.renderFile(ruta + '/..' + '/template/' + folder + names[i],{
						
						autor:{
							name: autor,
							repourl: argv.r,
							issuesurl: argv.i,
							readmeurl: argv.f,
							wikiurl: argv.w
						}
						
					},(err,data) => {
						if(err){
							throw err;
							
						} else{
							return data;
							
						}
					});
					
					//sustituimos el nombre, para quitarle la extensión ejs
					
					var newstr = names[i].replace(re, '');
				   
					fs.writeFile(direct + dir + '/' + folder + newstr, data, (err) => {
					  if (err) throw err;
					});
				}
				else{
					fs.mkdirsSync(direct + dir + '/' +names[i]);
					recursive(fs.readdirSync(ruta + '/..' + '/template/' + names[i]),names[i] + '/');
				}
			}
		};
		
		recursive(names,'');
	}
	
	
	else {
		console.log("gitbook-start [OPTIONS]\n"+
		"-d nombre del directorio a crear node gitbook-star -d miDirectorio\n"+
		"-a autor del libro a crear node gitbook-star -a AutorDelLibro\n"+
		"-r repositorio github contra el que se va a trabajar -r github.com/repo.git\n"+
		"-i direcion a la que se pueden reportar los bugs (en forma de issues de github) -i github.com/repo/issues\n" +
		"-f url de la homepage del libro -f github.com/repo#readme.md\n"+
		"-w direccion web de la wiki en github -w github.com/repo.wiki.git\n"+
		"-h muestra ayuda sobre las opciones disponibles\n");
	}
});*/

