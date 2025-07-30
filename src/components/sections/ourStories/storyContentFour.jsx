import SlideUp from "@/components/animations/slideUp";
import { cn } from "@/lib/utils";
import Category from "../../../../public/icons/category";
import Filter from "../../../../public/icons/filter";
import Shield from "../../../../public/icons/shield";
import ProgressBar from "../../ui/progressBar";

const StoryContentFour = () => {
  return (
    <SlideUp>
      <h1 className="text-5xl text-[#1D293B]">
        Crafting{" "}
        <span className="font-bold text-[#1B449C]">Digital Success</span>{" "}
        Stories since 2010
      </h1>
      <p className="pt-5">
        Since 2010, from large scalable app for UAE based companies to create
        niche social media and other SaaS platform for EU companies, we've been
        pioneering innovative solutions, crafting unique narratives, and
        consistently delivering exceptional results.
      </p>

      <div className="flex md:flex-row flex-col gap-6 2xl:mt-12.5 xl:mt-14 mt-8">
        <Card
          bgColor={"after:bg-green"}
          color={"text-green"}
          icon={<Category />}
          title={"Innovative Approach"}
        />
        <Card
          bgColor={"after:bg-purple"}
          color={"text-purple"}
          icon={<Filter />}
          title={"Client-Centric Approach"}
        />
        <Card
          bgColor={"after:bg-red"}
          color={"text-red"}
          icon={<Shield />}
          title={"Results-Driven Focus"}
        />
      </div>

      <div className="lg:pb-[73px] pb-12 pt-14">
        <ProgressBar finalWidth={80} title={"Strategic Expertise"} />
        <ProgressBar finalWidth={98} title={"Client Satisfaction"} />
      </div>

      <div className="flex justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-[#1D293B]">App Downloads:</h1>
          <h2>180+</h2>
          <h3>Countries</h3>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#1D293B]">User Engagement:</h1>
          <h2>60,000+</h2>
          <h3>registered users </h3>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-[#1D293B]">App Downloads:</h1>
          <h2>50,000+</h2>
          <h3>on Google Play Store</h3>
        </div>
      </div>
    </SlideUp>
  );
};

export default StoryContentFour;

const Card = ({ icon, color, bgColor, title }) => {
  return (
    <div className="flex items-center gap-2.5 group">
      <div
        className={cn(
          `${color}  min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full ${bgColor} after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`
        )}
      >
        <span className="group-hover:scale-90 transition-all duration-500">
          {icon}
        </span>
      </div>
      <p className="font-bold lg:max-w-[154px] leading-[120%]">{title}</p>
    </div>
  );
};
