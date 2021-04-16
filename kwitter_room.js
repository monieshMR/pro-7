
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD5J27AAZpzDrKN-a92ASbJA_LcMOXUIK0",
      authDomain: "kwitter-8eee7.firebaseapp.com",
      projectId: "kwitter-8eee7",
      storageBucket: "kwitter-8eee7.appspot.com",
      messagingSenderId: "480159386725",
      appId: "1:480159386725:web:8585eb4854db93f778ca8c"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {
            childKey  = childSnapshot.key;
            Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
