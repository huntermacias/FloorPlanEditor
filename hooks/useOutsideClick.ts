// useOutsideClick.ts
import { useEffect } from 'react';

interface IUseOutsideClick {
    ref: React.RefObject<HTMLElement>;
    callback: () => void;
    
}

export function useOutsideClick({ ref, callback }: IUseOutsideClick) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}
