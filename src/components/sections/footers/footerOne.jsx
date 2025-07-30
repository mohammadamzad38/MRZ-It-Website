import Logo from "@/components/ui/logo";
import SocialIcons from "@/components/ui/socialIcons";
import { BiSolidMessageRounded } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";

import { GrLocation } from "react-icons/gr";
import CopyRight from "./copyRight";
import ImportanceLinks from "./importanceLinks";

const FooterOne = () => {
  return (
    <footer>
      <div className="bg-[#1D293B] text-white px-10 rounded-tr-[30px] rounded-tl-[30px] pt-[77px]">
        <div className=" max-w-[1350px] mx-auto">
          <div className="flex justify-between">
            <div className="pb-[33px] max-w-[300px]">
              <Logo />
            </div>
            <div className="flex flex-wrap justify-center items-end gap-10 w-[60%]">
              <div className="flex gap-5">
                <div>
                  <div className="h-7 w-7 rounded-full z-2 bg-[#0963DD] opacity-85"></div>
                  <GrLocation className="relative -top-5 left-1 text-3xl fill-slate-400 bg-opacity-95 backdrop-blur-90" />
                </div>
                <p>
                  23 Church Street, Manchester, <br /> Greater Manchester, UK
                </p>
              </div>

              <div className="flex gap-5">
                <div>
                  <div className="h-7 w-7 rounded-full z-2 bg-[#0963DD] opacity-85"></div>
                  <GrLocation className="relative -top-5 left-1 text-3xl fill-slate-400 bg-opacity-95 backdrop-blur-90" />
                </div>
                <p>
                  Level: 1&2, House: 11/A2, Road-41, <br /> Gulshan-2,
                  Dhaka-1212, Bangladesh
                </p>
              </div>

              <div className="flex gap-5 items-center justify-center">
                <div>
                  <BiSolidMessageRounded className="fill-[#0963DD] text-5xl z-2 opacity-85" />
                  <LuMessageCircleMore className="relative -top-14 -right-2 text-4xl bg-opacity-55 backdrop-blur-90" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span>
                    Email:{" "}
                    <a
                      className="hover:text-blue-300"
                      href="mailto:info@mrztech.com"
                    >
                      {" "}
                      info@mrztech.com
                    </a>
                  </span>
                  <span>
                    Call us:{" "}
                    <a
                      className="hover:text-blue-300"
                      href="tel:++880 1991-198312"
                    >
                      +880 1991-198312
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] my-5 lg:my-10 rounded bg-white"></div>
          <div className="grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 pb-5 gap-x-20 justify-between">
            <div>
              <p className="pb-[38px]">
                Since 2010, MRZ Tech has delivered global digital solutions,
                combining international expertise with local insight to help
                businesses scale with confidence.
              </p>
              <SocialIcons />
            </div>
            <div>
              <ImportanceLinks />
            </div>
          </div>
        </div>
      </div>
      <span className="bg-[#7C848C]"></span>
      <CopyRight />
    </footer>
  );
};

export default FooterOne;
