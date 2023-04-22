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

let per_details = [];
let value;
database.on("value",function(snapshot){
  snapshot.forEach(element => {
    value = {
      personal_detail : element.val()
    }
    per_details.push(value);
  });
})

console.log(per_details);

document.querySelector('.personalsubmit').addEventListener('click', function(){
  let details = {};

  let detail;
  details.firstname = document.querySelector('.fname').value;
  // let email = document.querySelector('.email').value;
  details.email = document.querySelector('.email').value;
  details.phno = document.querySelector('.phno').value;
  details.dob = document.querySelector('.dob').value;
  details.address = document.querySelector('.address').value;
  details.city = document.querySelector('.city').value;
  details.pincode = document.querySelector('.pincode').value;
  details.state = document.querySelector('.state').value;
  details.country = document.querySelector('.country').value;

  let count = 0;
  for(let i = 0;i<per_details.length;i++){
    if(per_details[i].personal_detail.personal_detail.email === details.email){
      count++;
      var objectRef = firebase.database().ref(`databasestore/${i}/personal_detail`);
      objectRef.update({
        personal_detail : details
      });
    break;
    }
  }
  if(count === 0){
    alert("Invalid mail Id/details");
  }

  // per_details.push(details);
  //     var push = database.push();
  //     push.set({
  //     personal_detail : details
  //   });
  // if(count === 0){
  //   per_details.push(details);
  //   var push = database.push();
  //   push.set({
  //   personal_detail : details
  // });
  // alert("Successfully updated");
});
