let result=1;   //Just for testing
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
}
else{
    let status=document.getElementById("th_Status");
    resultDiv.style.setProperty('--theme-Color', 'red');
    icon.className="fas fa-times-circle";
    status.innerHTML='Ooops! You falied';
    score.innerHTML=`${result}/10`;
}
