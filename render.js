//turn the buttons on when the page loads
$(".homeButton").on("click",handleHomeButtonPress);
$(".restaurantsButton").on("click",handleRestaurantsButtonPress);
$(".barsButton").on("click",handleBarsButtonPress);
$(".aboutButton").on("click",handleAboutButtonPress);

//switch to home tab
function handleHomeButtonPress(event){
  
  let replacingHTML = `<section id="main3" class="form is-centered form-size">
          <br>
          <br>
          ${renderSignupForm()}
          ${renderLoginForm()}

        </section>`;

        let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

        $(document.getElementById("main3").replaceWith(tmpObj));
        $(".homeButton").on("click",handleHomeButtonPress);

        //this sets the tab color so you know you're on that page
        $("button.tab").removeClass("is-info");
        $("button.tab").removeClass("is-light");
        $(".homeButton").addClass("is-info");
        $(".homeButton").addClass("is-light");

}

//switch to restaurants tab
function handleRestaurantsButtonPress(event){
    let replacingHTML = `
    <div id="main3">
    <div id="main2">
        <input value = "Search For Restaurants" size = 100></input>
    </div>
    <div id="main1" class="columns is-gapless has-text-centered is-vcentered justify-center">
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
  </div>
  </div>`;

    let tmpObj=document.createElement("div"); // created an empty 'div'
          tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had
        
          $(document.getElementById("main3").replaceWith(tmpObj));
          $(".restaurantsButton").on("click",handleRestaurantsButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".restaurantsButton").addClass("is-info");
        $(".restaurantsButton").addClass("is-light");

}

//switch to bars tab
function handleBarsButtonPress(event){
  let replacingHTML = `
  <div id="main3">
  <div id="main2">
        <input value = "Search For Bars" size = 100></input>
</div>
  <div id="main1" class="columns is-gapless has-text-centered is-vcentered justify-center">
  <div class="column is-one-third">
      <img src="https://pbs.twimg.com/profile_images/980888442304425984/u0XKcSVA_400x400.jpg">
  </div>
</div>
</div>`;

  let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had
        //$('#main2').remove();

        $(document.getElementById("main3").replaceWith(tmpObj));
        $(".barsButton").on("click",handleBarsButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".barsButton").addClass("is-info");
        $(".barsButton").addClass("is-light");

}

//switch to about tab
function handleAboutButtonPress(event){
  
  let replacingHTML = `<div id="main3">
  <br><br><br>
  <p class="about-text form-size">This website was made by Evan Falcinelli and Austin Joiner.<br><br>Designed with Bulma.</p>
  </div>`;

  let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=replacingHTML; // replaced with whatever edit form html you had

        
        $(document.getElementById("main3").replaceWith(tmpObj));
        $(".aboutButton").on("click",handleAboutButtonPress);

        //makes the tab change colors when clicked
        $("button").removeClass("is-info");
        $("button").removeClass("is-light");
        $(".aboutButton").addClass("is-info");
        $(".aboutButton").addClass("is-light");

}

//renders the login form that pops up on the home tab
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

//renders the sign-up form that pops up on the home tab
function renderSignupForm(){
    return `<div id="sign-up-form">
            <h1 class="form-title">Create an account!</h1>
            <br>
            <form class="sign-up-form">
                
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                    <input class="input" type="text" name="usernameS">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="text" name="passwordS">
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" name="emailS">
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                    <button class="button submitSignupButton is-info" onclick="handleSubmitSignupButtonPress()">Submit</button>
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

//renders the individual page for a clicked on restaurant
function renderPlacePage(place){
    let placeHTML = `
    <center>
        <div id="main">
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

//handles button push for a restaurant/bar image
function handlePlaceButtonPress(){

    let tmpObj=document.createElement("div"); // created an empty 'div'
    tmpObj.innerHTML=renderPlacePage(coolRestaurant); // replaced with whatever edit form html you had

    $(document.getElementById("main1")).replaceWith(tmpObj);
}

async function handleSubmitSignupButtonPress(event){
    
    let password = $('input[name="passwordS"]').val();
    let username = $('input[name="usernameS"]').val();
    let email = $('input[name="emailS"]').val();

    let wow = await signUp(username,password,email);

        alert("promise fulfilled");

        let html = 
            `<div id="main1">
                <h1>Account for ${username} successfully created!</h1>
            </div>`;
        let tmpObj=document.createElement("div"); // created an empty 'div'
        tmpObj.innerHTML=html; // replaced with whatever html you had
        $(document.getElementById("main1")).replaceWith(tmpObj);
        alert("end of success");

}

async function signUp(username,password,email){
    const result = await axios({
        method: 'post',
        url: 'http://localhost:3000/account/create',
        data:{
            "name": username,
            "pass": password,
            "data":{
                "email": email
            }
        }
    });
    
    return result;
}

async function login(username,password){
    const result = await axios({
        method: 'post',
        url: 'http://localhost:3000/account/login',
        withCredentials: true,
        name: username,
        pass: password,
    });
    return result.jwt;
}

async function spellCheck(body){
    const result = await axios({
        method: 'get',
        url: 'https://api.cognitive.microsoft.com/bing/v7.0/spellcheck/',
        params: {
          text: body
        },
        headers: {'Ocp-Apim-Subscription-Key' : '3bf5815f961043f89487917436ce56ae'}
      });
      return result;
    
}
