const { repair, succeed, fail } = require('./enhancer.js');

// test away!
const sword = {
    name: "Holy Sword",
    enhancement: 10,
    durability: 4
}

const perfectSword = {
    name: "Perfect Holy Sword",
    enhancement: 20,
    durability: 100
}

const imperfectSword = {
    name: "Imperfect Holy Sword",
    enhancement: 16,
    durability: 80
}

const damagedSword = {
    name: "Damaged Sword",
    enhancement: 15,
    durability: 60
}

describe("enhancer function", () => {
    describe("repair", () => {
        it("should return an item with durability: 100", () => {
            expect(repair(sword)).toEqual({ ...sword, durability: 100 })   
        })

        it("should not return an item with durability: 100", () => {
            expect(repair(sword)).not.toEqual({ ...sword, durability: 100 })
        })
    })

    describe("success", () => {
        it("should return a successful enhancement",  () => {
            expect(succeed(sword)).toEqual({ ...sword, enhancement: 11})
            expect(succeed(perfectSword)).toEqual(perfectSword)
        })
    })

    describe("failure", () => {
        it("should decrease durability by 5 if enhancement is < 15 AND durability > 4", () => {
            expect(fail(sword)).toEqual({ ...sword, durability: 0 })
        })

        it("should decrease durability by 10 if enhancement is >= 15", () => {
            expect(fail(perfectSword)).toEqual({ ...perfectSword, durability: 90 })
        })

        it("should decrease enhancement level by 1 if enhancement is > 16", () => {
            expect(fail(imperfectSword)).toEqual({ ...imperfectSword, enhancement: 16, durability: 70 })
        })

        it("should not increase enhancement", () => {
            expect(fail(damagedSword)).toEqual({ ...damagedSword, enhancement: 18, durability: 60})
        })


    })

    describe("get", () => {
        it.todo("should return a modified name for the item reflecting the enhancement")
    })

})