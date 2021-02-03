# Obyte QR Button

## Install
``npm i obyte-qr-button``

## Use
``import QRButton from "obyte-qr-button"``

## Required packages:
 - react
 - react-dom
 - antd (with import styles)
 - @ant-design/icons
 
## Example

```js 
import QRButton from "obyte-qr-button" 

const config = {
  title: <span>Scan this QR code <br /> with your mobile phone</span>,
  downloadTitle: "Download Obyte wallet",
  tooltip: "This will open your Obyte wallet installed on this computer and send the transaction",
  tooltipMobile: "Send the transaction from your mobile phone",
  install: "Install Obyte wallet for [ios] or [android] if you don't have one yet",
  obyteIn: "Obyte in"
}

export const App = () => {
    return <QRButton href="..." config={config} onClick={()=>{console.log("click!")}}>Send</QRButton>
}
```
* config props is not required