'use strict'

let noofSub = 0;

let noofSubBtn = document.querySelector('.onsubmitnoofsub');

noofSubBtn.addEventListener('click', function(){

    noofSub = document.querySelector('.noofsub').value;

    document.querySelector('.subinput').classList.remove('hidden');

    console.log(noofSub);
    let gradeArray = [];
    for(let i = 0;i<noofSub;){
        document.querySelector('.singlesub').innerHTML = `Enter grade of Subject ${i+1} :`;

        let onsubmitsub = document.querySelector('.onsubmitsub');
        onsubmitsub.addEventListener('click', function(){
            let grade = document.querySelector('.subval').value;
            console.log(grade);
            gradeArray[i] = grade;
            i++;
        })
    }
});

