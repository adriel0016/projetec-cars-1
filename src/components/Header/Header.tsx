import { FC } from 'react';
import './Header.scss';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import {isMobile, isTablet} from 'react-device-detect';

interface HeaderProps {
  handleOpenModal: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpenModal }) => {
  return (
    <header className="Header" data-testid="Header">
      {window?.innerWidth < 1024 ? (
        <HeaderMobile handleOpenModal={handleOpenModal} />
      ) : (
        <HeaderDesktop />
      )}
    </header>
  );
}

export default Header;
