var current_entry=document.querySelector("#current_entry");
var resultout=false;
var value1=0;
var opr='';
var value2=0;
function display(Entry){
if(opr==''){
    value1=value1*10+Entry;
    current_entry.textContent=value1;
}
else
{
    value2=value2*10+Entry;
    current_entry.textContent=value2;
}
 
}
function operator(Entry){
opr=Entry;
var val1=document.querySelector("#value1");
var operation=document.querySelector("#opr");
val1.textContent=value1;
operation.textContent=opr;
val1.style.display="block";
operation.style.display="block";
current_entry.textContent=0;
}
var clear=document.querySelector("#C");
clear.addEventListener("click",function(){
    if(opr==''){
      value1=parseInt(value1/10);
      current_entry.textContent=value1;
    }
    else
    {
      if (resultout==true) {
        location.reload();
      } else {
        value2=parseInt(value2/10);
        current_entry.textContent=value2;
      }
        
    }
     
})
var equalto=document.querySelector("#equalto");
equalto.addEventListener("click",function(){
    var result;
if(opr=="+"){
result=value1+value2;
}
else if(opr=="-"){
    result=value1-value2;
}
else if(opr=="X"){
    result=value1*value2;
}
else{
    result=value1/value2;
}
var val2=document.querySelector("#value2");
var equal=document.querySelector("#equal");
val2.textContent=value2;
equal.textContent="=";
val2.style.display="block";
equal.style.display="block";
current_entry.textContent=result;
resultout=true;
})

//  used to clearall
//location.reload(); 


 
