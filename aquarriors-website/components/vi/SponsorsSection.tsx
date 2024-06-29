import React, { ReactNode } from "react";
import Apple from "../icons/Apple";
import Amazon from "../icons/Amazon";
import Facebook from "../icons/Facebook";
import Netflix from "../icons/Netflix";
import Google from "../icons/Google";
import { Button } from "../ui/button";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaPhone as PhoneIcon } from "react-icons/fa6";

function InfiniteMovingCards({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden flex">
      <div className="min-w-full flex justify-around infinite-scroll">
        {children}
      </div>
      <div className="min-w-full flex justify-around infinite-scroll">
        {children}
      </div>
    </div>
  );
}

function SponsorsSection() {
  return (
    <section className="p-section">
      <h2 className="mb-8 lg:mb-16 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Những nhà tài trợ
      </h2>

      <InfiniteMovingCards>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="size-10 md:size-14 lg:size-20" />
        </a>
        <a
          href="https://www.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Apple className="fill-foreground size-10 md:size-14 lg:size-20" />
        </a>
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Amazon className="fill-foreground size-10 md:size-14 lg:size-20" />
        </a>
        <a
          href="https://www.netflix.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Netflix className="size-10 md:size-14 lg:size-20" />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Google className="size-10 md:size-14 lg:size-20" />
        </a>
      </InfiniteMovingCards>

      <p className="mt-12 md:mt-16 text-center text-lg text-muted-foreground md:text-xl lg:text-2xl">
        Nếu bạn muốn đóng góp cho dự án và xây dựng thương hiệu, hãy liên hệ chúng tôi! 
      </p>
      <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
        <a href="tel:+84899150016" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="mx-auto flex w-full min-w-fit max-w-60">
            <PhoneIcon className="mr-2 size-4" />
            +84 899 150 016
          </Button>
        </a>
        <a
          href="mailto:aquarriors@proton.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="lg"
            className="mx-auto flex w-full min-w-fit max-w-60 text-primary hover:text-primary"
          >
            <EmailIcon className="mr-2 size-4" />
            aquarriors@proton.me
          </Button>
        </a>
      </div>
    </section>
  );
}

export default SponsorsSection;
