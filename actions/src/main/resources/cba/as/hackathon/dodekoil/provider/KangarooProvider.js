/**
 * 
 */
(function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var ProviderBase = Class.load("cba.as.hackathon.dodekoil.provider", "ProviderBase");

	return Class.define(function KangarooProvider(restHost) {
		ProviderBase.call(this, restHost);

		this.createCi = function(props) {
			var payload = {
				"name" : props.name,
				"size" : props.size
			}
			return this.restClient.put("/api/record", null, payload, null);
		}

		this.deleteCi = function(id) {
			return this.restClient.delete("/api/record/{id}", [id], null);
		}
	}, null, ProviderBase);
})
