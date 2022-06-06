import React from 'react'

const Farm = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-2 md:px-8 py-8' >
        <div>
        <div className="mb-96">
            <div className="text-center text-white text-xl flex flex-col  space-y-2  tracking-normal leading-relaxed px-4">
                <p  class="font-medium"> Add liquidity to the different pairs to earn MUSE. </p><p  class="font-light max-w-4xl mx-auto pt-4"> $MUSE can be used for specific votes on the platform, or you can sell $MUSE on <a  href="https://info.uniswap.org/pair/0x20d2c17d1928ef4290bf17f922a10eaa2770bf43" target="_blank" class="text-yellow-300 hover:underline hover:text-primary"> uniswap </a></p><p > For additional projects to get farming rewards, check out our <a href="https://snapshot.org/#/nft20.eth/proposal/QmP19j9MRApzKumYWnivWS9iE6kpPh935zz7pKznjUSHyn" target="_blank" className="text-yellow-300 hover:underline hover:text-primary"> LP Farming Framework </a>
                </p>
                </div>
            </div>
            <div className='flex flex-col space-y-4 justify-center items-center mt-10'>
           <div   class="
    w-11/12
    lg:w-3/4
    rounded-3xl
    p-8
    bg-tertiary
    py-8
    text-grey-900
    uppercase
    text-xl
    font-bold
   not-expanded"><div  class="flex justify-between items-center"><div  class="flex space-x-0 items-center justify-between w-full"><h2  class="
          flex
          text-grey-900
          items-center
          uppercase
          text-xl
          font-bold
          w-full
          md:w-5/12
        "><i  class="
            bg-grey-500
            rounded-full
            bg-white bg-opacity-30
            h-16
            w-16
            mr-4
            flex
            items-center
            justify-center
            shadow-sm
          "><img  src="/img/muse.18d3bca0.svg" alt="" class="rounded-full object-cover"/></i><a  href="https://v2.info.uniswap.org/pair/0x20d2c17d1928ef4290bf17f922a10eaa2770bf43" target="_blank"><span >MUSE/ETH LP</span></a><a  href="https://v2.info.uniswap.org/pair/0x20d2c17d1928ef4290bf17f922a10eaa2770bf43" target="_blank"><img  src="/img/uniswap.1c29d9d6.svg" alt="" class="h-5 ml-2"/></a></h2><div  class="hidden md:flex flex-col items-start pl-4 w-4/12"><span  class="text-gray-500 text-xs">Pool rewards:</span><div > 171.12% <span >APR</span></div></div><div  class="hidden md:flex flex-col items-start pl-6 w-3/12"><span  class="text-gray-500 text-xs">TVL $MUSE-ETH:</span><div >$2559563.62</div></div></div><div  class="cursor-pointer"><svg  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"><path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div><div  class="flex flex-col py-10 card-content"><div  class="content"><div  class="mb-4 flex md:hidden flex-col items-start"><span  class="text-gray-500 text-xs">Pool rewards for $MUSE-ETH:</span><span > 250 <span >MUSE a day</span></span></div><div  class="flex md:hidden flex-col items-start mb-8"><span  class="text-gray-500 text-xs">TVL $MUSE-ETH:</span><span >$2559563.62</span></div><div  class="
            flex
            md:flex-row
            flex-col
            justify-between
            space-y-8
            md:space-y-0
            gap-8
          "><div  class="flex flex-col items-start space-y-4 w-full md:w-4/12"><div ><span  class="text-gray-500 text-xs">You Staked:</span></div><div  placeholder="0" type="text" class="
                border
                rounded-lg
                pt-4
                pb-3
                px-5
                text-2xl
                w-full
                text-jet
                font-light
                bg-transparent
                focus:outline-none
              "><span  class="number">0.0000</span> $LP </div><div  placeholder="0" type="text" class="
                border
                rounded-lg
                pt-4
                pb-3
                px-5
                text-sm
                w-full
                text-jet
                font-light
                bg-transparent
                focus:outline-none
              "> Total staked: <span  class="number">1626.7955</span>$LP </div></div><div  class="flex flex-col items-start space-y-4 w-full md:w-4/12"><div ><span  class="text-gray-500 text-xs">In your wallet:</span></div><div  type="text" class="
                border
                rounded-lg
                pt-4
                pb-3
                px-5
                text-2xl
                w-full
                text-jet
                font-light
                bg-transparent
                focus:outline-none
              "><span  class="number">-0.0000</span>$LP </div><button  class="
                text-center
                uppercase
                font-primary font-bold
                leading-none
                text-sm
                inline-block
                rounded-lg
                py-4
                px-5
                text-brown
                hover:text-white
                bg-secondary
                hover:bg-blue-900 hover:bg-opacity-70
                transition
                duration-0
                focus:outline-none
              "><span >Approve &amp; Stake</span></button></div><div  class="flex flex-col items-start space-y-4 w-full md:w-4/12"><div ><span  class="text-gray-500 text-xs">Earned $MUSE:</span></div><div  placeholder="0" type="text" class="
                border
                rounded-lg
                pt-4
                pb-3
                px-5
                text-2xl
                w-full
                text-jet
                font-light
                bg-transparent
                focus:outline-none
              "><span  class="number">0.0000</span></div><button  class="
                text-center
                uppercase
                font-primary font-bold
                leading-none
                text-sm
                inline-block
                rounded-lg
                py-4
                px-5
                text-brown
                hover:text-white
                bg-secondary
                hover:bg-blue-900 hover:bg-opacity-70
                transition
                duration-0
                focus:outline-none
              "> Withdraw Stake </button><button  class="
                text-center
                uppercase
                font-primary font-bold
                leading-none
                text-sm
                inline-block
                rounded-lg
                py-4
                px-5
                text-brown
                hover:text-white
                bg-secondary
                hover:bg-blue-900 hover:bg-opacity-70
                transition
                duration-0
                focus:outline-none
              "> Withdraw Rewards </button></div></div></div></div></div>




            </div>

        </div>

    </section>
  )
}

export default Farm