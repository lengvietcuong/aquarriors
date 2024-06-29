import Image from "next/image";
import SocialMediaPost from "@/public/social-media-post.jpg";
import { Button } from "@/components/ui/button";
import { FaArrowRight as RightArrowIcon } from "react-icons/fa";

function ShareSection() {
  return (
    <section id="share" className="p-section">
      <h2 className="mb-6 text-center text-3xl font-bold md:mb-8 md:text-4xl lg:hidden lg:text-5xl">
        Lan tỏa thông điệp
      </h2>
      <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-8 lg:gap-16">
        <div className="flex-1">
          <Image
            src={SocialMediaPost}
            className="rounded-lg"
            alt="Bài đăng trên mạng xã hội"
          ></Image>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Nguồn:{" "}
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
            Lan tỏa thông điệp
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Mỗi lượt chia sẻ bài đăng trên Facebook của chúng tôi với hashtag{" "}
            <span className="text-primary">#aquarriors</span> là 1 kg rác được dọn sạch.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Chiến dịch này được thực hiện nhờ sự tài trợ của các nhà tài trợ có logo
            xuất hiện trong bài đăng. Bài đăng càng được chia sẻ nhiều, họ sẽ càng tài trợ
            nhiều hơn cho việc dọn dẹp.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/donate/430041472059029/119699093824534/"
          >
            <Button className="mx-auto mt-6 flex md:inline-flex lg:mt-12">
              Chia sẻ bài đăng <RightArrowIcon className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
