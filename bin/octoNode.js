'use strict';

module.exports = {     
 
 
 octo: () => {
<<<<<<< HEAD
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
=======
          var ghme           = client.me();
        
        var ghrepo         = client.repo('pksunkara/hub');
        var ghissue        = client.issue('pksunkara/hub', 37);
        var ghorg          = client.org('flatiron');
    var client = github.client({
          username: 'pksunkara',
          password: 'password'
        });
        
        client.get('/user', {}, function (err, status, body, headers) {
          console.log(body); //json object
        });
     
     github.auth.config({ username, password }).login({
          scopes: ['user', 'repo'],
          note: 'Token para Gitbook'
        }, (err, id, token) => {
          if (err) return err;
          console.log(err);
          console.log(id);
          console.log(token); // Ahora si tenemos el token de github!!
        });
 }
>>>>>>> a123cc97fb1b5565db149a7fbdf8a4ccf69f1c39
};