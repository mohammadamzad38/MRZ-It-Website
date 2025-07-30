import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import Image from "next/image";

const SubscribeTwo = () => {
  return (
    <section className="lg:py-15 py-9">
      <SlideUp>
        <div className="max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden">
          <div className="rounded-[30px] bg-gray lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center">
            <div className="pb-6 max-w-[750px] w-full relative">
              <Title size={"5xl"} className={"max-w-[707px]"}>
                Let’s Build Something Exceptional Together
              </Title>
              <p>
                Meet our experts for 30 minutes and take the first step toward
                digital success.
              </p>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 lg:block hidden">
                <Image
                  src={"/images/shapes/business-consultant-cta-arrow.png"}
                  width={188}
                  height={39}
                  className="dark:brightness-100 dark:invert"
                  alt="arrow"
                />
              </div>
            </div>
            <div>
              <Button className="bg-[#1B449C] text-white">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://calendar.app.google/TEfaKdgKeT3nU23c9"
                >
                  Schedule a Meeting
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default SubscribeTwo;
