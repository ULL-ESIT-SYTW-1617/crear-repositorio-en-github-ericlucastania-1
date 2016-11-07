'use strict';

module.exports = {     
 
 
 octo: () => {
		var github = require('octonode');    
		 
		github.auth.config({ username, password }).login({
		  scopes: ['user', 'repo'],
		  note: 'Token para Gitbook'
		}, 
		(err, id, token) => {
		  if (err) return err;
		  console.log(err);
		  console.log(id);
		  console.log(token); // Ahora si tenemos el token de github!!
		});
	}
};