function validate()
{
  var un = document.getElementById('Username').value;
  var phn = document.getElementById('Phone').value;
  var regx=/[A-D][P-R]/
  if(regx.test(un))
  {
    alert("Valid 1")
  }
  else {
    alert("Invalid 1")
  }
  var regx=/[A-D].[P-R]/
  if(regx.test(un))
  {
    alert("Valid 2")
  }
  else {
    alert("Invalid 2")
  }
  var regx=/[A-Za-z][5]$/
  if(regx.test(un))
  {
    alert("Valid 3")
  }
  else {
    alert("Invalid 3")
  }
  var regx=/([0-9]{10})/
  if(regx.test(phn))
  {
    alert("Valid 4")
  }
  else {
    alert("Invalid 4")
  }
  var regx=/[0-5].[6-9]/
  if(regx.test(phn))
  {
    alert("Valid 5")
  }
  else {
    alert("Invalid 5")
  }
}
