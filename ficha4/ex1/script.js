function getUserHTML(user) {
    return '<div class="d-flex flex-column justify-content-center align-items-center mx-2"><p class="fw-bold">' + user.first_name + ' ' + user.last_name + '</p><p>' + user.email + '</p><img src="' + user.avatar + '" width="128px" height="128px" /></div>';
}

// Adicionar utilizador ao contentor
function addUserToContainer(user) {
    const contentorUtilizadores = document.getElementById("user-container");
    contentorUtilizadores.innerHTML += getUserHTML(user);
}

function cleanContainer() {
    const contentorUtilizadores = document.getElementById("user-container");
    contentorUtilizadores.innerHTML = "";
}


window.onload = function () {

    // Obter utilizadores
    fetch('https://reqres.in/api/users?per_page=10').then(
        (response) => { 
            response.json().then(
            (data) => { 
                for(var i = 0; i < data.data.length; i++) {
                    addUserToContainer(data.data[i]);
                }
            }); 
        });

};

document.getElementById("search-button").addEventListener("click", function() {

    const search = document.getElementById("search-input").value;
    cleanContainer();

    if(search === "") {
        document.getElementById("user-container").innerHTML = "<p>Não introduziu um id para pesquisa.</p>";
        return;
    }

    fetch('https://reqres.in/api/users/' + search).then(
        (response) => {
            response.json().then(
                (data) => {
                    addUserToContainer(data.data);
                }
            )
        },
        (error) => { console.log(error); }
    );


}, false);