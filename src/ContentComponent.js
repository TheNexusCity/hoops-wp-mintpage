import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers';
import { CONTRACT } from "./config";
import React, { useEffect, useState } from "react"

const ContentComponent = () => {
  const { activate, deactivate, library, account } = useWeb3React()
  const [quantity, setQuantity] = useState(1)
  const [connectedFlag, setConnectedWalletFlag] = useState(null)
  const [mintPrice, setMintPrice] = useState(0.0824)
  const [isMintOpen, SetMintOpenFlag] = useState(true)
  const [totalSupply, setTotalSupply] = useState(0)
  const injected = new InjectedConnector({
    supportedChainIds: [1],
  })
  const increase = () => {
    let number = quantity + 1
    if (quantity < 25) setQuantity(number)
  }
  const decrease = () => {
    let number = quantity - 1
    if (quantity > 1) setQuantity(number)
  }
  const mintNFT = async () => {


    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    const contract = new ethers.Contract(CONTRACT.address, CONTRACT.abi, signer);

    const price = ethers.utils.parseUnits((quantity * mintPrice).toString(), 'ether')

    try {
      const ans = await contract.mint(quantity, {
        value: price
      });
      alert("Transaction successful.");
    } catch (error) {
      console.log("error", error)
      if (error.toString().search("insufficient funds") !== -1) alert("Insufficient funds.")
      else alert("transaction failed");
    }
    return false;
  };

  const connectwallet = async () => {
    try {
      await activate(injected)

    } catch (ex) {
      console.log(ex)
    }
  }
  useEffect(() => {
  (async () => {
    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    const contract = new ethers.Contract(CONTRACT.address, CONTRACT.abi, signer);

    
    const tokenPrice = await contract.getMintPrice();
    const mintOpen = await contract.isMintOpen();
    if(mintOpen){

      const supply = await contract.totalSupply();
      
      setTotalSupply(supply.toNumber());
    }
    setConnectedWalletFlag(account == undefined ? null : account)
    SetMintOpenFlag(mintOpen);
    setMintPrice(parseFloat(tokenPrice / Math.pow(10, 18)));
  })()
  }, [account])

  return (
    <React.Fragment>
      <div id="mintsection">
        <div id="centerdiv">
        {
          !isMintOpen ? <div id="countdiv">Mint is currently closed</div>
                     : 
                     <div>
                        { 
                          connectedFlag == null ? <button id="connectwalletbtn" onClick={connectwallet}>connect</button>
                                         :
                          <div>
                            <div id="countdiv">
                              { totalSupply &&
                                <span id="tokennumber">{totalSupply} / 10000 Minted </span>
                              }
                            </div>
                            <div id="countdiv">
                              Mint your hoops now.
                            </div>
                            <div id="countdiv">
                              <div id="selectcount" onClick={decrease}>-</div>
                              <div id="tokencount">{quantity}</div>
                              <div id="selectcount" onClick={increase}>+</div>
                            </div>
                            <button id="mintbtn" onClick={mintNFT}>Mint</button>
                          </div>
                        }
                    </div>
        }
        </div>
        </div>
        
    </React.Fragment>
  )
}
export default ContentComponent
