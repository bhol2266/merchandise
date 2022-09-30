import { useContext, useState } from "react";
import MerchContext from "../context/MerchContext";


const Policy = () => {

    const { currentView, setcurrentView } = useContext(MerchContext)

   
    return (

        <div className="font-inter text-[#323232] px-[20px] lg:px-[65px] py-[15px]">

            {/* Privacy Policy */}

            {currentView === 'privacy' &&

                <div className="" id="privacyPolicy">
                    <h1 className="text-[18px] font-medium">Privacy Policy</h1>
                    <p className="text-[12px] my-2">Customer commitment to data protection and privacy -
                        Protecting personal data and your privacy is of greatest concern for Closm. In this Privacy Notice we want to give a clear, concise, and transparent communication on the collection, use, processing, storing etc. of personal data relating to customers of Closm.
                    </p>

                    <h2 className="text-[16px] mt-3">1.Collection of Personal Information and use</h2>


                    <p className="text-[12px] mt-3">On Closm, we collect and store your personal information which is provided by user in the time of registration or filling address. Our goal is to provide you a efficient,smooth,safe and customised experience. This allows us to provide services that most likely meet your needs, and to customise our Website to make your experience easier.We collect personal information from you that we consider necessary for achieving this purpose.
                    </p>

                    <p className="text-[12px] mt-3">In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Website. We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address.
                    </p>
                    <p className="text-[12px] mt-3">We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services.Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.
                    </p>
                    <p className="text-[12px] mt-3">Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.
                    </p>
                    <p className="text-[12px] mt-3">If you choose to buy on the Website, we collect information about your buying behaviour.
                    </p>
                    <p className="text-[12px] mt-3">If you transact with us, we collect some additional information, such as a billing address, a credit / debit card number,payment instrument details and tracking information from money orders.
                    </p>
                    <p className="text-[12px] mt-3">We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up a free account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as placing an order) do require registration.
                    </p>


                    <h2 className="text-[16px] mt-3">2.Data Protection</h2>


                    <p className="text-[12px] mt-3">Any applicable law for the time being in force relating to the processing of Data.
                    </p>

                    <h2 className="text-[16px] mt-3">3.Where we store data</h2>

                    <p className="text-[12px] mt-3">All data collected under this privacy notice are stored on servers in India.
                    </p>
                    <h2 className="text-[16px] mt-3">4.Use of Children Info</h2>

                    <p className="text-[12px] mt-3">Our Platforms do not offer services for use by childrens. If you are under 18, you may use our Platforms only with the involvement of a parent or guardian.
                    </p>


                    <h2 className="text-[16px] mt-3">5.Sharing of personal information</h2>
                    <p className="text-[12px] mt-3">We share personal information of users (E.g. name,phone number,address) with third parties such as delivery partners & logistic services.</p>

                    <h2 className="text-[16px] mt-3">6.Rights</h2>
                    <p className="text-[12px] mt-3">You have the right to request information about the personal data we hold on you at any time. You can contact Customer Service that will provide you with your personal data via email.</p>

                    <p className="text-[12px] mt-3">You have the right to erase your personal data processed by Closm at any time. Your request may be hindered if any of the following situation apply:</p>

                    <div className="flex flex-col items-start justify-center ml-5 my-3">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">an ongoing matter with Customer Service</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">an open order which has not yet been shipped or partially shipped</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">a balance with Closm, regardless of the payment method</p>
                        </div>
                    </div>


                    <h2 className="text-[16px] mt-3">7.Your Consent</h2>
                    <p className="text-[12px] mt-3">By using the Website, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to Your consent for sharing your information as per this privacy policy.</p>
                    <p className="text-[12px] mt-3">If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>


                    <h2 className="text-[16px] mt-3">8.Security</h2>
                    <p className="text-[12px] mt-3">We offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorised access.</p>


                    <h2 className="text-[16px] mt-3">9.Grievance Officer</h2>
                    <p className="text-[12px] mt-3">Mr Badal Barhate </p>
                    <p className="text-[12px] ">Designation : Gujrat: 388120, India</p>

                    <h2 className="text-[16px] mt-3">10.Contact us</h2>
                    <p className="text-[12px] mt-3">You can reach us on customerservice@closm.com or Phone: +91 8460561318 Time: Mon - Sat (9:00 - 18:00).</p>




                    <h1 className="text-[18px] font-medium mt-8">Creators Agreement</h1>



                    <h2 className="text-[16px] mt-3">1.Licences</h2>
                    <p className="text-[12px] mt-3">By uploading Content to the Site and/or creating Content with Closm, you grant the following licenses to Closm: the nonexclusive, worldwide, transferable, sublicensable right to use, reproduce, publicly display, sell, and distribute the Content (a) in or on Products and (b) in advertising, marketing, samples, and promotional materials for the purpose of promoting the Site, your Content and Products. Without limitation, this promotion, marketing, or advertising may consist of: (i) display of your Content and/or Products; (ii) promotional "streams" of audio/video/photographic content, including but not limited to your Content, on the Website, (iii)Products or Content placement in magazines, television shows, movies, and other media; and (iv) the distribution of Content and Products available on the Site through third party product feeds and websites. You also grant us the license and the right to make modifications to your Content as necessary for viewing/download/sale on a particular Product, as applicable, or for other manufacturing or Site-related purposes.Designs and associated metadata that: (i) are published by Creators (i.e., not contributed by Closm) using our “Post for Download” or “Post for Sale” workflows, and (ii) associated with a Product type (e.g., t-shirt, Facebook® banner, tote bag, etc.), are "Primary Content." Primary Content published by a Creator as “Post for Sale” will not be available as downloadable Content unless the Creator also chooses to publish that Primary Content as “Post for Download.”</p>
                    <p className="text-[12px] mt-3">You retain all copyright and other intellectual property rights in your Content. You may delete or hide your Primary Content and certain types of Secondary Content from the Site at any time, but due to caching and other technical issues, it may take a number of days for it to be completely removed from the Site. Upon the removal of Content, the licenses above will terminate, except that Closm may continue to use or access your Content (i) to fulfill any orders placed prior to termination, (ii) in marketing and promotional materials if such materials were created prior to removal of the Content, and (iii) to defend against or respond to infringement claims.</p>

                    <p className="text-[12px] mt-3">You retain all copyright and other intellectual property rights in your Content. You may delete or hide your Primary Content and certain types of Secondary Content from the Site at any time, but due to caching and other technical issues, it may take a number of days for it to be completely removed from the Site. Upon the removal of Content, the licenses above will terminate, except that Closm may continue to use or access your Content (i) to fulfill any orders placed prior to termination, (ii) in marketing and promotional materials if such materials were created prior to removal of the Content, and (iii) to defend against or respond to infringement claims.</p>

                    <h2 className="text-[16px] mt-3">2.Orders</h2>
                    <p className="text-[12px] mt-3">Here,In Closm we print the designs on their respective products after an order is placed by users or by other companies.It requires 2 to 3 days to dispatch the product(s).</p>

                    <h2 className="text-[16px] mt-3">3.Pricing</h2>
                    <p className="text-[12px] mt-3">Closm determines the price at which Products are offered on the Site and affiliated sites. You can see Closm's standard retail prices here and get more information about volume discounts here. The actual price for Products incorporating your Content may vary based upon Your Royalty Rate (see below).</p>


                    <h2 className="text-[16px] mt-3">4.Representations</h2>
                    <p className="text-[12px] mt-3">You represent that:</p>
                    <p className="text-[12px] mt-3">You are the owner of the Content or that the Content is in the public domain;</p>
                    <p className="text-[12px] mt-3">You have the legal right grant this license to Closm and to enter into this Agreement;</p>
                    <p className="text-[12px] mt-3">To your knowledge, no one else claims ownership of, or exclusive rights to, the Content;</p>
                    <p className="text-[12px] mt-3">The Content does not infringe the privacy, celebrity, moral or other rights of any third party;</p>
                    <p className="text-[12px] mt-3">The Content does not contain any defamatory, obscene or discriminatory content or any illegal material; and</p>
                    <p className="text-[12px] mt-3">Closm may legally make and sell Products incorporating the Content without infringing the rights of any third party and without being obligated to make any payments to, or obtain any permission from, any third party.</p>


                    <h2 className="text-[16px] mt-3">5.Royalty</h2>

                    <h2 className="text-[16px] mt-3">6.Promotions</h2>
                    <p className="text-[12px] mt-3">Closm may market, promote, distribute and sell Products on the Site, on other websites, and/or through distributors and wholesale or retail channels. Closm may run promotions (including volume discounts and special sales discounts).Closm is responsible for the cost of promoting the offer and producing and fulfilling the orders, and you acknowledge that your Royalty will be based on the amount of revenue Closm actually receives for the sale of Products.</p>

                    <h2 className="text-[16px] mt-3">7.Query</h2>
                    <p className="text-[12px] mt-3">If you encounter any of these issues then write to us on support@closm.com or call us on +91 8460561318 (10:00 AM to 21:00 PM) for a replacement of the product or full money back within 15 days of purchase.</p>


                </div>
            }

            {/* terms of use */}
            {currentView === 'terms' &&
                <div>
                    <h1 className="text-[18px] font-medium ">Terms & Conditions</h1>



                    <h2 className="text-[16px] mt-3">Closm Terms of Use</h2>
                    <p className="text-[12px] mt-3">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
                    </p>
                    <p className="text-[12px] mt-3">This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of Closm marketplace platform (www.closm.com), including the related mobile site (hereinafter referred to as “Platform”)</p>
                    <p className="text-[12px] mt-3">The Platform is owned by Closm Private Limited a company with its registered office at K-21/46, Kh. No. 775, Main Road Gautam Nagar, Delhi, North East, Delhi, India.</p>
                    <p className="text-[12px] mt-3">Your use of the Platform and services are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform including the applicable policies which are incorporated herein by way of reference. If You transact on the Platform, You shall be subject to the policies that are applicable to the Platform for such transaction. By mere use of the Platform, You shall be contracting with Closm Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Closm.</p>
                    <p className="text-[12px] mt-3">For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Platform by providing Registration Data while registering on the Platform as Registered User using the computer systems. Closm allows the User to surf the Platform or making purchases without registering on the Platform. The term "We", "Us", "Our" shall mean Closm Private Limited.</p>
                    <p className="text-[12px] mt-3">When You use any of the services provided by Us through the Platform, You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates / changes. Your continued use of the Platform following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Platform.</p>




                    <h2 className="text-[16px] mt-5">1.Eligibility</h2>
                    <p className="text-[12px] mt-3">Our services are available only to, and may only be used by, individuals who can form legally binding contracts under applicable law. Our services are not available to persons under 18 years of age.</p>


                    <h2 className="text-[16px] mt-5">2.Passwords</h2>
                    <p className="text-[12px] mt-3">You are responsible for actions made on the website using your password, including any products purchased or sold and any content displayed or messages sent, even if these actions were not approved or contemplated by you. You are solely responsible for any loss caused by any use of your password by you, or any other person.
                    </p>
                    <p className="text-[12px] mt-3">You agree that you will not disclose your password to any other person and you will not keep your password where it can be copied or used by anyone other than you. If you suspect someone else knows your password, you must change it immediately.
                    </p>


                    <h2 className="text-[16px] mt-3">2.Passwords</h2>
                    <p className="text-[12px] mt-3">You are responsible for actions made on the website using your password, including any products purchased or sold and any content displayed or messages sent, even if these actions were not approved or contemplated by you. You are solely responsible for any loss caused by any use of your password by you, or any other person.
                    </p>
                    <p className="text-[12px] mt-3">You agree that you will not disclose your password to any other person and you will not keep your password where it can be copied or used by anyone other than you. If you suspect someone else knows your password, you must change it immediately.
                    </p>




                    <h2 className="text-[16px] mt-3">3.Social Media</h2>
                    <p className="text-[12px] mt-3">Closm may seek to promote its community and the Site by featuring your Content — on Products, videos, photos, or the like — on various social media platforms. In addition to the rights you grant to Closm in this User Agreement and in the Creator License Agreement, you agree that your use of any variation of the hashtag(s) #Closm and/or #Closm in your social media post(s) grants Closm the right and license to use that social media post and its contents in any of Closm's social media channels, on the Site, and on affiliate channels
                    </p>



                    <h2 className="text-[16px] mt-3">4.Putting content</h2>
                    <p className="text-[12px] mt-3">You keep the copyright in any content you submit or upload to the website. In order to receive the Closm services you grant Closm a non-exclusive royalty free license to use and archive the content in accordance with or as reasonably contemplated by this agreement.
                    </p>


                    <h2 className="text-[16px] mt-3">When you submit or upload content on the website you represent and warrant that:</h2>

                    <div className="ml-5">
                        <p className="text-[12px] mt-3">1)	you own all copyright in the content, or if you are not the owner, that you have permission to use the content, and that you have all of the rights required to display, reproduce and sell the content;</p>
                        <p className="text-[12px] mt-3">2)	the content you upload will not infringe the intellectual property rights or other rights of any person or entity, including copyright, moral rights, trade mark, patent or rights of privacy or publicity;</p>
                        <p className="text-[12px] mt-3">3)	your use of the website will comply with all applicable law, rules and regulations;</p>
                        <p className="text-[12px] mt-3">4)	the content does not contain material that defames or vilifies any person, people, races, religion or religious group and is not obscene, pornographic, indecent, harassing, threatening, harmful, invasive of privacy or publicity rights, abusive, inflammatory or otherwise objectionable;</p>
                        <p className="text-[12px] mt-3">5)	the content does not include malicious code, including but not limited to viruses, trojan horses, worms, time bombs, cancelbots, or any other computer programming routines that may damage, interfere with, surreptitiously intercept, or expropriate any system, program, data, or personal information; and</p>
                        <p className="text-[12px] mt-3">6)	the content is not misleading and deceptive and does not offer or disseminate fraudulent goods, services, schemes, or promotions.</p>
                    </div>

                    <p className="text-[12px] mt-3">Closm reserves the right to review and if in its sole discretion deemed necessary, remove any content from the website and / or cancel your account, because that content breaches your agreement with us and / or any applicable laws, or otherwise. You agree to indemnify Closm in respect of any direct or indirect damage caused due to your breach of one or more of these warranties.
                    </p>



                    <h2 className="text-[16px] mt-3">5. Guarantee</h2>
                    <p className="text-[12px] mt-3">If there are defects in the products you have purchased, Closm abides by all statutory guarantee regulations. If you have a complaint regarding material or manufacturing faults in products that we have supplied, including damage incurred in transit, please let us know by returning the goods to us without delay by using the provided return window.
                    </p>

                </div>
            }
            {/* return policy */}
            {currentView === 'refund' &&
                <div>

                    <h1 className="text-[18px] font-medium">Return Policy</h1>

                    <p className="text-[12px] mt-3">Closm does not support returns.Once you receive the item then it can not be returned.Unless there are some issues in the products like :
                    </p>

                    <div className="flex flex-col items-start justify-center ml-5 my-3">
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Printing issues</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Received different product</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Product missing</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Transit damage</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Different size received</p>
                        </div>
                        <div className="flex items-center justify-start space-x-3">
                            <span className="bg-black p-1 rounded-full"></span>
                            <p className="text-[12px]">Other related issues</p>
                        </div>

                    </div>

                    <p className="text-[12px] mt-3">If you encounter any of these issues then write to us on support@closm.com or call us on +91 8460561318 (10:00 AM to 21:00 PM) for a replacement of the product or full money back within 15 days of purchase.
                    </p>






                </div>
            }



            {/* support */}
            <div>
            <h1 className="text-[18px] font-medium">Support</h1>
                <p className="text-[12px] mt-3">You can reach us on support@closm.com or call us on +91 8460561318 (10:00 AM to 21:00 PM) Mon - Friday
                </p>


            </div>


        </div>


    )
};
export default Policy;