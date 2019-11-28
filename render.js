$(".homeButton").on("click",handleHomeButtonPress);
$(".restaurantsButton").on("click",handleRestaurantsButtonPress);
$(".barsButton").on("click",handleBarsButtonPress);
$(".aboutButton").on("click",handleAboutButtonPress);

function handleHomeButtonPress(event){
  
  let replacingHTML = `<section id="main1" class="form is-centered form-size">
          <br>
          <br>
          ${renderSignupForm()}
          ${renderLoginForm()}

        </section>`;

        let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

        $(document.getElementById("main1").replaceWith(tmpObj));
        $(".homeButton").on("click",handleHomeButtonPress);

        //this sets the tab color so you know you're on that page
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".homeButton").addClass("is-info");
        $(".homeButton").addClass("is-light");

        
}

function handleRestaurantsButtonPress(event){
    let replacingHTML = `<div id="main1" class="columns is-gapless has-text-centered is-vcentered justify-center">
    <div class="column is-one-third">
        <input type="image" onClick="handlePlaceButtonPress()" src="https://pbs.twimg.com/profile_images/980888442304425984/u0XKcSVA_400x400.jpg">
        </input>
    </div>
    <div class="column">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_B1-_k28BRcdP21NCL5CnPWLVntURJBcvrQvUtPfBzm_3c8upQ&s">
    </div>
    <div class="column">
        <img src="https://images.squarespace-cdn.com/content/57bf1474be65941ee0be7357/1472141575487-HSW0CNGJMSJZNM9HI53W/Sutton%27s+Logo.png?content-type=image%2Fpng">
    </div>
  </div>`;

    let tmpObj=document.createElement("div"); // created an empty 'div'
          tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

          $(document.getElementById("main1").replaceWith(tmpObj));
          $(".restaurantsButton").on("click",handleRestaurantsButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".restaurantsButton").addClass("is-info");
        $(".restaurantsButton").addClass("is-light");

}

function handleBarsButtonPress(event){
  let replacingHTML = `<div id="main1" class="columns is-gapless has-text-centered is-vcentered justify-center">
  <div class="column is-one-third">
      <img src="https://pbs.twimg.com/profile_images/980888442304425984/u0XKcSVA_400x400.jpg">
  </div>
</div>`;

  let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

        $(document.getElementById("main1").replaceWith(tmpObj));
        $(".barsButton").on("click",handleBarsButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".barsButton").addClass("is-info");
        $(".barsButton").addClass("is-light");

}

function handleAboutButtonPress(event){
  
  let replacingHTML = `<div id="main1">
  <br><br><br>
  <p class="about-text form-size">This website was made by Evan Falcinelli and Austin Joiner.<br><br>Designed with Bulma.</p>
  </div>`;

  let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

        
        $(document.getElementById("main1").replaceWith(tmpObj));
        $(".aboutButton").on("click",handleAboutButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".aboutButton").addClass("is-info");
        $(".aboutButton").addClass("is-light");

}

function renderLoginForm(){
    return `<div id="log-in-form">
            <h1 class="form-title">Log in!</h1>
            <br>
            <form class="log-in-form">
                
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="your username here...">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="password...">
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                    <button class="button is-info">Login</button>
                    </div>
                    <div class="control">
                    <button class="button is-info is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>`
}

function renderSignupForm(){
    return `<div id="sign-up-form">
            <h1 class="form-title">Create an account!</h1>
            <br>
            <form class="sign-up-form">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="your name here...">
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="your username here...">
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="your email here...">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="your username here...">
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                    <button class="button is-info">Submit</button>
                    </div>
                    <div class="control">
                    <button class="button is-info is-light">Cancel</button>
                    </div>
                </div>
            </form>
          </div>`
}

//until we get the server set up, this is an example restaurant object
let coolRestaurant = {
    name: "TOP OF THE HILL",
    address: "100 Franklin Street, Chapel Hill, NC 27516",
    description: "American cuisine with great views of Franklin Street. Food is way too expensive for what it is.",
    image: "https://pbs.twimg.com/profile_images/980888442304425984/u0XKcSVA_400x400.jpg"
}

function renderPlacePage(place){
    let placeHTML = `
    <center>
        <div id="main1">
        <br><br>
        <div class="page is-centered form-size">
            <div class="page">
                <img class="page" src="${place.image}"></img>
            </div>
            <div class="page">
                <h1 class="name">
                    ${place.name}
                </h1>
                <h3 class="address">
                    ${place.address}
                </h3>
                <br>
                <br>
                <p class="description">
                    ${place.description}
                </p>
            </div>
        </div>
        <br>
        <br>
        </div>
    </center>`;

    return placeHTML;
}

function handlePlaceButtonPress(){

    let tmpObj=document.createElement("div"); // created an empty 'div'
    tmpObj.innerHTML=renderPlacePage(coolRestaurant); // replaced with whatever edit form html you had

    $(document.getElementById("main1")).replaceWith(tmpObj);
}