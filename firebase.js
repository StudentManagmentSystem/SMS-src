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


  // personal details array storage
  let per_details = [];
  let value;
  database1.on("value",function(snapshot){
    snapshot.forEach(element => {
      value = {
        personal_detail : element.val()
      }
      per_details.push(value);
    });
  });
  console.log(per_details);



  //storing personal details on firebase
document.querySelector('.personalsubmit').addEventListener('click', function(){
  let details = {};

  details.firstname = document.querySelector('.fname').value;
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
      count++;
      alert("Already updated");
      break;
    }
  }
  if(count === 0){
    var push = database1.push();
    push.set({
      firstname : document.querySelector('.fname').value,
      email : document.querySelector('.email').value,
      phno : document.querySelector('.phno').value,
      dob : document.querySelector('.dob').value,
      address : document.querySelector('.address').value,
      city : document.querySelector('.city').value,
      pincode : document.querySelector('.pincode').value,
      state : document.querySelector('.state').value,
      country : document.querySelector('.country').value
    });
    alert("Successfully updated");
  }
});
