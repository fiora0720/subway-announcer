function play(){

let station=document.getElementById("station").value

let text="이번 역은 "+station+"역입니다."

document.getElementById("lcd").innerText=text

let speech=new SpeechSynthesisUtterance(text)

speech.lang="ko-KR"

speechSynthesis.speak(speech)

}