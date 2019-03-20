describe("Kangaroo tests", function() {
	System = System.getModule("cba.as.hackathon.mocks").SystemExtender().mockSystem();
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var KangarooProvider = Class.load("cba.as.hackathon.dodekoil.provider", "KangarooProvider")

    it("test create CI", function() {
		var kangaroo = new KangarooProvider();
		var response = kangaroo.createCi({name: "MyRecord", size: 20});
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
	
	it("test delete CI", function() {
		var kangaroo = new KangarooProvider();
		var response = kangaroo.deleteCi(23);
		expect(response.statusCode).toBe(200);
		expect(response.contentAsString).toBe("");
	});
});
