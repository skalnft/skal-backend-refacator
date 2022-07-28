const dayjs = require('dayjs');

const d = dayjs();

const date = new Date();

    let data = date.getUTCDate() +'/'+ `0${date < 10 ? date.getMonth()+1: date.getMonth()+1}`+'/'+ date.getFullYear()

console.log(d);

/*const Stripe = require('stripe');

const stripe = Stripe('sk_test_51LPBmpJhu0pB3EOWKDGYwDhPm0Dq0sOhvTzhj0PD1K2IVRPNld01z0DvaJKPtShT4JgWaeflh1XnZaIAahbDWbHN0011gpPJR1');

(async () => {
    const charge = await stripe.charges
})();*/