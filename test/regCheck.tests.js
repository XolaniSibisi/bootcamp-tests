describe('Test my regCheck function' , function(){
    it("It should return True when vehicle regNo end string matches end reg location" , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'), "This should be true");
    });

    it("It should return False when vehicle regNo end string not match end reg location " , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'), "This should not be true");
    });

});