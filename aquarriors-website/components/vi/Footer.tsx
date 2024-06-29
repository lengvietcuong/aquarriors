import Droplet from "@/components/icons/Droplet";
import { MdEmail as EmailIcon } from "react-icons/md";
import { FaPhone as PhoneIcon } from "react-icons/fa6";
import { FaFacebook as FacebookIcon } from "react-icons/fa";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaYoutube as YouTubeIcon } from "react-icons/fa";
import { FaXTwitter as TwitterIcon } from "react-icons/fa6";
import { FaTiktok as TikTokIcon } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t bg-background px-6 py-8 md:px-12 lg:px-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex justify-center gap-6 lg:gap-8">
            <Droplet className="h-12 w-auto lg:h-16" />
            <div className="space-y-2">
              <a
                className="flex items-center"
                href="mailto:aquarriors@proton.me"
              >
                <EmailIcon className="mr-2 size-4" />
                aquarriors@proton.me
              </a>
              <a className="flex items-center" href="tel:+84899150016">
                <PhoneIcon className="mr-2 size-4" />
                +84 899 150 016
              </a>
            </div>
          </div>
          <hr className="md:hidden" />
          <div className="flex justify-center gap-8 md:gap-12">
            <ul className="flex justify-center gap-8 md:gap-12">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="size-6 transition-colors hover:fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="size-6 transition-colors hover:fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="size-6 transition-colors hover:fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon className="size-6 transition-colors hover:fill-primary" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="size-6 transition-colors hover:fill-primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Icons bởi{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            React Icons
          </a>{" "}
          và{" "}
          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Flaticon
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          © 2024 Aquarriors
        </p>
      </div>
    </footer>
  );
}

export default Footer;
