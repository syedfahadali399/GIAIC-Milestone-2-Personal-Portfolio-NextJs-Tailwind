import { Roboto } from "next/font/google"
const fontRoboto = Roboto({ subsets: ['latin'],
    weight: ['400']
})

export default function Home() {
  return (
    <section className={fontRoboto.className}>
      <div className="w-full h-[860px] max-2xl:h-[750px] max-xl:h-[700px] max-lg:h-[650px] max-sg:h-full ">
          <div className="w-full h-[860px] max-2xl:h-[750px] max-xl:h-[700px] max-lg:h-[650px] max-sg:h-full flex flex-row justify-between items-center gap-[48px] max-2xl:gap-[32px] max-sg:flex-col max-sg:gap-[64px] max-mm:gap-[48px]">
            <div className="w-[800px] h-[850px] max-2xl:h-[750px] max-xl:h-[700px] max-lg:h-[650px] max-md:h-[550px] flex flex-col gap-[24px] ml-[64px] justify-center max-2xl:gap-[48px] max-xl:ml-[32px] max-xl:w-[575px] max-lg:ml-[16px] max-sg:mt-[64px] max-md:mt-[32px] max-sg:w-[600px] max-sm:w-[450px] max-sm:h-[575px] max-lm:w-[400px] max-lm:h-[500px] max-lm:gap-[32px] max-mm:w-[340px] max-usm:w-[300px] max-usm:ml-[12px] max-usm:h-[600px]">
              <h1 className="w-[550px] text-[54px] font-bold max-2xl:text-[48px] max-xl:w-[425px] max-xl:text-[42px] max-lg:w-[375px] max-lg:text-[32px] max-lm:text-[28px] max-mm:w-[300px] max-mm:text-[24px] max-usm:w-[280px] animation-left">Hi I'm Syed Fahad Ali</h1>
              <h1 className="w-[500px] text-[54px] font-bold max-2xl:text-[48px] text-[#fbbf24] max-xl:text-[42px] max-lg:w-[375px] max-lg:text-[32px] max-xl:w-[425px] max-lm:text-[28px] max-mm:w-[300px] max-mm:text-[24px] max-usm:w-[280px] animation-left">Frontend Developer</h1>
              <p className="w-[650px] font-medium text-[24px] max-xl:w-[425px] max-lg:w-[450px] max-xl:text-[20px] max-sg:w-[600px] max-sm:w-[450px] max-lm:w-[375px] max-lm:text-[18px] max-mm:w-[330px] max-usm:w-[280px] animation-left">A skilled front-end developer specializing in crafting intuitive and visually stunning user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I am passionate about leveraging AI and machine learning to create dynamic and engaging web experiences. I am dedicated to staying up-to-date with the latest trends and technologies to deliver innovative and user-centric solutions.</p>
              <div className="w-[450px] flex flex-row gap-[24px] max-xl:w-[425px] max-sg:w-[450px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px]">
                <button className="w-[200px] border-2 border-[#fbbf24] rounded-[8px] p-[12px] cursor-pointer bg-[#fbbf24] text-[#FFFF] text-[18px] font-semibold hover:bg-[#FFFF] hover:text-[#fbbf24] hover:transition-all max-lm:w-[150px] max-lm:text-[16px] max-usm:text-[14px] max-usm:p-[10px] max-usm:w-[125px] animation-left">Hire Me</button>
                <button className="w-[200px] border-2 border-[#fbbf24] rounded-[8px] p-[12px] cursor-pointer bg-[#fbbf24] text-[#FFFF] text-[18px] font-semibold hover:bg-[#FFFF] hover:text-[#fbbf24] hover:transition-all max-lm:w-[150px] max-lm:text-[16px] max-usm:text-[14px] max-usm:p-[10px] max-usm:w-[125px] animation-right">Download CV</button>
              </div>
            </div>
            <div className="h-full animation-right max-sg:hidden">
              <img className="h-full" src="/myself.png" alt="myselfimg"/>
            </div>
            <div className="h-full animation-popup-3 hidden max-sg:block">
              <img className="h-full" src="/myself.png" alt="myselfimg"/>
            </div>
          </div>
        </div>
    </section>
  );
}
