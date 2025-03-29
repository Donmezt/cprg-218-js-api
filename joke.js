document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('randomjokebutton').addEventListener('click', function() {
        getJoke('Any');

        document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });

    document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });

    document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });

    document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });

    document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });

    document.getElementById('').addEventListener('click, function()'{
        getJoke('')

    });


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