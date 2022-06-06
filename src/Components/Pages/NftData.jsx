import React from 'react'

const Assets = () => {
  return (
      <section class="max-w-screen-lg mx-auto px-2 md:px-8 py-8">
       <div>
         <div className="mb-96">
           <div>
           <div  class="flex justify-center md:space-y-0 flex-col-reverse md:flex-row md:justify-between items-center text-white"><div  class="text-2xl uppercase flex items-center space-x-2 cursor-pointer hover:text-yellow-300"><span  class="font-bold text-lg md:text-4xl">+</span><div  class="text-lg md:text-2xl">Add asset</div></div><div  class="flex relative items-center md:mb-0 mb-6"><input  type="text" placeholder="Search ..." class="rounded-xl bg-gray-700 bg-opacity-50 focus:bg-opacity-70 text-white focus:outline-none px-4 py-4 w-80"/><span  class="absolute right-0 pr-4"><img  src="/img/search_icon.c9bb336b.svg" alt="" class="h-6"/></span></div></div>
           <div  id="sorting" class="mt-10 justify-center md:justify-end text-white flex space-x-6"><div  class="cursor-pointer hover:text-yellow-300"> NFTs Locked ↑↓ </div><div  class="cursor-pointer hover:text-yellow-300"> Liquidity ↑↓ </div></div>

           <div className='mt-4 grid grid-cols-1 md:px-0 px-12 gap-3 md:gap-2 text-grey-900'>

              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >ZED RUN</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $ZED20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$402 (0.13ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>

              

              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/vpJFZRfBl9ghj9IinaDB3w3xScD9AHwuXxpId50Yo80bw1Tt1BOhJg5pltBN-_wJwA0aCyHbcxIbXNnQ1cKd9xlc5ATdJUL4Yy3kDQ=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >CyberKongz VX</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $KONGZ Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $KONGZ VX20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $522.16 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$3346 (1.10ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/DBD8vFv2QZ-ZrJ4jKH2lVwrJxiw4qFw2ntwmT6Ly_MrXoc4HLjZleHprxpfSCPX6_Sw7h-rIFVJ8zluRKqWtFnbvk04NU8nUsxUHdg=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Chubbies</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 67 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">541</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $CHUBBIES20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$203903.75 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$201 (0.07ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Bored Ape Yacht Club</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 1 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $BAYC20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$186674.53 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$115540 (38.14ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Hashmasks</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 65</div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> $ZED20 Supply: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $MASK20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">  $145016.61 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$1439 (0.48ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/pk74DcuhduNLJvtHZ5Bs61ow6wcrxKfkFzPubsX0yePQxGtYkrxXDLP8aDLt1ITY2OBiLY0YrLr0MK_YAzbRqLpJJuAHIPr1jUutww=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Wrapped Moon Cats</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 149 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> Trade $MCAT20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $MCAT20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$142629.73 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$1195 (0.39ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/PdnY4O8jliS51Gc085XSCSKSSErTuxY-qYKK1P9OmnmmU7wKC_u26iJQk76pXpI9zYMX2JgBlYJl6cDkUBEys4zR=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >MEME20</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 7608 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">  Trade $MEME20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $MCAT20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$136111.20 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$10 (0.00ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/-_j_RMVSqfDvPfRJhF3BQaf6D3OD31sG6d5pszei8a5V31EKr4Jz11xk-0iAnG4vTKwvhNPx2ICn4r25tbEtQ36EYJRdxlczuppUwg=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >GPUNKS20</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 163 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> Trade $GPUNKS20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $GPUNKS20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$133104.88 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$440 (0.15ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>


              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/-_j_RMVSqfDvPfRJhF3BQaf6D3OD31sG6d5pszei8a5V31EKr4Jz11xk-0iAnG4vTKwvhNPx2ICn4r25tbEtQ36EYJRdxlczuppUwg=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >DEADFELLAZ20</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 12 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> Trade $DEADFELLAZ20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $DEADFELLAZ20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$127821.96 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$5905 (1.95ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>


              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/RwIPOH0RftzOWtyC0WBnMx2X4_4Xqeimk5iT6I1xNQKSuRTVNwBY0PcA6MkCiX2dVP5U_MDbseAq3LoaJ7BY_xyTfLpeUsGtt2-WTA=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Acclimated MoonCats</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 60 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> Trade $DEADFELLAZ20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $CAT20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base">$84686.63 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$1144 (0.38ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/gtTWsCaOXbQT7r_W9oCnZ9vzDPDLbpxjOV9yo9j2mXt0u7j7I9LkAyOANFLFSHIUv-Lr8Pkb8HuPOylpsQP11cIwnQRUWaTLE6VxQck=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >AAH</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 60 </div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Trade $AAH:  </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Trade $AAH:: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $52491.39 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$319 (0.11ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>



              <div className="bg-opacity-100 bg-[rgba(222,218,210,1)] rounded-2xl p-5 cursor-pointer shadow-md"><div class="flex flex-col md:flex-row">
                <div className="md:flex md:flex-col w-100 md:w-1/4 pb-8 md:pb-0"><h2 class="flex text-grey-900 items-center uppercase text-sm font-bold mb-0">
                  <i className="bg-grey-500 rounded-full bg-white bg-opacity-30 h-16 md:h-14 w-16 md:w-14 mr-4 flex items-center justify-center shadow-sm">
                    <img src="https://lh3.googleusercontent.com/hsz9cxOgVV7Ke8kUX0lObPDshEYhjFllgGZkemzCH0Muc8QXsFq5i4QIRQp2Sc_9EIG266Mp_xSakl_jr0XD9hyNk97WTddg2icaYQ=s120" alt="" className="rounded-full object-cover shadow-xl" /></i><span >Gorilla Nemesis</span>
                </h2>
                </div>
                <div class="md:flex md:flex-col md:w-3/4 md:pt-2"><ul class="md:mb-0 md:max-w-full md:flex md:flex-row md:justify-between"><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div className="font-medium text-sm md:text-sm">NFTs in Pool:</div>
                  <div class="font-semibold text-base"> 82</div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm"> Trade $GONS20: </div><div className="font-semibold text-base">700</div>
                  </li>
                  <li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm"> Trade $GONS20: </div><div class="font-semibold text-base hover:text-primary transition duration-300">
                    <a target="_blank" href="https://analytics-polygon.sushi.com/pairs/0xe95d382d9ff16b8ae23b297287426ef7b44e01b3"><span > DEX </span></a></div></li><li class="flex justify-between md:flex-col md:w-1/5 uppercase">
                    <div class="font-medium text-sm md:text-sm">Liquidity:</div><div class="font-semibold text-base"> $52491.39 </div>
                  </li><li class="flex justify-between md:flex-col md:w-1/5 uppercase"><div class="font-medium text-sm md:text-sm">Floor Price:</div><div class="font-semibold text-base"><span >$319 (0.11ETH)</span>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              </div>









            </div>
          </div>
         </div>
       </div>
          </section>
  )
}

export default Assets