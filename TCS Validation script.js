function validate() {
var id=document.getElementById('loginid').value;
var regx=/^TCS/

if (regx.test(id))
{
  alert("Valid Data")
}
else {
  alert("Invalid Invalid Invaid")
}

}
