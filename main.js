var name1="Prakhar";
var name2="Singh";
var name=name1.concat(name2);
console.log(name);
document.getElementById("example1").innerHTML= name;
var vege1=["Ladyfinger","spinach","Brocolli","Cabbage"];
vege1.push("potato");
vege1.pop();
vege1.unshift("Green Chilli");
var vege2="";
for(i=0;i<vege1.length; i++){
    vege2=vege2+vege1[i]+"<br>";
}
document.getElementById("example2").innerHTML= vege2;
var num1=["7","12","59","949","726"];
var maxnum=Math.max.apply(Math,num1);
num1.reverse();
document.getElementById("example3").innerHTML= num1;
