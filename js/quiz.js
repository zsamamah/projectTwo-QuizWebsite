const questions = [
    {
        "q":"Which of the following attribute triggers event when the browser starts to load the media data?",
        "a":["onloadedmetadata","onloadstart","onmessage","onoffline"],
        "value":2
    },
    {
        "q":"Which of the following defines a measurement in millimeters?",
        "a":["in","mm","rem","em"],
        "value":2
    },
    {
        "q":"Which of the following property is used to change the face of a font?",
        "a":["font-family","font-size","font-face","font-weight"],
        "value":1
    },
    {
        "q":"Which of the following is an advantage of using JavaScript?",
        "a":["Less server interaction","Immediate feedback to the visitors","Increased interactivity","All of the above."],
        "value":4
    },
    {
        "q":"Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        "a":["pop()","push()","join()","map()"],
        "value":2
    },
    {
        "q":"Choose the correct HTML element for the largest heading:",
        "a":["<header>","<h6>","<head>","<h1>"],
        "value":4
    },
    {
        "q":"How can you open a link in a new tab/browser window?",
        "a":["<a href=\"url\" target=\"new\">","<a href=\"url\" target=\"_blank\">","<a href=\"url\" new>","You can`t do it using HTML"],
        "value":2
    },
    {
        "q":"What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id=\"demo\">This is a demonstration.</p>",
        "a":["document.getElementByName(\"p\").innerHTML = \"Hello World!\";","document.getElementById(\"demo\").innerHTML = \"Hello World!\";","document.getElement(\"p\").innerHTML = \"Hello World!\";","#demo.innerHTML = \"Hello World!\";"],
        "value":2
    },
    {
        "q":"Which of the following feature is a part of HTML 5?",
        "a":["canvas","audio & video","geolocation","All the above"],
        "value":4
    },
    {
        "q":"Where is the correct place to insert a JavaScript?",
        "a":["The <body> section","The <head> section","Both <head> & <body> sections are correct","None of the above"],
        "value":3
    }
];

function startQuiz(){
    document.getElementById("z_quizBrief").style.display="none";
    document.getElementById("startQuizBtn").style.display="none";
    next();
}
let counter=0;
function next(){
    let z=document.getElementById("demo");
    z.innerHTML="";
    let q=document.createElement("h3");
    z.appendChild(q);
    z.appendChild(document.createElement("br"));
    q.innerHTML=questions[counter].q;
    let val=questions[counter].value;
    // console.log(val);
    let f=document.createElement("form");
    f.setAttribute("onchange","activeBtn()");
    for(let i=0;i<4;i++){
        let x=document.createElement("input");
        x.type="radio";
        x.name="asx";
        x.id=`a${i+1}`;
        x.value=questions[i].value;
        let y=document.createElement("label");
        y.setAttribute("for",x.id);
        y.innerText=questions[counter].a[i];
        if(i+1==val){
            x.value=1;
        }
        else{
            x.value=0;
        }
        f.appendChild(x);
        f.append(y);
        f.appendChild(document.createElement("br"));
    }
    let btn=document.createElement("button");
    btn.type="button";
    if(counter==9){
        btn.innerText="submit";
        btn.setAttribute("onclick","z_result()");
    }
    else{
        btn.innerText="Next";
        btn.setAttribute("onclick","next()");
    }
    btn.disabled=true;
    btn.id="nextBtn"
    f.appendChild(btn);
    z.appendChild(f);
    counter++;
}
function z_result(){
    window.location.href="./result.html";
}
function activeBtn(){
    let answers=["a1","a2","a3","a4"];
    document.getElementById("nextBtn").disabled = false;
    for(let i=0;i<4;i++){
        if(document.getElementById(answers[i]).checked){
            sessionStorage.setItem(`q${counter}`,i+1);
        }
    }
    checkAnswer();
}

function checkAnswer(){
    let final_value = sessionStorage.getItem(`q${counter}`);
    for(let i=0;i<4;i++)
        if(questions[counter-1].value==final_value)
            sessionStorage.setItem(`result${counter}`,1);
        else
            sessionStorage.setItem(`result${counter}`,0);
    
}