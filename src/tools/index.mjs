/**
 * @desc:判断变量类型
 * @return: {number / string / regexp / function / object... }
 */
export const typeOf = (n) => {
  return Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
};
