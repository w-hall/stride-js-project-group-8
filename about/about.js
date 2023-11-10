(function () {
    "use strict";

    const findBtns = document.querySelectorAll('.btn');
    collectData("avengers");

    for (const eachBtn of findBtns) {
        eachBtn.onclick = function () {
            let myAtribs = eachBtn.attributes.getNamedItem("id").value;
            // console.log(myAtribs);
            collectData(myAtribs);
        };
    }

    /*
        This is poorly built - due to limit on time and limited concepts introduced/allowed for usage.
    */


    function collectData(myAtribs) {
        let movieName = myAtribs;
        let actorNames = [];
        let actorImages = [];
        let rolePerformed = [];

        switch (movieName) {
            case 'avengers':
                actorNames = ['Robert Downey Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'];
                actorImages = ['actors/avengers/Robert_Downey_Jr_2014.jpg', 'actors/avengers/ChrisEvans_2023.jpg', 'actors/avengers/Chris_Hemsworth_2019.jpg', 'actors/avengers/Mark_Ruffalo_2017.jpg'];
                rolePerformed = ['Tony Stark ... Iron Man', 'Steve Rogers ... Captain America', 'Thor', 'Bruce Banner ... Hulk'];
                gatherCard(actorNames, actorImages, rolePerformed);
                break;

            case 'starwars':
                actorNames = ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Peter Cushing'];
                actorImages = ['actors/starwars/Mark_Hamill_2019.jpg', 'actors/starwars/Harrison_Ford_2017.jpg', 'actors/starwars/Carrie_Fisher_2013.jpg', 'actors/starwars/Peter_Cushing_1958.png'];
                rolePerformed = ['Luke Skywalker', 'Han Solo', 'Princes Lai', 'Grand Moof Willhuff Tarkin'];
                gatherCard(actorNames, actorImages, rolePerformed);
                break;

            case 'missioni':
                actorNames = ['Tom Cruise', 'Jeremy Renner', 'Simon Pegg', 'Paula Patton'];
                actorImages = ['actors/mi/Tom_Cruise_2019.jpg', 'actors/mi/Jeremy_Renner_2023.jpg', 'actors/mi/Simon_Pegg_2016.jpg', 'actors/mi/Paula_Patton_2015.jpg'];
                rolePerformed = ['Ethan Hunt', 'William Brandt', 'Benji Dunn', 'Jane Carter'];
                gatherCard(actorNames, actorImages, rolePerformed);
                break;

            case 'lotr':
                actorNames = ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom', 'Sean Bean'];
                actorImages = ['actors/lotr/Elijah_Wood_2019.jpg', 'actors/lotr/Ian_McKellen_2019.jpg', 'actors/lotr/Orlando_Bloom_2013.jpg', 'actors/lotr/Sean_Bean_2017.jpg'];
                rolePerformed = ['Frodo Baggins', 'Gandalf', 'Legolas', 'Boromir'];
                gatherCard(actorNames, actorImages, rolePerformed);
                break;

            default:
                actorNames = ['unknown'];
                actorImages = ['unkown'];
                rolePerformed = ['unknown'];
                gatherCard(actorNames, actorImages, rolePerformed);
                break;
        }

        function gatherCard(ol_actorNames, ol_actorImages, ol_rolePerformed) {
            // console.log(ol_actorNames);
            // console.log(ol_actorImages);
            // console.log(ol_rolePerformed);

            //simultaneous pull of fixed tabular records ... did NOT do array.length - 1 ... due to fixed structure and previously noted limitations.
            for (let i = 0; i < 4; i++) {
                let nameOfActor = ol_actorNames[i];
                let rolePerformedactorImage = ol_actorImages[i];
                let actRoleCardrolePerformed = ol_rolePerformed[i];
                // console.log(nameOfActor, rolePerformedactorImage, actRoleCardrolePerformed);
                
                // actorNameCard = document.querySelectorAll(".actor_name h2")[i].innerHTML;
                // actorImgCard = document.querySelectorAll(".actor_image img")[i].src
                // actRoleCard = document.querySelectorAll(".role_description p")[i].innerHTML;
                
                document.querySelectorAll(".actor_name h2")[i].innerHTML = nameOfActor;
                document.querySelectorAll(".actor_image img")[i].src = rolePerformedactorImage;
                document.querySelectorAll(".role_description p")[i].innerHTML = actRoleCardrolePerformed;

                // console.log(actorNameCard, actorImgCard, rolePerformed);


            }
        }
    }

})();