//how to update a particular entity 
Entity spflag = new Entity(entity.LogicalName,entity.Id);
//attribute name 
spflag["entitlementid"] = false;
service.Update(spflag);




namespace leadmanagement{
	public class casemanagement{

		public void Execute(IServiceprovider serviceprovider){
			//tracingservice 
			ITracingservice tracingservice = (ITracingservice)serviceprovider.getService(typeof(ITracingservice))
			//context 
			IPluginExecutionContext Context = (IPluginExecutionContext)serviceprovider.getService(typeof(IPluginExecutionContext))

			if (context.InputParameters.contains("Target") && context.InputParameters["Target"] is Entity && context.depth<3){
				Entity entity = (Entity)context.InputParameters["Target"]
			}
		}


	}
}