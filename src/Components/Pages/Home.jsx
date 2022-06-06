import React from 'react'
import Banner from '../Banner'
import FooterL from '../FooterL'
import FootStats from '../FootStats'
import SellNFT from '../SellNFT'
import { useState } from 'react'



const Home = ({nftData, isAuthenticated, chooseNFT, setChooseNFT, Stat, setStat, setValues}) => {
  // const[_type, setType] = useState("");
  // const _receiver = '0xCd9B2DAc2e8cB8fDF9eeF56855eeEeC6BCa3A925';
  // const[_naddress, setNaddress] = useState("");
  // const[contract, setContract] = useState("");
  // const[token_id, setToken_id] = useState()
 
  return (
    <div>
      <Banner  />
      <SellNFT chooseNFT={chooseNFT} isAuthenticated={isAuthenticated} setChooseNFT={setChooseNFT} nftData={nftData} Stat={Stat} setStat={setStat} setValues={setValues} />
      <FootStats />
      <FooterL  />
    </div>
  )
}

export default Home;



