import { ChangeEvent, RefObject, useRef } from "react";

export interface IInputImg {
    file: string;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFileRemove: () => void;
}

interface IUseInputImgHelper {
    fileInputRef: RefObject<HTMLInputElement>;
    onImgContainerClick: () => void;
}

export const useInputImgHelper = (): IUseInputImgHelper => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImgContainerOnClick = () => {
        fileInputRef.current?.click();
    }

    return {
        fileInputRef,
        onImgContainerClick: handleImgContainerOnClick
    }
}