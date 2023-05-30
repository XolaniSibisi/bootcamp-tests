describe('Test my greet function' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob' " , function(){
        assert.equal('Hello, Bob', greet("Bob"), "This should be true");
    });

    it("It should return 'Hello, Sam' when called with 'Sam' " , function(){
        assert.equal('Hello, Sam', greet("Sam"), "This should be true");
    });

});