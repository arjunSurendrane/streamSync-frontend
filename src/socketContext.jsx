/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
// import peer from "simple-peer";

export const SocketContext = createContext();

const socket = io("http://localhost:5000");

const SocketProvider = ({ children }) => {
  return <SocketContext.Provider>{children}</SocketContext.Provider>;
};

export default SocketProvider;
