'use strict'
//yashwanthinicse2020@ksrce.ac.in
//vigneshscse2020@ksrce.ac.in
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


//sign in authentication
document.querySelector('.signinselection').addEventListener('click', function(){

    document.querySelector('.selection').classList.add('hidden');
    document.querySelector('.sign-in').classList.remove('hidden');

    document.querySelector('.std-signin').addEventListener('click', function(){
        let emailin = document.querySelector('.stdemail').value;
        let passwordin = document.querySelector('.stdpassword').value;
        let regnoin = document.querySelector('.stdregno').value;
        localStorage.setItem('regno',regnoin);
        let count = 0;
        let count1 = 0;
        let count2 = 0;
        for(let i = 0;i<loginDetails.length;i++){
            if(loginDetails[i].loginDetail.email === emailin){
                count++;
            }
            if(loginDetails[i].loginDetail.password === passwordin){
                count1++;
            }
            if(loginDetails[i].loginDetail.regno === regnoin){
                count2++;
            }
        }
        if(count === 0){
            alert("Enter valid email Id");
        }
        else if(count1 === 0){
            alert("Wrong password");
        }
        else if(count2 === 0){
            alert("invalid Regno");
        }
        else{
            window.open('stdindex.html');
        }
    });
});


//signup authentication and registeration
document.querySelector('.signupselection').addEventListener('click', function(){

    document.querySelector('.selection').classList.add('hidden');
    document.querySelector('.sign-up').classList.remove('hidden');

    document.querySelector('.std-signup').addEventListener('click', function(){
        let emailup = document.querySelector('.stdemailup').value;
        let passwordup = document.querySelector('.stdpasswordup').value;
        let regnoup = document.querySelector('.stdregnoup').value;
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
            for(let i = 0;i<loginDetails.length;i++){
                if(loginDetails[i].loginDetail.email === emailup || loginDetails[i].loginDetail.regno === regnoup){
                    c++;
                    alert("Already Registered");
                    break;
                }
            }
            if(c === 0){
                var push = database.push();
                push.set({
                    regno:regnoup,
                    email:emailup,
                    password:passwordup
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