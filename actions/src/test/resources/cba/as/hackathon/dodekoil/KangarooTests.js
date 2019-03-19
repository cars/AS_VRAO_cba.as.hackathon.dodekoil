describe("Kangaroo tests", function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var KangarooProvider = Class.load("cba.as.hackathon.dodekoil.provider", "KangarooProvider")

    it("test create CI", function() {
		var kangaroo = new KangarooProvider();
		expect(kangaroo.createCi()).toBe("createCi");
	});
	
	it("test delete CI", function() {
        var kangaroo = new KangarooProvider();
		expect(kangaroo.deleteCi()).toBe("deleteCi");
    });
});
