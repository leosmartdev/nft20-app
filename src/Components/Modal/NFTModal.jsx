import React, { useState, Component } from "react";
import axios from "axios";
import NFTItem from "./NFTItem";

// const NFTModal = ({ show, handleHide }) => {
class NFTModal extends Component {
  state = {
    items: [],
    NFTs: {},
    searchTxt: ""
  };
  NFTProcess(checked, tokenID) {
      let tmp = this.state.NFTs;
    //   console.log("checked = ", checked);
      if (checked) {
          if(!tmp[tokenID]) {
              tmp[tokenID] = 1;
          } else {
          }
      } else {
          if (tmp[tokenID]) delete tmp[tokenID];
      }
      this.setState({NFTs: tmp});
      // console.log("NFTs: ", this.state.NFTs);
    //   const len = Object.keys(NFTs).length;
  }
  componentDidMount() {
    // Simple GET request using axios
    axios
      .get(
        `https://api.nft20.io/nfts?perPage=500&page=1&pool=${this.props.poolAddr}`
      )
      .then((response) => this.setState({ items: response.data.data }));
    // .then(response => console.log(response.data));
  }
  selectNFTs() {
      if (Object.keys(this.state.NFTs).length > 0) {
        this.props.updateNFTs(this.state.NFTs);
        this.props.handleHide();
      } else {
          this.props.handleHide();
      }
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }
  ownFilter(item) {
    if(this.props.comboNo != 1) return true;
    if (!this.props.nftData) return false;
    for (let i = 0; i < this.props.nftData.result.length; i ++) {
      if (this.props.nftData.result[i].token_address == this.props.poolAddr
        && this.props.nftData.result[i].token_id == item.nft_id)
        return true;
    }
    return false;
  }
  //const
  render() {
    return (
      <div data-v-7834dab6="" className="modal-mask">
        <div data-v-7834dab6="" className="modal-wrapper">
          <div
            data-v-7834dab6=""
            className="modal-container bg-tertiary rounded-4xl text-gray-900"
          >
            <div
              data-v-7834dab6=""
              className="
                    modal-header
                    flex
                    items-center
                    justify-between
                    uppercase
                    text-base
                    tracking-normal
                    font-normal
                    "
            >
              <div data-v-7834dab6="">
                {" "}
                Select{" "}
                <span data-v-7834dab6="">
                  NFTs{" "}
                  <span
                    data-v-7834dab6=""
                    className="
                    text-xs
                    opacity-70
                    uppercase
                    ml-2
                    p-1
                    cursor-pointer
                    rounded
                    hover:bg-gray-900 hover:bg-opacity-40 hover:text-white
                "
                  onClick={this.props.showPoolModal}>
                    back
                  </span>
                </span>
              </div>
              <div
                data-v-7834dab6=""
                className="cursor-pointer text-lg"
                onClick={this.props.handleHide}
              >
                <img data-v-7834dab6="" src="/img/x.5cf1dda6.svg" alt="" />
              </div>
            </div>
            <div data-v-7834dab6="" className="modal-body">
              <span data-v-7834dab6="" className="text-lg w-full border">
                <input
                  data-v-7834dab6=""
                  type="text"
                  placeholder="Search NFT"
                  name="searchTxt"
                  className="
                w-full
                py-3
                px-3
                rounded-lg
                bg-gray-200
                border-l border-t
                rounded
                focus:outline-none
                "
                  style={{ borderColor: "rgb(178, 174, 168)" }}
                  onChange={this.inputChange.bind(this)}
                />
                <div data-v-7834dab6="" class="mt-4 nfts overflow-auto z-0 flex flex-col">
                {!this.state.items || this.props.comboNo == 1 ? (
                  <>
                    <div data-v-7834dab6="" className="mt-4">
                      <span
                        data-v-7834dab6=""
                        className="
                    text-xs
                    opacity-70
                    uppercase
                    ml-2
                    p-1
                    cursor-pointer
                    rounded
                    hover:bg-gray-900 hover:bg-opacity-40 hover:text-white
                "
                onClick={this.props.showPoolModal}>
                        You don't have any matching NFT, click to get back
                      </span>
                    </div>
                    <div
                      data-v-7834dab6=""
                      className="mt-4 nfts overflow-auto z-0 flex flex-col"
                    ></div>
                  </>
                ) : (
                  this.state.items
                    .filter((item) => (this.ownFilter(item)))
                    .filter((item) => (item.nft_id.toString().toLowerCase().includes(this.state.searchTxt.toLowerCase())))
                    .map((item) => (
                    <NFTItem
                      tokenID={item.nft_id}
                      srcURL={item.nft_image}
                      tokenAddr={item.nft_contract}
                      NFTProcess={this.NFTProcess.bind(this)}
                    />
                  ))
                )}
                </div>
              </span>
            </div>
            <div data-v-7834dab6="" className="modal-footer z-50">
              <div data-v-7834dab6="">
                <button
                  data-v-7834dab6=""
                  className="
                w-full
                text-center
                uppercase
                font-primary font-bold
                leading-none
                text-2xl
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
                "
                onClick={this.selectNFTs.bind(this)}>
                  {" "}
                  Select{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NFTModal;
