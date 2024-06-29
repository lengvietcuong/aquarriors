import Introduction from "./Introduction";
import Registration from "./Registration";
import Agenda from "./Agenda";

function VolunteerSection() {
  return (
    <section className="relative overflow-hidden mt-8">
      <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-0 -z-10 h-72 w-[125%] lg:w-full lg:h-[480px] bg-[radial-gradient(farthest-side,rgba(56,189,248,0.5),rgba(59,130,246,0.15),rgba(0,0,0,0))]"></div>
      <div className="p-section">
        <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Tình nguyện và <span className="text-primary">trở thành một chiến binh</span>
        </h2>
        <Introduction />
        <Registration />
        <Agenda />
      </div>
    </section>
  );
}

export default VolunteerSection;
