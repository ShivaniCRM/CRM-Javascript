function SendForRM(executionContext){
	debugger; 
var formContext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to Send for RM Approval", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    function (success) {    
    if (success.confirmed)
    {
        formContext.getAttribute("new_sendforcampaignapproval").setValue(true);
        formContext.data.entity.save();
    }     
    else 
        formContext.getAttribute("new_sendforcampaignapproval").setValue(false);
                
    });
	

  }     
function SendForCEO(executionContext){
	debugger;
 var formContext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to Send for CEO Approval", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    function (success) {    
    if (success.confirmed)
    {
        formContext.getAttribute("new_sendforceoapproval").setValue(true);
        formContext.data.entity.save();
    }     
    else 
        formContext.getAttribute("new_sendforceoapproval").setValue(false);
                
    });
  }     

function ApprovedRM(executionContext){
	debugger;
	var formcontext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to Approve", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    function (success) {    
    if (success.confirmed)
    {
        formcontext.getAttribute("new_campaignapproved").setValue(true);
         var rmremarks=formcontext.getAttribute("new_rmremark").getValue();
         var ceoremarks=formcontext.getAttribute("new_ceocooremarks").getValue();
         if(rmremarks ==null){
           formcontext.getAttribute("new_rmremark").setRequiredLevel("required");
         }
         else{
          formcontext.getAttribute("new_ceocooremarks").setRequiredLevel("required");
         }
             formContext.data.entity.save();
       
    }     
    else 
        formcontext.getAttribute("new_campaignapproved").setValue(false);
                
    });
  }     
 function Disapprove(executionContext){
	debugger;
	var formcontext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to Disapprove", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    function (success) {    
    if (success.confirmed)
    {
        formcontext.getAttribute("new_disapprove").setValue(true);
          formcontext.getAttribute("new_disapproveremarks").getValue();
         formcontext.getAttribute("new_disapproveremarks").setRequiredLevel("required");
        formcontext.data.entity.save();
    }     
    else 
        formcontext.getAttribute("new_disapprove").setValue(false);
                
    });
  }     

   function CloseCampaign(executionContext){
  debugger;
  var formcontext = executionContext.getFormContext();
  var confirmStrings = { text:"Do you want to CloseCampaign", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes" }; 
  var confirmOptions = { height: 200, width: 500}; 
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then( 
    function (success) {    
    if (success.confirmed)
    {
        formcontext.getAttribute("new_closecampaign").setValue(true);
        formcontext.data.entity.save();
    }     
    else 
        formcontext.getAttribute("new_closecampaign").setValue(false);
                
    });
  }

    
function QuoteMandatoryFields(executionContext)
{​​​​​​​
debugger;
    var formcontext = executionContext.getFormContext();
    var agreementbased = formcontext.getAttribute("new_agreementbased").getValue();


 if (agreementbased == false)//NO
    {​​​​​​​
         formcontext.getAttribute("new_destinationcode").setRequiredLevel("required"); 
          formcontext.getControl("new_destinationcode").setVisible(true);



    }​​​​​​​  


 else
    {​​​​​​​
         formcontext.getAttribute("new_destinationcode").setRequiredLevel("none");
         formcontext.getControl("new_destinationcode").setVisible(false);



     }​​​​​​​ 
 }​​​​​​​
 






     