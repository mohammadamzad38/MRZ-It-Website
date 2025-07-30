import { cn } from "@/lib/utils";
import Link from "next/link";

const CopyRight = ({ className }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-accent px-0 lg:px-15">
      <div
        className={cn(
          `flex xl:flex-row flex-col justify-between items-center text-center lg:text-start py-7.5 ${className}`
        )}
      >
        <p>
          Designed and Developed By{" "}
          <Link
            href={"https://mrztech.com"}
            className="text-primary-foreground relative hover-underline after:h-[1px] font-bold"
          >
            MRZ Tech
          </Link>
        </p>
        <p>Copyright: © {currentYear}. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default CopyRight;
