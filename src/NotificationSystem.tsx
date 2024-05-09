import React, { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const NotificationSystem: React.FC = () => {
  const [status, setStatus] = useState("");

  const sendNotification = async (message: string) => {
    try {
      await addDoc(collection(db, "notifications"), {
        message,
        read: false,
        timestamp: new Date()
      });
      console.log("Notification sent with message:", message);
      setStatus("Notification sent!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Error sending notification");
    }
  };
  

  return (
    <div>
        <style>
        {`
          button {
            background-color: #4CAF50;
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
            margin: 10px; 
            font-size: 16px;         
            transition: background-color 0.3s; 
          }
          button:hover {
            background-color: #45a049; 
          }
        `}
      </style>
      <button onClick={() => sendNotification("Notification 1")}>Send Notification 1</button>
      <button onClick={() => sendNotification("Notification 2")}>Send Notification 2</button>
      <button onClick={() => sendNotification("Notification 3")}>Send Notification 3</button>
      <p>{status}</p>
    </div>
  );
};

export default NotificationSystem;
