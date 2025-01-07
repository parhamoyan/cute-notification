import { NotificationStatus } from "./NotificationStatus";

export interface NotificationData {
  status: NotificationStatus;
  time: string;
  date: string;
  transactionId: string;
}