document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('randomjokebutton').addEventListener('click', function() {
        getJoke('Any');
        document.title = 'A Random Joke';
        document.getElementById('title').textContent = 'A Random Joke';
    });
        document.getElementById('programmingjokebutton').addEventListener('click', function() {
        getJoke('Programming');
        document.title = 'Programming';
        document.getElementById('title').textContent = 'Programming';
    });

    document.getElementById('miscjokebutton').addEventListener('click', function() {
        getJoke('Misc');
        document.title = 'Misc';
        document.getElementById('title').textContent = 'Misc';
    });

    document.getElementById('punjokebutton').addEventListener('click', function() {
        getJoke('Pun');
        document.title = 'A Random Pun';
        document.getElementById('title').textContent = 'A Random Pun';
    });

    document.getElementById('spookyjokebutton').addEventListener('click', function() {
        getJoke('Spooky');
        document.title = 'Spooky';
        document.getElementById('title').textContent = 'Spooky';
    });

    document.getElementById('christmasjokebutton').addEventListener('click', function() {
        getJoke('Christmas');
        document.title = 'Christmas';
        document.getElementById('title').textContent = 'Christmas';
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