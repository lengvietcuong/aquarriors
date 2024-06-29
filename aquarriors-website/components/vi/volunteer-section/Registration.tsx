import { FaCalendarAlt as CalendarIcon } from "react-icons/fa";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { FaClock as ClockIcon } from "react-icons/fa";
import { IoMdCheckmark as CheckMarkIcon } from "react-icons/io";
import VolunteerButton from "@/components/vi/big-buttons/VolunteerButton";

function Registration() {
  return (
    <div className="justify-center flex-col-reverse lg:flex-row mt-16 flex gap-10 lg:gap-24 items-center">
      <div className="max-w-screen-sm">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Tham gia cuộc hành trình tiếp theo
        </h3>
        <p className="text-muted-foreground mt-4 lg:mt-6">
          Dù bạn là nhà môi trường dày dạn hay mới tham gia tình nguyện, tất cả
          đều được chào đón. Chúng tôi sẽ cung cấp hướng dẫn và hỗ trợ để bạn có
          thể đóng góp một cách an toàn và hiệu quả. Hãy đến kết bạn mới và cùng
          nhau tạo ra sự ảnh hưởng lâu dài!
        </p>
        <div className="mt-8 gap-12 lg:mt-12 flex-col md:flex-row flex mb-16">
          <div className="flex-1 space-y-6">
            <div className="flex gap-3 items-center">
              <CalendarIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">17 tháng 11 năm 2024</p>
            </div>
            <div className="flex gap-3 items-center">
              <LocationIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">Kênh Nước Đen</p>
            </div>
            <div className="flex gap-3 items-center">
              <ClockIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">8:00 sáng - 12:30 chiều</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">Không cần kinh nghiệm</p>
            </div>
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">
                Tất cả dụng cụ đều được cung cấp
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <CheckMarkIcon className="size-6 fill-primary" />
              <p className="text-muted-foreground">
                Nhận chứng nhận và quà tặng nhỏ
              </p>
            </div>
          </div>
        </div>
        <VolunteerButton />
      </div>
      <iframe
        src="https://www.youtube.com/embed/OaxKVKtfeVI?rel=0"
        title="Trình phát video YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="aspect-[9/16] w-full max-w-80 rounded-lg"
      ></iframe>
    </div>
  );
}

export default Registration;
