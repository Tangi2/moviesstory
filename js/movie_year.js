var datasets={}

function load_data() {
    //load data
    d3.csv('./data/top_movies.csv', function (data) {
        data.forEach(function (d) {
            datasets[d.Year] = {Title: d.Title, genre: d.Genre, country:d.Country};
        });
    });
}

$( document ).ready(function() {
    load_data();
});

function print_hit(year){

    var born_tube=document.getElementById("born_tube");
    while (born_tube.firstChild) {
        born_tube.removeChild(born_tube.firstChild);
    }

    year=String(year);
    var the_movie = {label:datasets[Year].Title,
            genre: datasets[Year].Genre,
            country: datasets[Year].Country};

    // affiche le nombre de semaines dans le top de la chanson
    var nb_g = document.createElement('div');
    nb_g.id="genre";
    var subdiv=document.createElement('div');
    subdiv.id = 'titledata';
    var span1=document.createElement('p');
    span1.innerText=String(the_movie.data);
    span1.className="printhit";
    span1.style.fontSize="2em";
    var span2=document.createElement('p');
    span2.className="printhit";
    span2.innerText="genre";
    span2.style.fontSize="0.6em";
    subdiv.appendChild(span1);
    subdiv.appendChild(span2);
    nb_g.appendChild(subdiv);

    // message avec titre de la chanson
    var hit_tube_born = document.createElement('div');
    hit_tube_born.id="tube";
    var phrase = document.createElement('h1');
    phrase.className="description_tube";
    phrase.innerText="Le film qui a bercé ton enfance est ";
    phrase.style.fontSize="1.2em";
    phrase.style.color="#3E3636";
    var song_title = document.createElement('h1');
    song_title.className="description_tube";
    song_title.id="the_movie";
    song_title.innerText=the_movie.label;
    song_title.style.color="#359bb7";
    var song_artist=document.createElement('h1');
    song_artist.className="printhit";
    song_artist.innerText="de "+the_movie.country;
    song_artist.style.color="#af82b7";
    song_artist.style.fontSize="1.2em";

    hit_tube_born.appendChild(phrase);
    hit_tube_born.appendChild(song_title);
    hit_tube_born.appendChild(song_artist);


    born_tube.appendChild(nb_g);
    born_tube.appendChild(hit_tube_born);
}
