import React from "react";

// components

import MyCardSettings from "components/MyCards/MyCardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Upload() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <MyCardSettings />
        </div>
      </div>
    </>
  );
}
