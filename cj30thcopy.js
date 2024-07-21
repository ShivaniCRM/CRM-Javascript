function SFA(executionContext)
{
	debugger;
	var formcontext = executionContext.getFormContext();
	var confirmStrings = {text: "Do you want to send for Approval?", title:"Confirmation", "cancelButtonLabel": "No", confirmButtonLabel: "Yes"} 
	var confirmOptions = {height : 200, width: 500}
	Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
		function (success){
			if (success.confirmed) {
				formcontext.getAttribute("new_sendforapproval").setValue(true);
				formcontext.data.entity.save();
			}
			else{
				formcontext.getAttribute("new_sendforapproval").setValue(false);
				formcontext.data.entity.save();
			}
		},
		function error(error){
			Xrm.Navigation.openAlertDialog(error.message, null);
		}
		);


}

function Approve(executionContext){
	debugger;
	var formContext = executionContext.getFormContext();
	var statusvalue = formContext.getAttribute("statuscode").getValue();

	if (statusvalue == 100000000) {
		var confirmStrings = {text: "Do You want to send for Approval?",title:"Confirmation", "cancelButtonLabel": "No",confirmButtonLabel: "Yes"}
		var confirmOptions = {height:200, width: 500}
		Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
			function(success){
				if (success.confirmed) {
					formContext.getAttribute("new_approve").setValue(true);
					formContext.data.entity.save();
				}
				else{
					formContext.getAttribute("new_approve").setValue(false);
					formContext.data.entity.save();
				}
			},
			function error(error){
				Xrm.Navigation.openAlertDialog(error.message, null);
			});

	}
	else if (statusvalue == 100000001) {
		var confirmStrings = {text: "Do you want to Approve?",title:"Confirmation","cancelButtonLabel": "No",confirmButtonLabel: "Yes"}
		var confirmOptions = {height:200, width:500}
		Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
			function(success){
				if (success.confirmed) {
					formContext.getAttribute("new_approvedbyceocoo").setValue(true);
					formContext.data.entity.save();
				}
				else{
					formContext.getAttribute("new_approve").setValue(false);
					formContext.data.entity.save();
				}

			},
			function error(error){
				Xrm.Navigation.openAlertDialog(error.message, null);
			});
	}
}

function DisApprove(executionContext){
	debugger;
	var formContext = executionContext.getFormContext();
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	if (statusvalue == 100000000 ) {
		var confirmStrings = {text: "Do you want to Disapprove?",title:"Confirmation","cancelButtonLabel":"No",confirmButtonLabel: "Yes"}
		var confirmOptions = {height:200, width:500}
		Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
			function(success){
				if (success.confirmed) {
					formContext.getAttribute("new_disapproved").setValue(true);
					formContext.data.entity.save();
				}
				else{
					formContext.getAttribute("new_approve").setValue(false);
					formContext.data.entity.save();
				}
			},
			function error(error){
				Xrm.Navigation.openAlertDialog(error.message)
			});
	}
	else if (statusvalue == 100000001) {
		var confirmStrings = {text:"Do you want to Disapprove?", title:"Confirmation","cancelButtonLabel":"No",confirmButtonLabel:"Yes"}
		var confirmOptions = {height:200, width:500}
		Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions).then(
			function(success){
				if (success.confirmed) {
					formContext.getAttribute("new_disapprovedbycooceo").setValue(true);
					formContext.data.entity.save();
				}
				else{
					formContext.getAttribute("new_disapprovedbycooceo").setValue(false);
					formContext.data.entity.save();
				}
			},
			function error(error){
				Xrm.Navigation.openAlertDialog(error.message)
			});

	}
}

//this variable stores if Async Operation was Completed
var isAsyncOperationCompletedCAMSFA = false;
//this variable stores if button is enabled or not
var isButtonEnabledCAMSFA = false;
function ShowHideSFA(executionContext){
	var formContext = executionContext.getFormContext();
	debugger;
	if (isAsyncOperationCompletedCAMSFA) {
		return isButtonEnabledCAMSFA;
	}
	var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{","").replace("}","");

	Xrm.WebApi.retrieveRecord("systemuser",userId, "?$expand=systemuserroles_association($select=name)").then(
		function success(result){
			isAsyncOperationCompletedCAMSFA = true;

			//Looping through all the roles available to the user
			for(var i =0; i<result.systemuserroles_association.length;i++){
				//getting  the role name
				var rolename = result.systemuserroles_association[i]["name"];

				//if rolename is equal to MPM setting the value as True.

				if (rolename === "MPM ") {
					isButtonEnabledCAMSFA = true;
				}
			}
			if (isButtonEnabledCAMSFA) {
				formContext.ui.refreshRibbon();

			}
		},
		function error(error){
			//if something went wrong during the data retrievel 
			//mark the process Completed
			 isAsyncOperationCompletedCAMSFA = true;
             Xrm.Navigation.openAlertDialog({ text: error.message });

		});
	return false;


}



var isAsyncOperationCompletedCAMAD = false;
var isButtonEnabledCAMAD = false;

function ShowHideAD(executionContext){
	debugger;

	var formContext = executionContext.getFormContext();
	var statusvalue = formContext.getAttribute("statuscode").getValue();
	if (statusvalue == 100000002 || statusvalue == 100000003) {
		return false;
	}
	else{
	if (isAsyncOperationCompletedCAMAD) {
		return isButtonEnabledCAMAD;
	}
	var userId = Xrm.Utility.getGlobalContext().userSettings.userId.replace("{","").replace("}","");
       Xrm.WebApi.retrieveRecord("systemuser",userId, "?$expand=systemuserroles_association($select=name)").then(
		function success(result){
			isAsyncOperationCompletedCAMAD = true;
			for(var i =0; i < result.systemuserroles_association.length; i++){
				var rolename = result.systemuserroles_association[i]["name"];
				if (rolename === "CEO") {
					isButtonEnabledCAMAD = true;
				}
				else if (rolename === "COO") {
					isButtonEnabledCAMAD = true;
				}
				else if (rolename === "LM") {
					isButtonEnabledCAMAD = true;
				}
			}
			if (isButtonEnabledCAMAD) {
				formContext.ui.refreshRibbon();
			}
		},
		function error(error){
			isAsyncOperationCompletedCAMAD = true;
			Xrm.Navigation.openAlertDialog({ text: error.message });

		});
	return false;
}
}