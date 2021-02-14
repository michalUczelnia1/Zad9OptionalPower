function optionalPow(a, b) 
   {
    document.getElementById('btOk').addEventListener('click',(event)=>{
    console.log(Math.pow(a,b));
    
  } );

   document.getElementById('btCancel').addEventListener('click',(event)=>{
   console.log(Math.pow(b,a));
   
  } );
   }


   var a=2;
   var b=3;
   optionalPow(a,b);
   