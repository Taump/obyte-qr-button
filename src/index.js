import React, { useState } from "react";
import { QrcodeOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip, Typography } from "antd";
import QRCode from "qrcode.react";
import PropTypes from 'prop-types';
import reactStringReplace from "react-string-replace";

import { AppStoreIcon } from "./AppStoreIcon";
import { PlayMarketIcon } from "./PlayMarketIcon";

const { Text } = Typography;

const AppStoreUrl = "https://itunes.apple.com/us/app/byteball/id1147137332?ls=1&mt=8";
const PlayMarketUrl = "https://play.google.com/store/apps/details?id=org.byteball.wallet";

const QRButton = React.forwardRef(({ href, children, onClick, config, ...props }, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [downloadModalType, setDownloadModalType] = useState(false);

  const Install = reactStringReplace(config.install || "Install Obyte wallet for [ios] or [android] if you don't have one yet", /\[(\w+)\]/g, (match, index) => {
    if (match === "ios") return <Button key={"ios" + index} style={{ padding: 0, lineHeight: "auto" }} size="small" type="link" onClick={() => setDownloadModalType("ios")}>iOS</Button>
    if (match === "android") return <Button key={"android" + index} size="small" style={{ padding: 0, lineHeight: "auto" }} type="link" onClick={() => setDownloadModalType("android")}>Android</Button>
  });

  return (<React.Fragment>
    <Button.Group>
      <Tooltip title={config.tooltipMobile || "Send the transaction from your mobile phone"}>
        <Button icon={<QrcodeOutlined />} {...props} onClick={(ev) => { setModalVisible(true); onClick && onClick(ev); }} />
      </Tooltip>
      <Tooltip title={config.tooltip || "This will open your Obyte wallet installed on this computer and send the transaction"}>
        <Button href={href} onClick={onClick && onClick} {...props} ref={ref}>{children}</Button>
      </Tooltip>
    </Button.Group>
    <Modal
      width={340}
      footer={null}
      visible={isModalVisible} onCancel={() => setModalVisible(false)}
    >
      <div style={{ textAlign: "center" }}>
        <h2>{config.title || <span>Scan this QR code <br /> with your mobile phone</span>}</h2>
        <a href={href}>
          <QRCode size={240} renderAs="svg" value={href} />
        </a>
        <div style={{ marginTop: 25 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            {Install}
          </Text>
        </div>
      </div>
      <Modal
        visible={!!downloadModalType}
        onCancel={() => setDownloadModalType(false)}
        width={340}
        footer={null}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{config.downloadTitle || "Download Obyte wallet"}</h2>
          <QRCode size={240} renderAs="svg" value={downloadModalType === "ios" ? AppStoreUrl : PlayMarketUrl} />
          <div style={{ display: "inline-flex", alignItems: "center", marginTop: 25 }}>
            <span>{config.obyteIn || "Obyte in"}</span> <a target="_blank" style={{ display: "inline-flex", alignItems: "center" }} rel="noopener" href={downloadModalType === "ios" ? AppStoreUrl : PlayMarketUrl}>
              {downloadModalType === "ios" ? <React.Fragment><AppStoreIcon /> Apple App Store</ React.Fragment> : <React.Fragment><PlayMarketIcon /> Google Play</React.Fragment>}</a>
          </div>
        </div>
      </Modal>
    </Modal>
  </React.Fragment>)
})

QRButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  config: PropTypes.shape({
    title: PropTypes.node,
    appStoreUrl: PropTypes.string,
    googlePlayUrl: PropTypes.string,
    downloadTitle: PropTypes.node,
    tooltip: PropTypes.string,
    tooltipMobile: PropTypes.string,
    install: PropTypes.string,
    obyteIn: PropTypes.string,
  }),
};

export default QRButton;