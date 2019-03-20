describe("Wombat tests", function() {
	System = System.getModule("cba.as.hackathon.mocks").SystemExtender().mockSystem();
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var WombatProvider = Class.load("cba.as.hackathon.dodekoil.provider", "WombatProvider")

    it("test create CI", function() {
		var wombat = new WombatProvider();
		var response = wombat.createCi({name: "MyRecord", size: 20});
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
	
	it("test delete CI", function() {
		var wombat = new WombatProvider();
		var response = wombat.deleteCi(23);
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
});
