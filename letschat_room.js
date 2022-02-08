
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAiOWWiOnmyLE4BQWFgclKurg5fKuiBPk0",
  authDomain: "bookpump-dbc14.firebaseapp.com",
  databaseURL: "https://bookpump-dbc14-default-rtdb.firebaseio.com",
  projectId: "bookpump-dbc14",
  storageBucket: "bookpump-dbc14.appspot.com",
  messagingSenderId: "58030950926",
  appId: "1:58030950926:web:a9cfe29df1bae796698a5f",
  measurementId: "G-6RNKQVKJ9L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome- " + user_name;

  function add_room(){
      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose: "adding a room"
      });
      localStorage.setItem("room_name", room_name);

      window.location="letschat_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
console.log("Room Name- "+ room_names);
  row="<div class='room_name' id="+ room_names + "onclick='redirectToRoomName(this.id)'>#" + room_names+"</div> <hr>";
  document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="letschat_page.html"; 
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location= "index.html";
  }