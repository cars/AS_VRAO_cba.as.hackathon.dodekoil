/**
 * 
 */
(function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var ProviderBase = Class.load("cba.as.hackathon.dodekoil.provider", "ProviderBase");

	return Class.define(function PlatypusProvider(restHost) {
		ProviderBase.call(this, restHost);

		function commit(restClient, transactionId) {
			var payload = {
				"transactionId" : transactionId
			}
			return restClient.post("/api/transaction/commit", null, payload, null);
		}

		this.createCi = function(props) {
			var payload = {
				"name" : props.name,
				"size" : props.size
			}

			var transactionResponse = this.restClient.post("/api/transaction/create", null, payload, null);
			  
			return commit(this.restClient, JSON.parse(transactionResponse.contentAsString).transactionId);
		}

		this.deleteCi = function(id) {
			var payload = {
				"id" : id
			}

			var transactionResponse = this.restClient.post("/api/transaction/delete", null, payload, null);

			return commit(this.restClient, JSON.parse(transactionResponse.contentAsString).transactionId);
		}
	}, null, ProviderBase);
})
