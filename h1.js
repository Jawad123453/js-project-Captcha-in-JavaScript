let resultinput=document.querySelector(".result input"),
resultbutton=document.querySelector(".result button"),
placing=document.querySelector(".placing"),
reflashbtn=document.querySelector(".idkwhat button"),
finalmsg=document.querySelector(".box > p");
mainarry=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let array21=[],
duration=4000;

function makeupit(){
  for(let i=0;i<5;i++){
    let span=document.createElement("span");
    let randomwon=Math.floor(Math.random()*mainarry.length);
    array21.push(mainarry[randomwon]);
    span.innerText=array21[i];
    placing.appendChild(span);
  }
  return array21
}
makeupit()
function cleanupit(){
  placing.innerHTML="";
  array21=[];
  makeupit()
}

reflashbtn.addEventListener("click",function(){
  cleanupit()
})

resultinput.addEventListener("input",function(){
  if(resultinput.value !=""){
    resultbutton.classList.add("good");
    resultbutton.classList.remove("goodbye");
  }else{
    resultbutton.classList.remove("good");
    resultbutton.classList.add("goodbye");
  }
})

resultbutton.addEventListener("click",function(){
  if(resultinput.value.toLowerCase() == array21.join("").toLowerCase()){
    setTimeout(() => {
      finalmsg.innerText=``;
      cleanupit()
    }, duration);
    finalmsg.classList.add("goodone")
    finalmsg.classList.remove("badone")
    finalmsg.innerText=`Good Job! You Got it Right`
  }else{
    finalmsg.classList.remove("goodone")
    finalmsg.classList.add("badone")
    finalmsg.innerText=`Wrong One! You Got it Wrong`
  }
  resultinput.value=""
})