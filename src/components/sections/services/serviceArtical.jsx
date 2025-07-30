import Image from "next/image";
// import Title from '@//ui/title'
import Highlight from "@/components/ui/highlight";
import Title from "@/components/ui/title";
import Activity from "../../../../public/icons/activity";
import Buy from "../../../../public/icons/buy";
import Discount from "../../../../public/icons/discount";
import Document from "../../../../public/icons/document";
import Send from "../../../../public/icons/send";
import Shield from "../../../../public/icons/shield";

const ServiceArtical = () => {
  return (
    <div className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="grid grid-cols-1 gap-12.5">
          <article>
            <Image
              src={"/images/resource/sergices-details1-1.jpg"}
              width={872}
              height={472}
              alt="service-bg"
              className="rounded-[30px]"
            />
            <div className="pt-7.5">
              <Title size={"5xl"}>
                Why choose <Highlight>Next Agency</Highlight> as your Marketing
                Partner
              </Title>
              <div className="pt-7.5">
                <p>
                  At Next Agency, we understand the importance of having a
                  strong online presence and ranking well in search engine
                  results.{" "}
                </p>
                <p className="pt-6">
                  Choosing us as your digital marketing partner means selecting
                  a team committed to your success. With a proven track record,
                  tailored solutions, and industry expertise, we prioritize your
                  unique goals and objectives.
                </p>
              </div>
              <ul className="pt-7.5 flex flex-col gap-[15px]">
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/shapes/check-icon-blue.svg"}
                    width={20}
                    height={20}
                    alt="check-icon"
                  />
                  <span>
                    Customized approach tailored to each client's unique
                    business goals and target audience.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/shapes/check-icon-blue.svg"}
                    width={20}
                    height={20}
                    alt="check-icon"
                  />
                  <span>
                    Transparent communication and regular reporting to keep
                    clients informed and engaged.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={"/images/shapes/check-icon-blue.svg"}
                    width={20}
                    height={20}
                    alt="check-icon"
                  />
                  <span>
                    Continuous optimization and adaptation to evolving search
                    engine algorithms and industry trends.
                  </span>
                </li>
              </ul>
              <div className="pt-7.5">
                <p>
                  Our transparent communication and unwavering dedication ensure
                  that you receive the support needed to thrive in the digital
                  landscape. When you partner with us, you're choosing a trusted
                  ally dedicated to driving real, measurable results for your
                  business.
                </p>
              </div>
            </div>
            <div className="pt-12.5">
              <Title size={"4xl"}>Strategic Approach</Title>
              <p className="pt-7.5">
                We believe in taking a strategic approach to digital marketing
                that focuses on delivering tangible results for our clients. Our
                methodology is built on a foundation of data-driven insights,
                industry expertise, and innovative techniques to ensure maximum
                impact and ROI.
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12.5 pt-12.5">
                <Card
                  icon={<Document width={42} height={45} />}
                  title={"Data-Driven Insights"}
                  desc={
                    "Through thorough analysis of key metrics and market trends, we uncover valuable insights."
                  }
                />
                <Card
                  icon={<Shield width={42} height={45} />}
                  title={"Customized Strategies"}
                  desc={
                    "We develop customized plans that align with your specific goals and budget."
                  }
                />
                <Card
                  icon={<Discount width={42} height={45} />}
                  title={"Data-Driven Insights"}
                  desc={
                    "Through thorough analysis of key metrics and market trends, we uncover valuable insights."
                  }
                />
                <Card
                  icon={<Buy width={42} height={45} />}
                  title={"Data-Driven Insights"}
                  desc={
                    "Through thorough analysis of key metrics and market trends, we uncover valuable insights."
                  }
                />
                <Card
                  icon={<Activity width={42} height={45} />}
                  title={"Data-Driven Insights"}
                  desc={
                    "Through thorough analysis of key metrics and market trends, we uncover valuable insights."
                  }
                />
                <Card
                  icon={<Send width={42} height={45} />}
                  title={"Data-Driven Insights"}
                  desc={
                    "Through thorough analysis of key metrics and market trends, we uncover valuable insights."
                  }
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ServiceArtical;

const Card = ({ icon, title, desc }) => {
  return (
    <div className="grid grid-cols-[83px_auto] items-start gap-7.5">
      <div className="bg-primary w-[83px] h-[83px] rounded-[15px] flex justify-center items-center text-white">
        {icon}
      </div>
      <div>
        <h5 className="text-xl font-extrabold text-muted-foreground pb-2">
          {title}
        </h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};
