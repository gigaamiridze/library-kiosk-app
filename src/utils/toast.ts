import { ALERT_TYPE, Toast } from 'react-native-alert-notification';

type ToastType = ALERT_TYPE.SUCCESS | ALERT_TYPE.DANGER | ALERT_TYPE.WARNING; 

export const showToast = (type: ToastType, title: string, textBody: string) => {
  Toast.show({
    type,
    title,
    textBody,
    autoClose: 2000,
  });
}
