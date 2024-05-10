# Notifications using Firebase
 
## Problem Statement:
Create a simple Firebase / React SPA in typescript. Set up emulators to run in dev mode. Create a simple notification system that allows a User to click 1 of three buttons and receive a notification corresponding to the button they pushed. When a User views a notification, it should be marked "read".
 
You may use whatever UI components you are comfortable with. You will not be judged on styling but will be judged on your usage of the Firebase suite, code structure, code cleanliness, typescript usage, useful comments, and commit history.

## Solution:
The following steps were taken to complete this task.

## Setting up the environment in VS Code:

* Created an app using.
    * npx create-react-app firebase-notification –template typescript
* Installed necessary libraries for firebase.

## Setting up Firebase:

* Create a new project in Firebase Console
* Created a web app.
* Copied the code for firebase configuration.
* Pasted that code in src/firebase-config.ts
* Setup Firebase Emulator
    * Npm install -g firebase-tools
    * Firebase init
* From the provided list, I chose Firestore and Emulators
* Setup the db in native mode
* Started the emulator
    * Firebase emulators:start
 
## Coding Files:

* NotificationSystem.tsx
    * This file is responsible for the layout and the sending notification functionality.
    * Wrote a function responsible for sending notifications.
    * Added that function to onClick of all the 3 buttons

* ViewNotifications.tsx
    * This file is responsible for creating the layout of notifications that appear on the same page when clicked any of the 3 buttons
    * I used a query that checks for “read” == false and displays those notifications only that are unread
    * Upon Clicking “mark as read”, the “read” is set to true and document is updated in db
    * This file holds a simple layout of showing the notifications

* App.tsx
    * Finally, these components are integrated into the App.tsx file

## Run the code

* To run this code, simply run the “npm i” command that will install all the libraries
* “npm start” to compile the application and open it in browser
* Make sure the emulators are running
    * Firebase emulators:start
 
## Interact with the app

* There are 3 buttons for sending notifications
* Use any of these to send notifications
* Notifications being sent can be verified from **Network** tab in **Console**
* The notfications are saved in db
* Upon click "mark as read", the notifications are marked read in the database
    * Can be verified from **Network** tab in **Console**
