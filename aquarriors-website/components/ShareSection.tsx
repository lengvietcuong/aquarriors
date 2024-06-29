import Image from "next/image";
import SocialMediaPost from "@/public/social-media-post.jpg";
import { Button } from "@/components/ui/button";
import { FaArrowRight as RightArrowIcon } from "react-icons/fa";

function ShareSection() {
  return (
    <section id="share" className="p-section">
      <h2 className="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl lg:hidden lg:text-5xl">
        Spread the word
      </h2>
      <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-8 lg:gap-16">
        <div className="flex-1">
          <Image
            src={SocialMediaPost}
            className="rounded-lg"
            alt="Social media post"
          ></Image>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Source:{" "}
            <a
              href="https://www.youtube.com/watch?v=cV2gBU6hKfY&vl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              MrBeast
            </a>
          </p>
        </div>
        <div className="flex-1">
          <h2 className="mb-4 hidden text-center text-3xl font-bold md:mb-8 md:text-left md:text-4xl lg:block lg:text-5xl">
            Spread the word
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Each share of our Facebook post with the hashtag{" "}
            <span className="text-primary">#aquarriors</span> is 1 kg of trash
            removed.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            This campaign is made possible by our sponsors whose logos are
            featured in the post. The more shares it gets, the more funding
            they&apos;ll provide for cleanups.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/donate/430041472059029/119699093824534/"
          >
            <Button className="mx-auto mt-6 flex md:inline-flex lg:mt-12">
              Share post <RightArrowIcon className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
