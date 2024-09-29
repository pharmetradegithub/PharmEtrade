import React from 'react'
import mobile from '../assets/Mobile app.png'
import playstore from '../assets/googleplay.png'
import appstore from '../assets/apple[1].png'
import back from '../assets/Previous_icon.png'
function TermsAndConditions({ topMargin,setActiveStep }) {
    return (
        <div
            className='w-full  flex  flex-col justify-center items-center bg-slate-100'
            style={{ marginTop: `${topMargin}px `}}>
            <div className='w-[80%]  px-20 py-8 h-full border-b'>
                <h1 className='text-3xl font-medium text-blue-900 text-start py-6 underline'>
                    Terms & Conditions
                </h1>
                <button onClick={()=>setActiveStep(3)} className=' flex text-red-500 text-xl hover:under  gap-1'>
                  <img src={back} className='w-4 h-4'/>
                  <p className='-mt-1 hover:text-red-500'> Back</p>  
                </button>
                <div className='   ' >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tenetur ea enim, ut laboriosam commodi veniam repellendus voluptates fugiat excepturi dignissimos delectus ipsam odio nobis earum itaque aliquid tempora temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nobis ratione sunt earum, sequi vel facere natus dicta a quidem magnam nisi perferendis molestias optio fugiat dolor aspernatur numquam recusandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, beatae odio? Inventore maiores cupiditate vero sed asperiores blanditiis labore hic quam reiciendis, perferendis molestiae, nam veritatis pariatur earum ipsa! Nobis.
                    <div className='my-3'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, iusto debitis! Obcaecati, voluptatum natus. Quas doloremque suscipit blanditiis veniam ut labore in sunt, recusandae nulla assumenda illo natus ipsum ab.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi iste qui. Qui dolorum quod a tempore in atque nam neque ut error accusamus! Odit beatae quasi fugiat officia commodi.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'>1. GENERAL</h1>
                    <div className='py-2'>
                        <a href='/' className='text-blue-900 underline'>www.pharmetrade.com</a> {" "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel deleniti architecto sequi similique quas itaque reiciendis natus numquam aut error veritatis, dolorum dolorem quaerat, aspernatur neque libero id sapiente!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium officia fugit. Quia repellendus ipsa vero aspernatur dolores asperiores modi, quisquam accusantium earum repudiandae ad optio saepe quam. Iste, laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, beatae error labore ut praesentium sit, similique facere illum, quam possimus magni quidem maxime porro consequatur nobis voluptates? Earum, harum odio.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'>2. PRODUCTS AND SERVICES</h1>
                    <div className='py-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed magni, doloribus fuga maiores reprehenderit labore perspiciatis cupiditate, minus quibusdam itaque recusandae unde illo, deleniti earum illum corporis amet accusantium!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus, eum nisi at repudiandae facilis quam iusto sequi reprehenderit ad perspiciatis consequatur aut optio totam dolor architecto labore, aperiam quia.
                    </div>
                    <div className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet architecto iusto consectetur, corrupti sequi adipisci hic itaque debitis blanditiis molestiae veniam repellendus, et officia optio corporis voluptates aut deserunt dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita, sequi ducimus iusto nam quas officiis dolor quasi veniam qui dignissimos aut, doloremque repellendus et at eligendi autem corrupti laborum.
                    </div>
                    <div className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet architecto iusto consectetur, corrupti sequi adipisci hic itaque debitis blanditiis molestiae veniam repellendus, et officia optio corporis voluptates aut deserunt dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita, sequi ducimus iusto nam quas officiis dolor quasi veniam qui dignissimos aut, doloremque repellendus et at eligendi autem corrupti laborum.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='text-blue-900 font-semibold text-xl'> 3. ELIGIBILITY OF USE</h1>
                    <div className='py-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, id. Consectetur atque tenetur ea, praesentium rem voluptate repudiandae eum iste totam quidem! Totam esse vitae sunt earum soluta voluptatibus quaerat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ad, harum dolores consequuntur, voluptates facere iste delectus architecto deleniti excepturi voluptate cum commodi eligendi id soluta eos nihil magnam placeat.
                    </div>
                    <div className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet architecto iusto consectetur, corrupti sequi adipisci hic itaque debitis blanditiis molestiae veniam repellendus, et officia optio corporis voluptates aut deserunt dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita, sequi ducimus iusto nam quas officiis dolor quasi veniam qui dignissimos aut, doloremque repellendus et at eligendi autem corrupti laborum.
                    </div>
                    <div className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet architecto iusto consectetur, corrupti sequi adipisci hic itaque debitis blanditiis molestiae veniam repellendus, et officia optio corporis voluptates aut deserunt dicta.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita, sequi ducimus iusto nam quas officiis dolor quasi veniam qui dignissimos aut, doloremque repellendus et at eligendi autem corrupti laborum.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='font-semibold text-blue-900 text-xl'>4. USER ACCOUNT, PASSWORD AND SECURITY</h1>
                    <div className='py-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dicta, repudiandae, vero dignissimos, aliquid quis nisi obcaecati dolor optio eius voluptatibus molestiae quam aperiam cum sapiente? Facilis dicta magnam aut!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium cupiditate pariatur qui, voluptate minima aperiam inventore quod dolorum accusantium laboriosam totam, cumque nobis placeat provident, repudiandae amet temporibus consequatur?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam excepturi suscipit magnam consectetur, pariatur neque officiis, non enim iure sapiente doloribus, culpa vel et! Perspiciatis repellat quidem vel voluptatem quibusdam.
                    </div>
                </div>

                <div className='py-4'>
                    <h1 className='font-semibold text-xl text-blue-900'>5. PRICING INFORMATION AND PAYMENT
                    </h1>
                    <div className='py-2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptas officia dignissimos, atque rerum consectetur id labore quia ea obcaecati veritatis temporibus alias laborum nostrum aspernatur numquam in iure libero.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quaerat non magni voluptate facere voluptatum aut dolore alias quam, nobis optio aperiam. Consequuntur obcaecati possimus quibusdam fugit. Dolores, rerum necessitatibus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem incidunt nulla laboriosam sunt dolore ab harum quia quibusdam, eveniet praesentium totam quis illum nihil aperiam numquam, eos natus ad vero?

                    </div>
                    <div className='py-4'>
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
                    </div>
                </div>

                
            </div>

            <div className='flex py-4'>
                <div>
            <img src={mobile} className='w-60 h-96'/>
            </div>
            <div className='flex flex-col items-center justify-center '>
            <h1 className='flex  text-xl'>Download App for Free</h1>
            <div className=' flex py-6'>
               
                <button className='bg-blue-900 text-white mx-6 w-32 h-8 rounded-md flex items-center p-2'>
                    <img src={playstore} className='w-6'/>
                  {" "}  Google Play
                </button>

                <button className='bg-blue-900 rounded-md text-white mx-6 w-28 flex h-8 items-center'>
                    <img src={appstore} className='w-8 '/>
                    App Store</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default TermsAndConditions