import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import { blogData } from "@/lib/fackData/blogData";
import CardOne from "./cardOne";

const BlogTwo = () => {
  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Blog</Button>
          </div>
        </SlideUp>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between">
          {blogData
            .slice(0, 3)
            .map(({ id, author, date, thumb, title, category, slug }) => (
              <CardOne
                key={id}
                id={id}
                title={title}
                thumb={thumb}
                author={author}
                date={date}
                category={category}
                slug={slug}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;
