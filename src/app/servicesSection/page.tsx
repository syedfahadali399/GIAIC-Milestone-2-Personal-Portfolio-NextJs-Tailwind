import { Roboto } from "next/font/google"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['400']
})

let ServicesSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="relative -z-10">
                <div className="w-full h-[960px] flex flex-col items-center mt-[64px] gap-[24px] text-center max-sg:h-[1250px] max-sm:h-[2300px] max-lm:mt-[32px]">
                    
                    <div className="w-[320px] h-[34px] max-usm:w-[280px] animation-down">
                        <p className="text-[24px] text-[#000000] font-semibold max-md:text-[20px]">I am Great at</p>
                    </div>

                    <div className="w-[840px] h-[64px] max-sg:w-[740px] max-md:w-[625px] max-sm:w-[450px] max-sm:h-[34px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] max-usm:h-[52px] animation-down">
                        <h1 className="text-[45px] text-[#fbbf24] font-bold max-sg:text-[38px] max-md:text-[32px] max-sm:text-[24px] max-lm:text-[20px] max-mm:text-[18px]">We do awesome services for our clients</h1>
                    </div>
                    <div className="w-[800px] h-[34px] max-sg:w-[740px] max-md:w-[550px] max-md:h-[57px] max-sm:w-[450px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] max-usm:h-[68px] animation-down">
                        <p className="text-[20px] text-[#000000] font-semibold max-sg:text-[18px] max-lm:text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[48px] w-[1200px] h-[600px] mt-[68px] justify-items-center max-xl:w-[1000px] max-xl:gap-[36px] max-lg:w-[876px] max-sg:w-[740px] max-sg:grid-cols-2 max-sg:h-[925px] max-md:w-[625px] max-sm:flex max-sm:flex-col max-sm:w-[450px] max-sm:h-[2100px] max-sm:items-center max-sm:gap-[72px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[280px]">

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/webdesign.png" alt="webdesign"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">Web Design</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] max-sm:mt-[36px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/webapplication.png" alt="webapplication"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">Web Application</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] max-sg:mt-[36px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/appapplication.png" alt="appapplication"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">App Application</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] mt-[24px] max-sg:mt-[36px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/magnifyingglass.png" alt="magnifyingglass"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">SEO</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] mt-[24px] max-sg:mt-[36px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/branding.png" alt="branding"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">Branding</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>

                        <div className="w-[320px] h-[240px] border-2 border-[#000000] gap-[12px] p-[24px] rounded-[12px] mt-[24px] max-sg:mt-[36px] hover:-translate-y-12 hover:transition-all max-xl:w-[300px] max-lg:w-[275px] max-lg:p-[18px] max-md:w-[250px] max-md:h-[225px] max-md:p-[12px] animation-popup-4">
                            <div className="relative w-[90px] h-[90px] rounded-[50%] border-2 border-[#000000] flex items-center justify-center bottom-[67px] bg-[#FFFF] hover:translate-x-12 hover:transition-all max-xl:w-[80px] max-xl:h-[80px]">
                                <img className="absolute w-[32px]" src="/iconss/graphicdesign.png" alt="graphicdesign"/>
                            </div>
                            <div className="w-[280px] h-[120px] flex flex-col gap-[16px] relative bottom-[40px] max-xl:w-[240px] max-xl:h-[135px] max-md:w-[225px]">
                              <h1 className="w-[240px] h-[34px] font-semibold text-[#fbbf24] text-[24px] max-md:w-[220px]">Graphic Design</h1>
                              <p className="w-[270px] h-[55px] font-medium text-[#000000] text-[18px] max-xl:w-[240px] max-xl:h-[80px] max-md:w-[220px]">A small river named Duden flows by their place and supplies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection