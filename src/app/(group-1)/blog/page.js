import CardOne from "@/components/sections/blogs/cardOne";
import PageTitle from "@/components/sections/pageTitle";
import SideBar from "@/components/sections/sideBar";
import { blogData } from "@/lib/fackData/blogData";

export const metadata = {
  title: "MRZ Tech  | Blog",
  description: "",
};

const Blog2 = () => {
  return (
    <main>
      <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} />
      <div className="lg:py-15 py-9">
        <div className="max-w-[1350px] mx-auto px-[15px]">
          <div className="grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5">
            <div>
              <SideBar blog={true} search={true} />
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7.5 justify-between">
              {blogData
                .slice(0, 8)
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
        </div>
      </div>
    </main>
  );
};

export default Blog2;
