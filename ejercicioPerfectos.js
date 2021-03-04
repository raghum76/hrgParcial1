for(i=1;i<=100;i++)
   if (esPerfecto(i)==true)
      console.log(i + “ si es perfecto”);
 
function esPerfecto(num){
    if (num==sumaDivisores(num))
return true;
else
return false;
}
 
function sumaDivisores(num){
   let suma=0;
   for(let i=1;i<num;i++)
      if(num%i==0)
         suma+=i;
   return suma;}
