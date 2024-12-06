import { Roboto } from "next/font/google";

const robotoFont = Roboto({ subsets: ["latin"],
    weight: ["400"]
})

let ProjectSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="relative -z-10 w-full h-[1000px] max-xl:h-[1200px] max-md:h-[1125px] max-sm:h-[1900px] max-mm:h-[1750px] max-usm:h-[1600px]">
                <div className="w-full h-[860px] flex flex-col gap-[32px] items-center mt-[64px] text-center max-xl:h-[1200px] max-md:h-[1125px] max-sm:h-[1900px] max-lm:mt-[32px] max-mm:h-[1750px] max-usm:h-[1600px]">

                    <div className="w-[320px] h-[34px] max-usm:w-[280px] animation-down">
                        <p className="text-[24px] text-[#000000] font-semibold max-md:text-[20px] max-mm:text-[18px]">Accomplishments</p>
                    </div>

                    <div className="w-[320px] h-[64px] max-usm:w-[300px] max-mm:h-[44px] animation-down">
                        <h1 className="text-[45px] text-[#fbbf24] font-bold max-lm:text-[34px] max-usm:text-[32px]">Our Projects</h1>
                    </div>

                    <div className="w-[800px] h-[34px] max-sg:w-[768px] max-md:w-[550px] max-md:h-[57px] max-sm:w-[450px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] max-usm:h-[68px] animation-down">
                        <p className="text-[20px] text-[#000000] font-semibold max-sg:text-[18px] max-lm:text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className="grid grid-cols-3 gap-[64px] w-[1500px] h-[600px] mt-[68px] max-2xl:w-[1260px] max-2xl:gap-[48px] max-xl:grid-cols-2 max-xl:w-[1000px] max-xl:h-[875px] max-xl:justify-items-center max-xl:mt-[48px] max-lg:w-[876px] max-sg:w-[740px] max-md:w-[640px] max-md:h-[750px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-[58px] max-sm:h-[1600px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-mm:h-[1425px] max-mm:gap-[62px] max-usm:w-[280px] max-usm:h-[1275px] max-usm:gap-[64px]">
                        
                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-3">
                            <a target="_blank" href="https://giaic-next-js-assignment-6.vercel.app/">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgone.png" alt="imgone"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">Courses Website</p>
                        </div>
                        
                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-3">
                            <a target="_blank" href="https://my-new-portfolio-project.vercel.app/">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgtwo.png" alt="imgtwo"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">PortFolio</p>
                        </div>

                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-3">
                            <a target="_blank" href="https://static-resume-builder-snowy.vercel.app/">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgthree.png" alt="imgthree"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">Resume Builder</p>
                        </div>

                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-4">
                            <a target="_blank" href="https://cars-dealership-project.netlify.app/#">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgfour.png" alt="imgfour"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">Car Dealership Website</p>
                        </div>

                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-4">
                            <a target="_blank" href="https://netflixcloneproject.netlify.app/">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgfive.png" alt="imgfive"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">NetFlix Website Clone</p>
                        </div>

                        <div className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] animation-popup-4">
                            <a target="_blank" href="https://hotel-clone-project.netlify.app/">
                             <img className="w-[450px] h-[250px] max-2xl:w-[375px] max-2xl:h-[225px] max-sg:w-[335px] max-sg:h-[200px] max-md:w-[300px] max-md:h-[175px] max-sm:w-[325px] max-sm:h-[200px] max-mm:w-[300px] max-mm:h-[175px] max-usm:w-[275px] max-usm:h-[150px] border border-transparent shadow-2xl rounded-[16px] hover:scale-125 hover:transition-all" src="/showimage/imgsix.png" alt="imgsix"/>
                            </a>
                            <p className="text-[24px] text-[#fbbf24] font-semibold w-[450px] max-2xl:w-[375px] max-sg:w-[335px] max-md:w-[300px] max-sm:w-[325px] max-mm:w-[300px] max-usm:w-[275px] h-[36px]">Hotel Website Clone</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection