const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    americanToBritish(text){
        let str = text;
        str = text.split(" ")
       
        str[str.length-1]=str[str.length-1].slice(0,-1);
        str = str.map(word=>word.toLowerCase());
        // getting rid of the . at the end
        let wordToReplace ='';
        let doubleWordToReplace=false;
        let wordToAppend;
        let tripleWordSuccess=false;
        let capitalizedWord;
    
        str.map((word,i)=>{

            // replaces ':' with '.' for dates!
            if(word.includes(':') && word.length>1){
                 let target = word.replace(':',".")
                 text=text.replace(word,`<span class="highlight">${target}</span>`);
            }
          
            if(doubleWordToReplace){
                word = wordToAppend +" "+ word;
            }
        
            Object.keys(americanOnly).map((translated)=>{
                if(translated.match(word)!==null){
                 

                    // if the word we are looking to translate has more than 2 words
                    if(translated.match(word).input.split(" ").length>2 && translated.match(word).input.split(" ")[0]==word && tripleWordSuccess===false){
    
                        if(translated.match(word).input.split(" ")[2]==str[i+2]){
                            capitalizedWord = translated.match(word).input;
                            capitalizedWord = capitalizedWord.split(" ")

                            //capitalize first letter of each character then return it
                            capitalizedWord[0] = capitalizedWord[0].charAt(0).toUpperCase()+capitalizedWord[0].slice(1);
                            capitalizedWord[1] = capitalizedWord[1].charAt(0).toUpperCase()+capitalizedWord[1].slice(1);
                            capitalizedWord = capitalizedWord.join(" ");
                            // capitalizedWord.map(el=>el[0].toUpperCase());

                            text=text.replace(capitalizedWord,`<span class="highlight">${americanOnly[translated.match(word).input]}</span>`);

                            tripleWordSuccess = true;

                        }
                    
                    }


                    // if the word we are looking to translate has 2 words
                    if(translated.match(word).input.split(" ").length===2 && translated.match(word).input.split(" ")[0]==word && doubleWordToReplace===false){
                     
                        doubleWordToReplace = true;
                        wordToAppend = word;
                    }

                    if(translated.match(word).input==translated.match(word)[0]){
                        
                        wordToReplace = americanOnly[translated.match(word).input]
                        text=text.replace(word,`<span class="highlight">${wordToReplace}</span>`);
                        doubleWordToReplace=false;
                      
                    }
                 
                }
            })

            // iterates over every key value pair in american-to-british-spelling object
            Object.keys(americanToBritishSpelling).map((translated)=>{
                if(translated.match(word)!==null){

                    if(translated.match(word).input==translated.match(word)[0]){
                      
                        wordToReplace = americanToBritishSpelling[translated.match(word).input]
                        text=text.replace(word,`<span class="highlight">${wordToReplace}</span>`);
                    }

                }
            })

            Object.keys(americanToBritishTitles).map((translated)=>{
                if(translated.match(word)!==null){

                    if(translated.match(word).input==translated.match(word)[0]){
                       
                        capitalizedWord = word.charAt(0).toUpperCase()+word.slice(1);
                        wordToReplace = americanToBritishTitles[translated.match(word).input]
                        wordToReplace = wordToReplace.charAt(0).toUpperCase() + wordToReplace.slice(1);   
                        text=text.replace(capitalizedWord,`<span class="highlight">${wordToReplace}</span>`);
    
                    }
                   
                }
            })


        })
     
        return text;
     
    }

    BritishToAmerican(text){
        let str = text;
        str = text.split(" ")
        str[str.length-1]=str[str.length-1].slice(0,-1);
        str = str.map(word=>word.toLowerCase());
        // getting rid of the . at the end
        let wordToReplace ='';
        let doubleWordToReplace=false;
        let wordToAppend;
        let tripleWordSuccess=false;
        let capitalizedWord;
   
       
        // we are inverting db object of american-to-british-spelling
        const BritishToAmericanSpelling = this.globalInvert(americanToBritishSpelling);
        const BritishToAmericanTitles = this.globalInvert(americanToBritishTitles);

        str.map((word,i)=>{
        
            // replaces '.' with ':' for dates!
            if(word.includes('.') && word.length>1){
                 let target = word.replace('.',":")
                 text=text.replace(word,`<span class="highlight">${target}</span>`);
            }
          
            if(doubleWordToReplace){
                word = wordToAppend +" "+ word;
                
            }
        
            Object.keys(britishOnly).map((translated)=>{
                if(translated.match(word)!==null){
                 

                    // if the word we are looking to translate has more than 2 words
                    if(translated.match(word).input.split(" ").length>2 && translated.match(word).input.split(" ")[0]==word && tripleWordSuccess===false){
    
                        if(translated.match(word).input.split(" ")[2]==str[i+2]){

                            text=text.replace(translated.match(word).input,`<span class="highlight">${britishOnly[translated.match(word).input]}</span>`);
                            tripleWordSuccess = true;

                        }
                    }

                    // if the word we are looking to translate has 2 words
                    if(translated.match(word).input.split(" ").length===2 && translated.match(word).input.split(" ")[0]==word && doubleWordToReplace===false){
                     
                        doubleWordToReplace = true;
                        wordToAppend = word;
                    
                    }

                    if(translated.match(word).input==translated.match(word)[0]){
                      

                        wordToReplace = britishOnly[translated.match(word).input]

                        // we want to check if first character of the match is an upper case in our database
                        // uppercase first character means it is a private name
        
                       if(britishOnly[translated.match(word).input].charCodeAt(0)<91 && britishOnly[translated.match(word).input].charCodeAt(0)>64){
                           word = word.charAt(0).toUpperCase() + word.slice(1);
                           
                       }

                       

                        text=text.replace(word,`<span class="highlight">${wordToReplace}</span>`);

                        doubleWordToReplace=false;
                    }
                 
                }
            })

            // iterates over every key value pair in american-to-british-spelling object
            Object.keys(BritishToAmericanSpelling).map((translated)=>{
                if(translated.match(word)!==null){

                    if(translated.match(word).input==translated.match(word)[0]){
                      
                        wordToReplace = BritishToAmericanSpelling[translated.match(word).input]
                        text=text.replace(word,`<span class="highlight">${wordToReplace}</span>`);
                    }

                }
            })

            Object.keys(BritishToAmericanTitles).map((translated)=>{
                if(translated.match(word)!==null){

                    if(translated.match(word).input==translated.match(word)[0]){
                       
                        capitalizedWord = word.charAt(0).toUpperCase()+word.slice(1);
                        wordToReplace = BritishToAmericanTitles[translated.match(word).input]
                        wordToReplace = wordToReplace.charAt(0).toUpperCase() + wordToReplace.slice(1);   
                        text=text.replace(capitalizedWord,`<span class="highlight">${wordToReplace}</span>`);
    
                    }
                }
            })
        })
     
        return text;
    }

    // helper function that will invert the key value pairing in our db object
    globalInvert(object){
        var new_obj = {};
        for (var prop in object) {
        if(object.hasOwnProperty(prop)) {
        new_obj[object[prop]] = prop;
        }
        }
        return new_obj;
    }

    translate(text,locale){
        let translation;
       if(locale==='american-to-british'){
        translation=this.americanToBritish(text)
       }

       if(locale==='british-to-american'){
        translation=this.BritishToAmerican(text);
       }
       if(translation===text){
           return "Everything looks good to me!"
       }
       return translation;
    }
}

module.exports = Translator;