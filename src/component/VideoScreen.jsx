import { useEffect, useRef, useState } from "react";
import SimplePeer from "simple-peer/simplepeer.min.js";
import { io } from "socket.io-client";

export default function VideoScreen() {
  const [stream, setStream] = useState();
  const [me, setMe] = useState();

  const myVideo = useRef();
  // this is the sample command for practice the pull request in command line
  useEffect(() => {
    const socket = io("http://localhost:3000");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;

        const peer = new SimplePeer({
          initiator: false,
          trickle: false,
          stream,
        });

        socket.emit("stream", JSON.stringify(currentStream));
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    return () => {
      socket.disconnect();
    };
  }, []);

  // const startStream = () => {
  //   const peer = new Peer({ initiator: false, trickle: false, stream });
  //   peer.on("signal", (data) => {
  //     console.log(data);
  //     socket.emit("startStream", { stream: data });
  //   });
  //   peer.signal();
  // };

  return (
    <div>
      {stream && (
        <div className="p-[10px] grid  border-2 m-[10px]">
          <div className="grid-cols-6 lg:grid-cols-12 ">
            <video playsInline muted ref={myVideo} autoPlay className="" />
          </div>
        </div>
      )}
    </div>
  );
}
