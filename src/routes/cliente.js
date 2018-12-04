module.exports = function(application){
	application.get('/cliente', function(req, res){
		application.src.controllers.cliente.cliente(application, req, res);
	});
	application.post('/cliente', function(req, res){
		application.src.controllers.cliente.cliente(application, req, res);
	});
	application.get('/consultar-cliente', function(req, res){
		application.src.controllers.cliente.consultar(application, req, res);
	});
}