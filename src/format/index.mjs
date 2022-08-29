import { typeOf } from "../tools/index.mjs";
/**
 * @desc: 金额格式化
 * @return: 千分位金额
 * @param {*} price
 * @param {*} isPoint 是否为分
 * @param {*} symbol 自定义前缀，如￥
 */
export const priceFormat = (price, isPoint, symbol) => {
  if (typeOf(price) !== "number" && typeOf(price) !== "string") {
    throw Error("The parameter type must be string or number");
  }
  if (typeOf(price) === "string") price = Number(price);
  if (isPoint) price = price / 100;
  const res = price.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ",");
  if (typeOf(symbol) !== "string") return res;
  return res.replace(/^/, symbol);
};
