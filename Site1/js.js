function countPrice(){
    
    var ro=document.getElementById("chambre").value;
    var nu=document.getElementById("night").value;
  var prix;
    if (ro== "Suite"){prix=nu*360;}
        else if(ro== "Family Room"){ prix=nu*260;}
        else if(ro== "Deluxe Room"){ prix=nu*450;}
        else if(ro== "Classic Room"){ prix=nu*390;}
        else if(ro== "Superior Room"){ prix=nu*600;}
        else if(ro== "Luxury Room"){ prix=nu*700;}
       
    
    document.getElementById("price").value=prix;
}
