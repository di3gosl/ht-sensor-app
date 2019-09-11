import { store } from 'react-notifications-component';

export const showNotification = (title, message, type) => {
    store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
}
