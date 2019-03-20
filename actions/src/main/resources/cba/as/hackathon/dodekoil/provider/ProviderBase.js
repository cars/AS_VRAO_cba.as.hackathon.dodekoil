/**
 * 
 */
(function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var RestClient = Class.load("com.vmware.pscoe.library.rest", "RestClient");

	return Class.define(function ProviderBase(restHost) {
		this.restClient = new RestClient(restHost);

		this.createCi = function(props) {
			throw new Error("Not implemented");
		}

		this.deleteCi = function(id) {
			throw new Error("Not implemented");
		}
	});
})
