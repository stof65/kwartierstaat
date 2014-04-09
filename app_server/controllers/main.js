/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { layout:'layout', title: 'home page' });  // layout:'layout' is the default
};

exports.template_nolayout = function(req, res){
  res.render('template', { layout:false, title: 'blank page without layout' });
};

exports.template = function(req, res){
  res.render('template', { layout:'layout', title: 'blank page' });  // layout:'layout' is the default
};

exports.gen3 = function(req, res){
  res.render('gen3', { layout:'layout', title: '3 generaties' });  // layout:'layout' is the default
};