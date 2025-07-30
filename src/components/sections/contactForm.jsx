import Image from "next/image";
import SlideUp from "../animations/slideUp";
import { Button } from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import Title from "../ui/title";

const ContactForm = ({ color, inputColor }) => {
  return (
    <section className="container lg:mt-15 mt-9">
      <div
        className={` bg-primary lg:rounded-[30px] rounded-2xl px-3 relative z-[1]`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat opacity-20 z-[-1]"
          style={{
            backgroundImage: `url(/images/background/services-bg1-1.png)`,
          }}
        ></div>
        <div
          className={`max-w-[1320px] mx-auto pt-12 lg:pb-15 pb-10 rounded-[30px]`}
        >
          <div className="flex lg:flex-row flex-col justify-between items-center gap-12.5">
            <div className="lg:w-[40%] w-full lg:pb-11">
              <SlideUp>
                <div
                  className={`w-[75px] h-[75px] rounded-lg flex justify-center items-center drop-shadow-3xl bg-white mb-3`}
                >
                  <Image
                    src={"/images/shapes/cro-icon.png"}
                    width={45}
                    height={50}
                    alt="map arrwo"
                  />
                </div>
                <Title size={"5xl"} className={`md:leading-[140%] ${color}`}>
                  Get in Touch !
                </Title>
              </SlideUp>
            </div>
            <div className="lg:w-[54%] w-full">
              <SlideUp>
                <form>
                  <div className="flex sm:flex-row flex-col items-center gap-4 mb-3">
                    <div className="w-full">
                      <Input
                        type={"text"}
                        placeholder={"Your Name"}
                        className={`w-full border-2 border-[#C0C0C0] ${inputColor}`}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        type={"email"}
                        placeholder={"Email"}
                        className={`w-full border-2 border-[#C0C0C0] ${inputColor}`}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <Textarea
                      name={"massage"}
                      placeholder={"Massage"}
                      className={`${inputColor}`}
                    />
                  </div>
                  <div className="flex justify-end w-full">
                    <Button
                      variant={"outline"}
                      className="border-white border text-white hover:text-primary-foreground hover:bg-white"
                    >
                      Send request
                    </Button>
                  </div>
                </form>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
