import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQSection() {
  return (
    <section id="faq" className="p-section">
      <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">
        Câu hỏi thường gặp
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mx-auto mt-8 max-w-screen-sm"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Người ta cứ tiếp tục gây ô nhiễm thì sao?
          </AccordionTrigger>
          <AccordionContent>
            Chúng tôi đang hợp tác với các cơ quan chức năng địa phương để áp dụng các quy định nghiêm ngặt hơn nhằm ngăn chặn ô nhiễm trong tương lai. Chúng tôi cũng tin rằng những nỗ lực của chúng tôi sẽ nâng cao nhận thức và truyền cảm hứng cho mọi người trở thành công dân có trách nhiệm.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Rác được thu gom sẽ được xử lý như thế nào?
          </AccordionTrigger>
          <AccordionContent>
            Rác được thu gom sẽ được phân loại, với các vật liệu có thể tái chế được gửi đến cơ sở tái chế và các vật liệu không thể tái chế được xử lý một cách có trách nhiệm.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Khoản quyên góp của tôi có đi đến tình nguyện viên?
          </AccordionTrigger>
          <AccordionContent>
            Không, các chiến dịch tình nguyện được tài trợ bởi các nhà tài trợ của chúng tôi. Khoản đóng góp của bạn sẽ được chuyển đến các đối tác của chúng tôi (các tổ chức môi trường) để tiến hành các chiến dịch dọn dẹp quy mô lớn.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Khoản đóng góp của tôi có loại bỏ số lượng rác chính xác như đã hứa không?
          </AccordionTrigger>
          <AccordionContent>
            Các tổ chức môi trường mà chúng tôi hợp tác cam kết ít nhất là sẽ loại bỏ số lượng rác đã hứa (họ có thể thu gom nhiều hơn, nhưng không ít hơn).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Quà tặng nhỏ dành cho tình nguyện viên là gì?
          </AccordionTrigger>
          <AccordionContent>
            Đó là các vật phẩm mà các nhà tài trợ của chúng tôi đã tặng, bao gồm bút, sổ tay, thẻ quà tặng và nhiều hơn nữa.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FAQSection;
