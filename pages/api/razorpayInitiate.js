const KEY_ID = "rzp_test_3W4pX0KCXjczGe"
const KEY_SECRET = "bn2fZ7qS4u4Pl7BHNFbxfwBK"
const Razorpay = require('razorpay');
const crypto = require('crypto')




export default async function handler(req, res) {

	try {
		const instance = await new Razorpay({
			key_id: KEY_ID,
			key_secret: KEY_SECRET,
		});

		const options = {
			amount: req.body.amount*100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		await instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: error });
		console.log(error);
	}
}


