'use strict';

const Translator = require('../components/translator.js');
let translator = new Translator();
module.exports = function (app) {
  
  let validLocales = ['american-to-british','british-to-american']

  app.route('/api/translate')
    .post((req, res) => {
      let {text,locale} = req.body;

      if(text===""){
        res.send({error: 'No text to translate'})
      }

      if(!text || !locale){
        res.send({error: 'Required field(s) missing' })
      }

      if(!validLocales.includes(locale)){
        res.send({error: 'Invalid value for locale field'})
      }

      if(text===""){
        res.send({error: 'No text to translate'})
      }
      
      let translation = translator.translate(text,locale);
      res.send({translation:translation});

    });
};
