function expandCard(franca){
    franca.style.transform = 'scale(1.07)'
    franca.style.boxShadow = '8px 8px 16px rgba(0,0,0,0.4)'
    franca.style.backgroundColor='rgb(30,31,120)'
    franca.style.color='white'
  }
  function shrinkCard(franca){
    franca.style.transform = 'scale(1)'
    franca.style.boxShadow = 'none'
    franca.style.backgroundColor ='#dee3e1'
    franca.style.boxShadow = 'inset 0 0 10px rgba(0, 0, 0, 0.5)';
    franca.style.color='black'
  }
  var slides = ['aviao1.png','s1 (1).jpeg','aviao3.jpg']
  var tam = slides.length
  var satual = 0
  var tmpslider
  function trocaAutomatica(){
    satual++
    if(satual >= tam){
      satual =0
    }
    document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[satual]}')`
  }
  function iniciaSlider(){
  document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[satual]}')`
    tmpslider=setInterval(trocaAutomatica,2500)
  }
  function parar(){
    clearInterval(tmpslider)
  }
  function troca(dir){
    satual += dir
    if(satual < 0){
      satual = 4
    }else if(satual >= tam){
      satual = 0
    }
      document.querySelector('#dvSlider').style.backgroundImage=`url('${slides[satual]}')`
      clearInterval(tmpslider)
    }
  document.getElementById('imagemvirar').addEventListener('click', function() {
      imagem = document.getElementById('imagem');
      imagem.classList.toggle('flipped');
      setTimeout(() => {
          if (imagem.classList.contains('flipped')) {
              imagem.src = 'parispreçofinal.png';
          } else {
              imagem.src = 'pariscima.jpg';
          }
      }, 300);
  });
  document.getElementById('imagemvirar1').addEventListener('click', function() {
      imagem = document.getElementById('imagem1');
      imagem.classList.toggle('flipped');
      setTimeout(() => {
          if (imagem.classList.contains('flipped')) {
              imagem.src = 'indiapreçofinal.png';
          } else {
              imagem.src = 'agracima.jpg';
          }
      }, 300);
  });
  document.getElementById('imagemvirar2').addEventListener('click', function() {
      imagem = document.getElementById('imagem2');
      imagem.classList.toggle('flipped');
      setTimeout(() => {
          if (imagem.classList.contains('flipped')) {
              imagem.src = 'inglapreçofinal.png';
          } else {
              imagem.src = 'londrescima.jpg';
          }
      }, 300);
  });
  document.getElementById('imagemvirar3').addEventListener('click', function() {
      imagem = document.getElementById('imagem3');
      imagem.classList.toggle('flipped');
      setTimeout(() => {
          if (imagem.classList.contains('flipped')) {
              imagem.src = 'itapreçofinal.png';
          } else {
              imagem.src = 'romacima.jpg';
          }
      }, 300);
  });