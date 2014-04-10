/* GET /individuals */
exports.getListOfIndividuals = function(req, res){
  res.render('template', { layout:'layout', title: 'personenlijst' });
};

/* GET /individual */
exports.getOneIndividual = function(req, res){
  res.render('template', { layout:'layout', title: 'detail' });
};

/* GET /individual/new */
exports.addIndividual = function(req, res){
  res.render('template', { layout:'layout', title: 'toevoegen' });
};