#!/usr/bin/env node


//Paquetes DEPENDECIES
var fs = require('fs-extra');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var gitConfig = require('git-config');
require('shelljs/global');


// RUTA ACTUAL

var direct = process.cwd() + '/'; //Actual,desde donde se ejecuta el script

//Modulos distribuidos

var comprobar = require('./comprobarMinimist.js');
var renderTemplate = require('./renderTemplate.js');
var iniDeplo = require('./initializesDeploys.js');
var octonode = require('./octonode.js');
var defaultname, defaultemail;



gitConfig(function (err, config) { //PARA RECOGER OPCIONES POR DEFECTO
	if (err)
		console.log(err);


	//opciones por defecto GitHub	
	defaultname = config.user.name;
	defaultemail = config.user.email;


	if (comprobar.comp(argv)) {
		if (argv.d || argv.deploy) {
			iniDeplo.execute(path, direct, fs, argv.d, argv.deploy);
		}
		if (Object.keys(argv).length == 1 || argv.dir) {
			try {
				var file = fs.readdirSync(process.env.HOME + '/.gitbook-start/');
				if (file.indexOf('config.json') === -1) {
					console.log("por aqui se va a neptuno");
					renderTemplate.rend(argv, path, fs, defaultname, defaultemail, direct).then((resolve, reject) => {
						octonode.octoIni().then((resolve, reject) => {
							octonode.octoRepo().then((resolve,reject) => {
								exec('npm run deploy');
							});
						});
					});
				}
				
				else {
					console.log("por aqui se va a urano");
					octonode.octoRepo().then((resolve,reject) => {
						exec('npm run deploy');
					});
				}
			}
			catch (err) {
				if(err) console.log(err);
				console.log("por aqui se va a saturno");
				renderTemplate.rend(argv, path, fs, defaultname, defaultemail, direct).then((resolve, reject) => {
					octonode.octoIni().then((resolve, reject) => {
						octonode.octoRepo().then((resolve,reject) => {
							exec('npm run deploy');
						});
					});
				});
			}
		}
	}
	else {
		console.log("gitbook-start [OPTIONS]\n" +
			"--dir nombre del directorio a crear node gitbook-star --dir miDirectorio\n" +
			"-a autor del libro a crear node gitbook-star -a AutorDelLibro\n" +
			"-e email del autor del libro node gitbook-star -e eric.ramos.suarez@gmail.com\n" +
			"-r repositorio github contra el que se va a trabajar -r nameRepo\n" +
			"-v muestra la version del paquete gitbook-start -v\n" +
			"-d --deploy deploy en el que se quiera ejecutar gitbook-star -d iaas\n" +
			"-h muestra ayuda sobre las opciones disponibles\n");
	}

});
