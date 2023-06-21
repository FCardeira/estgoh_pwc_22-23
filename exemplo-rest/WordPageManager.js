document.getElementById("add_word_btn").addEventListener("click", function () {
    const wordValue = document.getElementById("word_input").value;

    var createWordObj = {
        word: wordValue
    };

    addPalavra(createWordObj);

}, false);