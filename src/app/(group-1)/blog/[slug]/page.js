import CardOne from "@/components/sections/blogs/cardOne";
import Comments from "@/components/sections/blogs/comments";
import LeveRelpy from "@/components/sections/blogs/leveRelpy";
import NextPrevPost from "@/components/sections/blogs/nextPrevPost";
import Tags from "@/components/sections/blogs/tags";
import Title from "@/components/ui/title";
import { blogData } from "@/lib/fackData/blogData";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata = {
  title: "MRZ Tech  |  Blog",
  description: "",
};

const BlogArticle = ({ params }) => {
  const { slug } = params;
  const postIndex = blogData.findIndex((b) => b.slug === slug);
  const post = blogData[postIndex];

  if (!post) {
    return <div>Blog post not found</div>;
  }

  const prevPost = blogData[postIndex - 1] || null;
  const nextPost = blogData[postIndex + 1] || null;

  const sidebarShow = true;

  return (
    <section className="lg:py-32 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div>
          <Title size="5xl" className="lg:text-5xl  md:text-4.5xl text-3xl">
            {post.title}
          </Title>

          <div className="flex md:flex-row flex-col md:items-center justify-between mt-5">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-7 gap-3">
              <div className="flex items-center gap-4">
                <Image
                  src={
                    post.author?.image || "/images/blog/posts-author-img1-1.png"
                  }
                  alt="author"
                  width={38}
                  height={38}
                  className="rounded-full"
                />
                <Link
                  href="#"
                  className="text-base font-semibold hover:text-primary-foreground transition-all duration-500"
                >
                  {post.author?.author_name || "Author Name"}
                </Link>
              </div>

              <Link
                href="#"
                className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full hover:text-primary-foreground transition-all duration-500 ml-4 sm:ml-0"
              >
                {post.category?.[0] || "Category"}
              </Link>

              <p className="text-base font-semibold relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full ml-4 sm:ml-0">
                {post.date || "25 Feb 2024"}
              </p>
            </div>

            <p className="text-base font-semibold mt-3 lg:mt-0">5 min read</p>
          </div>

          <div className=" lg:pt-12.5 place-items-center pt-6">
            <div className="relative h-[500px] w-[1000px]">
              <Image
                src={post.thumb}
                fill
                alt="Feature Image"
                className="contain h-full w-full rounded-xl"
              />
            </div>
          </div>

          <div className="max-w-[1080px] mx-auto lg:pt-12.5 pt-6 lg:px-12.5">
            {/* Article Content Example */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.author.description || "",
              }}
            />

            <div className="lg:pt-12.5 pt-6">
              <Tags />
              <NextPrevPost
                prevPost={
                  prevPost
                    ? {
                        link: `/blog/${prevPost.slug}`,
                        title: prevPost.title,
                      }
                    : null
                }
                nextPost={
                  nextPost
                    ? {
                        link: `/blog/${nextPost.slug}`,
                        title: nextPost.title,
                      }
                    : null
                }
              />
            </div>

            <hr className="lg:my-12.5 my-8 text-[#B0C2E2]" />

            <div className="lg:pt-12.5 pt-6">
              <Title size="4xl">Recent Posts</Title>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5 pt-6">
                {blogData.slice(0, 2).map((post) => (
                  <CardOne
                    key={post.id}
                    author={post.author}
                    category={post.category}
                    date={post.date}
                    thumb={post.thumb}
                    title={post.title}
                    slug={post.slug}
                  />
                ))}
              </div>
            </div>

            <Comments />
            <hr className="lg:mt-12.5 mt-6 lg:pb-15 pb-6 text-[#B0C2E2]" />
            <LeveRelpy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
