/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
// import peer from "simple-peer";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  return <SocketContext.Provider>{children}</SocketContext.Provider>;
};

export default SocketProvider;
