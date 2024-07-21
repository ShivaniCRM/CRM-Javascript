function Approve(formContext)
{
  debugger;
      var fms_remark = formContext.getAttribute("new_fmsremarks").getValue();
      var cem_remark = formContext.getAttribute("new_cemremarks").getValue();
      var rm_remark = formContext.getAttribute("new_rmremarks").getValue();
      var statusvalue = formContext.getAttribute("statuscode").getValue();
      var confirmStrings = {text : "Do you really wish to continue?", title : "Approve"};
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

function Approve_hide(formContext){
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var sp_assigned = formContext.getAttribute("new_sp_assigned").getValue();
  if (statusvalue ==1 || statusvalue == 100000008 || statusvalue == 100000009 || statusvalue == 100000006 || statusvalue == 100000003 || statusvalue == 100000005 || statusvalue== 100000007 || statusvalue== 100000010 || statusvalue== 100000011){
    return false;

  }
  else{
    return true;
  }

}


//////////////////////////////////////////////////////////////////////////////////////////////////
function Disapprove(formContext){
debugger;
  var fms_remark = formContext.getAttribute("new_fmsremarks").getValue();
  var cem_remark = formContext.getAttribute("new_cemremarks").getValue();
  var rm_remark = formContext.getAttribute("new_rmremarks").getValue();

  var statusvalue = formContext.getAttribute("statuscode").getValue();
  if ( statusvalue == 100000001 && fms_remark == null ){
        alert("Please fill FMS remark to continue") ;
        formContext.getAttribute("new_fmsremarks").setRequiredLevel("required");
      }
      else if (statusvalue ==100000004 && cem_remark == null){
        alert("Please fill CEM remark to continue");
        formContext.getAttribute("new_cemremarks").setRequiredLevel("required");
      }
      else if(statusvalue == 100000002 && cem_remark == null){
        alert("Please fill CEM remark to continue");
        formContext.getAttribute("new_cemremarks").setRequiredLevel("required");

      }
      else if (statusvalue == 100000000 && rm_remark == null){
        alert("Please fill RM remark to continue ");
        formContext.getAttribute("new_rmremarks").setRequiredLevel("required");
      }
  else{
  var confirmStrings = {text : "Do you really wish to continue?", title: "Disapprove"};
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

function Disapprove_hide(formContext){
  debugger;
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var sp_assigned = formContext.getAttribute("new_sp_assigned").getValue();
  if (statusvalue == 1 || statusvalue== 100000008 || statusvalue == 100000009 || statusvalue == 100000006 || statusvalue == 100000003 || statusvalue == 100000005 || statusvalue== 100000007 || statusvalue== 100000010 || statusvalue== 100000011){
    return false
  }
  else{
    return true
  }
}
/////////////////////////////////////////////

function Assign_To_SP(formContext){
  debugger;
  var entitlementFlag = formContext.getAttribute("entitlementid").getValue();
  if (entitlementFlag==null) {
  alert("Please Attach Entitlement To Assign SP");

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

function Assign_To_SP_hide(formContext){
  debugger;
  var sp_status = formContext.getAttribute("statuscode").getValue();
  var sp_assigned = formContext.getAttribute("new_sp_assigned").getValue();
  if (sp_assigned == true){
    return false;
  }
  else if (sp_status == 100000006  || sp_status == 100000007 || sp_status == 100000009  || sp_status == 100000008 ){
    return true;
  }
  else if (sp_status ==1 && sp_assigned == false ){
    return true;
  }
  else{
    return false;
  }
}


////////////////////////////////////////////






function send_for_SpareParts_Approval(formContext){
  debugger;
  var mechanic_remarks = formContext.getAttribute("new_mechanicremarks").getValue();
  var confirmStrings = { text : "Do you really wish to send this for Spare Parts Approval?", title:"Spare Part Approval"};
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
      else
      {

        console.log("request Cancelled");

      }


    });
}

function Send_For_SpareParts_Approval_hide(formContext){
   debugger;
  var bill_status = formContext.getAttribute("new_billable").getValue();
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var sp_assigned = formContext.getAttribute("new_sp_assigned").getValue();
  if (statusvalue == 100000001 || statusvalue == 100000005
    || statusvalue == 100000004 || statusvalue == 100000000 || statusvalue == 100000002 || statusvalue== 100000010 || statusvalue== 100000011){
    return false
  }
  else{
    return true
  }

}





///////////////////////////////////////////////////////////////////////////////////////////////////////////
function Send_For_Feedback(formContext){
  debugger;
  var confirmStrings = {text : "Do you wish to send this for Feedback?", title: "Send For Feedback"};
  var confirmOptions = {height:200, width:450};
  Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
    function(success){
      if(success.confirmed){
        formContext.getAttribute("new_sentforfeedback").setValue(true);
        Xrm.Page.getAttribute("ownerid").setValue([{ id: "5a826cb0-9057-ea11-9116-00155d0a0438", name: "FMS .", entityType: "systemuser" }]);
        formContext.data.entity.save();
      }
      else{
        console.log("Request Cancelled..");

      }
    });
	
}

function Send_For_Feedback_hide(formContext){
  debugger;
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  if (statusvalue == 100000010 || statusvalue== 100000011){
    return false;
  }
  else{
    return true;
  }
}
//////////////////////////////////////////////////////////////////////////new_sentforfeedback

function Send_For_Special_Approval(formContext){
	debugger;

  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var status  = formContext.getAttribute("new_sp_assigned").getValue();
  var special_approval_remark = formContext.getAttribute("new_specialapprovalreason").getValue();
  if ( special_approval_remark == null ){
    alert("Please Fill Special Approval Reason to Continue.");
    formContext.getAttribute("new_specialapprovalreason").setRequiredLevel("required");
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

function Send_For_Special_Approval_hide(formContext){
  debugger;
  var bill_status = formContext.getAttribute("new_billable").getValue();
  var statusvalue = formContext.getAttribute("statuscode").getValue();
  var sp_assigned = formContext.getAttribute("new_sp_assigned").getValue();
  if (statusvalue ==1 && bill_status == false && sp_assigned ==true){
    return false;
  }
  else if (statusvalue ==1 || statusvalue== 100000007){
    return true
  }
  else if ( statusvalue!= 100000008 && statusvalue!=100000009 && statusvalue != 100000006 && statusvalue != 100000005){
    return false;
  }
  else{
    return true;
  }

}
////////////////////////////////////////////////////////////////////////////////////
function Resolved(formContext){
  debugger;
  var caseremarks = formContext.getAttribute("new_caseresolutionremarks").getValue();
  if (caseremarks == null){
    alert("Please Fill Case Resolution Remarks to Resolve the case.");
    formContext.getAttribute("new_caseresolutionremarks").setRequiredLevel("required");
  }
  else{ 
    formContext.getAttribute("statuscode").setValue(100000011);  
    Xrm.Page.getAttribute("new_pendingat").setValue(null);
    console.log("case Resolved..");

  }
}

function Resolved_hide(formContext){

  var statusvalue = formContext.getAttribute("statuscode").getValue(100000008);
  if (statusvalue == 100000011 ){
    return false;
  }
  else{
    return true;
  }
}