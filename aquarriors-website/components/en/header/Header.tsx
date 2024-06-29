import HeaderWrapper from "./HeaderWrapper";
import LogoWithText from "./LogoWithText";
import NavBar from "./NavBar";
import NavCTAButtons from "./NavCTAButtons";
import NavList from "./NavList";
import LanguageToggler from "./LanguageToggler";

function Header() {
  return (
    <HeaderWrapper>
      <LogoWithText />
      <NavBar>
        <LanguageToggler />
        <NavCTAButtons />
        <NavList />
      </NavBar>
    </HeaderWrapper>
  );
}

export default Header;
