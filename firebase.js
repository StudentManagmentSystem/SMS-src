'use strict'
const firebaseConfig = {
    apiKey: "AIzaSyBgUx-_SqBtZrSo_RWxnvSf23hT-wPtdYY",
    authDomain: "studentmanagementsystem-fb890.firebaseapp.com",
    databaseURL: "https://studentmanagementsystem-fb890-default-rtdb.firebaseio.com",
    projectId: "studentmanagementsystem-fb890",
    storageBucket: "studentmanagementsystem-fb890.appspot.com",
    messagingSenderId: "992673385691",
    appId: "1:992673385691:web:92da878338ec5e9ffad0fe",
    measurementId: "G-2PY8FN9PPM"
  };

  firebase.initializeApp(firebaseConfig);
  const database=firebase.database().ref("databasestore");
  document.querySelector('.logout').addEventListener('click',function(){
    console.log("Hi");
  var push=database.push();
  push.set({
    name:"tamil",
  })
});

database.on("value", function(snapshot){
    snapshot.forEach(element => {
        console.log(element.val());
    });
})