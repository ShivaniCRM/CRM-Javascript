function Approve(formContext){
	debugger;
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	var customervalue = formContext.getAttribute("new_customertype").getValue();
	if (statusvalue == 100000001){
		var grid = Xrm.Page.getControl("Assets");
		var filterRecordCount = grid.getGrid().getTotalRecordCount();
		if (filterRecordCount > 0){
			formContext.getAttribute("statuscode").setValue(100000002);
			Xrm.Page.getAttribute("new_pendingat").setValue(null);
			formContext.getAttribute("new_approveflag").statusvalue(false);

		}
		else{
			alert("Please Attach Assets To Continue.")
		}
	}
	else if (customervalue == 100000002){
		var grid  = Xrm.Page.getControl("Service_Level_Agreement");
		var filterRecordCount =  grid.getGrid().getTotalRecordCount();
		
		if (filterRecordCount > 0 ){
			var confirmStrings  = {text : "Do You Really Wish To Continue?", title : "Approve"};
	        var confirmOptions = {height:200, width:450};
	        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		       function(success){
			   if (success.confirmed) {
				formContext.getAttribute("new_approveflag").setValue(true);
				formContext.data.entity.save();
				console.log("forwarding for approval");
			   }
			   else{
				console.log("Request Cancelled..")


			   }
		    });
			
			
		}
		else{
			alert("Please Add SLA's To Continue")
			
		}
	}
	else{
	var confirmStrings  = {text : "Do You Really Wish To Continue?", title : "Approve"};
	var confirmOptions = {height:200, width:450};
	Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		function(success){
			if (success.confirmed) {
				formContext.getAttribute("new_approveflag").setValue(true);
				formContext.data.entity.save();
				console.log("forwarding for approval");
			}
			else{
				console.log("Request Cancelled..")


			}
		});
}
}

function Approve_hide(formContext){
	debugger;
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	if (statusvalue == 0 || statusvalue == 100000004 || statusvalue == 100000002 ||  statusvalue == 100000001){
		return false;
	}
	else{
		return true;
	}
}

function Disapprove(formContext){
	debugger;
	var disapprovalremarks = formContext.getAttribute("new_disapprovalremarks").getValue();
	if (disapprovalremarks == null){
		alert("Please Fill Disapproval Remarks To continue.");
		formContext.getAttribute("new_disapprovalremarks").setRequiredLevel("required");

	}
	else{
	var confirmStrings  = {text : "Do You Really Wish To Continue?", title : "Disapprove"};
	var confirmOptions = {height:200, width:450};
	Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		function(success){
			if (success.confirmed) {
				formContext.getAttribute("new_disapproveflag").setValue(true);
				formContext.data.entity.save();
				console.log("forwarding for approval");
			}
			else{
				console.log("Request Cancelled..")


			}
		});
}

}
function Disapprove_hide(formContext){
	debugger;
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	if (statusvalue == 0 || statusvalue == 100000002 || statusvalue == 100000004 ||  statusvalue == 100000001){
		return false;
	}
	else{
		return true;
	}

}


function send_for_approval(formContext){
	debugger;
	var customervalue = formContext.getAttribute("new_customertype").getValue();
	var grid  = Xrm.Page.getControl("Service_Level_Agreement");
	var filterRecordCount =  grid.getGrid().getTotalRecordCount();
		if (filterRecordCount > 0 ){
			var confirmStrings  = {text : "Do You Really Wish To Continue?", title : "Approve"};
	        var confirmOptions = {height:200, width:450};
	        Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		       function(success){
			   if (success.confirmed) {
				formContext.getAttribute("new_sendforapprovalflag").setValue(true);
				formContext.data.entity.save();
				console.log("forwarding for approval");
			   }
			   else{
				console.log("Request Cancelled..")


			   }
		    });
		}
		else{
			alert("Please Add SLA's To Continue")
			
		}
}
function send_for_approval_hide(formContext){
	var customertype = formContext.getAttribute("new_customertype").getValue();
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	if (customertype ==100000000){
		return false
	}
	else if (statusvalue == 100000000 || statusvalue == 100000001 || statusvalue == 10000000 || statusvalue == 100000005 || statusvalue ==100000002){
		return false
	}
	else{
		return true
	}

}


function AssignToSp(formContext){
	debugger;
	var customertype = formContext.getAttribute("new_customertype").getValue();
	if (customertype == null){
		alert("Please Select the Customer Type To Continue.");
		formContext.getAttribute("new_customertype").setRequiredLevel("required");
	}
	else{
	var confirmStrings = {text: "Do you Really Wish To Continue?",title: "Assign To SP"};
	var confirmOptions = {height:200, width:450};
	Xrm.Navigation.openConfirmDialog(confirmStrings,confirmOptions).then(
		function(success){
			if (success.confirmed){
				formContext.getAttribute("new_spassigned").setValue(true);
				formContext.data.entity.save();

			}
			else{
				console.log("Request Cancelled..");

			}
		});
}
}


function AssignToSp_hide(formContext){
	var sp_status = formContext.getAttribute("new_assigntosp").getValue();
	var customertype = formContext.getAttribute("new_customertype").getValue();
	if(sp_status == true){
		return false
	}
	else if (customertype == 100000002 || customertype == 100000001 ){
		return false
	}
	else{
		return true
	}

}