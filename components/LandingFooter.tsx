import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";


const FooterLinks = [
  {
    Links: "Quick Links",
    Link1: {
      title: "Home",
      href: "/",
    },
    Link2: {
      title: "Pricing",
      href: "/#pricing",
    },
    Link3: {
      title: "Get Started",
      href: "/dashboard",
    },
  },
];

const FooterSocialMedia = [
  {
    Links: "Social Media",
    Link1: {
      title: "Facebook",
      icon: <FaFacebook className=' w-10 h-10' />,
      link: "https://www.facebook.com/",
    },
    Link2: {
      title: "X",
      icon: <FaTwitter className=' w-10 h-10' />,
      link: "https://www.x.com/",
    },
    Link3: {
      title: "Youtube",
      icon: <FaYoutube className=' w-10 h-10' />,
      link: "https://www.youtube.com/",
    },
  },
];

const FooterCompanyInf = [
  {
    Links: "Company Information",
    Link1: {
      title: "About Us",
      href: "#",
    },
    Link2: {
      title: "Privacy Policy",
      href: "#",
    },
    Link3: {
      title: "Term of Services",
      href: "#",
    },
  },
];

const LandingFooter = () => {
  return (
    <div className="text-2xl w-full h-[45rem] md:h-[18.5rem] lg:h-[16.5rem] bg-[rgb(25,35,57)] text-white text-center">
      <div className="w-full h-full grid grid-rows-3 md:grid-cols-3 ">
        <div className="mt-5 md:mt-12 ">
          {FooterLinks.map((social: any) => (
            <>
              <h1 className="text-2xl font-semibold">{social.Links}</h1>
              <div className=" w-full h-full  mt-5 grid-cols-3">
                <a href={social.Link1.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link1.title}
                  </p>
                </a>
                <a href={social.Link2.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link2.title}
                  </p>
                </a>
                <a href={social.Link3.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link3.title}
                  </p>
                </a>
              </div>
            </>
          ))}
        </div>

        <div className="mt-5 md:mt-[3rem] ">
          {FooterSocialMedia.map((social: any) => (
            <>
              <h1 className="text-2xl font-semibold">{social.Links}</h1>
              <div className=" w-full h-full mt-0 md:mt-4 flex text-center justify-center items-center gap-10">
                <a href={social.Link1.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-1 md:mt-4 text-white hover:text-sky-800 transition">
                    {social.Link1.icon}
                  </p>
                </a>
                <a href={social.Link2.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-0 md:mt-5 text-white hover:text-sky-800 transition">
                    {social.Link2.icon}
                  </p>
                </a>
                <a href={social.Link3.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-0 md:mt-5 text-white hover:text-sky-800 transition">
                    {social.Link3.icon}
                  </p>
                </a>
              </div>
            </>
          ))}
        </div>

        <div className="mt-5 md:mt-12 ">
          {FooterCompanyInf.map((social: any) => (
            <>
              <h1 className="text-2xl font-semibold">{social.Links}</h1>
              <div className=" w-full h-full  mt-5 grid-cols-3">
                <a href={social.Link1.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link1.title}
                  </p>
                </a>
                <a href={social.Link2.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link2.title}
                  </p>
                </a>
                <a href={social.Link3.href} className=" cursor-pointer ">
                  <p className="text-[1.3rem] mt-4 text-white hover:text-sky-800 transition">
                    {social.Link3.title}
                  </p>
                </a>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className=" w-full h-[3rem] bg-[rgb(16,22,35)] text-white">
        <h1 className="text-white text-xl flex justify-start text-start pt-2.5 pl-8">
          All Rights Reserved @2024
        </h1>
      </div>
    </div>
  );
}

export default LandingFooter
