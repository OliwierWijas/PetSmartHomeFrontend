import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5172/notificationHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
    })
    .withAutomaticReconnect()
    .build();

connection.start()
    .then(() => console.log("✅ Notification SignalR Connected!"))
    .catch(err => console.error("❌ Notification SignalR Connection Error:", err));

connection.on("ReceiveMessage", (message) => {
    console.log("🔔 Notification received:", message);
    alert(`🔔 Notification: ${message}`);
});
