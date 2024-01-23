import { useContext, useEffect, useRef, useState } from "react";
// import { SocketContext } from "../socketContext";

export default function VideoScreen() {
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
