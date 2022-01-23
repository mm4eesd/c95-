  // Your web app's Firebase configuration
  const config = {
    apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
    authDomain: "jsdbtest.firebaseapp.com",
    databaseURL: "https://jsdbtest.firebaseio.com",
    projectId: "jsdbtest",
    storageBucket: "jsdbtest.appspot.com",
    messagingSenderId: "557097620929",
    appId: "1:557097620929:web:d549209de61a48b20b8b40"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
  
     console.log("Room name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names + "</div><hr>";
     document.getElementById("output").innerHTML = row;
    
    });});}
getData();

user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function redirectToRoomName(name)
  {
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
  }