function SendForAM(executionContext)
{
    debugger;
    alert("test for AM");
  var formContext = executionContext.getFormContext();
  var AM = formContext.getAttribute("new_sendforam").getValue();
formContext.getAttribute("new_sendforam").setValue(true);
  }     
    
    
    
  

  
