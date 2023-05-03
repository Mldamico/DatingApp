export interface Message {
  id: number;
  senderId: number;
  senderUsername: string;
  senderPhotoUrl: null;
  recipientId: number;
  recipientUsername: string;
  recipientPhotoUrl: null;
  content: string;
  dateRead: Date;
  messageSent: Date;
}
