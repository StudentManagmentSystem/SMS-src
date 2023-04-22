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
});

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
    if(per_details.personal_detail.personal_detail.email === details.email){
      alert("Already updated");
    }
    else{
      
    }
  }


  // let value1;
  // database.on("value",function(snapshot){
  // snapshot.forEach(element => {
  //   value1 = {
  //     personal_detail : element.val()
  //   }
  //   console.log(value1.personal_detail.personal_detail.email);
  //   if(value1.personal_detail.personal_detail.email === details.email){
  //     var objectRef = firebase.database().ref(`databasestore/value1/personal_detail/personal_detail`);
  //     objectRef.update({
  //       firstname : document.querySelector('.fname').value,
  //       email : document.querySelector('.email').value,
  //       phno : document.querySelector('.phno').value,
  //       dob : document.querySelector('.dob').value,
  //       address : document.querySelector('.address').value,
  //       city : document.querySelector('.city').value,
  //       pincode : document.querySelector('.pincode').value,
  //       state : document.querySelector('.state').value,
  //       country : document.querySelector('.country').value
  //     });
  //   }
  // });
// }); 
});
