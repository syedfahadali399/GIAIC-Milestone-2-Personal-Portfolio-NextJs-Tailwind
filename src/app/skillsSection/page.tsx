import { Roboto } from "next/font/google"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['400']
})

let SkillsSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="relative -z-10 w-full h-[1050px] max-sg:h-[1250px] max-sm:h-[2175px]">
                <div className="w-full h-[1050px] flex flex-col gap-[32px] items-center mt-[64px] text-center max-sg:h-[1250px] max-sm:h-[2175px] max-lm:mt-[32px]">

                    <div className="w-[320px] h-[34px] max-usm:w-[280px] animation-down">
                      <p className="text-[24px] font-semibold text-[#000000] max-md:text-[20px]">Skills</p>
                    </div>

                    <div className="w-[320px] h-[64px] max-lm:h-[50px] max-usm:w-[280px] animation-down">
                      <h1 className="text-[45px] font-bold text-[#fbbf24] max-sg:text-[38px] max-md:text-[32px] max-lm:text-[28px]">My Skills</h1>
                    </div>  
                    <div className="w-[800px] h-[34px] max-sg:w-[740px] max-md:w-[550px] max-md:h-[57px] max-sm:w-[450px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] max-usm:h-[68px] animation-down">
                      <p className="text-[20px] font-semibold text-[#000000] max-sg:text-[18px] max-lm:text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                    
                    <div className="w-[1400px] h-[650px] grid grid-cols-3 gap-[32px] mt-[64px] justify-items-center max-2xl:w-[1240px] max-xl:w-[1000px] max-lg:w-[876px] max-sg:w-[740px] max-sg:grid-cols-2 max-sg:h-[925px] max-sg:mt-[32px] max-md:w-[620px] max-sm:flex max-sm:flex-col max-sm:w-[450px] max-sm:h-[2100px] max-sm:items-center max-sm:gap-[64px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[280px]">

                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-lg:w-[225px] max-lg:text-[26px] max-md:w-[200px] max-md:text-[26px]">HTML</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="10" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">90%</span>
                                </div>
                            </div>
                            
                        </div>
                              
                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-lg:w-[225px] max-lg:text-[26px] max-md:w-[200px] max-md:text-[26px]">CSS</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="20" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">80%</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-lg:w-[225px] max-lg:text-[26px] max-md:w-[200px] max-md:text-[26px]">Javascript</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="40" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">60%</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-lg:w-[225px] max-lg:text-[26px] max-md:w-[200px] max-md:text-[26px]">Typescript</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="45" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">55%</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-lg:w-[225px] max-lg:text-[26px] max-md:w-[200px] max-md:text-[26px]">NextJS</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="70" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">30%</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className="w-[300px] h-[275px] border-4 border-[#fbbf24] flex flex-col items-center justify-evenly rounded-[16px] bg-[#FFFF] text-center hover:transition-all hover:scale-125 max-xl:w-[275px] max-lg:w-[250px] max-lg:h-[250px] max-md:w-[225px] animation-popup-4">

                            <p className="w-[280px] h-[42px] text-[#fbbf24] text-[32px] font-bold max-xl:w-[250px] max-md:w-[200px] max-md:text-[26px]">Phyton</p>
                            <div className="relative size-36">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                               
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700 border border-[#fbbf24]" stroke-width="3"></circle>
                                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#fbbf24] border border-[#fbbf24]" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="90" stroke-linecap="round"></circle>
                                </svg>

                                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                  <span className="text-center text-2xl font-bold text-[#fbbf24]">10%</span>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                  
                </div>
            </div>
        </section>
    )
}

export default SkillsSection