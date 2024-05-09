import React from "react";
import { db } from "./firebase-config";
import { collection, query, where, doc, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const ViewNotifications: React.FC = () => {
  const notificationsQuery = query(collection(db, "notifications"), where("read", "==", false));
  const [notifications, loading, error] = useCollection(notificationsQuery);

  const markAsRead = async (id: string) => {
    const notificationDoc = doc(db, "notifications", id);
    await updateDoc(notificationDoc, { read: true });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Notifications</h2>
      {notifications?.docs.map((doc) => (
        <div key={doc.id} style={{ padding: "10px", margin: "5px", border: "1px solid #ddd", borderRadius: "5px" }}>
          <p>{doc.data().message}</p>
          <button onClick={() => markAsRead(doc.id)}>Mark as Read</button>
        </div>
      ))}
    </div>
  );
};

export default ViewNotifications;
