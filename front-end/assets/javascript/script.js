let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slide img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")
    //remove a classe, fazendo assim ser um slide infinito
    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
            //adiciona a classe, fazendo assim ser um slide infinito

            //isso cria um loop de add and remove e o slide fica automatico

}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)










  ///texto automatico
  var i = 0;
  // var A = 0;
          var tag = document.getElementById("text");
          var html = document.getElementById("text").innerHTML;
          var attr = tag.setAttribute("data", html);
          var txt = tag.getAttribute("data");
          var speed = 170;
  
          function typeWriter() {
            if (i <= txt.length) {
              document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
              i++;
              setTimeout(typeWriter, speed);
            }
              
          }
  
          //executando a função
  typeWriter();
  
