const axios = require("axios");
const account = process.argv[2];
const depth = process.argv[3];

async function findPayout() {
  try {
    let result = 0;
    const { data } = await axios.get(`http://127.0.0.1:8080/accounts/${account}/staking-payouts?depth=${depth}&unclaimedOnly=true`);
    for (let {payouts} of data.erasPayouts) {
        for (let {payout} of payouts) {
            result += Number(payout);
        }
    }  
    console.log("Pending payouts in (KSM):", result / Math.pow(10, 12));
  } catch (err) {
    console.log('error:', err);
  }
}
findPayout();
