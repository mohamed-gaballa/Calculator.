function oppendvalue(value){
    document.getElementById("display").value +=value;}

function cleardisplay(){
    document.getElementById("display").value="";}

function calculator(){
try {
        document.getElementById("display").value=eval(document.getElementById("display").value);}
catch  {
    alert=("try again");}
}
