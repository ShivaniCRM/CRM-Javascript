function SFCA(executionContext)
{
    debugger;
  var formContext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to Send for Commercial Approval", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    var SFCA =formContext.getAttribute("new_cmapproval").getValue();    
    if (SFCA==true)
    {
    formContext.getAttribute("new_cmapproval").setValue(true);
    formContext.data.entity.save();
    }
    else{ 
    formContext.getAttribute("new_cmapproval").setValue(false);
                  
    }
  }
