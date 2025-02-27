import React from 'react'
import mobile from '../assets/Mobile app.png'
import playstore from '../assets/googleplay.png'
import appstore from '../assets/apple[1].png'
import back from '../assets/Previous_icon.png'
import logo from '../assets/logo2.png'
function TermsAndConditions({ topMargin, setActiveStep }) {
    // return (
    //     <div
    //         className='w-full  flex  flex-col  bg-slate-100'
    //         style={{ marginTop: `${topMargin}px ` }}>
    //             <div className='flex justify-start m-2'>

    //             <img src={logo} className='w-56 h-12'/>
    //             </div>
    //             <div className='flex justify-center items-center w-full flex-col'>
    //         <div className='w-[80%] px-0 md:px-20 py-2 h-full border-b '>
    //             <h1 className=' text-xl md:text-3xl font-medium text-blue-900 text-start py-6 underline'>
    //                 Terms & Conditions
    //             </h1>
    //             {/* <button onClick={() => setActiveStep(3)} className=' flex text-red-500 text-xl hover:under  gap-1'>
    //                 <img src={back} className='w-4 h-4' />
    //                 <p className='-mt-1 hover:text-red-500'> Back</p>
    //             </button> */}
    //             {/* <div className='   ' >
    //                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tenetur ea enim, ut laboriosam commodi veniam repellendus voluptates fugiat excepturi dignissimos delectus ipsam odio nobis earum itaque aliquid tempora temporibus.
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nobis ratione sunt earum, sequi vel facere natus dicta a quidem magnam nisi perferendis molestias optio fugiat dolor aspernatur numquam recusandae!
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae odio? Inventore maiores cupiditate vero sed asperiores blanditiis labore hic quam reiciendis, perferendis molestiae, nam veritatis pariatur earum ipsa! Nobis.
    //                 <div className='my-3'>
    //                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, iusto debitis! Obcaecati, voluptatum natus. Quas doloremque suscipit blanditiis veniam ut labore in sunt, recusandae nulla assumenda illo natus ipsum ab.
    //                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi iste qui. Qui dolorum quod a tempore in atque nam neque ut error accusamus! Odit beatae quasi fugiat officia commodi.
    //                 </div>
    //             </div> */}

    //             <div className='py-4'>
    //                 <h1 className='text-blue-900 font-semibold text-xl'>1.  Eligibility</h1>
    //                 <div className='py-2'>
    //                     <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "}
    //                     You must be at least 18 years old to use our Services.
    //                     You agree to provide accurate, current, and complete information as required when using the Services.
    //                     If you are purchasing prescription medications, you must have a valid prescription issued by a licensed healthcare provider.   </div>
    //             </div>

    //             <div className='py-4'>
    //                 <h1 className='text-blue-900 font-semibold text-xl'>2. Prescription Medications
    //                 </h1>
    //                 <div className='py-2'>
    //                     Prescription medications will only be dispensed upon receipt of a valid prescription.
    //                     [Pharmacy Name] reserves the right to verify the authenticity of any prescription provided.
    //                     The fulfillment of any prescription is subject to stock availability and approval by a licensed pharmacist.  </div>
    //                 <div className='py-2'>
    //                     Over-the-counter (OTC) products are available for purchase without a prescription.
    //                     It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
    //                 <div className='py-2'>
    //                     Over-the-counter (OTC) products are available for purchase without a prescription.
    //                     It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
    //             </div>

    //             <div className='py-4'>
    //                 <h1 className='text-blue-900 font-semibold text-xl'> 3. Consultation with Healthcare Providers
    //                 </h1>
    //                 <div className='py-2'>
    //                     Information provided on the Services is for informational purposes only and is not intended as medical advice.
    //                     Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
    //                     Use of the Services does not create a healthcare provider-patient relationship between you and [PharmEtrade].   </div>

    //                 <div className='py-2'>
    //                     Information provided on the Services is for informational purposes only and is not intended as medical advice.
    //                     Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
    //                     Use of the Services does not create a healthcare provider-patient relationship between you and [Pharmacy Name].  </div>
    //             </div>

    //             <div className='py-4'>
    //                 <h1 className='font-semibold text-blue-900 text-xl'>4. Payment and Pricing</h1>
    //                 <div className='py-2'>
    //                     All prices for medications and products are subject to change without notice.
    //                     Payment must be made in full at the time of purchase through the available payment methods on our platform.
    //                     [PharmEtrade] reserves the right to cancel any order if the payment is not received or if there is a pricing error.
    //                 </div>
    //             </div>

    //             <div className='py-4'>
    //                 <h1 className='font-semibold text-xl text-blue-900'>5. Shipping and Delivery
    //                 </h1>
    //                 <div className='py-2'>
    //                     Shipping and delivery times are estimated and may vary depending on your location and product availability.
    //                     [Pharmetrade] is not responsible for any delays in shipping due to external factors such as weather, postal service issues, or supplier delays.
    //                     Some products, such as certain medications, may be subject to additional shipping restrictions or regulations.
    //                 </div>
    //                 <div className='py-4'>
    //                     <h1 className='text-lg font-medium text-blue-900'>Click here Page Content- </h1>
    //                     <div>
    //                         <p className='text-lg'>a.{" "} GPay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>

    //                         <p className='text-lg'>b. {" "}Paytm <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
    //                         <p className='text-lg'>c.{" "} PhonePe <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
    //                         <p className='text-lg'>d.{" "} Mobikwik <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
    //                         <p className='text-lg'>e.{" "} Amazon Pay <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a></p>
    //                         <p className='text-lg'>f. {"   "} {" "}Visa, Mastro, Rupay and Maestro cards;
    //                         </p>
    //                         <p className='text-lg'> g. {"    "}Cash on delivery for offline payments.
    //                         </p>


    //                     </div>
    //                 </div>
    //             </div>


    //         </div>

    //         <div className='flex flex-col md:flex-row ml-10 md:ml-0 py-4'>
    //             <div>
    //                 <img src={mobile} className='w-60 h-96' />
    //             </div>
    //             <div className='flex flex-col items-center justify-center '>
    //                 <h1 className='flex  text-xl'>Download App for Free</h1>
    //                 <div className=' flex py-6 -ml-6 md:ml-0'>

    //                     <button className='bg-blue-900 text-white -mx-0 md:mx-6 w-32 h-8 rounded-md flex items-center p-2'>
    //                         <img src={playstore} className='w-6' />
    //                         {" "}  Google Play
    //                     </button>

    //                     <button className='bg-blue-900 rounded-md text-white mx-6 w-28 flex h-8 items-center'>
    //                         <img src={appstore} className='w-8 ' />
    //                         App Store</button>
    //                 </div>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    // )
    return (
        <div
            className='w-full  flex  flex-col  bg-slate-100'
            style={{ marginTop: `${topMargin}px ` }}>
            <div className='flex justify-start m-2'>

                <img src={logo} className='w-56 h-12' />
            </div>
            <div className='flex justify-center items-center w-full flex-col'>
                <div className='w-[80%] px-0 md:px-20 py-2 h-full border-b '>
                    <h1 className=' text-xl md:text-3xl font-medium text-blue-900 text-center py-6 underline'>
                        PharmEtrade User Agreement
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
                    <h1 className=' text-xl md:text-3xl font-medium text-blue-900 text-start py-6 underline'>
                        User Agreement
                    </h1>

                    <div className='py-4'>
                        <h1 className='text-blue-900 font-semibold text-xl'>1.  Introduction</h1>
                        <div className='py-2'>
                            {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                            This User Agreement (the "User Agreement"), and all policies and additional terms posted on and in our website, applications, tools, and services (collectively "Services") set forth the terms on which PharmEtrade offers you access to and use of our Services.  All policies and additional terms posted on and in our Services are incorporated into this User Agreement.  You agree to comply with all terms of this User Agreement when accessing or using our Services.
                            The entity you are contracting with is: PharmEtrade, with a registered address of 5 Cold Hill Rd. S #29 Mendham NJ 07945.  In this User Agreement, this entity, and its affiliates, agents, employees, directors, officers, and others that control our website, are individually and collectively referred to as "PharmEtrade", "we", "us", or "our". "You" refers to anyone visiting this website, specifically as a user, member, seller, or buyer.   </div>
                    </div>

                    <div className='py-4'>
                        <h1 className='text-blue-900 font-semibold text-xl'>2. About PharmEtrade
                        </h1>
                        <div className='py-2'>
                            PharmEtrade is an online marketplace that allows users to offer, sell, and buy goods, in the form of prescription drugs, in various geographic locations.  PharmEtrade acts as a facilitator of the online marketplace.  As such, all pricing related to goods sold is solely determined by the seller of each good.  PharmEtrade is not a party to contracts for sale between third-party sellers and buyers, nor is PharmEtrade a traditional auctioneer or seller.  The Services allow registered users to buy and/or sell non-expired, non-controlled prescription drugs (the "Prescription Drugs") with other users.  PharmEtrade does not have any ownership interest in the prescription drugs.
                            Any guidance PharmEtrade provides as part of our Services, in connection to pricing, shipping, listing, and sourcing is solely informational and you may decide to follow it or not. We may help facilitate the resolution of disputes between buyers and sellers through various programs, however; we are not obligated to facilitate any resolutions of disputes between buyers and sellers. Unless otherwise expressly provided, PharmEtrade has no control over and does not guarantee: the existence, quality, safety, or legality of items advertised; the truth or accuracy of users' content or listings; the ability of sellers to sell items; the ability of buyers to pay for items; or that a buyer or seller will actually complete a transaction or return an item.  </div>
                        {/* <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                        <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                    </div>

                    <div className='py-4'>
                        <h1 className='text-blue-900 font-semibold text-xl'> 3. Conditions For Usage, Registration And Enrollment
                        </h1>
                        <div className='py-2'>
                            In connection with using or accessing our Services you agree to comply with this User Agreement, our policies, our terms, and all applicable laws, rules, and regulations, and you will not:<br />
                            <span className='font-semibold'>a.&nbsp;</span> breach or circumvent any laws, regulations, third-party rights or our systems, Services, policies, or determinations of your account status;<br />
                            <span className='font-semibold'>b.&nbsp;</span>	use our Services if you are not able to form legally binding contracts (for example, if you are under 18 years old), or are temporarily or indefinitely suspended from using our Services, or are a person with whom transactions are prohibited under legal, economic, or trade sanctions/restrictions;<br />
                            <span className='font-semibold'>c.&nbsp;</span>	manipulate the price of any item or interfere with any other user's listings;<br />
                            <span className='font-semibold'>d.&nbsp;</span>	take any action that may undermine the feedback or ratings systems<br />
                            <span className='font-semibold'>e.&nbsp;</span>	transfer your PharmEtrade account (including feedback) and user ID to another party without our consent;<br />
                            <span className='font-semibold'>f.&nbsp;</span>	share your log in credentials with any third parties.<br />
                            <span className='font-semibold'>g.&nbsp;</span>	create listings, post, or upload content in inappropriate categories or areas on our sites;<br />
                            <span className='font-semibold'>h.&nbsp;</span>	engage in unauthorized reselling;<br />
                            <span className='font-semibold'>i.&nbsp;</span>	post false, inaccurate, misleading, deceptive, defamatory, libelous, or illegal content;<br />
                            <span className='font-semibold'>j.&nbsp;</span>	distribute or post spam, unsolicited or bulk electronic communications, chain letters, or pyramid schemes;<br />
                            <span className='font-semibold'>k.&nbsp;</span>	distribute viruses or any other technologies that may harm PharmEtrade or the interests or property of users;<br />
                            <span className='font-semibold'>l.&nbsp;</span>	use any robot, spider, scraper, data mining tools, data gathering and extraction tools, or other automated means to access our Services for any purpose, except with the prior express permission of PharmEtrade;<br />
                            <span className='font-semibold'>m.&nbsp;</span>	circumvent any technical measures used to provide our Services;<br />
                            <span className='font-semibold'>n.&nbsp;</span>	interfere with the functioning of our Services, such as by imposing an unreasonable or disproportionately large load on our infrastructure;<br />
                            <span className='font-semibold'>o.&nbsp;</span>	export or re-export any PharmEtrade application or tool, except in compliance with the export control laws, and rules and policies of any relevant jurisdictions;<br />
                            <span className='font-semibold'>p.&nbsp;</span>	infringe the copyright, trademark, patent, publicity, moral, database, and/or other intellectual property rights (collectively, "Intellectual Property Rights") that belong to or are licensed to PharmEtrade. Some, but not all, actions that may constitute infringement are reproducing, performing, displaying, distributing, copying, reverse engineering, decompiling, disassembling, or preparing derivative works from content that belongs to PharmEtrade or someone else;<br />
                            <span className='font-semibold'>q. &nbsp;</span>	infringe any Intellectual Property Rights that belong to third parties affected by your use of our Services or post content that does not belong to you;<br />
                            <span className='font-semibold'>r. &nbsp;</span>	commercialize any PharmEtrade application or any information, data, or software associated with such application, except with the prior express permission of PharmEtrade; or<br />
                            <span className='font-semibold'>s. &nbsp;</span>	harvest or otherwise collect or use information about users without their consent.<br />
                            Sellers must meet PharmEtrade’s minimum performance standards as set forth above. Failure to meet these standards may result in PharmEtrade charging users additional fees, and/or limiting, restricting, suspending, or downgrading your user account.
                            If we believe you are violating this User Agreement or any of our policies, or abusing PharmEtrade and/or our Services in any way, we may, in our sole discretion and without limiting other remedies, limit, suspend, or terminate your user account(s) and access to our Services, delay or remove hosted content, remove any special status associated with your account(s), remove, not display, and/or demote listings, reduce or eliminate any discounts, and take technical and/or legal steps to prevent you from using our Services. We may offer a process allowing users to report claimed violations for us to consider and handle through one or more of these options, all in our sole discretion.
                            We may cancel and/or terminate unconfirmed accounts or accounts that have been inactive for a substantial period of time. Additionally, we reserve the right to refuse, modify, or terminate all or part of our Services to anyone for any reason at our discretion.   </div>

                        {/* <div className='py-2'>
                            Information provided on the Services is for informational purposes only and is not intended as medical advice.
                            Always seek the advice of a qualified healthcare provider with any questions regarding medications or medical conditions.
                            Use of the Services does not create a healthcare provider-patient relationship between you and [Pharmacy Name].  </div> */}
                    </div>

                    <div className='py-4'>
                        <h1 className='font-semibold text-blue-900 text-xl'>4. Membership Requirements</h1>
                        <div className='py-2'>
                            To become a Member, you must first accept the terms and conditions of this Agreement and enroll by creating an account and following the requisite registration process to seek required approval by PharmEtrade. You must be a licensed pharmacist in good standing, or a licensed pharmacy owner that has not been suspended from using our Services and participating in the PharmEtrade marketplace. PharmEtrade copy of your valid state license, DEA license, and other documents as PharmEtrade, at its sole discretion, deems necessary. If at any time your license is suspended or canceled in any way, you must immediately notify PharmEtrade of the change in status. Failure to keep licenses current or update expired licenses will be cause for immediate suspension and/or termination of your account. If you do not qualify, you shall not be allowed to use our Services.  We reserve the right to cancel and/or terminate your membership and account.  Terms of this Agreement are subject to change in the sole discretion of PharmEtrade.<br />
                            <span className='font-semibold'>a.	&nbsp;</span>Password and Account Security. It is your sole responsibility to maintain your account, including the security of your email address and password and for all activity that occurs. You may not disclose your password to any third party other than those authorized by you to use your account in accordance with this Agreement. PharmEtrade takes no responsibility to secure or maintain your account or password. Should your password become compromised, it is your sole responsibility to change it immediately. PharmEtrade is not liable for any security or data breaches associated with your usage and/or accounts.<br />
                            <span className='font-semibold'>b. &nbsp;</span>	Buyer’s Representations. As a buyer, you grant PharmEtrade permission to charge your listed bank account for the purchase of prescription drugs, shipping, processing and other related charges. If your bank account information changes, you shall promptly update your bank information associated with your individual PharmEtrade account.<br />
                            <span className='font-semibold'>c. &nbsp;</span>	Seller’s Representations. As a seller, you grant us permission to charge your bank account a nuisance penalty if you violate any term. If your bank account information changes, you shall promptly update your bank information associated with your individual PharmEtrade account.
                        </div>
                    </div>

                    <div className='py-4'>
                        <h1 className='font-semibold text-xl text-blue-900'>5. Listing Conditions (For Sellers)
                        </h1>
                        <div className='py-2'>
                            A member who wants to sell prescription drugs may post them to the website.  The seller assigns a price to the prescription drugs and provides specific identifying information such as the name, size of the pill, size of the pack, quantity of the pack, expiration date, lot number and package condition, pursuant to applicable state laws.  Seller is solely responsible for ensuring that all listings are in compliance with the Drug Supply Chain Security Act ("DSCSA").
                            If you as a seller fail to deliver the items you posted or deliver invalid, fraudulent, altered, or misrepresented items, we reserve the right to cancel the order, terminate or suspend your membership, contact applicable regulatory agencies, and charge you reasonable penalties or fines.  We strictly prohibit users from posting items if they are not able to provide the exact items to fulfill orders. In the event that the specific prescription drug cannot be provided by seller, seller must communicate all changes in the order, if any, prior to shipping to the buyer, with PharmEtrade. PharmEtrade is neither obligated nor responsible to police any listings and/or transactions related to the online marketplace. As such PharmEtrade makes no representations on behalf of either the seller or buyer and in relation to any transaction which may occur.<br />
                            <span className='font-semibold'>a. &nbsp;</span>	Seller’s obligations. The seller &must make available the full transactional history of the product it sells from manufacture to the current transaction and any other information required by the regulatory agency and law upon the request of buyer, us, or any governmental regulatory agency. We reserve the right at our sole discretion to terminate a transaction or membership if we suspect any product offered by seller to be suspect, counterfeit, adulterated, or suspicious in any way. PharmEtrade does not obtain any information in relation to product tracing as set forth in DSCSA 21 U.S.C. 360eee et al. or in relation to any exemptions set forth in DSCSA 21 U.S.C. 360eee et al. As such, all sellers agree and acknowledge that each seller is solely responsible for providing conforming product tracing, if not covered by an exemption, in compliance with the DSCSA.<br />
                            <span className='font-semibold'>b. &nbsp;</span>	Seller’s Warranties. The seller expressly warrants the following: the prescription drugs it sells in any given transaction is the same as listed in its posting with no substitutions or changes to it; the descriptions of the prescription drugs accurately detail and describe those offered for sale; the items it posts for sale comply with the criteria for DSCSA as well as any other regulations then in force; all items it sells were received from a party in compliance with the DSCSA; seller did not knowingly ship a suspect, counterfeit, or illegal product; that seller did not knowingly provide false transaction information; and that seller can readily provide the transactional history of any of the prescription drugs it sells and that it did not knowingly alter the transaction history; and that seller agrees to honor the price posted when fulfilling any order. Seller certifies the item has been stored and handled pursuant to the manufacturer’s requirements, is not one of the Prohibited Items listed below under "Prohibitions” and was acquired from a manufacturer or wholesaler in compliance with the DSCSA.
                            You represent and warrant that any information you provide to us, to other users, or to visitors is not fraudulent, false, inaccurate, misleading, obscene or defamatory; does not involve the sale of counterfeit, sample, or stolen items; does not infringe any third party’s copyright, patent, trademark, trade secret, rights of publicity or privacy, or other right; does not violate any law, statute, ordinance or regulation, including, but not limited to, those that govern consumer protection, unfair competition, anti-discrimination or false advertising; and does not contain any viruses or any such programming.
                            You represent and warrant that you will comply with all applicable local, state, federal and international laws, statutes and regulations regarding use of the website and the value of the prescription drugs. We do not monitor, obtain, or have any knowledge of the face value of prescription drugs posted on the website. We reserve the right to report any activity deemed suspicious or unusual to the appropriate authorities for investigation.<br />
                            <span className='font-semibold'>c. &nbsp;</span>	Disclaimer. PharmEtrade is not responsible for any errors or misrepresentations made by the seller regarding its account, prescription drug postings, or any transaction it is involved in. PharmEtrade does not collect any seller’s gross sales information and does not represent to have knowledge of the volume of sales of any seller. Thus, it is the sole responsibility of each seller to register as a wholesaler, if required by applicable state law.<br />
                            <span className='font-semibold'>d. &nbsp;</span>	PharmEtrade charge. PharmEtrade charges a fee of 8% of the total sale or $5.00, whichever is greater. This fee may be subject to change at the sole discretion of PharmEtrade. It is important to note that this applies only to pharmacies. Wholesalers will be subject to a different agreement and fee structure, as per their specific terms.<br />
                            <span className='font-semibold'>e. &nbsp;</span>	Shipping. Buyer is responsible for shipping costs, unless the seller offers otherwise. The seller will provide a packing slip and shipping label to the buyer to allow the buyer to track the package. Sellers must use a reputable delivery service. Sellers are responsible for boxing and shipping items in conformance with the packaging guidelines of the delivery service it uses. Seller must include in its posting the type of shipping it will use and select the proper shipping method and packaging for the type of item, paying special attention to frozen or refrigerated items. If an item that is frozen or refrigerated is ordered, the seller must choose to ship overnight at the quickest delivery option available. The seller must follow the delivery guidelines to ensure that deliver time will not be extended due to a holiday or weekend schedule. The seller retains ownership and the financial responsibility of the item until the item is delivered to the buyer. If buyer doesn’t refrigerate or freeze these items upon receipt, then buyer is responsible for delivery and mishandling of shipment. We are not liable for any items that get lost, destroyed, or delayed in transit.
                            Sellers are to follow the proper storage and shipping requirements as indicated by the manufacturer. For particular cases, such as shipment of vaccines or other special care products, manufacturers may require special shipping and storage conditions. The manufacturer’s FDA-approved storage conditions, printed in the labeling of the product, should be observed carefully at each destination of the distribution chain unless specifically instructed otherwise in the immediate label of a shipping container. Items requiring special handling conditions will have those conditions clearly indicated in the labeling for the product. Sellers must comply with all U.S. Pharmacopeia standards and applicable state laws. Sellers will be responsible for any noncompliance related to storage and shipping requirements.
                            As a seller, you agree not to include any promotional or other commercial material that is not provided or approved by us in your shipment to the buyer. This includes, but is not limited to, material that promotes a website other than this one, catalogs, business cards, business reply cards, bookmarks, coupons, flyers, solicitations or other marketing or advertising material. If you fail to abide by this, we reserve the right to subject you to a penalty of $1,500 per instance that will be deducted from any pending order credits and/or your bank account directly as well as termination or suspension of membership.<br />
                            <span className='font-semibold'>f. &nbsp;</span>	Withholding of Funds. You agree and allow us to withhold payment or charge your bank account for monies owed in the event that a sale is canceled, we reasonably believe that you have committed fraud, illegal act, or omission during a transaction, you deliver incorrect items to a buyer, or if you do not abide by the terms and conditions of buying and selling or any other relevant term under this Agreement for any reason.<br />
                            <span className='font-semibold'>g. &nbsp;</span>	Exclusivity. When listing an item for sale on PharmEtrade’s online marketplace, you agree to comply with PharmEtrade’s selling practices policy and agree that:<br />
                            <span className='font-semibold'>i. &nbsp;</span>	You assume full responsibility for the item offered and the accuracy and content of the listing, including listing content created using tools offered by PharmEtrade or third parties such as translation, image editing, and generative artificial intelligence tools.<br />
                            <span className='font-semibold'>ii. &nbsp;</span>	Your listing may not be immediately searchable by keyword or category for several hours (or up to 24 hours in some circumstances). PharmEtrade cannot guarantee exact listing duration.<br />
                            <span className='font-semibold'>iii. &nbsp;</span>	Every pharmacy posting their item must submit an invoice from their original purchase of the product in advance of PharmEtrade approving any posting. In the event of any audits, the seller must be in a position to provide purchase records from the wholesalers. PharmEtrade will not be responsible for maintaining such records.<br />
                            <span className='font-semibold'>iv. &nbsp;</span>	The content you provide (i.e. images, videos, and texts) are appropriate and comply with a reasonable person’s standard of the type of content to be presented for our Services.<br />
                            <span className='font-semibold'>v. &nbsp;</span>	Content that violates any of PharmEtrade’s current or future policies may be modified, obfuscated, or deleted at PharmEtrade 's sole discretion.<br />
                            <span className='font-semibold'>vi. &nbsp;</span>	We may revise product data associated with listings to supplement, remove, or correct information, at PharmEtrade’s sole discretion.<br />
                            <span className='font-semibold'>vii. &nbsp;</span>	We strive to create a marketplace where buyers find what they are looking for. Therefore, the appearance or placement of listings in search and browse results will depend on a variety of factors, including, but not limited to:<br />
                            	buyer's location, search query, browsing site, and history;<br />
                            	item's location, listing format, price and shipping cost, terms of service, end time, history, and relevance to the user query;<br />
                            	seller's history, including listing practices, detailed seller ratings, PharmEtrade policy compliance, feedback, and defect rate; and<br />
                            	number of listings matching the buyer's query<br />
                            <span className='font-semibold'>viii. &nbsp;</span>	To drive a positive user experience, a listing may not appear in some search and browse results regardless of the sort order chosen by the buyer,<br />
                            <span className='font-semibold'>ix. &nbsp;</span>	Duplicate listing may be removed and/or modified by PharmEtrade and impact how your listings appears in search results.<br />
                            <span className='font-semibold'>x. &nbsp;</span>	Metatags and URL links that are included in a listing may be removed or altered by PharmEtrade.<br />
                            <span className='font-semibold'>xi. &nbsp;</span>	For items listed in certain categories, subject to certain programs, and/or offered or sold at certain price points, PharmEtrade may require the use of certain payment methods.<br />
                            <span className='font-semibold'>xii. &nbsp;</span>	You will not sell and will promptly remove all listings for any product recalled by a manufacturer or governmental agency if the sale of the product is prohibited by law or regulation or if the product poses a health or safety hazard as specified by any governmental agency. PharmEtrade has no responsibility or liability for the safety or performance of any product that you list or sell using our Services, including any product that is subject to a recall. You are solely responsible for any non-conformity or defect in, or compliance with any public or private recall of, any product you list or sell using our Services.<br />
                            <span className='font-semibold'>xiii. &nbsp;</span>	Selling fees do not purchase exclusive rights to item exposure on our Services. We may display third-party advertisements (including links and references thereto) or other content in any part of our Services, including listings, in our sole discretion and without consent from, or payment, fee reduction, or other credit to, sellers.<br />
                        </div>

                        <div className='py-4'>
                            <h1 className='text-blue-900 font-semibold text-xl'>6. Purchasing Conditions (For Buyers)
                            </h1>
                            <div className='py-2'>
                                <span className='font-semibold'>How it works.</span> <br /> Buyer agrees that its order for prescription drugs is legitimate and for legal use in its pharmacy. When a buyer places an order on the website, we notify the seller of the sale via e-mail and reserve the right to cancel or withhold funds on an order that we suspect to be fraudulent. Seller then confirms the availability of the product at the price buyer ordered it for. buyer’s account will be debited at that time. Once delivery is made and buyer confirms it and does not dispute it, the funds will be transferred to seller.<br />
                                <span className='font-semibold'>	Buyer’s obligations.</span><br /> Before placing an order, buyer is responsible for confirming all information related to the prescription drugs it orders. Such information includes, but is not limited to, price, quantity, expiration date, lot number, and special notes posted. We do not guarantee or take responsibility for the accuracy of any information provided by sellers. Prior to engaging in any transaction or making any purchases, buyer shall ensure that any transaction or purchase they participate in is in compliance with their state’s Board of Pharmacy Regulations.<br />
                                <span className='font-semibold'>Return Policy.</span> <br /> All orders are final sale, unless otherwise provided for in this Agreement. Once an order is place, it cannot be canceled by the buyer. The sale is complete when the buyer confirms delivery on its account or does not dispute the delivery within 24 hours of receipt, whichever is sooner. After 24 hours, the transaction becomes final and no dispute claims can be made.<br />
                                <span className='font-semibold'>Destroyed, Lost, or Incorrect Items.</span>	<br /> If an order you receive from a seller is destroyed, lost, or incorrect, it is buyer’s responsibility to contact our customer service immediately to place a claim and resolve the matter within 48 hours of delivery. If an item other than that which was ordered is received by buyer, it is the Seller’s responsibility to fulfill the remaining items, including the cost of additional shipping. The seller is responsible for the cost of return shipping for any items shipped in error. We do not take responsibility for any seller obligation or warranty or the enforcement of same.<br />
                                <span className='font-semibold'>PharmEtrade’s Disclaimer.</span><br />
                                We are not responsible for any bank fees that you may incur as a result of your usage of this website. We reserve the right to charge you a fee for occurrences in which buyer has insufficient funds to purchase an order it places. If a buyer has insufficient funds to purchase an order on more than two occurrences, we reserve the right to suspend or terminate that buyer’s membership. When buying an item using our Services, you agree that:<br />
                                <span className='font-semibold'>i.</span>	You are responsible for reading the full item listing before making an offer, buying, or committing to buy any listed item.<br />
                                <span className='font-semibold'>ii.</span>	You enter into a legally binding contract, with the buyer, to purchase an item when you buy the item, commit to buy the item, or when your offer, as a seller, for the item is accepted by the buyer, regardless of when payment is due or received.<br />
                                <span className='font-semibold'>iii.</span>	We do not transfer legal ownership of items from the seller to purchaser.<br />
                            </div>

                            <div className='py-4'>
                                <h1 className='text-blue-900 font-semibold text-xl'>7. Content
                                </h1>
                                <div className='py-2'>
                                    When you provide content using our Services (directly or indirectly), you grant us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sub-licensable (through multiple tiers) right to exercise any and all Intellectual Property Rights you have in that content in connection with our provision, expansion, and promotion of our Services, including development of new offerings as part of our Services, in any media known now or developed in the future. To the fullest extent permitted under applicable law, you waive your right to enforce your Intellectual Property Rights in that content against PharmEtrade, our assignees, our sublicensees, and their assignees in connection with our, those assignees', and those sublicensees’ use of that content in connection with our provision, expansion, and promotion of our Services.<br />
                                    You represent and warrant that, for all such content you provide, you own or otherwise control all necessary rights to do so and to meet your obligations under this User Agreement. You represent and warrant that such content is accurate, appropriate, and legal. You represent and warrant that use of any such content (including derivative works) by us, our users, or others in contract with us, and in compliance with this User Agreement, does not and will not infringe any Intellectual Property Rights of any third party. PharmEtrade takes no responsibility and assumes no liability for any content provided by you or any third party.
                                    We try to offer reliable product data, but we cannot promise that the content provided through our Services will always be available, accurate, complete, and up-to-date. You agree that PharmEtrade is not responsible for examining or warranting the listings or content provided by third parties through our Services, and that you will not attempt to hold us or our data providers liable for inaccuracies.
                                    The name " PharmEtrade " and other marks, logos, designs, and phrases that we use in connection with our Services are trademarks, service marks, or trade dress of PharmEtrade in the U.S. and other countries. They may not be used without the express written prior permission of PharmEtrade.
                                </div>
                                {/* <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                        <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                            </div>
                            <div className='py-4'>
                                <h1 className='text-blue-900 font-semibold text-xl'>8. Payment, Payment Holds and Restricted Funds
                                </h1>
                                <div className='py-2'>
                                    Buyers may pay for your items using Automated Clearing House ("ACH") as the payment method, or any other payment method allowed by PharmEtrade at the time.<br />
                                    We may modify the scope of payment methods available at our sole discretion.  To protect PharmEtrade from risk of liability for any actions of a seller, PharmEtrade may restrict access to your funds through our payment entities, third-parties, and affiliates. All payments will be handled by an PharmEtrade approved payment processor. PharmEtrade shall have the right to pursue any available legal remedies pursuant to applicable law, to pursue legal actions for failure of payments, and to pursue collections remedies through collection agencies.
                                </div>
                                {/* <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                        <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                            </div>
                            <div className='py-4'>
                                <h1 className='text-blue-900 font-semibold text-xl'>9. Authorization to Contact You; Recording Calls; Analyzing Message Content
                                </h1>
                                <div className='py-2'>
                                    PharmEtrade may contact you using autodialed or prerecorded calls and text messages, at any telephone number that you have provided us, to: (i) notify you regarding your account; (ii) troubleshoot problems with your account; (iii) resolve a dispute; (iv) collect a debt; (v) poll your opinions through surveys or questionnaires; or (vi) as otherwise necessary to service your account or enforce this User Agreement, our policies, applicable law, or any other agreement we may have with you. PharmEtrade may also contact you using autodialed or prerecorded calls and text messages for marketing purposes (e.g., offers and promotions), if you consent to such communications. Preferences may be changed using the notification settings provided. Based on your notification settings, you acknowledge that you are consenting to PharmEtrade contacting you. PharmEtrade may collect other telephone numbers for you and may place manual non-marketing calls to any of those numbers and autodialed non-marketing calls to any landline. Standard telephone minute and text charges may apply and may include overage fees if you have exceeded your plan limits. You may change your marketing communications preference for calls at any time through your notification settings. You may also opt-out of a specific text marketing campaign by replying "STOP" to such marketing text message.<br />
                                    PharmEtrade may, without further notice or warning and in its discretion, monitor or record telephone conversations you or anyone acting on your behalf has with PharmEtrade, PharmEtrade’s customer service, or its agents for quality control and training purposes, or for its own protection.
                                </div>
                                {/* <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                        <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                            </div>
                            <div className='py-4'>
                                <h1 className='text-blue-900 font-semibold text-xl'>10. User Privacy
                                </h1>
                                <div className='py-2'>
                                    If PharmEtrade provides you with information about another user, you agree you will use the information only for the purposes that it is provided to you. You may not disclose or distribute a user's information to a third party for purposes unrelated to our Services.  </div>
                                {/* <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div>
                        <div className='py-2'>
                            Over-the-counter (OTC) products are available for purchase without a prescription.
                            It is your responsibility to ensure that non-prescription products are appropriate for your condition before purchasing and using them.  </div> */}
                            </div>
                            <div className='py-4'>
                                <h1 className='text-blue-900 font-semibold text-xl'>11.  Returns and Cancellations (For Seller)</h1>
                                <div className='py-2'>
                                    {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                    <p>A seller can cancel an order if:</p><br/>
                                    <ul style={{ listStyleType: 'lower-roman' }} className='ml-6 space-y-2'>
                                        <li>The buyer asks to cancel the order and they haven't shipped the item yet</li>
                                        <li>The buyer used the wrong shipping address when they completed their purchase</li>
                                        <li>The item is out of stock (this will result in a transaction defect)</li>
                                        <li>Sellers won't be able to cancel an order if the buyer has reported that the item hasn't arrived, or has opened a return request.<br /><br /></li>
                                    </ul>
                                    For the avoidance of doubt, it is acknowledged by all parties that when a buyer purchases more than one item, the entire order will be canceled in the event a seller cancels an order.<br /><br />

                                    When an item is returned or if a transaction is canceled after payment has been completed, PharmEtrade may issue a refund to the buyer on the seller's behalf and charge the seller for the amount of the refund. <br /><br />
                                    Additionally, PharmEtrade may charge sellers for the cost of return shipping labels and/or other reasonable fees from sellers when:<br /><br />

                                    <ul style={{ listStyleType: 'lower-roman' }} className='ml-6 space-y-2'>
                                        <li>An PharmEtrade -generated return shipping label is used, and the seller is responsible for its cost;</li>
                                        <li>Returns have been automated;</li>
                                        <li>The seller fails to send the buyer a return shipping label and, instead, an PharmEtrade -generated shipping label is used; and/or</li>
                                        <li>The item is not as described in the listing and is returned<br /><br /></li>

                                    </ul>
                                    PharmEtrade or PharmEtrade payment entities may invoice sellers for these charges and collect such charges.

                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>12.  Returns and Cancellations (For Buyer)</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        Buyers generally do not have the right to cancel an order. However, buyer can cancel order by contacting PharmEtrade support team, if order is not shipped by seller. If the order cannot be canceled, buyers may still be permitted to return the item if the item is eligible for return.
                                        In certain instances, a buyer may be responsible for the cost of return shipping for an item returned to a seller. If the buyer is responsible for the return shipping costs, the buyer may elect to use a PharmEtrade -generated shipping label or purchase a shipping label directly from a carrier. By choosing to use a PharmEtrade -generated shipping label, you (as a buyer) agree that PharmEtrade may deduct the cost of the shipping label from the refund owed to you.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>13.  Term and Termination</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        This Agreement will begin on the date of your enrollment as a Member and will continue until it is terminated by us or you as provided for herein. We reserve the right to terminate or suspend your membership at any time for any reason. When a buyer or seller issue arises, we may consider the user's performance history and the specific circumstances in applying our policies. We may choose to be more lenient with policy enforcement in an effort to do the right thing for both buyers and sellers. The foregoing does not limit or impair our right to refuse, modify, or terminate all or part of our Services to anyone, or to terminate this agreement with anyone, for any reason at our discretion.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>14.  Prohibited Items</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        The following items are strictly prohibited (the "Prohibited Items") from being sold, posted, advertised, or purchased on the PharmEtrade’s website: the resale of prescription drugs purchased previously on the website to any other Member within 60 days of the purchase; liquidation of inventory related to bulk purchases, sale (potential or actual), or pharmacy closure; selling items acquired through government discount programs or preferred pricing; posting and selling items that are restricted to a limited distribution network; posting and selling items subject to manufacturer’s pre-authorization; sale of recalled, quarantined, or otherwise adulterated drugs under local, state, or federal laws or regulations; or the transfer of isotretinoin or clozapine related chemicals or drugs. Any and all violations of the above will result in legal liability to you as well as suspension or termination of your Membership and access denial.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>15.  Member Rules and Limitations</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        You are solely responsible for the contents and your actions on this website. To ensure a safe and healthy marketplace, you agree to abide by the following rules as a Member:<br />
                                        <span className='font-semibold'>Non-solicitation and Offline Transactions. &nbsp;</span> You expressly agree not to use the website to contact, invite contact, solicit sales, or initiate or engage in transactions outside of this website with other Members. Seller agrees to contact buyer solely through the website. We take no responsibility or liability for any damages you may incur by engaging in the above, including transactions that originate at/on this website and/or are taken offline.<br />
                                        <span className='font-semibold'>Conduct.&nbsp; </span>You agree not to use obscene, derogatory, abusive, or offensive language or behave in such manner to any PharmEtrade’s employees, agents, or Members. You will treat and promote this website as a friendly marketplace and will conduct yourself in a professional manner at all times while using this website.<br />
                                        <span className='font-semibold'>	Illegal Activity. &nbsp;</span> You agree not to use, or permit anyone else to use through your account, the website or any of its services for unlawful or unauthorized purposes or in an unlawful manner. You agree to comply with all applicable ordinances, laws, and regulations regarding use of the website and the selling of any items. You agree to check that you are legally entitled to sell or purchase the relevant prescription drug with the applicable ordinances, laws, and regulations. It is your responsibility to ensure that you are not prohibited from selling or buying the items by any law or regulation. Under no circumstances are you allowed to sell or purchase stolen property or sample prescription drugs<br />
                                        <span className='font-semibold'>Confidentiality. &nbsp;</span> During the course of your use of this website and during transactions, you may receive information relating to us or our Services that is not known to the general public (the "Confidential Information"). You agree that all Confidential Information will remain the exclusive property of PharmEtrade, that you will use the Confidential Information only as necessary for your use of this website and our Services. You agree not to disclose Confidential Information to any third party and will take any and all reasonable measures to protect the Confidential Information against any use or disclosure that is not expressly permitted in this Agreement. Unless we give you express permission, you are strictly prohibited from using our name, trademarks, logo, or other identifying information for any press release, public statement, or promotional or commercial material unless given written permission from us. You are strictly prohibited from misrepresenting or embellishing your relationship with us in any way. In the event that you are required to disclose Confidential Information pursuant to a demand or order by a government authority or pursuant to any law or regulation, you will first notify the US of such requirement, permit us to contest such requirement if reasonably appropriate, and cooperate with us in limiting the scope of the proposed use or disclosure and/or obtaining appropriate further means for protecting the confidentiality of the Confidential Information.<br />
                                        <span className='font-semibold'>	Member Information.&nbsp; </span>During the course of your use of this website and especially during transactions, you may receive information about our Members (the "Member Information"), including, but not limited to, personal information, order information, identification information such as individual and/or pharmacy or business names, addresses, date of birth, banking information, secure financial information, and any otherwise secure information. You are strictly prohibited from using Member Information for any press release, public statement, or promotional or commercial material unless given written permission from us. You are strictly prohibited from misrepresenting or embellishing your relationship with other Members or users of this website in any way.<br />
                                        <span className='font-semibold'>Email/SMS.&nbsp;</span> We will be sending Transactional, Promotional Email, SMS messages and newsletters to our subscribers. Accepting this agreement entitles PharmEtrade to Email and Text.<br />

                                    </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>16.  DISCLAIMER</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        <span className='font-semibold'>You accept that PharmEtrade website and its Services, including all content, software, functions, materials, and information made available on or provided in connection with the services are provided "as-is" and "as available" without any warranties from us whatsoever. You accept that you use this website and its Services at your own risk. You accept, as a buyer, you are solely responsible for complying with state laws in regards to expiration dates of prescription drugs being bought and sold through PharmEtrade’s website and its Services. We expressly disclaim, without limitation, any representations or warranties regarding this User Agreement, the Services, prescription drugs, or the transactions under this User Agreement, any and all express, statutory, and implied warranties of merchantability, non-infringement of third party right, or fitness for a particular purpose. We also disclaim any and all implied warranties arising out of the course of dealings, performance of members, or usage of trade as well as any obligation, claim, right, remedy in tort, or liability even if arising from our negligence.<br />
                                            We do not guarantee whatsoever that this website’s Services meet your requirements or that this website will be in working order by being available, timely, secure, uninterrupted, or free of error at all times. We reserve the right to modify, discontinue, suspend, or deny access to the website or any part of it with or without notice at any time. You agree that we will not be liable for any reason to you or any third party for same or for any of your postings or prescription drugs that do not sell or remain unsold.<br />
                                            We disclaim the above to the fullest extent permissible under applicable law for any claim, damages, cause of action, tort, or any other right of contribution or claim for injunctive relief from the operation of this website or its Services, whether known or unknown, actual or inchoate, contingent or liquidated. </span>
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>17.  Release</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        We are not involved in transactions between buyers and sellers or other dealings. Therefore, in the event of a dispute between the parties, each party agrees to release PharmEtrade from claims, demands, and damages of any and all kind arising out of or in connection with the dispute.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>18.  Limitation of Liability</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        We expressly disclaim any responsibility for any lost profits or special, consequential, incidental, or exemplary damages, including, but not limited to, indirect and special damages that may result from the Services of this website , the termination or suspension of your Membership, or malfunction or interruption of the Services or website for maintenance or otherwise. <br /><br />

                                        We will not be liable, whether in contract, warranty, tort that includes negligence, product liability, or any other theory, or otherwise to you or any third party for damages, recovery, cost to cover, or recoupment of any investment made by you or your affiliates for any damages under this Agreement. We will not be liable for lost profits, revenue, business, data, punitive or consequential damages related with this Agreement, whether foreseeable, known, or unknown to us.<br />
                                        This limitation of liability will extend to damages resulting from investigations, regulatory inquiries, loss of regulatory approvals and/or licenses, and any other claim, subpoena, investigation, proceeding, or other cause brought by any government agency, court, office, or agent.
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>19.  Indemnification</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        You agree to indemnify, defend, and hold harmless PharmEtrade, our affiliates, and our officers, directors, employees, representatives, attorneys, and agents against any claim arising from or related to any and all of your use of this website whatsoever. You also agree to hold us harmless against any demand, liabilities, or costs and expenses (including attorney’s fees) we incur that arise from any claim asserted by a third party or government agency that relates to any and all of your actions or omissions on this website. This shall include any claims arising from negligence (gross or otherwise) by you. PharmEtrade’s sole function is to create a marketplace for Members to conduct and manage their own expressly disclaims any and all claims regarding any aspect of this website.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>20.  Survival of Obligations</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        The provisions of this Agreement that by their nature are intended to survive beyond the termination, cancellation or expiration of this Agreement shall survive.   </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>21.  Violations and Investigations</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        <span className='font-semibold'>Violations. </span>We may report any activity that we suspect to violate any law or regulation to the appropriate authority or relevant third party. It is in our sole discretion to provide to the appropriate authority, upon request by the authority, all transaction history pertaining to an inquiry or investigation.
                                        We reserve the right to take any action that we deem appropriate, in our sole discretion, if you breach this Agreement, are unwilling to cooperate with an investigation we conduct based on a complaint, reported violation, or suspicion, we are unable to verify information provided by you, or we believe your conduct to be in violation of this Agreement or may be the cause of legal liability for us or our Members.
                                        Actions that we may take include, but are not limited to, issuing warnings, suspending your membership, terminating your membership, denying you access to this website, or removing or editing your posting(s). In addition, we reserve the right to suspend or delay any and all funds owed to you for sales you conduct on this website through the course of an investigation or indefinitely if we have a suspicion or basis to believe that a sale was unlawful or in violation of this Agreement.<br />
                                        <span className='font-semibold'>Investigations. </span> We reserve the right to investigate complaints and violations of our policies. In the event of any and all investigations, you agree to fully cooperate by, including, but not limited to, providing us specific information regarding your right to, the source of, your acquisition of, and the price you paid for a prescription drug. During the course of an investigation, we may suspend your membership, deny you access to the website, or hold funds that are owed to you.
                                    </div>
                                </div>
                                <div className='py-4'>
                                    <h1 className='text-blue-900 font-semibold text-xl'>22.  Miscellaneous</h1>
                                    <div className='py-2'>
                                        {/* <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "} */}
                                        <ul className=" space-y-2" >
                                            <li><strong>Audit Requests.</strong>In the event that you receive an audit request from third parties, such as wholesalers, insurance providers, and regulatory agencies, you must make sure the forms and any and all other required documents are sent to info@pharmetrade.com. We must receive the original forms from the relevant third parties at least 5 business days prior to their due date, but all submissions received will be processed on a first-come-first-served basis and we will not be liable if you fail to timely provide us with the documentation. If we deem that we will not have the necessary time to complete the documentation, we will notify you and require that you contact the third party and request an extension. We disclaim any and all responsibility for the results or damages arising from or in connection with the audits.</li>
                                            <li><strong>Taxes. </strong>You agree that you will be solely responsible for the collection, reporting, and payment of any and all of your taxes we are not responsible in any way for your payment of any taxes to any entity. You agree to indemnify us and all of our affiliates, agents, employees, officers, directors, or other connected entities harmless against any and all liabilities, costs, and expenses (including reasonable attorneys’ fees) incurred by us that arise out of any government or third party claim that involves or relates to any tax obligation (federal, state or county) or amounts due or owing under any tax regulation, law, order or decree or any dispute concerning our tax status.</li> 
                                        <li><strong>Intellectual Property</strong>. You accept, with no contest now or in the future, that our patents, trademarks, trade names, service marks, copyrights and other intellectual property are and shall remain our sole property and nothing in this Agreement shall allow you any right of ownership or license rights to them.</li>
                                            <li><strong>	Infringement.</strong> By using this website, you agree not to access, copy, alter, recreate, modify, or distribute any content from the website, including our copyrights and trademarks, without our prior written permission. You agree not to reverse engineer, decompile, disassemble, decouple, dismantle, trace, copy or compile or otherwise attempt to derive the source code, techniques, processes, algorithms, know-how or other information from the website or its associated services or permit or induce the foregoing. Engaging in the above is a direct infringement of State, Federal and International Laws and doing so will result in a termination or suspension of your membership along with all available legal actions to be taken against you.</li>
                                            <li><strong>Copyright.</strong> This website and the software used are the property of PharmETradeor its suppliers and are protected by copyright, trademark, intellectual property, and other laws. You are strictly prohibited from any unauthorized reproduction, alteration, modification, distribution, transmission, display, or other use of any aspect of them, including but not limited to, all text, graphics, logos, icons, images, audio clips, and programs.</li>
                                            <li><strong>	Cookies.</strong> As a Member, you acknowledge that when you use our Services, we and authorized third party providers may use cookies and similar technologies (collectively referred to as "cookies") to provide better, faster, and a safer user experience or to show you personalized advertising. PharmEtrade may automatically collect and store certain types of information about your use of our Services.</li>
                                            <li><strong>	Relationship of Parties.</strong> As a Member, you agree that we will be independent contractors and that this Agreement does not, in any way, create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between us.</li>
                                            <li><strong>Force Majeure.</strong> PharmEtrade will not be liable for any delay or failure to perform its obligations under this Agreement by any reason, event, or other matter beyond our reasonable control.</li>
                                           <strong>Notices. Consent to Electronic Delivery and Notice.</strong><br/>
                                            &nbsp;<strong>i</strong> &nbsp; Consent. By clicking the "I Agree" button below, you consent to receive notices solely in electronic format from PharmEtrade. Please regularly check Rxeed.com for updates to notices. PharmEtrade will post any changes in hardware or software requirements needed to access the notices.<br />
                                            &nbsp;<strong>ii</strong> &nbsp; Delivery Considerations.  To access Rxeed.com, you must have access to a personal computer with appropriate and compatible browser software and access to the Internet. To print and save notices, you must have access to a printer.<br />
                                            &nbsp;<strong>iii</strong>&nbsp; Duration and Withdrawal of Consent. Your consent will be effective indefinitely. We reserve the right to send you paper copies of any documents or notices that you have consented to receive electronically or that are not available electronically and to discontinue sending updated notices electronically to you at any time.<br/>
                                            <strong>Choice of Law; Costs.</strong> This Agreement shall be governed and construed in accordance with the laws of the State of New Jersey, without giving effect to any New Jersey choice of law provision that might otherwise cause the law of any other jurisdiction to control or prevail. All parties hereby irrevocably consent to the personal jurisdiction of the courts of the State of New Jersey and of the United States of America sitting in the District of New Jersey. All parties waive any defense of improper venue or forum non conveniens. The prevailing party in any proceeding shall be entitled to reimbursement of costs, including its reasonable attorney's fees, expenses and court costs. Assignment. You agree not to assign this Agreement, by operation of law or otherwise, without our prior written consent. Subject to this restriction, the assignment will be contingent on your respective successors and assigns to be bound to this Agreement.<br />
                                            <strong>Waiver.</strong> Any term or provision of this Agreement may be waived at any time by the party entitled to the benefit thereof only by a written instrument executed by such party. No delay on the part of a party in exercising any right, power or privilege hereunder will operate as a waiver thereof, nor will any waiver on the part of party of any right, power or privilege hereunder operate as a waiver of any other right, power or privilege hereunder, nor will any single or partial exercise of any right, power or privilege hereunder preclude any other or further exercise thereof or the exercise of any other right, power or privilege hereunder.<br />
                                            <strong>Entire Agreement; Amendments.</strong> This Agreement contains the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior agreements or understandings between the parties with respect thereto. This Agreement may be amended only by an agreement in writing signed by the parties or by the posting of a new Agreement on the website by us.<br/>
                                   <strong>Headings.</strong> The section headings contained in this Agreement are for reference purposes only and shall not affect in any way the meaning or interpretation of this Agreement.<br />
                                            <strong>No Representations.</strong> You understand and agree that, in accepting this Agreement, you have wholly relied upon your own judgment, investigation and knowledge and have not been influenced to any extent whatsoever in making this Agreement by any representations or statement not expressly set forth in this Agreement made by any other party or by any persons, firms, corporations, attorneys or any other parties representing or acting for any party hereto. You expressly represent and warrant that you have executed this Agreement as your free and voluntary act, without duress, coercion or undue influence exerted by or on behalf of the us or anyone else. You acknowledge that you have had the opportunity to consult with legal counsel regarding this Agreement and the matters contemplated hereby and, if you have failed to do so, you hereby waive any claim based upon such failure.<br />
                                            <strong>Electronic Signature.</strong> You agree that you have read, understand, and bound by, meet, and will continue to meet, all of the terms and conditions above, (b) agree that you are providing the legal equivalent of your handwritten signature, and (c) agree to print and/or save a copy of this Agreement for your records. This Agreement is effective upon completion of registration,
                                        </ul>
                                    </div>
                                </div>
                            </div>
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


                </div>

                {/* <div className='flex flex-col md:flex-row ml-10 md:ml-0 py-4'>
                    <div>
                        <img src={mobile} className='w-60 h-96' />
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <h1 className='flex  text-xl'>Download App for Free</h1>
                        <div className=' flex py-6 -ml-6 md:ml-0'>

                            <button className='bg-blue-900 text-white -mx-0 md:mx-6 w-32 h-8 rounded-md flex items-center p-2'>
                                <img src={playstore} className='w-6' />
                                {" "}  Google Play
                            </button>

                            <button className='bg-blue-900 rounded-md text-white mx-6 w-28 flex h-8 items-center'>
                                <img src={appstore} className='w-8 ' />
                                App Store</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TermsAndConditions;