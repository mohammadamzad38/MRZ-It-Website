import Link from "next/link";
import RightArrow from "../../../../public/icons/rightArrow";

const NextPrevPost = ({ prevPost, nextPost }) => {
  return (
    <div className="flex justify-between lg:items-center lg:flex-row flex-col gap-5">
      {/* Previous Post */}
      {prevPost && (
        <div className="flex items-center gap-[26px]">
          <Link
            href={prevPost.link}
            className="hover:bg-primary hover:text-white transition-all duration-500 rounded-lg bg-[rgba(46,77,254,0.05)] p-2.5 w-15 h-15 flex justify-center items-center rotate-180"
          >
            <RightArrow width="27px" height="23px" />
          </Link>
          <Link href={prevPost.link} className="max-w-[307px]">
            <span className="multiline-hover">{prevPost.title}</span>
          </Link>
        </div>
      )}

      {/* Next Post */}
      {nextPost && (
        <div className="flex items-center gap-[26px] self-end">
          <Link href={nextPost.link} className="max-w-[307px] text-right">
            <span className="multiline-hover">{nextPost.title}</span>
          </Link>
          <Link
            href={nextPost.link}
            className="hover:bg-primary hover:text-white transition-all duration-500 rounded-lg bg-[rgba(46,77,254,0.05)] p-2.5 w-15 h-15 flex justify-center items-center"
          >
            <RightArrow width="27px" height="23px" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NextPrevPost;
