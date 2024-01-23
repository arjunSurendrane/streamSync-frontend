/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
// import peer from "simple-peer";

export const SocketContext = createContext();

const socket = io("http://localhost:5000");

const SocketProvider = ({ children }) => {
  const [stream, setStream] = useState();

  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
  }, []);

  return (
    <SocketContext.Provider value={{ stream, myVideo }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
