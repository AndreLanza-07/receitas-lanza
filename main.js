//let vl=document.getElementsByClassName('tot')
//let qtd=document.getElementsByClassName('int')
//let preco=document.getElementsByClassName('num')

//function calcular(){
// let qtd= parseFloat(int.value) || 0;
//let preco = parseFloat(preco.value) || 0;
// vl.textContent = (qtd*preco).toFixed(2);
//}
//preco=parseFloat(preco.value);
//qtd.addEventListener('input',calcular);
//preco.addEventListener('input',calcular);



function calcular() {
  const linhas = document.querySelectorAll('table tr');
  let togel = 0;

  linhas.forEach((linha, index) => {
    if (index > 0 && index < linhas.length - 1) {
      const preco = linha.querySelector(".num").value;
      const quantidade = linha.querySelector(".int").value;
      const total = preco * quantidade || 0;
      linha.querySelector(".tot").textContent = total.toFixed(2);
      togel += total;
    } 
  });
  document.getElementById("total").textContent = togel.toFixed(2);
}

