declare const ButtonTypes: ["default", "primary", "ghost", "dashed", "link", "text"];
declare type ButtonType = typeof ButtonTypes[number];
declare type SizeType = 'small' | 'middle' | 'large' | undefined;
declare module 'obyte-qr-button' {

  import React from 'react';

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

  interface ButtonProps {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    type: ButtonType;
    size?: SizeType;
    loading?: boolean;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
    autoFocus?: boolean | undefined;
    disabled?: boolean | undefined;
    name?: string | undefined;
  }

  interface IQRButton extends ButtonProps {
    href: string;
    config?: IConfig;
  }

  const QRButton: React.SFC<IQRButton>

  export default QRButton

}
