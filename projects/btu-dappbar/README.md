# BtuDappbar

## Install

```
npm install btu-dappbar --save
```

## Usage

The BTU.js DappBar is a component that can easily integrated on any Angular webpage, used for detecting web3 enabled browser embeded crypto wallets (works with plugins like metamask and mobile dapp browsers) and making the users wallet address accessible to the webpage.
You can configure a whitelist of domains where the app bar will be displayed, outside of this list the component will handle the wallet address by reading it from a GET parameter called 'w'. (test.com/?w=0xAB...22)

Start by importing the component and specifying it in your 

```javascript
import { BtuDappbarComponent } from 'btu-dappbar';

@NgModule({
  declarations: [
    AppComponent,
    BtuDappbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

```html
<!-- App is always displayed if no whitelist specified -->
<btu-dappbar></btu-dappbar>
<!-- or -->
<btu-dappbar restricDomain="test.com"></btu-dappbar>
<!-- or (with domains as an array of strings) -->
<btu-dappbar [restricDomain]="domains"></btu-dappbar>
```

Once connected, the wallet address is accesible from the sessionStorage this way:

```javascript
const wallet = sessionStorage.getItem('BTU-walletAddr');
```

You can verify if the user has connected his wallet by fetching the following boolean in the sessionStorage:

```javascript
const wallet = sessionStorage.getItem('BTU-walletConnected');
```