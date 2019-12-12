# FinalProject
Final project for COMP426.

# Requirements

An HTML input field where, as a user types, autocomplete suggestions are displayed. This widget must implement debouncing, and must be a useful part of the application. We have a search bar.

Your app must have a signup process that allows users to create accounts and log in using username/email and password. The app should store additional information about each user besides username and password (this is what the backend stores by default in account.json). Our home page has a sign-in and login form. Signing up also stores the users email in the account.json file. 

Your app must create, read, update, and delete at least one resource from each data store provided (public, private, and user).
Public: Create (posts restaurant data)
Private: Create (posts restaurant data)
User: Read, Update, Delete (reads user data, updates user list of favorites, deletes list of user favorites)

Your app must access a dynamic data source (your backend) to generate content and not solely rely on static content (e.g. hard-coded HTML pages). Our user store does this when generating the list of favorites for the user.

Your app must consume a 3rd party API. You are free to choose any publicly available API you wish. We used MailboxLayer as an email validator for the sign-up form.
