import { Header, LogoDiv } from "./styled";
import NavbarStyle from "../Navbar";

export default function HeaderStyle() {
  return (
    <Header>
      <LogoDiv>
        <span className="header-main">Weather.Filter( )</span>
      </LogoDiv>
      <NavbarStyle/>
    </Header>
  );
}
