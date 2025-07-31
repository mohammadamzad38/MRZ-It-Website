import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const SocialIcons = ({ color, prantBorder, hoverColor }) => {
  return (
    <ul className={`flex items-center gap-5 ${color}`}>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`
        )}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.facebook.com/MRZTechOfficial/"}
          aria-label="facebook"
        >
          <FaFacebook />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`
        )}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://x.com/mrztechofficial"}
          aria-label="twitter"
        >
          <FaXTwitter />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`
        )}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/mrztechofficial/"}
          aria-label="instagram"
        >
          <FaInstagram />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder} ${hoverColor}`
        )}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/mrztechofficial/"}
          aria-label="linkedin"
        >
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
