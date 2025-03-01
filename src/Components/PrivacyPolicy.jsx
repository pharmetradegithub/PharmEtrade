
import React from 'react'
import mobile from '../assets/Mobile app.png'
import playstore from '../assets/googleplay.png'
import appstore from '../assets/apple[1].png'
import back from '../assets/Previous_icon.png'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import Footers from './Footers'
import Nav from './HomePage/Layout/Nav'
function PrivacyPolicy({ topMargin, setActiveStep }) {
    return (
        <>
            <Nav />
            <div
                className='w-full  flex  flex-col  bg-slate-100'
                style={{ marginTop: `${topMargin}px ` }}
            >
                {/* <div className='flex justify-start m-2'>
<Link to="/">
                <img src={logo} className='w-56 h-12'/></Link>
                </div> */}
                <div className='flex justify-center items-center w-full flex-col'>
                    <div className='w-[80%] px-0 md:px-20 py-2 h-full border-b '>
                        <h1 className=' text-xl md:text-3xl font-medium text-blue-900 text-start py-6 underline mt-32'>
                            Privacy & Policy
                        </h1>
                        {/* <button onClick={() => setActiveStep(3)} className=' flex text-red-500 text-xl hover:under  gap-1'>
                    <img src={back} className='w-4 h-4' />
                    <p className='-mt-1 hover:text-red-500'> Back</p>
                </button> */}
                        {/* <div className='   ' >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tenetur ea enim, ut laboriosam commodi veniam repellendus voluptates fugiat excepturi dignissimos delectus ipsam odio nobis earum itaque aliquid tempora temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nobis ratione sunt earum, sequi vel facere natus dicta a quidem magnam nisi perferendis molestias optio fugiat dolor aspernatur numquam recusandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae odio? Inventore maiores cupiditate vero sed asperiores blanditiis labore hic quam reiciendis, perferendis molestiae, nam veritatis pariatur earum ipsa! Nobis.
                    <div className='my-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, iusto debitis! Obcaecati, voluptatum natus. Quas doloremque suscipit blanditiis veniam ut labore in sunt, recusandae nulla assumenda illo natus ipsum ab.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi iste qui. Qui dolorum quod a tempore in atque nam neque ut error accusamus! Odit beatae quasi fugiat officia commodi.
                    </div>
                </div> */}

                        <div className='py-4'>
                            <h1 className='text-blue-900 font-semibold text-xl'>1.  Introduction</h1>
                            <div className='py-2'>
                                {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                PharmEtrade is committed to protecting your privacy and ensuring the security of your personal data. This Internet Privacy and Security Policy outlines how we collect, use, store, and protect your information when you use our website and services.  </div>
                        </div>

                        <div className='py-4'>
                            <h1 className='text-blue-900 font-semibold text-xl'>2. Information We Collect
                            </h1>
                            <div className='py-2'>
                                PharmEtrade may collect the following types of information:<br />
                                •	Personal Information: Name, email address, phone number, and other details you provide.<br />
                                •	Usage Data: IP addresses, browser type, operating system, and browsing activity.licensed <br />•	Cookies and Tracking Technologies: We use cookies to enhance user experience and analyze website traffic.</div>
                            {/* <div className='py-2'>
                                Over-the-counter (OTC) products are available for purchase without a prescription.
                                It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                            <div className='py-2'>
                                Over-the-counter (OTC) products are available for purchase without a prescription.
                                It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                        </div>

                        <div className='py-4'>
                            <h1 className='text-blue-900 font-semibold text-xl'> 3.How We Use Your Information
                            </h1>
                            <div className='py-2'>
                                Your information may be used for the following purposes:<br />
                                •	To provide and improve our services.<br />
                                •	To personalize user experience and content.<br />
                                •	To ensure security and prevent fraud.<br />
                                •	To comply with legal obligations.   </div>

                            {/* <div className='py-2'>
                                Information provided on the Services is for informational purposes only and is not intended as medical advice.
                                Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
                                Use of the Services does not create a healthcare provider-patient relationship between you and PharmEtrade.  </div> */}
                            {/* you and [Pharmacy Name] */}
                        </div>

                        <div className='py-4'>
                            <h1 className='font-semibold text-blue-900 text-xl'>4. Information Sharing and Disclosure </h1>
                            <div className='py-2'>
                                We do not sell, trade, or rent personal information to third parties.  However, we may share information with:<br />
                                •	Service providers assisting in business operations.<br />
                                •	Law enforcement when required by law.<br />
                                •	Business partners with your consent.<br />


                            </div>
                        </div>

                        <div className='py-4'>
                            <h1 className='font-semibold text-xl text-blue-900'>5. Data Security
                            </h1>
                            <div className='py-2'>
                                We implement security measures such as encryption, access controls, and secure storage to protect your data from unauthorized access or breaches.
                            </div>
                            {/* <div className='py-4'>
                        <h1 className='text-lg font-medium text-blue-900'>Click here Page Content- </h1>
                        <div>
                            <p className='text-lg'>a.{" "} GPay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>

                            <p className='text-lg'>b. {" "}Paytm <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>c.{" "} PhonePe <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>d.{" "} Mobikwik <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>e.{" "} Amazon Pay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
                            <p className='text-lg'>f. {"   "} {" "}Visa, Mastro, Rupay and Maestro cards;
                            </p>
                            <p className='text-lg'> g. {"    "}Cash on delivery for offline payments.
                            </p>


                        </div>
                    </div> */}
                        </div>
                        <div className='py-4'>
                            <h1 className='font-semibold text-xl text-blue-900'>6. User Rights and Choices
                            </h1>
                            <div className='py-2'>
                                You have the right to: <br />
                                •	Access, update, or delete your personal information. <br />
                                •	Opt out of marketing communications. <br />
                                •	Restrict or object to data processing. <br />
                            </div>
                        </div>

                        <div className='py-4'>
                            <h1 className='font-semibold text-xl text-blue-900'>7. Third-Party Links
                            </h1>
                            <div className='py-2'>
                                Our website may contain links to external sites.  We are not responsible for their privacy practices, and we encourage you to review their policies.
                            </div>
                        </div>
                        <div className='py-4'>
                            <h1 className='font-semibold text-xl text-blue-900'>8. Changes to This Policy
                            </h1>
                            <div className='py-2'>
                                We may update this policy from time to time.  Changes will be posted on this page with an updated effective date.
                            </div>
                        </div>
                        <div className='py-4'>
                            <h1 className='font-semibold text-xl text-blue-900'>9. Contact Information
                            </h1>
                            <div className='py-2'>
                                For questions or concerns regarding this policy, please contact us at  <br />
                                info@pharmetrade.com
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex flex-col md:flex-row ml-10 md:ml-0 py-4'>
                        <div>
                            <img src={mobile} className='w-60 h-96' />
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <h1 className='flex  text-xl'>Download App for Free</h1>
                            <div className=' flex py-6 -ml-6 md:ml-0'>

                                <button className='bg-blue text-white -mx-0 md:mx-6 w-32 h-8 rounded-md flex items-center p-2'>
                                    <img src={playstore} className='w-6' />
                                    {" "}  Google Play
                                </button>

                                <button className='bg-blue rounded-md text-white mx-6 w-28 flex h-8 items-center'>
                                    <img src={appstore} className='w-8 ' />
                                    App Store</button>
                            </div>
                        </div>
                    </div> */}
                    <Footers />
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;
