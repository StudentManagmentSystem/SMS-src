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
  const database1=firebase.database().ref("databasestore1");

//login details array storage
let loginDetails = [];
let value1;
database.on("value",function(snapshot){
    snapshot.forEach(element => {
      value = {
        loginDetail : element.val()
      }
      loginDetails.push(value);
    });
  })
console.log(loginDetails);


//personal detail array storage
let per_details = [];
let value;
database1.on("value",function(snapshot){
  snapshot.forEach(element => {
    value = {
      personal_detail : element.val()
    }
    per_details.push(value);
  });
})
console.log(per_details);

document.querySelector('.std-signin').addEventListener('click', function(){
    let email = document.querySelector('.email').value;

    for(let i = 0;i<per_details.length;i++){
        if(per_details[i].email === email){
            document.querySelector('.stdname').innerHTML = per_details[i].firstname;
            document.querySelector('.stdemail').innerHTML = per_details[i].email;
            document.querySelector('.stdphno').innerHTML = per_details[i].phno;
            document.querySelector('.stdaddress').innerHTML = per_details[i].address;
            document.querySelector('.stdcity').innerHTML = per_details[i].city;            ;
            document.querySelector('.stdstate').innerHTML = per_details[i].state;
        }
    }
});
