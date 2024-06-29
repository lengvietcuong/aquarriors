"use client";

import useSidebarStore from "@/stores/sidebarStore";

function NavList() {
  const setIsSidebarOpen = useSidebarStore((state) => state.setIsSidebarOpen);

  const scrollTo = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  return (
    <nav>
      <ul className="space-y-6 lg:flex lg:items-center lg:gap-12 lg:space-y-0">
        <li className="text-lg font-medium hover:text-primary lg:transition-colors">
          <a
            className="cursor-pointer"
            onClick={(e) => scrollTo(e, "sponsors")}
          >
            Tài trợ
          </a>
        </li>
        <li className="text-lg font-medium hover:text-primary lg:transition-colors">
          <a
            className="cursor-pointer"
            onClick={(e) => scrollTo(e, "share")}
          >
            Chia sẻ
          </a>
        </li>
        <li className="text-lg font-medium hover:text-primary lg:transition-colors">
          <a className="cursor-pointer" onClick={(e) => scrollTo(e, "game")}>
            Trò chơi
          </a>
        </li>
        <li className="text-lg font-medium hover:text-primary lg:transition-colors">
          <a className="cursor-pointer" onClick={(e) => scrollTo(e, "faq")}>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
