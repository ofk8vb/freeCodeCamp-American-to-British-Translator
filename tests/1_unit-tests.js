const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
    
        test('Translate Mangoes are my favorite fruit. to British English', function(done) {
          let text = 'Mangoes are my favorite fruit.';
          let translatedText = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
          let locale = 'american-to-british';
          let translation = translator.translate(text,locale);
          assert.equal(translatedText,translation);
         
          done();
        });

        test('Translate I ate yogurt for breakfast. to British English', function(done) {
            let text = 'I ate yogurt for breakfast.'
            let translatedText = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            assert.equal(translatedText,translation);
            done();
        });

        test('Translate We had a party at my friend\'s condo. to British English', function(done){
            let text = 'We had a party at my friend\'s condo.'
            let translatedText = 'We had a party at my friend\'s <span class="highlight">flat</span>.'
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            assert.equal(translatedText,translation);
            done();
        })

        test('Can you toss this in the trashcan for me?', function(done){
            let text = 'Can you toss this in the trashcan for me?';
            let translatedText = 'Can you toss this in the <span class="highlight">bin</span> for me?';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            assert.equal(translatedText,translation);
            done();
        })

        test('The parking lot was full.', function(done){
            let text = 'The parking lot was full.';
            let translatedText = 'The <span class="highlight">car park</span> was full.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            assert.equal(translatedText,translation);
            done();
        })

        test('Like a high tech Rube Goldberg machine.', function(done){
            let text = 'Like a high tech Rube Goldberg machine.';
            let translatedText = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('To play hooky means to skip class or work.', function(done){
            let text = 'To play hooky means to skip class or work.';
            let translatedText = 'To <span class="highlight">bunk off</span> means to skip class or work.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('No Mr. Bond, I expect you to die.', function(done){
            let text = 'No Mr. Bond, I expect you to die.';
            let translatedText = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Dr. Grosh will see you now.', function(done){
            let text = 'Dr. Grosh will see you now.';
            let translatedText = '<span class="highlight">Dr</span> Grosh will see you now.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Lunch is at 12:15 today.', function(done){
            let text = 'Lunch is at 12:15 today.';
            let translatedText = 'Lunch is at <span class="highlight">12.15</span> today.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        // British English to American English tests are below

        test('We watched the footie match for a while.', function(done){
            let text = 'We watched the footie match for a while.';
            let translatedText = 'We watched the <span class="highlight">soccer</span> match for a while.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Paracetamol takes up to an hour to work.', function(done){
            let text = 'Paracetamol takes up to an hour to work.';
            let translatedText = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('First, caramelise the onions.', function(done){
            let text = 'First, caramelise the onions.';
            let translatedText = 'First, <span class="highlight">caramelize</span> the onions.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('I spent the bank holiday at the funfair.', function(done){
            let text = 'I spent the bank holiday at the funfair.';
            let translatedText = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('I had a bicky then went to the chippy.', function(done){
            let text = 'I had a bicky then went to the chippy.';
            let translatedText = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })
        
        test('I\'ve just got bits and bobs in my bum bag.', function(done){
            let text = 'I\'ve just got bits and bobs in my bum bag.';
            let translatedText = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('The car boot sale at Boxted Airfield was called off.', function(done){
            let text = 'The car boot sale at Boxted Airfield was called off.';
            let translatedText = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Have you met Mrs Kalyani?', function(done){
            let text = 'Have you met Mrs Kalyani?';
            let translatedText = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Prof Joyner of King\'s College, London.', function(done){
            let text = 'Prof Joyner of King\'s College, London.';
            let translatedText = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Tea time is usually around 4 or 4.30.', function(done){
            let text = 'Tea time is usually around 4 or 4.30.';
            let translatedText = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Highlight translation in Mangoes are my favorite fruit.', function(done){
            let text = 'Mangoes are my favorite fruit.';
            let translatedText = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Highlight translation in I ate yogurt for breakfast.',function(done){
            let text = 'I ate yogurt for breakfast.'
            let translatedText = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
            let locale = 'american-to-british';
            let translation = translator.translate(text,locale);
            assert.equal(translatedText,translation);
            done();
        })

        test('Highlight translation in We watched the footie match for a while.',function(done){
            let text = 'We watched the footie match for a while.';
            let translatedText = 'We watched the <span class="highlight">soccer</span> match for a while.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

        test('Highlight translation in Paracetamol takes up to an hour to work.', function(done){
            let text = 'Paracetamol takes up to an hour to work.';
            let translatedText = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
            let locale = 'british-to-american';
            let translation = translator.translate(text,locale);
            console.log(translation);
            assert.equal(translatedText,translation);
            done();
        })

});
