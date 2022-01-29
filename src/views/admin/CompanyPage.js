import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import MyCardProfile from "components/MyCards/MyCardProfile.js";
import MyKPICard from "../../components/MyCards/MyKPICard";

export default function CompanyPage() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap pb4 w-full xl:w-12/12 mb-12 xl:mb-0">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <MyKPICard />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <MyKPICard />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <MyKPICard />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <MyKPICard />
              </div>
            </div>
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-12/12 px-4">
              <CardBarChart />
            </div>
            <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
              <CardPageVisits />
            </div>
            <div className="w-full xl:w-12/12 px-4">
              <CardSocialTraffic />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <MyCardProfile />
        </div>
      </div>
    </>
  );
}
