let result=9;   //Just for testing
//...........Aya_var.............................
let A_resCont= document.getElementById('A_resultContainer');
let A_red = 'rgba(255, 99, 99, 0.12)';
let A_green='rgba(97, 179, 97, 0.2)';
// ..........Tharaa_code.........................
let resultDiv=document.getElementById('th_Result');
let comment=document.getElementById('th_Comment');
let icon=document.getElementById('iconId');
let score=document.getElementById('th_Score');
if(result>=5){
    let status=document.getElementById("th_Status");
    status.innerHTML='Congratulations!';
    score.innerHTML=`${result}/10`;
    if(result==5 || result==6){
       comment.innerHTML="Not bad";
} else if(result==7 || result==8){ comment.innerHTML="Very good";}
else if(result==9 || result==0){comment.innerHTML="Excellent";}
document.body.style.background=A_green; //aya_code...........
}
else{
    let status=document.getElementById("th_Status");
    resultDiv.style.setProperty('--theme-Color', 'red');
    icon.className="fas fa-times-circle";
    status.innerHTML='Oops! You Failed';
    score.innerHTML=`${result}/10`;
    document.body.style.background=A_red; //aya_code..........
}

    //..........Result Table show _Aya............
function tableResult(){
    document.getElementById("table").style.display='block';
    document.getElementById("show").innerHTML='Hide Table';
}
    //..........Result Table hide _Aya............
function hideTable(){
    document.getElementById("table").style.display='none';
    document.getElementById("show").innerHTML='Show Table Result';
}
 
//....................AYA'S WORK ON TABLE& STORAGE.............................
        let table1=document.getElementById('table');
        for(let a_i=0;a_i<10;a_i++){
            //    let answers= sessionStorage.getItem(`answers${a_i}`);
            let a_answer = sessionStorage.getItem(`answers${a_i+1}`);
             a_answer=a_answer.split(',');
            let questions= sessionStorage.getItem(`question${a_i+1}`);
            let results=sessionStorage.getItem(`result${a_i+1}`)
            let tr =  document.createElement('tr');
            let td1= document.createElement('td');
            let td2= document.createElement('td');
            let td3= document.createElement('td');
            td1.innerHTML= a_i+1+") "+questions;
            let a_index=sessionStorage.getItem(`q${a_i+1}`)-1
            td2.innerText= a_answer[a_index];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table1.appendChild(tr);
            console.log(a_answer);
            if(results==1){
                tr.style.background=A_green;
                td3.innerHTML='True';
            }
            else{
                tr.style.background=A_red;
                td3.innerHTML='False';

            }
        }
    //....................End of table commented by Aya.............................//

        

           
