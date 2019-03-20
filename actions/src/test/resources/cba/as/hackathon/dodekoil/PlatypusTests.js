describe("Platypus tests", function() {
	System = System.getModule("cba.as.hackathon.mocks").SystemExtender().mockSystem();
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var PlatypusProvider = Class.load("cba.as.hackathon.dodekoil.provider", "PlatypusProvider")

    it("test create CI", function() {
		var platypus = new PlatypusProvider();
		var response = platypus.createCi({name: "MyRecord", size: 20});
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
	
	it("test delete CI", function() {
		var platypus = new PlatypusProvider();
		var response = platypus.deleteCi(23);
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
});
