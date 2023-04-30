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
  const database=firebase.database().ref("databasestoresemester");

let totalSub;
let semesterDetails = [];

let value;
database.on("value",function(snapshot){
  snapshot.forEach(element => {
    value = {
      semesterDetails : element.val()
    }
    semesterDetails.push(value);
  });
});
console.log(semesterDetails);

let count = 0;
let sem = 0;
let semDetails = [];
document.querySelector('.sembtn').addEventListener('click', function(){
    if(count === 0){
        sem = document.querySelector('.sem').value;
        totalSub =  document.querySelector('.semcount').value;
        document.querySelector('.content1').classList.remove('hidden');
        document.querySelector('.subcode').classList.remove('hidden');
        document.querySelector('.content2').classList.add('hidden');
        document.querySelector('.sem').classList.add('hidden');
        document.querySelector('.content1').innerHTML = `Enter the course code of subject ${count+1} : `;
        document.querySelector('.content').innerHTML = `Enter the grade of subject ${count+1} : `;
        count++;
    }
    else if(count <= totalSub){
        if(count < totalSub){
            document.querySelector('.content1').innerHTML = `Enter the course code of subject ${count+1} : `;
            document.querySelector('.content').innerHTML = `Enter the grade of subject ${count+1} : `;
        }
        let subCode = document.querySelector('.subcode').value;
        let subGrade = document.querySelector('.semcount').value;
        count++;
        var push = database.push();
            push.set({
                sem : sem,
                subCode : subCode,
                subGrade : subGrade
            });
        if(count === totalSub){
            alert("Successfully Updated!")
        }
    }
});