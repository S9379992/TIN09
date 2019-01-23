var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Calculator' });
});

router.post('/form', function(req, res, next) {
  // res.json({name: 'svetik'})
  // console.log(req.body)

  var first = parseInt(req.body[0].value)
  var second = parseInt(req.body[1].value)

  var answer

  switch (req.body[2].value) {
    case 'multiply':
      answer = first * second
      break;
    case 'devide':
      answer = first / second
      break;
    case 'substraction':
      answer = first - second
      break;
    case 'addition':
      answer = first + second
      break;
    
    default:
    break;
  }
  res.json({result: answer})      
});

module.exports = router;
