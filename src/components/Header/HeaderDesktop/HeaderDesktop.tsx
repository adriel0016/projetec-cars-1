import React, { FC } from 'react';
import './HeaderDesktop.scss';

interface HeaderDesktopProps {}

const HeaderDesktop: FC<HeaderDesktopProps> = () => (
  <div className="HeaderDesktop" data-testid="HeaderDesktop">
    HeaderDesktop Component
  </div>
);

export default HeaderDesktop;
