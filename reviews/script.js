(function() {
  let total_movie = ["Avengers", "Star Wars", "Mission Impossible", "The Lord of the Rings"];

  // list movies
  function createMovieButton(moviesList) {
    let divTag = document.createElement('div');
    for (let i = 0; i < moviesList.length; i = i + 1) {
      let button = document.createElement("button");
      button.innerHTML = moviesList[i];
      button.addEventListener('click', () => {
        //document.querySelector('#movie_site').innerHTML = `${moviesList[i]} here`
        callMe(`${moviesList[i]}`)
      })
      divTag.appendChild(button);
    }
    return divTag;
  }
  document.querySelector('#movieButton').appendChild(createMovieButton(total_movie));

  // DATA
  let avengers_movieTitle = "Avengers";
  let avengers_actors = ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"];
  let avengers_summary = "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  let avengers_images = [
    "avengers/avengers1.jpg",
    "avengers/avengers2.jpg",
    "avengers/avengers3.jpg"
  ];
  let avengers_reviews = `Marvel's The Avengers" is an absolute cinematic masterpiece that delivers on every level. As a longtime fan of the Marvel Universe, this film was a dream come true. It perfectly combines the extraordinary talents of some of our favorite superheroes into an action-packed, funny, and visually stunning adventure.`;

  let starwars_movieTitle = "Star Wars";
  let starwars_actors = ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"];
  let starwars_summary = "Luke Skywalker joins forces with a Jedi Knight";
  let starwars_images = [
    "starwars/starwars1.jpg",
    "starwars/starwars2.jpg",
    "starwars/starwars3.jpg"
  ];
  let starwars_reviews = `"Star Wars: The Rise of Skywalker" is an epic conclusion to the Skywalker saga, and it's a film that deserves a full five-star rating. It's important to address some of the criticisms about the movie not aligning with certain comic book lore or expanded universe material, but let's be clear: this is a cinematic experience, and it's meant to be enjoyed as such.`

  let mission_impossible_movieTitle = "Mission: Impossible";
  let mission_impossible_actors = ["Tom Cruise", "Jeremy Renner", "Simon Pegg", "Paula Patton"];
  let mission_impossible_summary = "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name."
  let mission_impossible_images = [
    "mi/mi1.jpg",
    "mi/mi2.jpg",
    "mi/mi3.jpg"
  ]
  let mission_impossible_reviews = `Prepare to have your adrenaline pumping and your breath stolen as Mission Impossible 7 delivers an explosive and jaw-dropping cinematic experience that sets the bar for summer blockbusters in 2023. With heart-pounding action sequences, mind-bending stunts, and a gripping narrative, this film solidifies its status as a modern masterpiece and a must-see for action enthusiasts and moviegoers alike.`

  let lotr_movieTitle = "The Lord of the Rings";
  let lotr_actors = ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Sean Bean"];
  let lotr_summary = "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  let lotr_images = [
    "lotr/lotr1.jpg",
    "lotr/lotr2.jpg",
    "lotr/lotr3.jpg"
  ];
  let lotr_reviews = `The Lord of the Rings trilogy is one of the biggest trilogies of all time. Its first volume, like the other two, has earned a colossal success as what it genuinely deserves. It has been nominated as well as acquired numerous sets of awards - proof of its extraordinaire quality, one can say. Nonetheless, it is indeed worth watching, for it is a one-in-a-million obra maestra. 
  As a prime testament, the plot, graphics, cinematography, and the ensemble cast are noteworthy. It transcended the people's expectations and the standard.  The storyline is simply phenomenal. And in regard to its visuals, even with small CGI used, it is exceptionally good to the eye, especially with its ably-detailed, well-designed and proficiently-crafted studio backgrounds, props, and wardrobes, not to mention, the real settings. `

  // DATA_END

  function callMe(movieItem) {
    //console.log('callme')
    if (movieItem == "Avengers") {
      loadBody(avengers_movieTitle, avengers_actors, avengers_summary, avengers_images, avengers_reviews);
    } else if (movieItem == "Star Wars") {
      loadBody(starwars_movieTitle, starwars_actors, starwars_summary, starwars_images, starwars_reviews);
    } else if (movieItem == "Mission Impossible") {
      loadBody(mission_impossible_movieTitle, mission_impossible_actors, mission_impossible_summary, mission_impossible_images, mission_impossible_reviews);
    } else if (movieItem == "The Lord of the Rings") {
      loadBody(lotr_movieTitle, lotr_actors, lotr_summary, lotr_images, lotr_reviews);
    }
  }

  // make this function accessible outside
  window.externalCallMe = callMe;


  function createListOfActors(actorsList) {
    let ulTag = document.createElement('ul');
    for (let i = 0; i < actorsList.length; i = i + 1) {
      let liTag = document.createElement('li');
      liTag.innerHTML = `${actorsList[i]}`
      ulTag.appendChild(liTag);
    }
    return ulTag;
  }

  function createPictureList(imagesList) {
    let divTag = document.createElement('div');
    divTag.setAttribute('class', 'pic_child');
    for (let i = 0; i < imagesList.length; i = i + 1) {
      let imgTag = document.createElement('img');
      imgTag.src = `images/${imagesList[i]}`;
      imgTag.width = '200';
      imgTag.height = '300';

      divTag.appendChild(imgTag);
    }

    return divTag;
  }

  // Add Title to the head
  let movieName = document.createTextNode(` - *****`);
  document.querySelector('head title').appendChild(movieName);


  function loadBody(movieTitle, actorsList, summary, imagesList, review) {
    //console.log('loadBody')
    // Add H1 Title
    document.querySelector('.title h1').remove();
    let h1Tag = document.createElement('h1');
    let h1Title = document.createTextNode(`${movieTitle}`);
    h1Tag.appendChild(h1Title);
    document.querySelector(".title").appendChild(h1Tag);

    // Add Summary
    document.querySelector('.summary p').remove();
    let pTag = document.createElement('p');
    let pInnerHTML = document.createTextNode(`${summary}`);
    pTag.appendChild(pInnerHTML);
    document.querySelector('.summary').appendChild(pTag);

    // Add List of Actors
    document.querySelector('.actors ul').remove();
    document.querySelector('.actors').appendChild(createListOfActors(actorsList));

    // Add images to site
    document.querySelector('.images div').remove();
    document.querySelector('.images').appendChild(createPictureList(imagesList));

    // Add reviews to site
    document.querySelector('.myreviews p').remove();
    let reviewTag = document.createElement('p');
    reviewTag.setAttribute("class", "blockquote");
    let reviewHTML = document.createTextNode(`${review}`);
    reviewTag.appendChild(reviewHTML);
    document.querySelector('.myreviews').appendChild(reviewTag);



    /*
    <div class="formDiv">
      <form id="formReview">
        <textarea id="myReview" placeholder="How's That Movie Looking?" required></textarea>
        <input id="mySubmit" type="submit" class="hideButton" value="Post" />
      </form>
    </div>
    */
    let htmlDiv = document.createElement('div');
    htmlDiv.setAttribute('class', 'formDiv');

    let htmlForm = document.createElement('form');
    htmlForm.id = 'formReview';

    let htmlTextarea = document.createElement('textarea');
    htmlTextarea.id = 'myReview';
    htmlTextarea.placeholder = 'How\'s That Movie Looking?';
    htmlTextarea.required = true;
    htmlForm.appendChild(htmlTextarea);

    let htmlSubmit = document.createElement('input');
    htmlSubmit.id = 'mySubmit';
    htmlSubmit.type = 'submit';
    htmlSubmit.setAttribute('class', 'hideButton');
    htmlSubmit.value = 'Post';
    htmlForm.appendChild(htmlSubmit);

    htmlDiv.appendChild(htmlForm);

    document.querySelector('#textbox div').remove();
    document.querySelector('#textbox').appendChild(htmlDiv);

    let myReviewLength = document.querySelector('textarea');
    myReviewLength.addEventListener('input', (event) => {
      // console.log('myreviewlength', myReviewLength.value)
      let mySubmitBtn = document.querySelector('#mySubmit');
      mySubmitBtn.setAttribute('class', 'submitReview')
    })


    // textbox area create in javascript and the submit button similar to react, put in required field (basic form validation)
    // user focus and changes the color css
    // user types then show submit button
    // user submits
    // changes the review text to user
    // textbox switches to Have a nice day!

    let formTag = document.querySelector('form');
    formTag.addEventListener('submit', (event) => {
      event.preventDefault();
      // get user review
      const userReview = event.target.elements["myReview"].value;
      // overwrite the current review
      document.querySelector('.myreviews p').remove();
      let reviewTag = document.createElement('p');
      reviewTag.setAttribute("class", "blockquote");
      let reviewHTML = document.createTextNode(`${userReview}`);
      reviewTag.appendChild(reviewHTML);
      document.querySelector('.myreviews').appendChild(reviewTag);

      // remove the textbox which means the form
      let formTag = document.querySelector('form');
      if (formTag) {
        document.querySelector('form').remove(); // this will error because DOM are re-rendering
      }
      formTag.remove();

      let handTag = document.createElement('p');
      handTag.appendChild(document.createTextNode('Thanks and Have a nice day!'));

      let formDivTag = document.querySelector('.formDiv');
      //formDivTag.removeChild(formDivTag.firstChild);
      formDivTag.appendChild(handTag);
    })

  }

  // initial load to load avengers
  loadBody(avengers_movieTitle, avengers_actors, avengers_summary, avengers_images, avengers_reviews);

  let myHeader = `<header><div id="logo">
        <img src="/public/logo.png" height="200px" width="200px" alt="Site logo"/>
    </div>
    <div class="menu-bar">
      <div class="menu-link"><a href="/index.html">Home</a></div>
      <div class="menu-link"><a href="/rankings/rankings.html">Ranking</a></div>
      <div class="menu-link"><a href="/reviews/avengers.html">Movies</a></div>
      <div class='menu-link'><a href='../about/about.html'>About</a></div>
    </div></header>`

  let myFooter = `<h4>Thanks for coming!</h4>`

  document.querySelector('#header').innerHTML = myHeader;
  document.querySelector('#footer').innerHTML = myFooter;

  console.log('review end')

})()