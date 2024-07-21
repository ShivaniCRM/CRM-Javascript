function Approve(formContext)
{
  debugger;
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  if (statusvalue ==1){
    return false
  }
  else{
      var confirmStrings = {text : "Do you really wish to continue?", title : "Confirmation Dialog"};
      var confirmOptions = {height:200, width:450};
      Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
      function(success){
         if (success.confirmed) {
            formContext.getAttribute("new_approve").setValue(true);
            formContext.data.entity.save();

            console.log("forwarding for approval..");
        }
      else{
        console.log("request cancelled..");
      }
    });
}
}






function Assign_To_SP(formContext){
  debugger;
  var sp_status = formContext.getAttribute("new_sp_assigned").getValue();
  if (sp_status == true){
    return false
  }
  else{
  var confirmStrings = {text: "Do you wish to continue?", title: "Assign To SP"};
  var confirmOptions = {height:200,width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if (success.confirmed) {
        formContext.getAttribute("new_assigntosp").setValue(true);
        formContext.getAttribute("new_billable").setRequiredLevel("required");
        formContext.data.entity.save();

      }
    });
}
}

function no_job_order(formContext){
  debugger;
  alert("There Is No job order Available Kindly attach the process first.");
  formContext.getAttribute("new_joborder").setValue(false);
  formContext.data.entity.save();
}



/* doing the same operation via c#

function Assign_To_SP(formContext){
	debugger;
  var confirmStrings = {text: "Do you wish to continue?", title: "Confirmation Dialog"};
  var confirmOptions = {height:200,width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if(success.confirmed)
      {
        formContext.getAttribute("new_assigntosp").setValue(true);
        formContext.data.entity.save();
        Xrm.WebApi.retrieveRecord("entitlement", id, "?$select=new_serviceprovider").then(
        {
          function success(result){
            var serviceprovider = result.new_serviceprovider
          }
        }

          );

        console.log("forwarding for approval..");
      }
      else{
        console.log("request cancelled..");
      }
    }
    );

  }
*/
/*
function record_retrieve(formContext){
  debugger;
  Xrm.WebApi.retrieveRecord("entitlement", id, "?$select=new_serviceprovider").then(
  {
    function success(result){
      var serviceprovider = result.new_serviceprovider
    }
});
}*/










function Send_For_Special_Approval(formContext){
	debugger;

  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var status  = formContext.getAttribute("new_sp_assigned").getValue();
  if (status == false ){
    return false;
  }
  else{
  var special_approval_remark = formContext.getAttribute("new_specialapprovalreason").getValue();
  if ( special_approval_remark == null ){
    alert("Please Fill Special Approval Remark to Continue.");
    saveEvent.preventDefault();

  }
else{
  var confirmStrings = {text : "Do you really wish to continue?", title: "Confirmation Dialog"};
  var confirmOptions = {height:200, width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if(success.confirmed){
        console.log("forwarding for approval");

      }
      else{
        console.log("request cancelled");
      }
    }

    );
}
}
}
  /*
   var confirmStrings = { text : "Do you really wish to send this for Special Approval.?", title:"Confirmation Dialog"};
   var confirmOptions = { height : 200, width:450};
   Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
   	function(success){
   		if (success.confirmed) {
   	formContext.getAttribute("statuscode").setValue(100000000);
	formContext.data.entity.save();
	formContext.getAttribute("new_sentforrmapproval").setValue(true);
	formContext.data.entity.save();
   		}
   		else{
   			alert("Request Cancelled.")

   		}
   	});
    */
    /*var lookup = new Object();
            var lookupValue = new Array();
            lookup.id = Result.new_TerritoryId.Id;
            lookup.entityType = "new_territory";
            lookup.name = Result.new_TerritoryId.Name;
            lookupValue[0] = lookup;
            Xrm.Page.getAttribute("new_territorycode").setValue(lookupValue);
*/
/*
var lookup = new Object();
var lookupValue = new Array();
lookup.id = "8841974b-6042-ea11-9114-00155d0a0438";
lookup.entityType= "new_pendingat";
lookup.name = "Devashish Tuteja"
lookupValue[0] = lookup;
Xrm.Page.getAttribute("new_pendingat").setValue(lookupValue);
*/



function send_for_approval(formContext){
	
alert("this is send for approval");
}


function Send_For_Feedback(formContext){
  var confirmStrings = {text : "Do you wish to send this for Feedback?", title: "Confirmation Dialog"};
  var confirmOptions = {height:200, width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if(success.confirmed){
        formContext.getAttribute("new_sentforfeedback").setValue(true);
        formContext.data.entity.save();
      }
      else{
        console.log("Request Cancelled..");

      }
    });
	
}




function special_approval_status(formContext){
  debugger;
  var stat = formContext.getAttribute("statuscode").getValue();
  if (stat  == 100000000){
    return false
  }
  else{
    return true
  }

}
function spare_parts_approval_fieldvisible(formContext){
  debugger;
  var stat =formContext.getAttribute("statuscode").getValue();
  if(stat == 100000001 ){
    return false;

  }
  else{
    return true;

  }
}


//this is the dialog box.
/*
function approve_special_confirmationbox(formContext){

var confirmStrings = { text:"Do you really want to continue?", title:"Confirmation Dialog" };
var confirmOptions = { height: 200, width: 450 };
Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
function (success) {    
    if (success.confirmed)
        console.log("Dialog closed using OK button.");
    else
        console.log("Dialog closed using Cancel button or X.");
});
}
*/
//send for special approval 

function Send_For_Special_Approval(formContext)
{
  debugger;
  var special_approval_remark = formContext.getAttribute("new_specialapprovalreason").getValue();
  if (special_approval_remark == null){
    alert("Please fill the special approval remark to continue.");
    saveEvent.preventDefault();
  }
  else{
  var confirmStrings = { text : "Do you really wish to continue?", title:"Confirmation Dialog "};
  var confirmOptions = { height: 200, width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if (success.confirmed) {
        console.log("yes continue with the process..");
        formContext.getAttribute("new_specialapprovalreason").setRequiredLevel("required");
        formContext.getAttribute("new_sentforrmapproval").setValue(true);
        formContext.data.entity.save();
             }
      else{
        console.log("do not continue with the process");
      }
    });
}
}


function Disapprove(formContext){
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  if (statusvalue ==1){
    return false;
  }
  else{
  var confirmStrings = {text : "Do you really wish to continue?", title: "Confirmation Dialog"};
  var confirmOptions = {height : 200,width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if (success.confirmed) {
        formContext.getAttribute("new_disapprove").setValue(true);
        console.log("continue with the disapprove process..");
        formContext.data.entity.save();

      }
      else{
        console.log("do not continue with the disapprove process..")
      }
    }

    );
}
}

/*
var lookup = new Object();
var lookupValue = new Array();
lookup.id = "8841974b-6042-ea11-9114-00155d0a0438";
lookup.entityType= "new_pendingat";
lookup.name = "Devashish Tuteja"
lookupValue[0] = lookup;
Xrm.Page.getAttribute("new_pendingat").setValue(lookupValue);

*/
var entitlementFlag = formContext.getAttribute("entitlementid").getValue();
if (entitlementFlag==null) {
  alert("Entitlement is not present can not Assign SP");

}
else{
  var confirmStrings = {text: "Do you wish to continue?", title: "Assign To SP"};
  var confirmOptions = {height:200,width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if (success.confirmed) {
        formContext.getAttribute("new_billable").setRequiredLevel("required");
        formContext.getAttribute("new_assigntosp").setValue(true);
        formContext.data.entity.save();
        
      }
     else{
         console.log("Do not continue with the process");
            }
    }

    );
}

/////////////////////////////////////////////////////////////////////////////////////////////send for spare parts using grid rows visibility 


function Send_For_SpareParts_Approval(formContext){
  debugger;
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var status = formContext.getAttribute("new_sp_assigned").getValue();
  if (statusvalue == 1 && status== false ){
    return false
  }
  else{
  var confirmStrings = { text : "Do you really wish to send this for Spare Parts Approval?", title:"Confirmation Dialog"};
  var confirmOptions = { height : 200, width :450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if (success.confirmed)
      {
        var grid = Xrm.Page.getControl("Job_Order");
        var filteredRecordCount =  grid.getGrid().getTotalRecordCount();
        if (filteredRecordCount > 0 )
        {
          formContext.getAttribute("new_sentforsparepartsapproval").setValue(true);
          formContext.data.entity.save();
        }
         else{
        alert("Please Attach Job Order for spare Part Request. ")
        console.log("request Cancelled");

      }
        
      }
      else{

        console.log("request Cancelled");

      }


    });
}
}

function spare_parts_visible(formContext){
var flag = formContext.getAttribute("new_spare_part_btn_visible").getValue();
var bill = formContext.getAttribute("new_billable").getValue();
var sp_status = formContext.getAttribute("new_sp_assigned").getValue();

if (flag == true){
  return false
}
else if (bill == true){
  return false
}
else{
  return true
}
}


function approve_disapprove_btn_visibility(formcontext)
{
  //lookup retrieve using javascript
  debugger;
  var lookup = formcontext.getAttribute("new_pendingat");
  var lookupval = lookup.getValue();
  //var id = lookupval[0].id;
  
  //retrieving the optionset will always return you integer
  var statusvalue = formcontext.getAttribute("statuscode").getValue();
  // retrieving the two option will give you the 1 or 0 true and false
  var approve_flag = formcontext.getAttribute("new_approve").getValue();
  var disapprove_flag = formcontext.getAttribute("new_disapprove").getValue();

  if (lookupval == null && statusvalue == 1 )
  {

    return false;

  }
         else if (statusvalue == 100000006) {
    return false
  }
        else if(statusvalue == 100000003)
        {
           return false;
        }
        else if (statusvalue == 100000007){
    return false;
  }
  else if (statusvalue == 100000005){
    return false;
  }


  else{
    return true;
  }


} 

function approve_disapprove_btn_visibility(formContext){

debugger;
var statusvalue = formContext.getAttribute("statuscode").getValue();
if (statusvalue == 1 ){
  return false
}
else{
  return true
}

}