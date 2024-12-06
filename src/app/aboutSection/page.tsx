import { Roboto } from "next/font/google"
const fontRoboto = Roboto({ subsets: ['latin'],
    weight: ['400']
})


let AboutSection = () => {
    return(
        <section className={fontRoboto.className}>
            <div className="relative -z-10 w-full h-full">
                <div className="w-full flex flex-row gap-[42px] max-lg:flex-col">
                    <div className="max-lg:hidden animation-left">
                        <img src="/myself.png" alt="myselfimg" width={768}/>
                    </div>
                    <div className="flex justify-center max-lg:ml-[48px] max-lg:mt-[48px] max-md:ml-[32px] max-md:mt-[32px] max-sm:ml-[16px] max-sm:mt-[16px] max-lm:w-[400px] max-lm:mt-[32px] max-mm:w-[340px] max-usm:w-[280px] max-usm:ml-[12px]">
                        <div className="w-full flex flex-col justify-center gap-[24px] max-xl:gap-[16px]">

                            <div className="w-[320px] h-[34px] max-usm:w-[280px] animation-down">
                              <p className="text-[24px] font-semibold text-[#000000] max-lm:text-[20px]">My Intro</p>
                            </div>

                            <div className="w-[320px] h-[64px] max-xl:h-[52px] max-usm:w-[280px] animation-down">
                               <h1 className="text-[45px] font-bold text-[#fbbf24] max-xl:text-[42px] max-sg:text-[38px] max-lm:text-[32px]">About Me</h1>
                            </div>
                            <div className="w-[800px] h-[160px] max-2xl:w-[675px] max-2xl:h-[175px] max-xl:w-[500px] max-xl:h-[190px] max-lg:w-[750px] max-lg:h-[140px] max-sg:w-[640px] max-sg:h-[160px] max-md:w-[575px] max-sm:w-[450px] max-sm:h-[220px] max-lm:w-[375px] max-lm:h-[200px] max-mm:w-[320px] max-mm:h-[240px] max-usm:w-[280px] max-usm:h-[260px] animation-down">
                              <p className="text-[20px] font-medium text-[#000000] max-xl:text-[18px] max-lm:text-[16px]">A skilled front-end developer specializing in crafting intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I am passionate about leveraging AI and machine learning to create dynamic and engaging web experiences. I am dedicated to staying up-to-date with the latest trends and technologies to deliver innovative and user-centric solutions.</p>
                            </div>
                            
                            <div className="flex flex-row gap-[32px] w-[500px] h-[275px] max-xl:w-[475px] max-xl:gap-[24px] max-sm:w-[425px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[280px] animation-left">
                                <div className="flex flex-col gap-[24px] w-[200px] h-[275px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px]">
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Name:</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Date of Birth:</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Address</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Zip Code</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Email</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px]">Phone Number:</p>
                                </div>
                                <div className="flex flex-col gap-[24px] w-[250px] h-[275px] max-lm:w-[225px] max-mm:w-[185px] max-usm:w-[170px]">
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px] text-[#fbbf24]">Syed Fahad Ali</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px] text-[#fbbf24]">27 Sep 2006</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px] text-[#fbbf24]">Karachi</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px] text-[#fbbf24]">75505</p>
                                    <p className="w-[250px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-lm:w-[225px] max-mm:w-[185px] max-usm:w-[170px] max-mm:text-[14px] max-usm:text-[12px] text-[#fbbf24]">fahadalisyed543@gmail.com</p>
                                    <p className="w-[200px] h-[24px] font-semibold text-[18px] max-lm:text-[16px] max-sm:w-[150px] max-mm:w-[125px] max-usm:w-[100px] max-usm:text-[14px] text-[#fbbf24]">+923120236118</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden max-lg:block animation-popup-3">
                        <img className="w-full" src="/myself.png" alt="myselfimg"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection