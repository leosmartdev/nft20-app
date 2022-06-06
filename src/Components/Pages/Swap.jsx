import React from 'react'

const Swap = () => {
  return (
    <div className='h-screen w-2/4 m-auto items-center justify-center'>
      <h4 className='text-white text-center mb-4 text-3xl' >Sell Your NFTs with 1-click</h4>
      <div className="sellbox font-light flex flex-col m-auto rounded w-3/4 p-8 bg-yellow-100 text-black">
        <p className='pb-4 text-xl '>YOU DEPOSIT</p>
        <div className='flex flex-row w-full justify-between'>
       <div>
       <label htmlFor="nft">NFT</label>
        <select name="nft" id="">
        </select>
       </div>

        <div className="results">
          <p>Bored APe</p>
        </div>
        </div>

        
      </div>
      <div className="exchange-icon w-full m-auto text-white text-center pt-12 pb-12">
        <p> Exchange icon</p>
        </div>

        <div className="sellbox flex bg-yellow-100 flex-col m-auto rounded mb-8 w-3/4 p-8 bg-white text-black">
        <p className='pb-4 text-xl font-normal'>YOU RECEIVE</p>
        <div className='flex flex-row w-full justify-between'>
       <div>
       <label htmlFor="nft">NFT</label>
        <select name="nft" id="">
        </select>
       </div>

        <div className="results">
          <p>Bored APe</p>
        </div>
        </div>

        
      </div>
      <div className='m-auto w-3/4'>
      <button className='w-full text-brown items-center hover:bg-blue-400 hover:text-white m-auto rounded p-4 bg-yellow-300'>SWAP</button>

      </div>
      <div className="buttons p-12 w-3/4 m-auto">
        <button className='text-brown w-2/5 mr-8 hover:bg-blue-400 hover:text-white m-auto rounded p-4 bg-yellow-300'>NFT20 Pools</button>
        <button className='text-brown  w-2/5 bg-yellow-100 hover:bg-blue-400 hover:text-white m-auto rounded p-4 bg-yellow-300'>Documentation</button>

      </div>
    </div>
  )
}

export default Swap