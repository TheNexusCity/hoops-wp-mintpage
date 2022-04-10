import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers';
import { CONTRACT } from "./config";
import React, { useState } from "react"

const ContentComponent = () => {
  const { activate, deactivate, library, account } = useWeb3React()
  const [quantity, setQuantity] = useState(1)
  const injected = new InjectedConnector({
    supportedChainIds: [1, 5],
  })
  const increase = () => {
    let number = quantity + 1
    if(quantity < 25) setQuantity(number)
  }
  const decrease = () => {
    let number = quantity - 1
    if(quantity > 1) setQuantity(number)
  }
  const mintNFT = async () => {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }

    const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
    const contract = new ethers.Contract(CONTRACT.address, CONTRACT.abi, signer);

    const price = ethers.utils.parseUnits((quantity * .0824).toString(), 'ether')

    try {
      const ans = await contract.mint(quantity, {
        value: price
      });
      alert("Transaction successful.");
    } catch (error) {
      console.log("error",error)
      if(error.toString().search("insufficient funds") !== -1) alert("Insufficient funds.")
      else alert("transaction failed");
    }
    return false;
  };

  return (
    <React.Fragment>
      <div id="headersection">
            <div id="countdiv">
            <p id="selectcount" onClick={decrease}>  - </p>
              <div id="tokencount">{quantity}</div>
                <p id="selectcount" onClick={increase}>+</p>
            </div>
              <button id="mintbtn" onClick={mintNFT}>Mint</button>
      </div>
    </React.Fragment>
  )
}
export default ContentComponent
