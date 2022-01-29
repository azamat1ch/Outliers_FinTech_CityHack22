import React, { Component } from "react";
import MyNewsCard from "./MyNewsCard";

export default class MyNews extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b3e74e7542ad45ce868c83e6c52d06e8"
    )
      .then((response) => response.json())
      .then((object) => object.articles)
      .then((fetchednews) => this.setState({ news: fetchednews }));
  }

  generateNews() {
    let news = [];
    const limit = Math.min(6, this.state.news.length);
    for (let i = 0; i < limit; i++) {
      news.push(<MyNewsCard news={this.state.news[i]} />);
    }
    return news;
  }

  render() {
    const color = "light";
    return (
      <div className="shadow-lg rounded-lg br2 pa3 bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                News
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {this.generateNews()}
        </div>
      </div>
    );
  }
}
