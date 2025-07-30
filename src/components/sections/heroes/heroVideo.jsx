import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { VideoBg } from "@/components/ui/videoBG";
import Link from "next/link";

const HeroVideo = () => {
  return (
    <section className="lg:pb-15 pb-9">
      <div className="relative w-full md:h-screen flex items-center flex-wrap lg:pt-[192px] pt-40 lg:pb-[74px] pb-32 bg-black">
        <div className="video-wrapper absolute w-full h-full top-0 start-0 z-1 overflow-hidden">
          <VideoBg videoClass={"w-full h-full object-cover opacity-60"} />
        </div>
        <div className="container relative z-2">
          <div className="max-w-[1350px] mx-auto">
            <div className="max-w-[754px]">
              <Title size={"7.5xl"} className={"text-white"}>
                Powering Digital Transformation Worldwide
              </Title>
              <p className="font-semibold text-white pt-7.5">
                We deliver innovative, secure, and scalable tech solutions—built
                for business growth, tailored for extraordinary impact.
              </p>

              <div className="flex sm:flex-row flex-col sm:items-center gap-[32px] pt-[55px] pb-[22px]">
                <div>
                  <Button
                    asChild
                    className="dark:text-white hover:border-white hover:text-white"
                  >
                    <Link href="/contact-us"> Get Started for Free </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
