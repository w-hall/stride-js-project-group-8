(function () {
    "use strict";

    // store movie data in object and access it via movie name key
    const movieData = {
        'avengers': {
            actorNames: ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
            actorImages: ['actors/avengers/Robert_Downey_Jr_2014.jpg', 'actors/avengers/ChrisEvans_2023.jpg', 'actors/avengers/Chris_Hemsworth_2019.jpg', 'actors/avengers/Mark_Ruffalo_2017.jpg'],
            rolePerformed: ['Tony Stark ... Iron Man', 'Steve Rogers ... Captain America', 'Thor', 'Bruce Banner ... Hulk']
        },
        'starwars': {
            actorNames: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Peter Cushing'],
            actorImages: ['actors/starwars/Mark_Hamill_2019.jpg', 'actors/starwars/Harrison_Ford_2017.jpg', 'actors/starwars/Carrie_Fisher_2013.jpg', 'actors/starwars/Peter_Cushing_1958.png'],
            rolePerformed: ['Luke Skywalker', 'Han Solo', 'Princes Lai', 'Grand Moof Willhuff Tarkin']
        },
        'missioni': {
            actorNames: ['Tom Cruise', 'Jeremy Renner', 'Simon Pegg', 'Paula Patton'],
            actorImages: ['actors/mi/Tom_Cruise_2019.jpg', 'actors/mi/Jeremy_Renner_2023.jpg', 'actors/mi/Simon_Pegg_2016.jpg', 'actors/mi/Paula_Patton_2015.jpg'],
            rolePerformed: ['Ethan Hunt', 'William Brandt', 'Benji Dunn', 'Jane Carter']
        },
        'lotr': {
            actorNames: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom', 'Sean Bean'],
            actorImages: ['actors/lotr/Elijah_Wood_2019.jpg', 'actors/lotr/Ian_McKellen_2019.jpg', 'actors/lotr/Orlando_Bloom_2013.jpg', 'actors/lotr/Sean_Bean_2017.jpg'],
            rolePerformed: ['Frodo Baggins', 'Gandalf', 'Legolas', 'Boromir']
        }
    }

    const findBtns = document.querySelectorAll('.btn');
    collectData("avengers");

    // use forEach to iterate over findBtns
    // replace onclick handler by using getAttribute directly
    findBtns.forEach(button => {
        button.addEventListener('click', () => {
            const myAtribs = button.getAttribute("id");
            collectData(myAtribs);
        });
    });

    // get data for current movie
    function collectData(movieName) {
        const { actorNames, actorImages, rolePerformed } = movieData[movieName];
        gatherCard(actorNames, actorImages, rolePerformed);
    }

    // Refactored to use forEach to iterate through actor names, images, and roles
    // Replaced innerHTML with textContent
    function gatherCard(actorNames, actorImages, rolePerformed) {
        actorNames.forEach((actorName, index) => {
            document.querySelectorAll(".actor_name h2")[index].textContent = actorName;
            document.querySelectorAll(".actor_image img")[index].src = actorImages[index];
            document.querySelectorAll(".role_description p")[index].textContent = rolePerformed[index];
        });
    }
})();