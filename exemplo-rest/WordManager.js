function getPalavras() {
    fetch('https://wordle.filipecardeira.pt/words/').then(
        (response) => {
            response.json().then(
                (data) => {
                    console.log('Recebi resposta do servidor.');
                    console.log(data);
                });
        });

    console.log('Acabei de chamar a função.');    }

function addPalavra(palavra) {
    fetch('https://wordle.filipecardeira.pt/words/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(palavra),
    }).then(
        (response) => {
            response.json().then(
                (data) => {
                    console.log(data);
                }
            )
        },
        (error) => { console.log(error); }
    );
}

function deletePalavra(id) {
    fetch('https://wordle.filipecardeira.pt/words/' + id, {
        method: 'DELETE',
        }).then(
            (response) => {
                response.json().then(
                    (data) => {
                        console.log(data);
                    }
                )
            },
            (error) => { console.log(error); }
        );
    

}

window.onload = function () {
    getPalavras();
}