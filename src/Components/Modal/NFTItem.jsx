import React, { useState } from "react";

const NFTItem = ({ show, handleHide, tokenID, srcURL, tokenAddr, NFTProcess }) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (event) => {
        setChecked(!checked);
        NFTProcess(checked, tokenID);
    }
  return (
    <div
      data-v-7834dab6=""
      className="
        flex
        justify-between
        items-center
        py-0
        my-6
        cursor-pointer
        hover:border
        "
    >
      <div data-v-7834dab6="">
        <a
          data-v-7834dab6=""
          href={`https://opensea.io/assets/${tokenAddr}`}
          target="_blank"
        >
          <img
            data-v-7834dab6=""
            src={srcURL}
            alt=""
            className="object-cover w-32 sm:w-40"
          />
        </a>
      </div>
      <div data-v-7834dab6="" className="text-base font-normal">
        <div data-v-7834dab6="" className="font-bold">
          {" "}
          NFT #{tokenID}{" "}
        </div>
        <div data-v-7834dab6="" className="-mt-2 mb-1"></div>
        <div data-v-7834dab6="" className="cursor-pointer hover:underline">
          <a
            data-v-7834dab6=""
            href={`https://opensea.io/assets/${tokenAddr}`}
            target="_blank"
          >
            View details{" "}
          </a>
        </div>
      </div>
      <div data-v-7834dab6="">
        <input
          data-v-7834dab6=""
          type="checkbox"
          id={tokenID}
          name={tokenID}
          data-schema="ERC721"
          data-id={tokenID}
          className="mr-6"
          value={tokenID}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default NFTItem;
