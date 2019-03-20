/**
 * 
 */
(function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var ProviderBase = Class.load("cba.as.hackathon.dodekoil.provider", "ProviderBase");

	return Class.define(function WombatProvider(restHost) {
		ProviderBase.call(this, restHost);

		this.createCi = function(props) {
			var payload = "<CreateRecord><Name>" + props.name + "</Name><Size>" + props.size + "</Size></CreateRecord>";
			return this.restClient.post("/cmdb/v1/record", null, payload, null);
		}

		this.deleteCi = function(id) {
			var payload = "<DeleteRecord><Id>" + id + "</Id></DeleteRecord>";
			return this.restClient.post("/cmdb/v1/record", null, payload, null);
		}
	}, null, ProviderBase);
})
