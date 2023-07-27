import {useCallback, useEffect, useRef} from "react";
import useToggle from "../../hooks/useToggle";

interface ToastItemProps {
    onDone: ()=>void,
    message: string,
    duration: number,
    bgColor: string
}

const ToastItem = ({
    message,
    duration=3000,
    onDone,
    bgColor
               }:ToastItemProps) => {
    const [isShow, setIsShow] = useToggle();
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const onDoneRef = useRef(onDone);

    const disappear = useCallback(() => {
        setIsShow();
        setTimeout(() => {
            onDoneRef.current?.();
        },300)
    },[]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            disappear();
        }, duration);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    },[duration, disappear])


    return (
        <div>
            {message}
        </div>
    )
}

export default ToastItem;
