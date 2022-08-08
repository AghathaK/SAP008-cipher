    const nota1 = 700;
    const nota2 = 850;

    const notas = [nota1,nota2]


    let soma = 0;
    for (let item of notas) {
    soma = soma + item };
    let diff = nota2 - nota1
    if (diff < 100){
    console.log(soma/notas.length)}

    else {
    console.log("TERCEIRO CORRETOR DEVE SER CHAMADO");
}
