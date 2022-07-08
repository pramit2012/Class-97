var firebaseConfig = {
      apiKey: "AIzaSyCFkD3KPoHfXidJAeEJa2adu-PuBlm9fi8",
      authDomain: "kwitter-918ae.firebaseapp.com",
      databaseURL: "https://kwitter-918ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-918ae",
      storageBucket: "kwitter-918ae.appspot.com",
      messagingSenderId: "843715879602",
      appId: "1:843715879602:web:206f4d948bb75012249fab",
      measurementId: "G-QWR8SZ1TX8"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}