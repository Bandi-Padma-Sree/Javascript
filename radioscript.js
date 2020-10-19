function accessValues()
{
  var male=document.getElementById('rbm');
  var female=document.getElementById('rbf');

  if (male.checked==true)
   {
     alert("Selected is:"+male.value)
  }else if (female.checked==true)
   {
     alert("Selected is:"+female.value)
  }
  else {
    alert("No option Selected")
  }


}
