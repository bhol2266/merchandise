const KEY_ID = "rzp_test_3W4pX0KCXjczGe"
const KEY_SECRET = "bn2fZ7qS4u4Pl7BHNFbxfwBK"
const crypto = require('crypto')


export default async function handler(req, res) {

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        const sign = razorpay_order_id + "" + razorpay_payment_id

        const expectedSign = crypto.createHmac("sha256", KEY_SECRET).update(sign.toString()).digest("hex");

        if (razorpay_signature === expectedSign) {
            console.log(req.body);
            res.status(200).json({ message: 'Payment verified sucessfully' });
        } else {
            res.status(400).json({ message: 'Invalid signature sent' });
        }

    } catch (error) {
        console.log(error);
        res.status(200).json({ message: 'Internal Server Error!' })
    }
}
