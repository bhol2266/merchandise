const https = require('https');

const PaytmChecksum = require('paytmchecksum');


export default async function handler(req, res) {
    if (req.method === "POST") {


        var paytmParams = {};

        paytmParams.body = {
            "requestType": "Payment",
            "mid": "WRmvJd50283584697830",
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": req.body.orderId,
            "callbackUrl": "https://<callback URL to be used by merchant>",
            "txnAmount": {
                "value": req.body.amount,
                "currency": "INR",
            },
            "userInfo": {
                "custId": "CUST_001",
            },
        };

        /*
        * Generate checksum by parameters we have in body
        * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
        */
        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "MtVi12atyFDjDC#u")
        paytmParams.head = {
            "signature": checksum
        };

        var post_data = JSON.stringify(paytmParams);


        const requestAsync = async () => {
            return new Promise((resolve, reject) => {

                var options = {

                    /* for Staging */
                    hostname: 'securegw-stage.paytm.in',

                    /* for Production */
                    // hostname: 'securegw.paytm.in',

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
                        // console.log('Response: ', response);
                        // res.status(200).json(response)
                        // console.log("This is the response");
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