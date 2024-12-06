"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./animation.css"
import { useEffect } from "react";

const robotoFont = Roboto({ subsets: ['latin'],
  weight: ['400']
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const navLinks = document.querySelectorAll<HTMLAnchorElement>("header nav a");
      const menuIcon = document.querySelector<HTMLElement>("#menu-icon");
      const navbar = document.querySelector<HTMLElement>(".navbar");

      const handleMenuToggle = () => {
        menuIcon?.classList.toggle("bx-x");
        navbar?.classList.toggle("active");
      };

      const handleScroll = () => {
        const header = document.querySelector<HTMLElement>("header");
        const top = window.scrollY

        sections.forEach((sec) => {
          const offset = sec.offsetTop - 100;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");

          if (id && top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              const activeLink = document.querySelector<HTMLAnchorElement>(
                `header nav a[href*='${id}']`
              );
              activeLink?.classList.add("active");
            });
          }
        });

        header?.classList.toggle("sticky", top > 100);

        menuIcon?.classList.remove("bx-x");
        navbar?.classList.remove("active");
      };

      menuIcon?.addEventListener("click", handleMenuToggle);
      window.addEventListener("scroll", handleScroll);

      return () => {
        menuIcon?.removeEventListener("click", handleMenuToggle);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="header">
             <div className="w-full bg-[#fbbf24] text-[#FFFF] h-[100px] max-lm:h-[90px] max-mm:h-[80px] animation-up">
               <div className="h-full flex flex-row items-center justify-around p-[16px] gap-[12px] max-sm:justify-between">
                   <div className="w-[320px] font-bold justify-items-center items-center max-sg:w-[200px] max-md:w-[150px]">
                     <h1 className="w-[300px] text-[45px] max-sg:w-[175px] max-md:text-[36px] max-md:w-[125px] max-lm:text-[32px] max-usm:text-[28px]">Fahad</h1>
                   </div>
                   <nav className="navbar w-[575px] h-full gap-[24px] flex justify-center items-center max-sg:w-[550px] max-md:w-[485px] max-md:gap-[20px] max-sm:gap-[26px] max-sm:hidden max-sm:text-center">
                     <a href="/" className="active w-[60px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px] max-sm:w-[80px]">Home</a>
                     <a href="/aboutSection" className="w-[65px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px]  max-sm:w-[85px]">About</a>
                     <a href="/skillsSection" className="w-[65px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px] max-sm:w-[85px]">Skills</a>
                     <a href="/servicesSection" className="w-[85px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px] max-sm:w-[115px]">Services</a>
                     <a href="/projectSection" className="w-[85px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px] max-sm:w-[115px]">Projects</a>
                     <a href="/contactSection" className="w-[80px] text-[22px] font-semibold cursor-pointer max-sg:text-[20px] max-md:text-[18px] max-sm:w-[115px]">Contact</a>
                     <span className="active-nav"></span>           
                   </nav>
             
                   <div className="hidden max-sm:block bx bx-menu" id="menu-icon">
                     <img className="bx bx-menu" id="menu-icon" src="/threelines.svg" alt="threeline" width={40} height={40}/>
                   </div>
                 </div>
               </div>
           </header>
           {children}
           <footer className={robotoFont.className}>
             <div className="w-full">
                <div className="flex flex-row justify-around gap-[24px] bg-[#fbbf24] h-[85px] items-center max-sg:flex-col max-sg:h-[135px] p-[12px] max-sg:p-[24px] max-md:gap-[18px] max-sm:h-[185px]">
                  <div className="w-full justify-evenly flex flex-row items-center gap-[16px] max-sm:flex-col text-center max-sg:gap-[42px] max-md:gap-[16px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px]">
                   <p className="w-[275px] text-[18px] h-[30px] font-medium text-[#FFFF] max-md:w-[260px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px]">@copyright All Rights Reserved</p>
                   <h1 className="w-[325px] text-[22px] h-[36px] font-semibold text-[#FFFF] max-md:w-[315px] max-usm:text-[20px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px]">Developed By Fahad Developers</h1>
                  </div>
                  <ul className="flex flex-row gap-[32px] max-sg:gap-[42px] max-sm:w-[460px] max-lm:w-[400px] max-mm:w-[340px] max-usm:w-[300px] justify-center">
                    <a href="https://www.instagram.com/syed.fahad_" target="_blank"><img className="w-[32px] max-lg:w-[28px] cursor-pointer hover:-translate-y-2 hover:transition-all" src="/logos/instagram.png" alt="instagrampng"/></a>
                    <a href="https://www.linkedin.com/in/syed-fahad-ali-b1642b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img className="w-[32px] max-lg:w-[28px] cursor-pointer hover:-translate-y-2 hover:transition-all" src="/logos/linkedin.png" alt="linkedpng"/></a>
                    <a href="https://x.com/SyedFahadAli399?t=JThPzxwl9-paBcAEGEMXAg&s=09" target="_blank"><img className="w-[32px] max-lg:w-[28px] cursor-pointer hover:-translate-y-2 hover:transition-all" src="/logos/twitter.png" alt="twitter.png"/></a>
                    <a href="https://github.com/syedfahadali399" target="_blank"><img className="w-[32px] max-lg:w-[28px] cursor-pointer hover:-translate-y-2 hover:transition-all" src="/logos/github.png" alt="github.png"/></a>
                  </ul>
                </div>
             </div>
           </footer>
        </body>
      </html>
  );
}