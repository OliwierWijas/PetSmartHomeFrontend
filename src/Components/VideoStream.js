import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

function VideoStream() {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5172/videoHub", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(() => console.log("✅ SignalR Connected!"))
            .catch(err => console.error("❌ SignalR Connection Error:", err));

        connection.on("ReceiveFrame", (base64Image) => {
            console.log("📷 Received Frame:", base64Image.substring(0, 50)); // Print first 50 chars
            if (!base64Image.startsWith("data:image")) {
                setImageSrc(`data:image/jpeg;base64,${base64Image}`);
            } else {
                setImageSrc(base64Image);
            }
        });

        return () => {
            console.log("🛑 Stopping SignalR connection...");
            connection.stop();
        };
    }, []);

    return <img src={imageSrc} alt="Live Video" />;
}

export default VideoStream;
