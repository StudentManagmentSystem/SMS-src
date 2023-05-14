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

  const databasemark=firebase.database().ref("databasestoremark");

  let markDetails = [];
  let value1;
  databasemark.on("value",function(snapshot){
      snapshot.forEach(element => {
        value = {
          markDetail : element.val()
        }
        markDetails.push(value);
      });
    })
  console.log(markDetails);

  const databasesemester=firebase.database().ref("databasestoresemester");

let semesterDetails = [];

let value;
databasesemester.on("value",function(snapshot){
  snapshot.forEach(element => {
    value = {
      semesterDetails : element.val()
    }
    semesterDetails.push(value);
  });
});
console.log(semesterDetails);
  
  document.querySelector('.markbtn').addEventListener('click', function(){
    let semester = document.querySelector('.sem').value;
    for(let i = 0;i<semesterDetails.length;i++){
        if(semesterDetails[i].sem === semester){
            document.querySelector('.semlabel').innerHTML = `Enter the grade of ${semesterDetails[i].subCode}`;
        }
    }
  })