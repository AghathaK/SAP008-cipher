const cipher = { encode, decode };
function encode(offset, string) {
  //if (typeof offset != 'number' || typeof string != 'string') {
    //throw TypeError("deu ruim");
  //}
  let cifrar = "";
  for (let i = 0; i < string.length; i++) {
    let numAscii = ((string.charCodeAt(i) - 65 + offset) % 26) + 65;//contagem do alfabeto para fazer a cifra
    cifrar += String.fromCharCode(numAscii);
  }
  return cifrar;
}

function decode(offset, string) {
  //if (typeof offset != 'number' || typeof string != 'string') {
    //throw TypeError();
  //}
  let decifrarMsg = "";
  for (let i = 0; i < string.length; i++)//contagem das letras 
  {
    let numAscii = ((string.charCodeAt(i) - 90 - offset) % 26) + 90;//contagem do alfabeto para fazer a cifra
    decifrarMsg += String.fromCharCode(numAscii);
  }
  return decifrarMsg;
}




export default cipher;
