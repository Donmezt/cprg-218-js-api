document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('randomjokebutton').addEventListener('click', function() {
        getJoke('Any');
        document.title = 'A random joke';
        document.getElementById('title').textContent = '';
    });
        document.getElementById('programmingjokebutton').addEventListener('click', function() {
        getJoke('Programming');
        document.title = 'Programming';
    });

    document.getElementById('miscjokebutton').addEventListener('click', function() {
        getJoke('Misc');
        document.title = 'Misc';
    });

    document.getElementById('punjokebutton').addEventListener('click', function() {
        getJoke('Pun');
        document.title = 'A random Pun';
    });

    document.getElementById('spookyjokebutton').addEventListener('click', function() {
        getJoke('Spooky');
        document.title = 'Spooky';
    });

    document.getElementById('christmasjokebutton').addEventListener('click', function() {
        getJoke('Christmas');
        document.title = 'Christmas';
    });

});


function getJoke(category) {

    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

  
    fetch(url)
        .then(response => response.json()) 
        .then(data => { 
            let jokeText = '';
            if (data.type === 'single') {
                jokeText = data.joke;
            } else if (data.type === 'twopart') {
                jokeText = `${data.setup} ... ${data.delivery}`; 
            }


            document.getElementById("joke").textContent = jokeText;
        })
        .catch(error => {

            document.getElementById("joke").textContent = 'Sorry, there was an error fetching the joke!';
        });
    }