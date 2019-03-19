describe("sample", function() {
    var sample = System.getModule("cba.as.hackathon.dodekoil").sample;
    it("should add two numbers", function() {
        expect(sample(5, 2)).toBe(7);
    });
});
