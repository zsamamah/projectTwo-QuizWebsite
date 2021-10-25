//.............Tharaa..............
let scrollBtn=document.getElementById("scroll-up");
document.addEventListener('scroll',function(){
    if(document.body.scrollTop>20){
scrollBtn.style.display="block";}
else{
    scrollBtn.style.display="none";
}
})

let result=0;   //........Tharaa.........
let questionNum=sessionStorage.getItem('questionsNum');
for(let i=1;i<=questionNum;i++){
   if(sessionStorage.getItem(`result${i}`)==1){result++;}
}
//...........Aya_var.............................
let A_resCont= document.getElementById('A_resultContainer');
let A_red = 'rgba(255, 99, 99, 0.12)';
let A_green='rgba(97, 179, 97, 0.2)';
// ..........Tharaa_code.........................
let resultDiv=document.getElementById('th_Result');
let comment=document.getElementById('th_Comment');
let icon=document.getElementById('iconId');
let score=document.getElementById('th_Score');
if(result>=questionNum*0.5){
    let status=document.getElementById("th_Status");
    status.innerHTML='Congratulations!';
    score.innerHTML=`${result}/${questionNum}`;

    if(result>=questionNum*0.5 && result<questionNum*0.7){
       comment.innerHTML="Not bad";
  } else if(result>=questionNum*0.7 && result<questionNum*0.9){ comment.innerHTML="Very good";}
   else if(result>=questionNum*0.9 && result<=questionNum*1){comment.innerHTML="Excellent";}
// document.body.style.background=A_green; //aya_code...........
}
else{
    let status=document.getElementById("th_Status");
    resultDiv.style.setProperty('--theme-Color', 'red');
    icon.className="fas fa-times-circle";
    status.innerHTML='Oops! You Failed';
    score.innerHTML=`${result}/${questionNum}`;
    // document.body.style.background=A_red; //aya_code..........
}
const togglebtn = document.querySelector(".toggle-btn");

togglebtn.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
}); 

    //..........Result Table show _Aya............
    // let a_counter=0;
    // function tableResult(){
    //     if(a_counter==0){
    //         document.getElementById("table").style.display='block';
    //     document.getElementById("show").innerHTML='Hide Table';
    //     a_counter++;
    //     }
    //     else{
    //     document.getElementById("table").style.display='none';
    //     document.getElementById("show").innerHTML='Show Table Result';
    //     a_counter=0;
    //     }
    function tableResult(){
    let table=document.getElementById('table');
    table.classList.toggle("display");
   let showLink= document.getElementById("show");
   if(showLink.innerHTML==="Hide Table"){showLink.innerHTML="Show Table Result";}
   else{showLink.innerHTML="Hide Table";}
    }
    
    //..........Result Table hide _Aya............

 
//....................AYA'S WORK ON TABLE& STORAGE.............................
        let table1=document.getElementById('table');
        for(let a_i=0;a_i<questionNum;a_i++){
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
                td3.innerHTML='<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
            }
            else{
                tr.style.background=A_red;
                td3.innerHTML='<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/fa314a/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
            }
        }
    //....................End of table commented by Aya.............................//

     //.........................Tharaa Code...................................//
     let logoutBtn=document.getElementById('logout');
     logoutBtn.addEventListener('click',function(){
        //  window.location.href="./index.html";
         sessionStorage.clear();
     })