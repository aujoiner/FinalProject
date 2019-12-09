# FinalProject
Final project for COMP426.

# 12/9/2019 6:26pm
Signup and Login forms are both fully functional. Logging in stores the jwt in localStorage and can be retrieved at localStorage.getItem('jwt'). Signing up does not automatically log you in. There is a green Create New Restaurant button under the Restaurants tab if a user is logged in. There is no logout method so once you login you cannot log out unless you remove the token from localStorage (resetting browser-sync does not log you out).

# General
The "main1" ID: I have an id called "main1" which I have been using to grab and replace web content when the tabs and other buttons are pushed. It should replace everything under the hero.

Home: When the page loads you will see a hero header for Chapel Hill Restaurants and Bars. There will be four buttons in the footer of the hero that correspond to Home, Restaurants, Bars, and About. You will automatically be on the home tab, which displays a sign up form and a login form for the user to fill out. The sign up form is a work in progress (semi-functional) and the login form has not been touched.

Restaurants: This tab will change the content below the hero to be a list of images of different restaurants in Chapel Hill. The images will be clickable (click on the TOPO image to see what an individual page for a restaurant will look like). If a user is logged in, they will see a Create Restaurant button.

About: I just wanted a third tab so it's a simple about page.
