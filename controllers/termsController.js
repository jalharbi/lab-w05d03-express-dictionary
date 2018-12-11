var express = require('express');
var router = express.Router();

var term = require('../models/term');

router.get('/', term.getAll, renderIndex);
router.get('/:id', term.find, renderShow);
router.delete('/:id', term.delete, redirectIndex);

function renderIndex(req, res){
    mustacheVariables = {
     term: res.locals.term
    }
    res.render('./terms/index', mustacheVariables);
  }

  function renderShow(req,res){
    var mustacheVariables = res.locals.term;
    res.render('./terms/show', mustacheVariables);
  }


  function redirectIndex(req, res){
    res.redirect('/terms');
  }
  
module.exports = router;