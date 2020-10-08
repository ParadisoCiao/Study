var alt = "";
var _num = 4;
for(var i=1; i<=_num; i++){
    var blank = "";
    for(var j=1; j<=_num-i; j++){   
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){       
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";   
}
for(var i=_num-1; i>0; i--){       
    var blank = "";
    for(var j=1; j<=_num-i; j++){  
        blank += " ";
    }
    var stars = "";
    for(var m=1; m<=i; m++){      
        stars += "*"+" ";
    }
    alt += blank + stars + "\n";  
}
console.log(alt);
