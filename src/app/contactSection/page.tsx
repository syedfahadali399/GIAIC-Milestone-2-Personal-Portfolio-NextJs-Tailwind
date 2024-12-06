import { Roboto } from "next/font/google"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['400']
})

let ContactSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="relative -z-10 w-full h-[940px] max-lg:h-[896px] max-sg:h-[1550px] max-mm:h-[1400px]">

                <div className="w-full h-[940px] flex flex-col gap-[24px] text-center items-center mt-[64px] max-lg:h-[896px] max-sg:h-[1550px] max-lm:mt-[32px] max-mm:h-[1400px]">

                    <div className="w-[320px] h-[34px] max-usm:w-[280px] animation-down">
                        <p className="text-[24px] font-semibold text-[#000000] max-md:text-[20px]">Contact us</p>
                    </div>

                    <div className="w-[320px] h-[64px] max-usm:w-[280px] max-mm:h-[44px] animation-down">
                        <h1 className="text-[42px] font-bold text-[#fbbf24] max-lm:text-[34px] max-usm:text-[28px]">Have a Project?</h1>
                    </div>

                    <div className="w-[825px] h-[34px] max-sg:w-[768px] max-md:w-[550px] max-md:h-[57px] max-sm:w-[450px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] max-usm:h-[68px] animation-down">
                        <p className="text-[20px] font-semibold text-[#000000] max-sg:text-[18px] max-lm:text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className="w-[1024px] h-[600px] flex flex-row gap-[64px] mt-[48px] justify-center max-lg:w-[896px] max-sg:w-[768px] max-sg:h-[1300px] max-lg:gap-[48px] max-sg:mt-[0px] max-sg:flex-col max-sg:items-center max-md:w-[640px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-mm:h-[1100px] max-usm:w-[300px]">
                        <div className="w-[575px] h-[550px] flex flex-col gap-[50px] bg-[#fbbf24] justify-center items-center rounded-[16px] max-lg:w-[475px] max-sg:h-[625px] max-sm:w-[425px] max-lm:w-[375px] max-mm:w-[325px] max-mm:gap-[32px] max-mm:h-[525px] max-usm:w-[275px] max-usm:mt-[16px] animation-popup-3">
                            <div className="flex flex-row gap-[36px] max-lg:gap-[24px] max-sg:flex-col max-sg:gap-[50px] max-mm:gap-[32px]">
                                <input className="border-[#FFFF] border w-[225px] p-[16px] rounded-[12px] text-[#000000] font-medium text-[16px] max-lg:w-[190px] max-sg:w-[400px] max-sm:w-[350px] max-lm:w-[300px] max-mm:w-[275px] max-usm:w-[225px]" type="text" placeholder="Your Name" required/>
                                <input className="border-[#FFFF] border w-[225px] p-[16px] rounded-[12px] text-[#000000] font-medium text-[16px] max-lg:w-[190px] max-sg:w-[400px] max-sm:w-[350px] max-lm:w-[300px] max-mm:w-[275px] max-usm:w-[225px]" type="text" placeholder="Your Email" required/>
                            </div>

                            <input className="border-[#FFFF] border w-[485px] p-[16px] rounded-[12px] text-[#000000] font-medium text-[16px] max-lg:w-[400px] max-sm:w-[350px] max-lm:w-[300px] max-mm:w-[275px] max-usm:w-[225px]" type="text" placeholder="Subject" required/>
                            
                            <textarea className="w-[485px] h-[150px] border-[#FFFF] border p-[16px] rounded-[12px] text-[#000000] font-medium text-[16px] max-lg:w-[400px] max-lg:h-[100px] max-sm:w-[350px] max-lm:w-[300px] max-mm:w-[275px] max-usm:w-[225px]" placeholder="Message" required></textarea>
                            
                            <button type="submit" className="border-4 border-[#FFFF] p-[16px] cursor-pointer font-semibold rounded-[12px] text-[18px] text-[#fbbf24] bg-[#FFFF] hover:bg-[#fbbf24] hover:text-[#FFFF] hover:transition-all max-sm:p-[12px] max-lm:p-[10px] max-mm:p-[8px] max-lm:text-[16px] max-usm:text-[14px]">Send Message</button>
                        </div>
                        <div className="w-[320px] h-[550px] flex flex-col gap-[48px] justify-evenly max-usm:w-[280px] animation-popup-2">

                            <div className="w-full flex flex-row gap-[16px] max-mm:items-center">
                                <img className="w-[58px] max-mm:w-[42px] max-mm:h-[42px]" src="/iconss/map.png" alt="mapImage" />
                               <div className="flex flex-col gap-[8px] text-start">
                                  <p className="h-[30px] font-semibold text-[#fbbf24] text-[20px] max-mm:text-[18px]">Address:-</p>
                                  <p className="h-[28px] font-medium text-[#000000] text-[18px] max-mm:text-[16px]">Pak Kausr Town Malir Karachi</p>
                               </div>
                            </div>
                            
                            <div className="w-full flex flex-row gap-[16px] max-mm:items-center">
                                <img className="w-[58px] max-mm:w-[42px] max-mm:h-[42px]" src="/iconss/telephone.png" alt="telephoneImage" />
                               <div className="flex flex-col gap-[8px] text-start">
                                  <p className="h-[30px] font-semibold text-[#fbbf24] text-[20px] max-mm:text-[18px]">Phone:-</p>
                                  <p className="h-[28px] font-medium text-[#000000] text-[18px] max-mm:text-[16px]">+923120236118</p>
                               </div>
                            </div>

                            <div className="w-full flex flex-row gap-[16px] max-mm:items-center">
                                <img className="w-[58px] max-mm:w-[42px] max-mm:h-[42px]" src="/iconss/gmail.png" alt="gmailImage" />
                               <div className="flex flex-col gap-[8px] text-start">
                                  <p className="h-[30px] font-semibold text-[#fbbf24] text-[20px] max-mm:text-[18px]">Email:-</p>
                                  <p className="h-[28px] font-medium text-[#000000] text-[18px] max-mm:text-[16px]">fahadalisyed543@gmail.com</p>
                               </div>
                            </div>

                            <div className="w-full flex flex-row gap-[16px] max-mm:items-center">
                                <img className="w-[58px] max-mm:w-[42px] max-mm:h-[42px]" src="/iconss/earth.png" alt="earthImage" />
                               <div className="flex flex-col gap-[8px] text-start">
                                  <p className="h-[30px] font-semibold text-[#fbbf24] text-[20px] max-mm:text-[18px]">Website</p>
                                  <p className="h-[28px] font-medium text-[#000000] text-[18px] max-mm:text-[16px]">yoursite.com</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection