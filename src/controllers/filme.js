module.exports.filme = function(application, req, res){
    res.render('filme');
}
module.exports.consultar = function(application, req, res){
    res.render('consultar-filme');
}
module.exports.locar = function(application, req, res){
    res.render('locar-filme');
}