import { priceFormat } from "./src/format/index.mjs";

const price = priceFormat(12345678, true, "￥");
console.log(price);
