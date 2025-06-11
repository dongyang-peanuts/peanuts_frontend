import * as React from "react";
import { useEffect, useRef } from "react";

const VideoStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(new Image());

  useEffect(() => {
    const socket = new WebSocket("ws://kongback.kro.kr:8080/ws/video");
    socket.binaryType = "arraybuffer"; // 또는 'blob' — 서버 형식에 따라 다름

    socket.onopen = () => {
      console.log("WebSocket 연결됨");
    };

    socket.onmessage = (event) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const blob = new Blob([event.data], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);

      const image = imageRef.current;
      image.src = url;

      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url); // 메모리 누수 방지
      };
    };

    socket.onerror = (err) => {
      console.error("WebSocket 에러:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket 연결 종료");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={640}
        height={480}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default VideoStream;
