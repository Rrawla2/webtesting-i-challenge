const enhancer = require('./enhancer.js');
// test away!

describe("enhancer function", () => {
    describe("repair", () => {
        it("should return an item with durability: 100", () => {
            expect(repair(item)).toBe({ durability: 100 })
            expect(repair(item)).notToBe({ durability: 100 })
        })
    })

    describe("succeed", () => {
        it.todo("should return a successful enhancement")
    })

    describe("fail", () => {
        it.todo("should return a failed enhancement")
    })

    describe("get", () => {
        it.todo("should return a modified name for the item reflecting the enhancement")
    })

})