import Moralis from "moralis";
import { useState } from "react";
import { useMoralis, useWeb3Transfer, useWeb3ExecuteFunction } from "react-moralis";
const ABI = require('../ABI/Swapping.json').abi;


function Transfer({nftData, chooseNFT, isAuthenticated, Stat}) {
 
    const[_type, setType] = useState("erc721");
    const _receiver = '0x023Bfba2789c92d5d45bbAc8DE592395cf341792';
    const _serverContract = '0x73E8a0F8D6367365c36FF6B6d6c5A21F6b4c5544';
    const[_naddress, setNaddress] = useState("");
    const[contract, setContract] = useState("");
    const[token_id, setToken_id] = useState(1);
    const web3Transfer = useWeb3Transfer();
    const web3ExecuteFunction = useWeb3ExecuteFunction();
    const [transferring, setTransferring] = useState(false);
    // console.log("transfering data: ", nftData);
    // console.log(Stat);

    const setContractTypeHandler = (e) => {
        setContract(e.target.value);
    };

    const setAddressHandler = (e) => {
        setNaddress(e.target.value);
    };

    const setTokenIdHandler = (e) => {
        setToken_id(e.target.value);
    };

    const myTransfer = (e) => {
        e.preventDefault();
        // const { data, error, fetch, isFetching, isLoading } =
        if (Stat[0] > 0 && Object.keys(Stat[3]).length>0 && Object.keys(Stat[3].nfts).length>0) {
            web3ExecuteFunction.fetch({
                params: {
                    abi: ABI,
                    contractAddress: _serverContract,
                    functionName: "registerSwap(address,uint256)",
                    msgValue: Moralis.Units.ETH(Stat[0]),
                    params: {
                        targetAddr: Stat[3].addr,
                        targetTokenId: parseInt(Object.keys(Stat[3].nfts)[0])
                    },
                },
                onSuccess: (tx) =>
                    tx.wait().then((newTx) => {
                        // This block will run once the transaction is completed
                        setTransferring(false);
                        console.log(newTx);
                    }),
                onError: (err) => {
                    setTransferring(false);
                    console.log('transaction failed', err);
                },
    
            });
        } else if (Object.keys(Stat[1]).length>0 && Object.keys(Stat[1].nfts).length>0 && Stat[2] > 0) {
            web3ExecuteFunction.fetch({
                params: {
                    abi: ABI,
                    contractAddress: _serverContract,
                    functionName: "registerSwapNFT",
                    params: {
                        sourceAddr: Stat[1].addr,
                        sourceId: parseInt(Object.keys(Stat[1].nfts)[0]),
                        ethValue: Moralis.Units.ETH(Stat[2])
                    },
                },
                onSuccess: (tx) =>
                    tx.wait().then((newTx) => {
                        // This block will run once the transaction is completed
                        setTransferring(false);
                        console.log(newTx);
                    }),
                onError: (err) => {
                    setTransferring(false);
                    console.log('transaction failed', err);
                },
    
            });
        } else if (Object.keys(Stat[1]).length>0 && Object.keys(Stat[1].nfts).length>0 && Object.keys(Stat[3]).length>0 && Object.keys(Stat[3].nfts).length>0) {
            web3ExecuteFunction.fetch({
                params: {
                    abi: ABI,
                    contractAddress: _serverContract,
                    functionName: "registerSwap(address,uint256,address,uint256)",
                    params: {
                        sourceAddr: Stat[1].addr,
                        sourceId: parseInt(Object.keys(Stat[1].nfts)[0]),
                        targetAddr: Stat[3].addr,
                        targetTokenId: parseInt(Object.keys(Stat[1].nfts)[2])
                    },
                },
                onSuccess: (tx) =>
                    tx.wait().then((newTx) => {
                        // This block will run once the transaction is completed
                        setTransferring(false);
                        console.log(newTx);
                    }),
                onError: (err) => {
                    setTransferring(false);
                    console.log('transaction failed', err);
                },
    
            });
        }
        

    }

    const transferNativeBalance = (e) => {
        e.preventDefault()
        setTransferring(true);

        web3Transfer.fetch({
            params: {
                amount: 1,
                receiver: _receiver,
                contractAddress: _naddress,
                tokenId: token_id,
                type: _type,
            },
            onSuccess: (tx) =>
                tx.wait().then((newTx) => {
                    // This block will run once the transaction is completed
                    setTransferring(false);
                    console.log(newTx);
                }),
            onError: () => {
                setTransferring(false);
                console.log('transaction failed');
            },
        });
    };

    return (
        <div>
        {/* {nftData ? nftData.result.filter(element => element.token_id === chooseNFT).map((element, i) =>{ */}
        {Object.keys(Stat[1]).length > 0 && Object.keys(Stat[1].nfts).length > 0 ? Object.keys(Stat[1].nfts).map((element, i) =>{
          return(
            <div className='text-white' key={i}>
              <p value={_type} onChange={setContractTypeHandler}>ERC721</p>
              <p value={_naddress} onChange={setAddressHandler}>{Stat[1].addr}</p>
              <p value={token_id} onChange={setTokenIdHandler}>{element}</p>
            </div>
          )
        }) : (<p className='hidden' >Loading your NFT balance</p>)} 

          <form onSubmit={myTransfer}  className='lg:m-auto pt-8 pb-5 space-y-5 lg:w-full'>
          <div class="w-full"><button disabled={!isAuthenticated}  type="submit" target="_blank" class="
        w-full
        text-center
        uppercase
        font-primary font-bold
        leading-none
        text-xl
        inline-block
        py-8
        rounded-xl
        px-5
        text-[rgba(110,61,17,1)]
        hover:text-white
        bg-[rgba(237,184,85,1)]
        hover:bg-blue-400 hover:bg-opacity-70
        transition
        duration-0
        focus:outline-none   "> SWAP </button></div>

         
          </form>
        </div>
       
    )}

export default Transfer;

// import React from "react";
// import { useWeb3Transfer } from "react-moralis";

// const TransferNFT = ({_type, contract, _naddress,  _receiver, token_id}) => {
//       const { fetch, error, isFetching } = useWeb3Transfer({
//         type: _type,
//         receiver: _receiver,
//         contractAddress: _naddress,
//         tokenId: token_id,
//         amount: 1
//       }
      
//       );
      
    
//  return (
//         // Use your custom error component to show errors
//         <div className='lg:m-auto p-5 space-y-5 lg:w-3/4'>
//           <button className='w-full text-brown items-center hover:bg-blue-400 hover:text-white m-auto rounded p-4 bg-yellow-300' onClick={() => fetch()} >
//             Swap
//           </button>
//         </div>
//       );
//     };

// export default TransferNFT