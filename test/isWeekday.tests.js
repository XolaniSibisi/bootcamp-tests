describe('Test my isWeekday function' , function(){
    it("It should return True if day passed in a function is a weekday" , function(){
        assert.equal(true, isWeekday('Monday'), "This should be true");
    });

    it("It should return False if day passed in a function is not a weekday" , function(){
        assert.equal(false, isWeekday('Saturday'), "This should not be true");
    });

});