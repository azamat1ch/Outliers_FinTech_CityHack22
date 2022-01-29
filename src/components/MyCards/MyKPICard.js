import React, { Component } from "react";

export default class MyKPICard extends Component {
  render() {
    
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Subtitle
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  Title
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div>
                  {/* <img src={statIcon} /> */}
                </div>
              </div>
            </div>
            <p className="text-sm text-blueGray-400 mt-4">
              <span className=" mr-2">
                <i
                  className="fas fa-arrow-down"
                ></i>{" "}
                Percent%
              </span>
              <span className="whitespace-nowrap">Description</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}
