/**
 * 
 */
(function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var KangarooProvider = Class.load("cba.as.hackathon.dodekoil.provider", "KangarooProvider");
	var WombatProvider = Class.load("cba.as.hackathon.dodekoil.provider", "WombatProvider");
	var PlatypusProvider = Class.load("cba.as.hackathon.dodekoil.provider", "PlatypusProvider");

	return Class.define(function CmdbFactory() {
		ProviderBase.call(this, restHost);

		this.getProvider = function(type, restHost) {
			switch(type) {
				case "Kangaroo":
					return new KangarooProvider(restHost);
				case "Wombat":
					return new WombatProvider(restHost);
				case "Platypus":
					return new PlatypusProvider(restHost);
			}

			throw new Error("Unknown provider " + type);
		}

	}, null, ProviderBase);
})
