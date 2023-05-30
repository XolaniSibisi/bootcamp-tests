describe('Test my isFromBellvile function' , function(){
    it("It should return True when vehicle registration starts with CY " , function(){
        assert.equal(true, isFromBellville("CY 123"), "This should be true");
    });

    it("It should return False when vehicle registration not starts with CY " , function(){
        assert.equal(false, isFromBellville("CJ 123"), "This should not be true");
    });

});