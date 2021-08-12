var name,address,units,dates,bill;

//  when calculate button click


function Calculate(){

    document.getElementById('table').style.display='block';
    //name lines
     name=document.getElementById('name').value;
     if(name == ''){
         alert("Enter Your Name");
     }else{
        var tname=name;
        document.getElementById('tname').innerHTML=tname;
     }

     //address lines
     address=document.getElementById('address').value;
     if(address == ''){
         alert("Enter Your Address")
     }else{
        var taddress=address;
        document.getElementById('taddress').innerHTML=taddress;
     }

    //units Lines
    units=document.getElementById('units').value;
    if(units == ''){
        alert("Enter Units");
    }else{
        var tunits=units;
        document.getElementById('tunit').innerHTML=tunits;
    }

    //date lines
    dates=document.getElementById('dates').value;
    if(dates == ''){
        alert("Enter Dates");
    }else{
        var tdates=dates;
        document.getElementById('tdates').innerHTML=tdates;
    }

    document.getElementById('payBill').innerHTML="Your Bill Is : RS." + cal() + ".00";

    function cal(){
       return bill=(units*dates)+2500;
    }

}




function Reset(){
    document.getElementById('name').value='';
    document.getElementById('tname').innerHTML='';

    document.getElementById('address').value='';
    document.getElementById('taddress').innerHTML='';

    document.getElementById('units').value='';
    document.getElementById('tunit').innerHTML='';

    document.getElementById('dates').value='';
    document.getElementById('tdates').innerHTML='';

    document.getElementById('payBill').style.display='none';
    document.getElementById('table').style.display='none';
}

function Reload(){
    location.reload();
}

function Print(){
    window.print();
}