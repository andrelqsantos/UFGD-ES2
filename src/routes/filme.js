module.exports = function(application){
	application.get('/filme', function(req, res){
		application.src.controllers.filme.filme(application, req, res);
	});
	application.get('/consultar-filme', function(req, res){
		application.src.controllers.filme.consultar(application, req, res);
	});
	application.get('/locar-filme', function(req, res){
		application.src.controllers.filme.locar(application, req, res);
	});
}