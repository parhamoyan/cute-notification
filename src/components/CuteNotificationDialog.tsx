import React from "react";
import "./style.css";

import { BellIcon } from "../resources/icons/BellIcon";
import { PlusIcon } from "../resources/icons/PlusIcon";

import { NotificationStatus } from "../types/NotificationStatus";

import Notification from "./Notification";
import { useState, useRef, useEffect } from "react";
import { NotificationData } from "../types/NotificationData";

export default function CuteNotificationDialog() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(56); // Initial height when not expanded

  const rootContainerRef = useRef<HTMLDivElement | null>(null);
  const topFrameContainerRef = useRef<HTMLDivElement | null>(null);

  const cuteNotifPadding: number = 20;

  const notifications: NotificationData[] = [
    {
      status: NotificationStatus.Canceled,
      time: "15 minutes ago",
      date: "Sat, May 7, 2022",
      transactionId: "123-456-789",
    },
    {
      status: NotificationStatus.Disputed,
      time: "12 minutes ago",
      date: "Sat, May 7, 2022",
      transactionId: "123-456-789",
    },
  ];

  useEffect(() => {
    if (isExpanded && rootContainerRef.current) {
      const conentHeight = rootContainerRef.current.scrollHeight;
      setHeight(conentHeight - cuteNotifPadding * 2);
    } else {
      setHeight(56);
    }
  }, [isExpanded, notifications.length]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={rootContainerRef}
      className={`cute-notif ${isExpanded ? "expanded" : ""}`}
      style={{ height: `${height}px`, padding: `${cuteNotifPadding}px` }}
    >
      <div className="top-frame" ref={topFrameContainerRef}>
        <div className={`bell-icon-frame`}>
          <BellIcon />
        </div>
        <div className="right-container">
          <div className="text-container">
            <div className="title">{notifications.length} New Notifications</div>
            <div className={`message`}>You've got new transaction status</div>
          </div>
          <button className={`plus-icon`} onClick={toggleExpand}>
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className="notification-container">
        {notifications.map((notification, index) => (
          <Notification notification={notification} />
        ))}
      </div>
    </div>
  );
}
