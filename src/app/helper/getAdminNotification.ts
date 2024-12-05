// import Notification from '../modules/notification/notification.model';
// import { USER_ROLE } from '../modules/user/user.constant';

// const getAdminNotificationCount = async () => {
//   const unseenCount = await Notification.countDocuments({
//     seen: false,
//     receiver: USER_ROLE.superAdmin,
//   });
//   const notifications = await Notification.find({
//     receiver: USER_ROLE.superAdmin,
//   });
//   return { notifications, unseenCount };
// };

// export default getAdminNotificationCount;
