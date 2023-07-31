import Image from "next/image";

interface PostProps {
  title: string;
  bannerImage: string;
  bannerImageWidth: number;
  bannerImageHeight: number;
  content: string;
}

export function Post(props: PostProps) {
  const { title, content, bannerImage, bannerImageWidth, bannerImageHeight } =
    props;

  return (
    <article className="w-full mb-10 flex flex-col items-center pt-20">
      <h1 className="text-6xl font-black text-white mb-8">{title}</h1>
      <Image
        alt="Blog Image"
        src={bannerImage}
        // width={bannerImageWidth}
        width={"800"}
        height={bannerImageHeight}
        className="[width: 800px]!"
      />
      <div
        className="text-xl mt-4 max-w-3xl leading-10 prose prose-p:text-white prose-headings:text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
}
