import style from "./footer.module.css";
import LogoAlpes from "../../assets/logo/logo-alpes.png";

export function Footer() {
  return (
    <footer className={style.container}>
      <p className={style.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a elementum
        orci, vitae commodo nibh. In vitae convallis nisl. Morbi rhoncus mattis
        purus sed commodo. Integer rhoncus ex risus. Proin efficitur elit nunc,
        ut pulvinar massa egestas in. Fusce quis quam viverra, pretium quam ac,
        consectetur lectus.
      </p>
      <hr className={style.hr} />
      <p className={style.copyright}>
        © Copyright © 2021 Lorem ipsum dolor sit amet.
      </p>
      <div className={style.rodape}>
        <p className={style.alpes}>
          Feito por: <img src={LogoAlpes} alt="logo alpes one" />
        </p>
      </div>
    </footer>
  );
}
