
let mainmodule = require("./module");

let main1 = function(){

    let mpromise = mainmodule.demo3();
    mpromise.then(function(data){

        console.log(data);

         mainmodule.demo4(function(name){
             console.log(name);
         });
         
    }).catch(function(err){
        console.log(err);
    })
 
}

main1();