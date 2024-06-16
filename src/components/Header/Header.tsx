import { Logo, HeaderContainer, Nav, AuthButtons  } from './styles'

export const Header: React.FC = () => (
    <HeaderContainer>
      <Logo>Arun's Job Portal</Logo>
      <Nav>
        <a href="#">Find Jobs</a>
        <a href="#">Career Advice</a>
        <a href="#">Upload CV</a>
        <a href="#">For Employers</a>
      </Nav>
      <AuthButtons>
        <button className="sign-up">Sign up</button>
        <button className="log-in">Log in</button>
      </AuthButtons>
    </HeaderContainer>
  );