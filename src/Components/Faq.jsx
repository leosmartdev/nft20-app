import React from 'react'

const Faq = () => {
  return (
    <section class="max-w-screen-lg mx-auto px-2 md:px-8 py-8">
          <div>
              <div class="about text-white mb-80 leading-loose tracking-widest px-4"><h1 class="text-left text-2xl">FAQs</h1><div class="mt-10 flex justify-start items-start flex-col space-y-20">
                  <div class="text-lg text-left md:text-left"><p class="text-xl font-medium">
                      <span >•</span> What is NFT20 in simple terms?</p>
                      <p class="mb-6 font-light"> Deposit any NFT on 1 of the <a href="https://docs.nft20.io/create-pool/" class="hover:text-primary text-yellow-300 transition duration-1">pools</a> available (or create a pool) and get tokens for your NFT immediately. </p>
                      <p class="text-xl font-medium"><span >•</span> What to do with the Tokens I receive?</p><p class="mb-6 font-light"> Once you deposit NFTs in a pool and you get the equivalent tokens, you can do a few things: <ol >
                          <li >1. Speculate on them on Uniswap.</li><li >2. Exchange the tokens for another NFT available in the pool.</li><li >3. Use the tokens to bid on a higher quality NFT on auction.</li>
                          <li >4. Add liquidity for those tokens on Uniswap and stake the LP token under farm tab to earn daily $muse rewards.</li>
                      </ol>
                      </p>
                      <p class="text-xl font-medium">
                          <span >•</span> I don't see my project, how to add it?</p>
                      <p class="mb-6 font-light"> Anyone can create a pool for their NFT project on the <a href="https://docs.nft20.io/create-pool/" class="hover:text-primary text-yellow-300 transition duration-1">assets page</a>, follow this <a href="https://docs.nft20.io/create-pool/" target="_blank" class="hover:text-primary text-yellow-300 transition duration-1">guide</a> for an exact tutorial. </p>
                      <p class="text-xl font-medium"><span >•</span> Does NFT20 have fees?</p><p class="mb-6 font-light"> Every time an NFT is deposited 100 tokens are minted, as of now 5% of those tokens goes to the NFT20 protocol and distributed to $MUSE token holders. </p><p class="text-xl font-medium"><span >•</span> Does NFT20 have a token?</p><p class="mb-6 font-light"> NFT20 has the $MUSE token, it can be earned via farming and the utility is for it to be burned to get a share of the protocol fees or to participate in specific governance votes, read more about it on our <a href="https://docs.nft20.io/tokenomics/" target="_blank" class="hover:text-primary text-yellow-1 transition duration-1">tokenomics page </a>. </p>
                      <p class="text-xl font-medium"><span >•</span> How does the NFT20 governance work?</p><p class="font-light"> NFT20 is governed by holders of the <a href="https://info.uniswap.org/pair/0x20d2c17d1928ef4290bf17f922a10eaa2770bf43" target="_blank" class="hover:text-primary text-yellow-300 transition duration-1">$MUSE token</a>, however our governance policy is unique in the crypto world, read more about it <a href=" https://docs.nft20.io/governance/" target="_blank" class="hover:text-primary text-yellow-300 transition duration-1">here</a>
                      </p>
                  </div>
                  <div class="space-y-4 md:space-x-8 pb-10">
                      <a href="/assets" class="text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 text-[rgba(110,61,17,1)] hover:text-white bg-[rgba(237,184,85,1)] hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"> Use NFT20 </a>
                      <a href="https://docs.nft20.io" target="_blank" class="text-center tracking-normal font-primary font-normal leading-none text-2xl block md:inline-block rounded-lg py-4 px-5 text-[rgba(110,61,17,1)] hover:text-white bg-[rgba(237,184,85,1)] hover:bg-blue-400 hover:bg-opacity-70 transition duration-0 focus:outline-none"> Documentation </a>
                  </div>
              </div>
              </div>
          </div>
      </section>
    )
}

export default Faq