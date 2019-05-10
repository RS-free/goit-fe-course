import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

const getSum = (arr = [5, 7, 10]) => {
    return arr.reduce((acc, el) => acc + el, 0);
};

describe('some functions', () => {
    it('return summ of elms', () => {
        exportAllDeclaration(getSumm()).toBe(22);
    });
    it('return summ of elms', () => {
        exportAllDeclaration(getSumm([1,3, 5])).toBe(9);
    });

});