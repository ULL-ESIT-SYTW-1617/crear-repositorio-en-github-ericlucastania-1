#Práctica: GitHub API

## Descripción

El objetivo es facilitar el uso del repositorio a todo tipo de usuarios, ya estén familizarizados con gitbook y github o no. Para ello haremos
uso de la API de GitHub para poder crearle un repo en la plataforma.



## Pasos a ejecutar 

**1. Instala nuestro paquete de forma global**

```npm install -g gitbook-start-elt```


**2. Ejecuta el binario para el render del template**

```gitbook-start --dir Carpeta``` !!Si no ejecutas el --dir se creará una carpeta con tu nombre de usuario

**3. Entra en la carpeta**

 ```cd Carpeta```




## PLUGINS

**1. Instala el plugin forma global**

```npm install -g PLUGIN```

**2. Ejecuta el plugin que desees, asegurate de estar dentro de la carpeta**


```gitbook-start -d PLUGIN``` !! También puedes usar la opción --deploy


**3. Ejecuta el gulp creado**

```gulp deploy-plugin```



## Correción 

En el archivo /bin/octonode.js utilizamos la función ghme.info para obtener el email y nombre del usuario
y guardarlo en el pck.json

```javascript

    ghme.info((err, data, headers) => {
    	pck.email = data.email;
    	pck.author = data.name;
    }
    
```

## Explicación

Cunado se ejecuta el gitbook-start -d PLUGIN se te lanzará el initialize del módulo,
el initialize crea una tarea en el gulp para realizar el deploy. Además de guardarte el paquete
elegido en el package.json.

## Opciones

    gitbook-start [OPTIONS]
        -d nombre del directorio a crear node gitbook-star -d miDirectorio
        -a autor del libro a crear node gitbook-star -a AutorDelLibro
        -e email del autor del libro node gitbook-star -e eric.ramos.suarez@gmail.com
        -r repositorio github contra el que se va a trabajar -r nameRepo
        -v muestra la version del paquete gitbook-start -v
        -h muestra ayuda sobre las opciones disponibles


## Enlaces interesantes 
 
* [NPM](https://www.npmjs.com/package/gitbook-start-elt)
* [Repositorio de la práctica](https://github.com/ULL-ESIT-SYTW-1617/crear-repositorio-en-github-ericlucastania-1.git)
* [Descripción de la tarea campus](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicagithubapi.html)
* [PLUGIN HEROKU](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [NPM PLUGIN HEROKU](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)
* [PLUGIN IAAS](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-ericlucastania.git)
* [NPM PLUGIN IAAS](https://www.npmjs.com/package/gitbook-start-plugin-heroku-ericlucastania)



## Componentes del grupo de trabajo

* [Eric Ramos](https://github.com/alu0100786330)
* [Lucas Ruiz](https://github.com/alu0100785265)
* [Tania González](https://github.com/tania77)


