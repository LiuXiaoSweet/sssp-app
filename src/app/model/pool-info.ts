import BigNumber from "bignumber.js";

export class PoolInfo {
    dai: BigNumber = new BigNumber(0);
    busd: BigNumber = new BigNumber(0);
    usdt: BigNumber = new BigNumber(0);
    fee: BigNumber = new BigNumber(0);
    adminFee: BigNumber = new BigNumber(0);
    virtualPrice: BigNumber = new BigNumber(0);
    totalSupply: BigNumber = new BigNumber(0);

}