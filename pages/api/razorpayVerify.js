const KEY_ID = "rzp_test_3W4pX0KCXjczGe"
const KEY_SECRET = "bn2fZ7qS4u4Pl7BHNFbxfwBK"
const crypto = require('crypto')


export default async function handler(req, res) {

    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
     
        let body = razorpay_order_id + "|" +razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', KEY_SECRET)
            .update(body.toString())
            .digest('hex');
     
        var response = { "signatureIsValid": "false" }
        if (expectedSignature === razorpay_signature)
            response = { "signatureIsValid": "true",razorpay_order_id:razorpay_order_id,razorpay_payment_id:razorpay_payment_id }
        res.send(response);
    

    } catch (error) {
        console.log(error);
        res.status(200).json({ message: 'Internal Server Error!' })
    }
}
