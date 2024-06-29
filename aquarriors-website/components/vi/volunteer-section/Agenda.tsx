import Image from "next/image";
import protectiveClothing from "@/public/protective-clothing.jpg";
import cleaning from "@/public/cleaning.jpg";
import mentors from "@/public/mentors.jpg";
import wrappingUp from "@/public/wrapping-up.jpg";

function Agenda() {
  return (
    <>
      <h4 className="mt-16 text-center text-xl font-bold md:text-2xl lg:text-3xl">
        Lịch trình
      </h4>
      <ol className="mt-4 border-s border-muted-foreground/50 md:flex md:justify-center md:gap-8 md:border-s-0 md:border-t lg:mt-8 lg:gap-16 mx-auto w-fit">
        <li className="flex flex-1 flex-col max-w-72">
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ms-2 me-2 size-4 rounded-full bg-primary md:-mt-2 md:me-0 md:ms-0"></div>
            <p className="font-medium text-muted-foreground md:mt-1">8:00 sáng</p>
          </div>
          <div className="ms-4 mt-2 flex flex-1 flex-col justify-between pb-5 md:ms-0">
            <h5 className="text mb-2 font-semibold md:text-lg lg:text-xl">
              Nhận dụng cụ
            </h5>
            <Image
              src={protectiveClothing}
              alt="Volunteers receiving protective clothing"
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Nguồn:{" "}
              <a
                href="https://www.facebook.com/photo.php?fbid=412684338376313&set=pb.100089042511383.-2207520000&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Sài Gòn Xanh
              </a>
            </p>
          </div>
        </li>

        <li className="flex flex-1 flex-col max-w-72">
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ms-2 me-2 size-4 rounded-full bg-primary md:-mt-2 md:me-0 md:ms-0"></div>
            <p className="font-medium text-muted-foreground md:mt-1">8:15 sáng</p>
          </div>
          <div className="ms-4 mt-2 flex flex-1 flex-col justify-between pb-5 md:ms-0">
            <h5 className="text mb-2 font-semibold md:text-lg lg:text-xl">
              Hướng dẫn từ cố vấn
            </h5>
            <Image
              src={mentors}
              alt="Mentors giving a speech"
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Nguồn:{" "}
              <a
                href="https://saigonxanh.org/#/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Sài Gòn Xanh
              </a>
            </p>
          </div>
        </li>

        <li className="flex flex-1 flex-col max-w-72">
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ms-2 me-2 size-4 rounded-full bg-primary md:-mt-2 md:me-0 md:ms-0"></div>
            <p className="font-medium text-muted-foreground md:mt-1">8:30 sáng</p>
          </div>
          <div className="ms-4 mt-2 flex flex-1 flex-col justify-between pb-5 md:ms-0">
            <h5 className="text mb-2 font-semibold md:text-lg lg:text-xl">
              Dọn rác
            </h5>
            <Image
              src={cleaning}
              alt="Volunteers cleaning up trash"
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Nguồn:{" "}
              <a
                href="https://www.facebook.com/photo.php?fbid=411504765160937&set=pb.100089042511383.-2207520000&type=3"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Sài Gòn Xanh
              </a>
            </p>
          </div>
        </li>

        <li className="flex flex-1 flex-col max-w-72">
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ms-2 me-2 size-4 rounded-full bg-primary md:-mt-2 md:me-0 md:ms-0"></div>
            <p className="font-medium text-muted-foreground md:mt-1">12:30 chiều</p>
          </div>
          <div className="ms-4 mt-2 flex flex-1 flex-col justify-between pb-5 md:ms-0">
            <h5 className="text mb-2 font-semibold md:text-lg lg:text-xl">
              Kết thúc
            </h5>
            <Image
              src={wrappingUp}
              alt="Wrapping up the event"
              className="rounded-lg"
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Nguồn:{" "}
              <a
                href="https://saigonxanh.org/#/rivers"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Sài Gòn Xanh
              </a>
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}

export default Agenda;
