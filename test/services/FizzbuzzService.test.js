const FizzBuzzService = require("./../../lib/services/ExplorerService");

describe("Unit Test for FizzbuzzService class", () => {
    test("1) Explorer score 1", () => {
        const explorer = {name:"Explorer1", score: 1};
        explorer = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe(1);
    });
    test("2) Explorer score 3", () => {
        const explorer = {name: "Explorer3", score: 3};
        explorer = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZ");
    });
    test("3) Explorer score", () => {
        const explorer = {name: "Explorer5", score: 5};
        explorer = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("BUZZ");
    });
    test("4) Explorer score 15", () => {
        const explorer = {name: "Explorer15", score: 15};
        explorer = FizzBuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe("FIZZBUZZ");
    });
});