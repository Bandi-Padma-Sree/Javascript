var seconds=0
var ID;
function startExam()
{
  ID= window.setInterval(msg,1000)
}
function stopExam() {
      window.clearInterval(ID)
}
function msg()
{
  document.getElementById('h1').innerHTML=seconds+" Seconds"
  seconds++
}
