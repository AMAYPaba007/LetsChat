//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name= localStorage.getItem("roon_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            msg:msg,
            like:0
      });

      document.getElementById("msg").innerHTML=" ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
