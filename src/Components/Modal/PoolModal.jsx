import React, { useState, Component } from "react";
import ProjectItem from "./ProjectItem";
import axios from "axios";

// const PoolModal = ({ show, handleHide }) => {
class PoolModal extends Component {
  //const
  state = {
    Projects: [],
    searchTxt: ""
  };
  
  componentDidMount() {
    // Simple GET request using axios
    axios
      .get("https://api.nft20.io/pools?perPage=500&network=0")
      .then((response) => this.setState({ Projects: response.data.data }));
    // .then(response => console.log(response.data));
  }
  selectPool = (project) => {
    this.props.g_selectPool(project);
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    // console.log(e.target.name);
    // console.log(e.target.value);
  }
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
                Select <span data-v-7834dab6="">Project</span>
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
              <span data-v-7834dab6="">
                <input
                  data-v-7834dab6=""
                  type="text"
                  placeholder="Search Collectible"
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
                <div
                  data-v-7834dab6=""
                  className="mt-4 nfts overflow-auto z-0 flex flex-col"
                >
                  {this.state.Projects &&
                    this.state.Projects.filter(
                      (project) =>
                        !project.name.includes("0xnft") &&
                        project.nft_type == "721"
                        && !project.name.includes("Alchemist")
                        // && (this.props.comboNo != 1)
                    )
                    .filter((project) => (project.name.toLowerCase().includes(this.state.searchTxt.toLowerCase())))
                    .map((project) => (
                      <ProjectItem
                        project={project}
                        selectPool={this.selectPool.bind(this)}
                      />
                    ))}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PoolModal;
