import Image from "next/image";
import poisonousWater from "@/public/poisonous-water.jpg";
import helplessFish from "@/public/helpless-fish.jpg";
import cryingRiver from "@/public/crying-river.jpg";

function ProblemsSection() {
  return (
    <section className="p-section">
      <h2 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        Thực tế <span className="text-destructive">đau lòng</span>
      </h2>
      <div className="mt-10 md:mt-12 lg:mt-16 flex flex-col items-center lg:flex-row gap-8">
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Đe doạ <span className="text-destructive">sức khoẻ</span>
          </h3>
          <Image
            className="rounded-lg"
            src={poisonousWater}
            alt="Poisonous water"
          />
          <p className="text-muted-foreground text-xs mt-2">
            Hình ảnh AI tạo bởi{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Hóa chất và vi khuẩn có hại có thể xâm nhập vào nước chúng ta uống,
            nấu ăn và sử dụng cho vệ sinh, gây ra các bệnh nghiêm trọng (bao gồm
            cả ung thư).
          </p>
        </div>
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Cá <span className="text-destructive">chết hàng loạt</span>
          </h3>
          <Image
            className="rounded-lg"
            src={helplessFish}
            alt="Helpless fish"
          />
          <p className="text-muted-foreground text-xs mt-2">
            Hình ảnh AI tạo bởi{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Hóa chất, nhựa và kim loại nặng làm ô nhiễm đời sống thủy sinh, dẫn
            đến hải sản bị nhiễm độc, đột biến gen và thậm chí là sự tuyệt chủng
            hàng loạt.
          </p>
        </div>
        <div className="overflow-hidden relative p-8 rounded-lg flex flex-col items-center border max-w-lg">
          <div className="absolute top-0 -translate-y-1/2 block left-1/2 -translate-x-1/2 bg-[radial-gradient(farthest-side,rgba(202,46,46,0.3),rgba(0,0,0,0))] w-full h-1/2 -z-10"></div>
          <h3 className="font-bold mb-4 text-2xl lg:text-3xl">
            Vẻ đẹp <span className="text-destructive">phai mờ</span>
          </h3>
          <Image className="rounded-lg" src={cryingRiver} alt="Crying river" />
          <p className="text-muted-foreground text-xs mt-2">
            Hình ảnh AI tạo bởi{" "}
            <a
              href="https://firefly.adobe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Adobe Firefly
            </a>
          </p>
          <p className="text-muted-foreground mt-4">
            Những con sông và hồ đẹp đẽ đã trở thành nỗi đau mắt. Các vùng nước
            có mùi hôi và đầy rác thải đã trở thành cảnh tượng phổ biến đối với
            nhiều người.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
