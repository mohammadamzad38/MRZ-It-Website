import Image from "next/image";
import Link from "next/link";

import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import { servicesDataThree } from "@/lib/fackData/servicesDataTree";

const ServiceThree = () => {
  return (
    <section className="lg:pt-[120px] pt-16 lg:pb-15 pb-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Services</Button>
          </div>
        </SlideUp>
        <div className="lg:pt-7.5 pt-2">
          <div className="grid xl:grid-cols-3 gap-10 lg:grid-cols-3 sm:grid-cols-2">
            {servicesDataThree.map(
              ({ id, description, icon, service_name, slug }) => {
                return (
                  <SlideUp key={id} id={id}>
                    <div className="lg:pt-15 pt-7.5 text-center lg:text-start group">
                      <div className="mb-7.5 transition-all duration-500 group-hover:scale-105 overflow-hidden flex justify-center lg:justify-start">
                        <div className="max-w-12.5 h-12.5 flex items-end">
                          <Image
                            src={icon}
                            alt="icon"
                            className="w-auto h-auto object-contain"
                          />
                        </div>
                      </div>
                      <Link
                        href={`/${slug}`}
                        className="text-xl font-extrabold text-muted-foreground leading-[140%] multiline-hover"
                      >
                        {service_name}
                      </Link>
                      <p className="pt-5">{description}</p>
                    </div>
                  </SlideUp>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThree;
