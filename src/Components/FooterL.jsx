import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Images/Muse.png'

const FooterL = () => {
  return (
    <footer className='flex mb-8 lg:m-auto  flex-col text-white'>
      <div  class="text-xl font-light text-left md:text-center"><p  class="mt-8"> Join the <a  href="https://discord.gg/kfByfux" target="_blank" class="text-primary">community</a> and help us find use cases and bring liquidity to NFTs. </p></div>

       <div class="footer py-8 lg:py-10"><div class="max-w-full mx-auto px-10"><div class="flex flex-col md:flex-row md:justify-between justify-center space-y-8 md:space-y-0 items-center"><div><div class="flex"><div class="flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><img src="/img/Activity_icon.b10d0a83.svg" alt="" class="h-3"/><a href="/activity" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Activity</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="/leaderboard" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Leaderboard</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="/fees" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Fees</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="/gallery" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Gallery</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="https://stats.nft20.io/i" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Stats</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="https://forum.musedao.io" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Forum</a></div></div></div><div class="ml-6 flex space-x-6 items-center md:justify-start justify-center"><div class="flex space-x-6"><div class="flex space-x-2 items-center"><a href="/contributors" class="text-white text-small hover:text-yellow-300 transition duration-300 underline">Contributors</a></div></div></div></div></div><p class="flex text-base font-thin text-white text-center md:text-left opacity-100"><img src="/img/logo_footer.b07844a5.svg" alt="" class="h-6 pr-3 -mx-1"/>2021 NFT20 All rights reserved © </p></div><div class="flex space-x-8 justify-end"><a href="https://discord.gg/kfByfux" target="_blank">
         <img src="/img/Discord_icon.44d854a6.svg" alt="" class="h-8"/></a><a href="https://t.me/nft20" target="_blank"><img src="/img/Telegram_icon.9dab1328.svg" alt="" class="h-8"/></a><a href="https://medium.com/nft20" target="_blank"><img src="/img/Medium_icon.bcfe339d.svg" alt="" class="h-8"/></a><a href="https://twitter.com/niftymuseum" target="_blank"><img src="/img/Twitter_icon.20f5e53e.svg" alt="" class="h-8"/></a></div></div></div>

       {/* <div className='flex text-center lg:m-auto flex-col items-center lg:flex-row'>
         <Link className='p-2' to='/' >Activity</Link>
         <Link className='p-2' to='/' >LeaderBoard</Link>
         <Link className='p-2' to='/' >fees</Link>
         <Link className='p-2' to='/' >Gallery</Link>
         <Link className='p-2' to='/' >Forum</Link>
         <Link className='p-2' to='/' >Contributors</Link>
         <div>
         </div>           
       </div>

           <div className='flex'>
             <p> <img className='h-8' src={logo} alt="logo" /> NFT20 All Rights Reserved c</p>
           </div> */}

          
    </footer>
  )
}

export default FooterL