import { FC } from 'react';
import LogoAlpes from "../../assets/logo/logo-alpes.png";
import './Footer.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className="Footer" data-testid="Footer">
    <div className="container">
      <p className="paragrafo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elementum
        orci, vitae commodo nibh. In vitae convallis nisl. Morbi rhoncus mattis
        purus sed commodo. Integer rhoncus ex risus. Proin efficitur elit nunc,
        ut pulvinar massa egestas in. Fusce quis quam viverra, pretium quam ac,
        consectetur lectus.
      </p>
      <hr className="hr" />
      <p className="copyright">
        © Copyright © 2021 Lorem ipsum dolor sit amet.
      </p>
      <div className="rodape">
        <p className="alpes">
          Feito por: <img src={LogoAlpes} alt="logo alpes one" />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
