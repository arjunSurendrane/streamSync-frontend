import React from "react";
import VideoScreen from "../component/VideoScreen";

export default function StreamingPage() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <VideoScreen />
        <button className="bg-green-200 text-green-700 p-2 rounded-lg text-sm font-medium">
          Go live
        </button>
      </div>
    </div>
  );
}
