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

document.querySelector('.signinselection').addEventListener('click', function(){

    document.querySelector('.selection').classList.add('hidden');
    document.querySelector('.sign-in').classList.remove('hidden');
});

document.querySelector('.signupselection').addEventListener('click', function(){

    document.querySelector('.selection').classList.add('hidden');
    document.querySelector('.sign-up').classList.remove('hidden');

    document.querySelector('.std-signup').addEventListener('click', function(){
        let emailup = document.querySelector('.stdemailup').value;
        let passwordup = document.querySelector('.stdpasswordup').value;
        let numc = 0;
        for(let i = 0;i<passwordup.length;i++){
            if(passwordup.charAt(i)>='0' && passwordup.charAt(i)<='9'){
                numc++;
            }
        }
        if(emailup.includes("ksrce.ac.in") === false){
            alert("Enter valid email id");
        }
        else if(numc < 1){
            alert("password atleast contains one number");
        }
        else{
            let c = 0;
            for(let i = 0;i<per_details.length;i++){
                if(per_details[i].personal_detail.personal_detail.email === emailup){
                    c++;
                    alert("Already Registered");
                }
            }
            if(c === 0){
                let details = {
                    email:emailup,
                    password:passwordup
                };
                var push = database.push();
                push.set({
                personal_detail : details
              });
              alert("Successfully Registered");
            }
        }
    });
});






























// let loginDetails = {};


// document.querySelector('.stdsubmitlogin').addEventListener('click', function(){

//   let stdemail = document.querySelector('.stdemail').value;
//   let stdpassword = document.querySelector('.stdpassword').value;

//   // console.log(email+" Hi");
//   if(email === ""){
//     alert('please enter your email id');
//   }
//   else if(password === ""){
//     alert("please enter password");
//   }
//   else{
      
//   }
// });