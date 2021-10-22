let result=8;   //Just for testing
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

    //..........Result Table show _Aya............/
function tableResult(){
    document.getElementById("table").style.display='block';
    document.getElementById("show").innerHTML='Hide Table';
}
    //..........Result Table hide _Aya............/
function hideTable(){
    document.getElementById("table").style.display='none';
    document.getElementById("show").innerHTML='Show Table Result';
}