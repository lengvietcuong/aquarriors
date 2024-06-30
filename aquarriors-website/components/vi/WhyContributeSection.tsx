import { FaHeartCirclePlus as HealthIcon } from "react-icons/fa6";
import { GiTropicalFish as FishIcon } from "react-icons/gi";
import { RiFlowerFill as FlowerIcon } from "react-icons/ri";

function WhyContributeSection() {
  return (
    <section className="mt-8 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-0 -z-10 h-1/3 w-[200%] lg:h-full lg:w-[100%] bg-[radial-gradient(farthest-side,rgba(56,189,248,0.5),rgba(59,130,246,0.15),rgba(0,0,0,0))] block"></div>
      <div className="p-section">
        <h2 className="mt-8 font-bold text-center text-3xl md:text-4xl lg:text-5xl">
          Nhưng bạn có thể giúp <span className="text-primary">giải cứu TP.HCM</span>
        </h2>
        <p className="mt-2 text-center text-lg text-muted-foreground md:mt-4 md:text-xl lg:text-2xl">
          Tham gia cùng chúng tôi làm sạch sông hồ ở Thành phố Hồ Chí Minh và bạn có thể:
        </p>
        <div className="flex flex-col justify-center lg:flex-row gap-8 mt-10 md:mt-12 lg:mt-16">
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <HealthIcon className="size-12 fill-primary md:size-16 flex-shrink-0" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Cải thiện sức khỏe cộng đồng
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Nước sạch là cần thiết để ngăn ngừa bệnh tật và duy trì sức khỏe tổng thể.
            </p>
          </div>
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <FishIcon className="size-12 fill-primary md:size-16 flex-shrink-0" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Bảo vệ sinh vật thủy sinh
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Bảo vệ hệ sinh thái thủy sinh là cần thiết cho đa dạng sinh học và nguồn thực phẩm của chúng ta.
            </p>
          </div>
          <div className="border rounded-lg p-8 lg:p-10 flex-1 max-w-lg mx-auto">
            <div className="flex items-center gap-4">
              <FlowerIcon className="size-12 fill-primary md:size-16 flex-shrink-0" />
              <h3 className="font-bold text-xl lg:text-2xl">
                Bảo tồn vẻ đẹp
              </h3>
            </div>
            <p className="text-muted-foreground mt-8">
              Làm sạch các vùng nước hồi sinh vẻ đẹp tự nhiên của chúng để mọi người thưởng thức, bao gồm cả các thế hệ tương lai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyContributeSection;
