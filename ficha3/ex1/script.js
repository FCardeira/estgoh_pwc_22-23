document.getElementById("botao").addEventListener("click", function(evt) {
    var paragrafo = document.getElementById("paragrafo");

    console.log(evt);

    paragrafo.style.color = "yellow";
    paragrafo.style.fontFamily = "Comic Sans MS";
    paragrafo.style.fontSize = "100px";
}, false);