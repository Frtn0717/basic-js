const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let curDepth = 1;
    let maxDepth = 1;
    for (let i of arr) {
      if (Array.isArray(i)) {
        curDepth += this.calculateDepth(i);
        maxDepth = Math.max(curDepth, maxDepth);
        curDepth = 1;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
