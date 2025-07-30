import StoryContentOne from "./storyContentOne";

const StoryFive = ({ counter }) => {
  return (
    <section className="lg:py-15 py-9 overflow-x-hidden">
      <div className="container">
        <div className="relative pt-7 pb-6 xl:pb-0 px-2.5 after:absolute after:z-[-1] after:left-0 after:top-0 ] after:w-full after:h-[calc(100%-100px)] after:rounded-[50px]">
          <div className="flex lg:flex-row flex-col justify-center 2xl:gap-[144px] xl:gap-20 lg:gap-10 gap-5">
            <div className="max-w-[1000px] h-full overflow-hidden my-10">
              <StoryContentOne />
              {counter && (
                <div className="flex md:flex-row flex-col gap-25 2xl:mt-24 mt-14">
                  <div className="flex gap-[15px]">
                    <h2 className="text-[62px] text-muted-foreground font-extrabold">
                      5k+
                    </h2>
                    <p className="font-semibold leading-[130%] text-muted-foreground max-w-[113px]">
                      Website Optimized
                    </p>
                  </div>
                  <div className="flex gap-[15px]">
                    <h2 className="text-[62px] text-muted-foreground font-extrabold">
                      15X
                    </h2>
                    <p className="font-semibold leading-[130%] text-muted-foreground max-w-[159px]">
                      Conversion Rate Increased
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryFive;
