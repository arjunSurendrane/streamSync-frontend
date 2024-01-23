import { useState } from "react";
import { sidebarData } from "../constant";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const handleCurrentTab = (val, link) => {
    setCurrentTab(val);
    navigate(link);
  };

  return (
    <div className="bg-[#f7f8fa] min-h-[100vh]">
      <div>
        {sidebarData.map(({ name, Icon, link }, index) => (
          <div
            key={name}
            onClick={() => handleCurrentTab(index, link)}
            className={`flex items-center px-2 py-3 cursor-pointer ${
              currentTab === index ? "text-[#1461e1]" : "text-[#4f5461]"
            }  ${currentTab === index ? "border border-[#1461e1]" : "border"} ${
              currentTab === index ? "bg-[#e4ecff]" : ""
            }`}
          >
            <div className="mx-1">
              <Icon />
            </div>
            <div className="mx-2 align-middle">
              <p>{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
