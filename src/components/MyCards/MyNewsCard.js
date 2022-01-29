import React, { Component } from "react";

export default class MyNewsCard extends Component {
  render() {
    const news = this.props.news;
    return (
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center grow" onClick={()=> window.open(news.url, "_blank")}>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 border-solid border-2 rounded-lg h-96">
          <div className="px-4 py-5 flex-auto h-full">
            <div className="mb-5">
              <img src={news.urlToImage} />
            </div>
            <h6 className="text-xl font-semibold">
              {news.title}
            </h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              {news.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
