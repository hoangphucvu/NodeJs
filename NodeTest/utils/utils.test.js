/**
 * it to define new test case should do
 */
const expect = require('expect');
const util = require('./utils');

it('should add two number', () => {
    var res = util.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

//should verify first & last name are set
//asert it includes first and last with property values
it('should set firstName and lastName', () => {
    var user = { location: 'Phila', age: 25 };
    var res = util.setName(user, 'Andrew Mead');

    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    });
})

/*
it('should expect some values', ()=>{
    //expect(12).toNotBe(12)
    //expect({name:'andrew'}).toNotEqual({name:'andrew'})
    //expect([2,3,4]).toInclude(5);
    //expect([2,3,4]).toExclude(5);
    expect({
        name:'Andrew',
        age:25,
        location:'Phila'
    }).toInclude({
        age:25
    })
})
*/

//need to add done argument to notify mocha that test is complete
it('shoud async add 2 number', (done) => {
    util.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});