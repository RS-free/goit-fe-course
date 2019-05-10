import {generateUniqueId} from '../js/utils/helper';
//import { isMainThread } from 'worker_threads';

const getSum = (arr = [5, 7, 10]) => {
  return arr.reduce((acc, el) => acc + el, 0);
};

describe("some functions", () => {
    console.log("generateUniqueId", generateUniqueId);
    it("generate unique id, needs a string", () => {
      expect(typeof generateUniqueId()).toBe("string");
    });
  });
