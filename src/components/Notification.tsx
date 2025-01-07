import React, { JSX } from "react";
import "./style.css";
import { NotificationData } from "../types/NotificationData";

interface NotificationProps {
  notification: NotificationData;
}

export default function Notification({
  notification,
}: NotificationProps): JSX.Element {
  const capitalizeStatus = (status: string) =>
    status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div className="notif">
      <div className="top-frame">
        <span className={`status ${notification.status}`}>
          {capitalizeStatus(notification.status)}
        </span>
        <span className="time">{notification.time}</span>
      </div>

      <span className="date">
        <span style={{ color: "#808080" }}>Date: </span>
        {notification.date}
      </span>

      <div className="status-message">
        Transaction{" "}
        <span className="transaction-id" style={{ color: "#175CE5" }}>
          {notification.transactionId}
        </span>{" "}
        has been marked as {notification.status} by the user.
      </div>

      <button>Go to transaction</button>
    </div>
  );
}
