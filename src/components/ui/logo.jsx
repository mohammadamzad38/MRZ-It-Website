import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="w-auto h-auto">
      <Link href={"/"} className="relative">
        <Image
          src={"/images/logo-light.png"}
          width={500}
          height={200}
          unoptimized="true"
          alt="logo-white"
        />
      </Link>
    </div>
  );
};

export default Logo;
