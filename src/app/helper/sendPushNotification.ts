import axios from 'axios';

const ONESIGNAL_APP_ID = 'YOUR_ONESIGNAL_APP_ID';
const ONESIGNAL_API_KEY = 'YOUR_ONESIGNAL_API_KEY';

interface INotificationPayload {
  playerIds: string[]; // List of OneSignal Player IDs to send notification to
  message: string; // The message body of the notification
  heading?: string; // The title/heading of the notification
  url?: string; // Optional URL to open when notification is clicked
  data?: object; // Optional additional data to send with the notification
}

const sendNotification = async ({
  playerIds,
  message,
  heading = 'Notification', // Default heading
  url,
  data,
}: INotificationPayload) => {
  if (playerIds.length === 0) {
    console.error('No Player IDs provided.');
    return;
  }

  try {
    const payload = {
      app_id: ONESIGNAL_APP_ID,
      include_player_ids: playerIds, // Send notification to these Player IDs
      contents: { en: message },
      headings: { en: heading },
      url, // Optional URL to open on notification click
      data, // Optional data (e.g., order info)
    };

    const response = await axios.post(
      'https://onesignal.com/api/v1/notifications',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${ONESIGNAL_API_KEY}`,
        },
      },
    );

    console.log('Notification sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

export default sendNotification;
