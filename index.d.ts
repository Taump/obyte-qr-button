declare module 'obyte-qr-button' {

  import React from 'react';
  import { ButtonProps } from 'antd/lib/Button';

  interface IConfig {
    title?: any;
    appStoreUrl?: string;
    googlePlayUrl?: string;
    downloadTitle?: any;
    tooltip?: string;
    tooltipMobile?: string;
    install?: string;
    obyteIn?: string;
  }

  interface IQRButton extends ButtonProps {
    href: string;
    config?: IConfig;
  }

  const QRButton: React.SFC<IQRButton>

  export default QRButton

}
