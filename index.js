import cipher from './cipher.js';

    const encodeBTN = document.getElementById("cifrarBTN")
    const decodeBTN = document.getElementById("decifrarBTN")

encodeBTN.addEventListener("click", () => {
    const boxEncode = document.getElementById("boxText").value.toUpperCase()
    const desloc = parseInt(document.getElementById("deslocBTN").value);
    const result = cipher.encode(desloc, boxEncode);
    document.getElementById("boxText2").value = result;
});

decodeBTN.addEventListener("click", () => {
    const boxDecode = document.getElementById("boxText").value.toUpperCase()
    const desloc = parseInt(document.getElementById("deslocBTN").value);
    const result2 = cipher.decode(desloc, boxDecode);
    document.getElementById("boxText2").value = result2;
});










