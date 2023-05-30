describe('Test my fromWhere function' , function(){
    it("It should return 'Bellville' if the car registration number start with 'CY'. " , function(){
        assert.equal("Bellville", fromWhere('CY 567489'), "This should be true");
    });

    it("It should return 'Paarl' if the car registration number start with 'CJ'. " , function(){
        assert.equal("Paarl", fromWhere('CJ 343502'), "This should be true");
    });

    it("It should return 'Cape Town' if the car registration number start with 'CA'." , function(){
        assert.equal("Cape Town", fromWhere('CA 987504'), "This should be true");
    });

    it("It should return 'Some other place!' if the car registration number start with 'ZN'. " , function(){
        assert.equal("Some other place!", fromWhere('ZN 568593'), "This should be true");
    });
});