import React from "react";
import { useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { useWeb3Transfer } from "react-moralis";
import { Link } from "react-router-dom";
import Transfer from "./TransferBtn";
import NFTModal from "./Modal/NFTModal";
import PoolModal from "./Modal/PoolModal";

const SellNFT = ({ nftData, setChooseNFT, chooseNFT, isAuthenticated, Stat, setStat, setValues }) => {

  const [show, setShow] = useState(false);
  const [comboNo, setComboNo] = useState(0);
  const [curNFT, setCurNFT] = useState({});
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  setValues("eth");

  const handleShowCombo = (cn) =>  {
    handleShow();
    setComboNo(cn);
  }
  
  const [itemShow, setItemShow] = useState(false);
  const itemHandleShow = () => setItemShow(true);
  const itemHandleHide = () => setItemShow(false);
  const firstETHClick = () => {
    if (Object.keys(Stat[3]).length && Stat[3].value != 0) {
      setStat([Stat[3].value, {}, Stat[2], Stat[3]]);
    } else {
      setStat([-1, {}, Stat[2], Stat[3]]);
    }
  }

  const secondETHClick = () => {
    if (Object.keys(Stat[1]).length) {
      setStat([Stat[0], Stat[1], Stat[1].value, {}]);
    } else {
      setStat([Stat[0], Stat[1], -1, {}]);
    }
  }

  const [poolAddr, setPoolAddr] = useState("");

  const g_selectPool = (project) => {
    setCurNFT(project);
    handleHide();
    setPoolAddr(project.address);
    itemHandleShow();
  };

  const showPoolModal = () => {
    itemHandleHide();
    handleShow();
  }

  const updateNFTs = (NFTs) => {
    let len = Object.keys(NFTs).length;
    let tmp = {};
    tmp['nfts'] = NFTs;
    tmp['addr'] = poolAddr;
    if (len == 1) {
      tmp['value'] = curNFT.nft_eth_price;
    } else if(len > 1) {
      tmp['value'] = curNFT.nft_eth_price * 1.1 * len;
    }
    if (len > 0) {
      if (comboNo == 1) {
        setStat([0, tmp, Stat[2], Stat[3]]);
      } else if (comboNo == 2) {
        setStat([Stat[0], Stat[1], 0, tmp]);
      }
    }
    console.log("stat: ", Stat);
  }

  const presentFunc = () => {
    if (Stat[0]) {
      if (Object.keys(Stat[3]).length) {
        return (<span>{Math.round(Stat[3].value*100000)/100000}</span>);
      } else {
        // return (<span className="text-xs font-semibold text-red-900"> Pick an NFT below to calculate price </span>);
        return (<span></span>);
      }
    } else {
      return (<span>{Object.keys(Stat[1].nfts).length}</span>)
    }
  }
  const presentFunc2 = () => {
    if (Stat[0]) return 'ETH';
    return 'NFTs';
  }
  const presentFunc3 = () => {
    if (Stat[2]) {
      if (Object.keys(Stat[1]).length) {
        return (<span>{Math.round(Stat[1].value*100000)/100000}</span>);
      } else {
        return (<span>  </span>);
      }
    } else {
      return (<span>{Object.keys(Stat[3].nfts).length}</span>)
    }
  }
  const presentFunc4 = () => {
    if (Stat[2]) return 'ETH';
    return 'NFTs';
  }

  return (
    <div className="lg:h-[90vh] w-4/5 lg:w-1/4 m-auto items-center justify-center">
      <h2 className="mt-2 mb-6 text-white text-2xl flex items-center justify-center ">
        <span>Buy &amp; Sell Your NFTs with 1-click</span>
        <span className="ml-2 text-4xl">👇</span>
      </h2>

      <div className=" text-xl font-light w-full    flex flex-col space-y-6  text-gray-900 bg-[rgba(222,218,210,1)] py-8 px-8 rounded-3xl tracking-normal  text-left">
        <div>
          <span className="uppercase text-lg font-normal">
            <span>You deposit </span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {/* <button style={{fontWeight: "300"}} onClick={handleShow}> */}
            <div className={`  cursor-pointer  hover:bg-gray-900 hover:bg-opacity-25 px-4   py-2 rounded-md flex ${Object.keys(Stat[1]).length ? 'bg-secondary' : ''}`} onClick={() => handleShowCombo(1)}>
              <div>NFT</div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.814 6.907" enableBackground="new 0 0 12.814 6.907" className="w-2 md:w-3 ml-2 md:ml-4"><path fill="#231F20" d="M0.146,0.854c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L5.907,5.2l0.499,0.464l0.5-0.464 l5.055-5.054c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L6.762,6.761C6.715,6.807,6.658,6.844,6.598,6.868 C6.537,6.894,6.473,6.907,6.406,6.907c-0.064,0-0.129-0.014-0.189-0.039C6.154,6.844,6.1,6.807,6.053,6.761L0.146,0.854"></path></svg>
            </div>
            {/* </button> */}
            <div className={` cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 px-4 py-2 rounded-md  ${Stat[0] ? 'bg-secondary' : ''}`} onClick={firstETHClick}>
              {" "}
              ETH{" "}
            </div>
          </div>
          <div className="flex space-x-4 items-end">
            <span className="text-45px">
              <div>
                {Stat[0] || Object.keys(Stat[1]).length ? presentFunc(): (<span></span>)}
              </div>
            </span>
            <div>
            {Stat[0] || Object.keys(Stat[1]).length ? presentFunc2(): ''}
            </div>
          </div>
        </div>
      </div>
      <div className="exchange-icon flex pt-8 pb-8 justify-center items-center text-white">
        <BsArrowDownUp size={48} />
      </div>

      <div className=" text-xl font-light w-full    flex flex-col space-y-6  text-gray-900 bg-[rgba(222,218,210,1)] py-8 px-8 rounded-3xl tracking-normal  text-left">
        <div>
          <span className="uppercase text-lg font-normal">
            <span>You Receive </span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <div className={`  cursor-pointer  hover:bg-gray-900 hover:bg-opacity-25 px-4   py-2 rounded-md flex ${Object.keys(Stat[3]).length ? 'bg-secondary' : ''}`} onClick={() => handleShowCombo(2)}>
              <div>NFT</div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.814 6.907" enableBackground="new 0 0 12.814 6.907" className="w-2 md:w-3 ml-2 md:ml-4"><path fill="#231F20" d="M0.146,0.854c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0L5.907,5.2l0.499,0.464l0.5-0.464 l5.055-5.054c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L6.762,6.761C6.715,6.807,6.658,6.844,6.598,6.868 C6.537,6.894,6.473,6.907,6.406,6.907c-0.064,0-0.129-0.014-0.189-0.039C6.154,6.844,6.1,6.807,6.053,6.761L0.146,0.854"></path></svg>
            </div>
            <div className={` cursor-pointer hover:bg-gray-900 hover:bg-opacity-25 px-4 py-2 rounded-md  ${Stat[2] ? 'bg-secondary' : ''}`} onClick={secondETHClick}>
              {" "}
              ETH{" "}
            </div>
          </div>
          <div className="flex space-x-4 items-end">
            <span className="text-45px">
              <div>
              {Stat[2] || Object.keys(Stat[3]).length ? presentFunc3(): (<span></span>)}
              </div>
            </span>
            <div>
            {Stat[2] || Object.keys(Stat[3]).length ? presentFunc4(): ''}
            </div>
          </div>
        </div>
      </div>

      <Transfer
        nftData={nftData}
        isAuthenticated={isAuthenticated}
        chooseNFT={chooseNFT}
        Stat={Stat}
      />
      {/* <TransferNFT _type={_type} contract={contract} _naddress={_naddress} _receiver={_receiver} token_id={token_id} /> */}
      <div className="flex w-full text-[14px] space-y-4 md:space-x-8 pb-40">
        <Link
          to="/assets"
          className="text-[rgba(110,61,17,1)] hover:text-white
        bg-[rgba(237,184,85,1)] text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 hover:text-white bg-secondary hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"
        >
          {" "}
          NFT20 Pools
        </Link>
        <a
          href="https://docs.nft20.io"
          target="_blank"
          className="text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 text-[rgba(110,61,17,1)] hover:text-white bg-white hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"
        >
          {" "}
          Documentation{" "}
        </a>
      </div>
      {show && <PoolModal show={show} handleHide={handleHide.bind(this)} g_selectPool={g_selectPool.bind(this)} comboNo={comboNo}/>}
      {itemShow && <NFTModal show={itemShow} handleHide={itemHandleHide.bind(this)} poolAddr={poolAddr} showPoolModal={showPoolModal.bind(this)} updateNFTs={updateNFTs.bind(this)} comboNo={comboNo} nftData={nftData}/>}
    </div>
  );
};

export default SellNFT;
