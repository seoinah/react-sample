import {useCallback, useEffect, useState} from "react";
import {getRandomString} from "../../utils/CommonUtil";
import ToastItem from "./ToastItem";

interface Toast {
    id: string,
    message: string,
    duration: number,
    bgColor: string
}

type BgColor = 'success' | 'error' | 'primary';

const Toast = () => {

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | State Variables
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Hooks
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    const [toasts, setToasts] = useState<Toast[]>([]);
    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Functions
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    const createToast = useCallback((message: string, duration: number, bgColor: string) => {
        const newItem = {
            id: getRandomString(),
            message,
            duration,
            bgColor
        };

        setToasts((prev) => [...prev, newItem]);
    },[]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((state) => state.id !== id));
    },[]);

    useEffect(() => {
        bind(createToast);
    }, [createToast]);
    /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    | Mark Up
    |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

    return (
        <div>
            {toasts.map((toast) => (
                <ToastItem
                    key={toast.id}
                    bgColor={toast.bgColor}
                    duration={toast.duration}
                    id={toast.id}
                    message={toast.message}
                    onDone={() => {
                        removeToast(toast.id);
                    }}
                />
            ))}
        </div>
    )
};

const initialize = () => {
    let createToastFn = null;

    const bind = (fn) => {
        createToastFn = fn;
    };

    const toast = (text, duration, bgColor) => {
        if (!createToastFn) return;

        createToastFn(text, duration, bgColor);
    };

    return { bind, toast };
};

const { bind, toast } = initialize();

export { bind, toast };

export default Toast;
