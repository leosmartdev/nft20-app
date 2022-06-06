
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import {useMoralis, useMoralisWeb3ApiCall, useMoralisWeb3Api, MoralisProvider } from "react-moralis";
import Assets from "./Components/Pages/NftData";
import Home from "./Components/Pages/Home";
import SellNFT from "./Components/SellNFT";
import SideNav from "./Components/SideNav";
import Faq from "./Components/Faq";
import Polygon from "./Components/Pages/Polygon";
import Farm from "./Components/Pages/Farm";
import './App.css';
function App() {
  const [chooseNFT, setChooseNFT] =useState();
  const [nftData, setNftData] = useState();
  const [refresh, setRefresh] = useState(false);


  const [click, setClick] = useState(false)

  const handleClick = () => {
      setClick(!click)
  }
  

  const {
    authenticate,
    isWeb3Enabled,
    isAuthenticated,
    user,
    enableWeb3,
    Moralis,
    logout
  } = useMoralis();


  useEffect(() => {
    if (!isWeb3Enabled) {
        enableWeb3();
    }}, [isWeb3Enabled]);


  // ----- Authenticate in Metamask---------
 
  // const [ETH1, setETH1] = useState(false);
  // const [ETH2, setETH2] = useState(false);
  // const [NFT1, setNFT1] = useState("");
  // const [NFT2, setNFT2] = useState("");
  const [Stat, setStat] = useState([0, {}, 0, {}]);
  const [address, setAddress] = useState();
  const [values, setValues] = useState("ropsten");
  const Web3Api = useMoralisWeb3Api();

  const fetchNFTs = async () => {
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "ropsten",
    });
    console.log("testnet NFTs: ", testnetNFTs);
    setNftData(testnetNFTs);
  };
  

  // NFT API CALL
  // const { fetch: nftFetch, data: nftData } = useMoralisWeb3ApiCall(
  //   Web3Api.Web3API.account.getNFTs,
  //   {
  //     chain: values,
  //   }
  // );
  
  useEffect(() => { 
      if (user) {
        // fetch({ chain: values });
        // nftFetch();
        fetchNFTs();
        setAddress(user.attributes.ethAddress);
      }
    },  [
    user,
    values,
  ]);
  
 
  return (
    <BrowserRouter>

    <div className="">
       <Nav authenticate={authenticate} logout={logout} click={click} handleClick={handleClick} setClick={setClick} user={user} isAuthenticated={isAuthenticated} setRefresh={setRefresh}/>
       <SideNav authenticate={authenticate} click={click} handleClick={handleClick} setClick={setClick} user={user} isAuthenticated={isAuthenticated} />
       <Routes>

        <Route path="/" exact element={<Home isAuthenticated={isAuthenticated}   nftData={nftData} chooseNFT={chooseNFT} setChooseNFT={setChooseNFT} Stat={Stat} setStat={setStat} setValues={setValues} />} />
        {/* <Route path="/swap" exact element={<Home isAuthenticated={isAuthenticated}   nftData={nftData} chooseNFT={chooseNFT} setChooseNFT={setChooseNFT} Stat={Stat} setStat={setStat}/>} /> */}
        <Route path="/swap" exact element={<SellNFT chooseNFT={chooseNFT} isAuthenticated={isAuthenticated} setChooseNFT={setChooseNFT} nftData={nftData} Stat={Stat} setStat={setStat} setValues={setValues} />} />
        <Route path="/assets" exact element={<Assets nftData={nftData}/>} />
        <Route path="/polygon" exact element={<Polygon isAuthenticated={isAuthenticated} nftData={nftData} setValues={setValues} Stat={Stat} setStat={setStat} />} />
        <Route path="/faq" exact element={<Faq  />} />
        <Route path="/farm" exact element={<Farm />} />
      </Routes>
      
      
      
      </div>
    </BrowserRouter>
    
     
   
  );
}

export default App;
