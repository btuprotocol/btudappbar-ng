import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'btu-dappbar',
  template: `
    <span></span>
  `,
  styles: []
})
export class BtuDappbarComponent implements OnInit, OnChanges {
  @Input() restrictDomain: string;
  addresseBTU: string
  defaultAddr: string
  connected: boolean

  constructor() {
    this.defaultAddr = "0xd00551b9d6CB3C4dDfc36df874c642b19D2b9e22"
    this.connected = false
    sessionStorage.setItem("BTU-walletConnected", "false")
    sessionStorage.setItem("BTU-walletAddr", "")
  }

  getStatus() {
    return this.addresseBTU;
  }

  onInputWallet(addresse) { 
    if (addresse) {
      sessionStorage.setItem('BTU-walletAddr', addresse)
      sessionStorage.setItem("BTU-walletConnected", "true")
      this.connected = true;
      this.addresseBTU = addresse;
      console.log("Addresse changed")
    }
  }

  @Input() restric: string;
  ngOnInit() {
    const jquery = document.createElement("script")
    const web3js = document.createElement("script")
    const restrictDomain = this.restrictDomain

    jquery.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    jquery.async = true
    
    web3js.src = "https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js"
    web3js.async = true

    document.body.appendChild(jquery)
    document.body.appendChild(web3js)

    const onAccountGet = (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.onInputWallet(res[0])
      }
    }

    if (restrictDomain === undefined
      || (typeof restrictDomain == "string" && restrictDomain === window.location.hostname)
      || (Array.isArray(restrictDomain) && restrictDomain.includes(window.location.hostname))) {  
        window.addEventListener('load', async () => {
          // @ts-ignore
          if (window.ethereum) {
            // @ts-ignore
            const ethereum = window.ethereum
            // @ts-ignore
            window.web3 = new Web3(ethereum);
            try {
                await ethereum.enable()
                // @ts-ignore
                window.web3.eth.getAccounts(onAccountGet)
            } catch (error) {
              console.log("Error")
            }
            // @ts-ignore
          } else if (window.web3) {
              // @ts-ignore
              window.web3 = new Web3(window.web3.currentProvider);
              // @ts-ignore
              window.web3.eth.getAccounts(onAccountGet)
          } else {
              console.log("Non ethereum browser detected");
          }
        })
      }
  }

  findGetParameter (parameterName) {
    var result = null, tmp = []
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
  }

  ngOnChanges() {
    const restrictDomain = this.restrictDomain
    const addresseBTU = sessionStorage.getItem('BTU-walletAddr');

    if (restrictDomain !== undefined
      && (typeof restrictDomain == "string" && restrictDomain !== window.location.hostname
      || (Array.isArray(restrictDomain) && !restrictDomain.includes(window.location.hostname)))) {
        const walletAddr = this.findGetParameter("w")
        const pattern = new RegExp('^0[xX][0-9A-Fa-f]{40}$')
        if (walletAddr !== null && pattern.test(walletAddr) && addresseBTU !== walletAddr)
          this.onInputWallet(walletAddr)
        else if (walletAddr === null || !pattern.test(walletAddr))
          sessionStorage.setItem('BTU-walletAddr', this.defaultAddr)
        return null
    }
  }

}
