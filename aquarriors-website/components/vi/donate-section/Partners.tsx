import Image from "next/image";
import { FaStar as StarIcon } from "react-icons/fa6";
import { FaToolbox as ToolboxIcon } from "react-icons/fa6";
import { BsFillPersonCheckFill as StaffIcon } from "react-icons/bs";
import cleanupStaffPhoto from "@/public/cleanup-staff.jpg";
import autoTrashCollectorsPhoto from "@/public/auto-trash-collectors.jpg";
import garbageTruckPhoto from "@/public/garbage-truck.webp";

function Partners() {
  return (
    <>
      <h3 className="font-bold text-center text-xl md:text-2xl lg:text-3xl mt-12">
        Đối tác môi trường của chúng tôi
      </h3>

      <div className="mt-6 lg:mt-8 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center">
        <div className="max-w-lg flex w-full flex-1 gap-2 md:gap-4 text-center lg:gap-6">
          <div className="relative grid flex-1 place-items-center overflow-hidden rounded-lg border p-8 md:p-4 lg:p-12 size-40 lg:size-60">
            <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(farthest-side,rgba(59,130,246,0.1),rgba(0,0,0,0))]"></div>
            <a
              href="https://www.citenco.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-primary/50 to-primary bg-clip-text font-heading text-xl font-semibold text-transparent transition-colors md:text-2xl lg:text-3xl dark:from-secondary-foreground dark:to-primary"
            >
              CITENCO
            </a>
          </div>
          <div className="relative grid flex-1 place-items-center overflow-hidden rounded-lg border p-8 md:p-4 lg:p-12 size-40 lg:size-60">
            <div className="absolute left-1/2 top-0 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(farthest-side,rgba(59,130,246,0.1),rgba(0,0,0,0))]"></div>
            <a
              href="https://www.pantrading.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tl from-primary/50 to-primary bg-clip-text font-heading text-xl font-semibold text-transparent transition-colors md:text-2xl lg:text-3xl dark:from-secondary-foreground dark:to-primary"
            >
              Pan Trading
            </a>
          </div>
        </div>
        <div className="hidden self-stretch border-l md:block" />
        <div className="flex-1 space-y-4 lg:space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-14 md:size-12 lg:size-14 grid place-items-center bg-primary/15 border border-primary rounded-full flex-shrink-0">
              <StarIcon className="size-7 md:size-6 lg:size-7" />
            </div>
            <p className="lg:text-xl">
              Hàng chục năm kinh nghiệm trong làm sạch môi trường
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-14 md:size-12 lg:size-14 grid place-items-center bg-primary/15 border border-primary rounded-full flex-shrink-0">
              <StaffIcon className="size-7 md:size-6 lg:size-7" />
            </div>
            <p className="lg:text-xl">Nhân viên được đào tạo và tận tâm</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-14 md:size-12 lg:size-14 grid place-items-center bg-primary/15 border border-primary rounded-full flex-shrink-0">
              <ToolboxIcon className="size-7 md:size-6 lg:size-7" />
            </div>
            <p className="lg:text-xl">Thiết bị chuyên dụng</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-lg md:max-w-none mt-8 flex flex-col gap-4 md:mt-12 lg:mt-16 md:flex-row md:gap-4 lg:gap-8">
        <div className="flex-1">
          <Image
            src={cleanupStaffPhoto}
            alt="Nhân viên làm sạch"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Công nhân thu gom rác (Nguồn:{" "}
            <a
              href="https://tuoitre.vn/chung-tay-go-kho-cho-moi-truong-cua-tphcm-20220905161955009.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Tuổi Trẻ
            </a>
            )
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={autoTrashCollectorsPhoto}
            alt="Máy thu gom rác tự động"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Máy thu gom rác tự động (Nguồn:{" "}
            <a
              href="https://www.pantrading.vn/goc-chuyen-gia/kien-thuc-chuyen-nganh/gioi-thieu-thiet-bi-vot-rac-tren-song-berky"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Pan Trading
            </a>
            )
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={garbageTruckPhoto}
            alt="Xe rác"
            className="rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Xe rác xử lý chất thải thu gom (Nguồn:{" "}
            <a
              href="https://dantri.com.vn/xa-hoi/hang-tram-tan-rac-tai-kenh-nuoc-den-o-tphcm-da-duoc-don-sach-20240516115257890.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Dân Trí
            </a>
            )
          </p>
        </div>
      </div>
    </>
  );
}

export default Partners;
