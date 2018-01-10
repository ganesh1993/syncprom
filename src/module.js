let moduleDemo = {

    "demo1" : function(){
        a=10;
        b=20;

        console.log(a+b);
    },

    "demo2" : function(){
        x=10;
        y=20;

        console.log(x*y);
    },

    "demo3" : function(){
        return new Promise(function(resolve,reject){
             p=20;
             q=10;

             console.log(p-q);
             resolve(p);


        })
    },

    "demo4" : function(callback){
        let name = "affixus";

        callback(name);
        
    }
}

module.exports = moduleDemo;