const https = require('https');
const PaytmChecksum = require('paytmchecksum');

export default async function handler(req, res) {
    if (req.method === "POST") {


        var paytmParams = {};
        paytmParams.body = {
            "requestType": "Payment",
            "mid": "WRmvJd50283584697830",
            "websiteName": "http://localhost:3000",
            "orderId": req.body.orderId,
            "callbackUrl": `http://localhost:3000/api/PostTransaction`,
            "txnAmount": {
                "value": req.body.amount,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };


        const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body),"MtVi12atyFDjDC#u")


        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);

        const requestAsync = async () => {
            return new Promise((resolve, reject) => {

                var options = {

                    /* for Staging */
                    // hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    hostname: 'securegw.paytm.in',

                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=WRmvJd50283584697830&orderId=${req.body.orderId}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length
                    }
                };

                var response = "";
                var post_req = https.request(options, function (post_res) {
                    post_res.on('data', function (chunk) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        console.log('Response: ', response);
                        resolve(response)
                    });
                });

                post_req.write(post_data);
                post_req.end();
            })
        }

        let myr = await requestAsync()
        res.status(200).json(myr)

    }
}
