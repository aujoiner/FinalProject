$(".homeButton").on("click",handleHomeButtonPress);
$(".restaurantsButton").on("click",handleRestaurantsButtonPress);
$(".barsButton").on("click",handleBarsButtonPress);
$(".aboutButton").on("click",handleAboutButtonPress);

function handleHomeButtonPress(event){
  
  let replacingHTML = `<section id="main1" class="form is-centered form-size">
          <br>
          <br>
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
              
              <div class="field is-grouped">
                  <div class="control">
                  <button class="button is-info">Submit</button>
                  </div>
                  <div class="control">
                  <button class="button is-info is-light">Cancel</button>
                  </div>
              </div>
          </form>
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
        <img src="https://pbs.twimg.com/profile_images/980888442304425984/u0XKcSVA_400x400.jpg">
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