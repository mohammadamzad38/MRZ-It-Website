"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import StickyHeader from "@/components/ui/stickyHeader";
import { menuList } from "@/lib/fackData/menuList";
import Image from "next/image";
import DropDownMenu from "./dropDownMenu";
import MegaMenu from "./megaMenu";
import MobileMenu from "./mobileMenu";

const HeaderThree = () => {
  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky  top-0 z-50 w-full transition-[top] duration-300"
      >
        <div
          id="header-container"
          className="absolute top-0 left-0 z-50 w-full bg-transparent"
        >
          <div
            className={`[.header-pinned_&]:bg-[rgba(0,31,63,0.9)] transition-all duration-300`}
          >
            <div className="container mx-auto">
              <div className="relative">
                <span className="border-t border-[#FFFFFF26] block [.header-pinned_&]:hidden"></span>
                <div className={`flex justify-between md:mx-20 lg:mx-[150px] items-center`}>
                  <div className="py-5 flex items-center gap-8">
                    <Link href={"/"}>
                      <Image
                        src={"/images/logo-light.png"}
                        width={500}
                        height={200}
                        alt="logo-white"
                        unoptimized="true"
                        className={`w-full h-full block dark:hidden`}
                      />
                    </Link>
                  </div>
                  <div className="flex items-center gap-16">
                    <nav className="xl:block hidden">
                      <ul className="flex items-center 2xl:gap-12.5 gap-7">
                        {menuList.map(
                          ({ id, lable, path, dropDown, megaMenu }) => {
                            return (
                              <li
                                className="pt-[43px] pb-[42px] group"
                                key={id}
                              >
                                <Link
                                  href={path}
                                  className="font-semibold leading-[22px] flex items-center gap-1 text-white relative transition-all duration-500 group-hover:text-[#E2E7FF]"
                                >
                                  {lable}
                                </Link>
                                {megaMenu?.length > 0 && (
                                  <MegaMenu
                                    data={megaMenu}
                                    bgColor="bg-white"
                                    color="text-foreground"
                                  />
                                )}
                                {dropDown?.length > 0 && (
                                  <DropDownMenu
                                    data={dropDown}
                                    bgColor="bg-white"
                                    color="text-foreground"
                                  />
                                )}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </nav>
                    <div className="hidden xl:flex items-center gap-5 ">
                      <Button
                        asChild
                        size="xl"
                        className="dark:text-white hover:text-white hover:border-white"
                      >
                        <Link href={"/contact-us"}> Let’s Talk </Link>
                      </Button>
                    </div>
                    <MobileMenu data={menuList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HeaderThree;
