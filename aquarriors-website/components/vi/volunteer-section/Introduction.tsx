import Image from "next/image";
import volunteers from "@/public/volunteers.jpg";

function Introduction() {
  return (
    <div className="items-center lg:items-start md:mt-8 mt-6 lg:mt-16 flex-col lg:flex-row flex justify-center gap-8 md:gap-10 lg:gap-12">
      <div className="max-w-screen-sm">
        <Image
          src={volunteers}
          alt="Tình nguyện viên"
          className="rounded-lg"
        />
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Nhóm tình nguyện viên (Nguồn:{" "}
          <a
            href="https://saigonxanh.org/#/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Sài Gòn Xanh
          </a>
          )
        </p>
      </div>
      <div className="max-w-screen-sm lg:max-w-lg">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Chiến đấu cạnh 1000+ siêu anh hùng
        </h3>
        <p className="text-muted-foreground mt-4 lg:mt-6">
          Tham gia một cộng đồng đam mê, tận tâm cải thiện các tuyến đường thủy của chúng ta.
          Cùng nhau, chúng ta có thể chấm dứt ô nhiễm nước một lần và mãi mãi.
        </p>
        <div className="mt-8 lg:mt-16 flex">
          <div className="flex-1">
            <p className="font-bold font-heading text-xl md:text-2xl text-primary lg:text-3xl">50+ địa điểm</p>
            <p className="text-muted-foreground">đã được làm sạch</p>
          </div>
          <div className="flex-1">
            <p className="font-bold font-heading text-xl md:text-2xl text-primary lg:text-3xl">25,000+ kg</p>
            <p className="text-muted-foreground">rác đã được dọn dẹp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
