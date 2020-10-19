var ID=0
function startExam()
{
      ID=window.setTimeout(msg,5000)
}
function stopExam()
 {
      window.clearTimeout(ID)
}
function msg()
{
  document.getElementById('h1').innerHTML="Exam is Submitted";
}
