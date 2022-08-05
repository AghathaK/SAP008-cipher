  const cipher = {encode,decode};
  function encode(offset,string){
    if(typeof offset!='number'|| typeof string!='string'){
      throw TypeError();
     }
       let boxtext="";
        for (let i = 0 ; i <string.length;i++)//contagem das letras 
        {
         let numAscii = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;//contagem do alfabeto para fazer a cifra
         boxtext += string.fromCharCode(numAscii);
       }
       return boxtext;
      }

  function decode(offset,string){
    if(typeof offset!='number'|| typeof string!='string'){
      throw TypeError();
     }
       let boxtext="";
        for (let i = 0 ; i <string.length;i++)//contagem das letras 
        {
         let numAscii = ((string.charCodeAt(i) - 90 + offset) % 26) + 90;//contagem do alfabeto para fazer a cifra
         boxtext += string.fromCharCode(numAscii);
       }
       return boxtext;
      }




export default cipher;
