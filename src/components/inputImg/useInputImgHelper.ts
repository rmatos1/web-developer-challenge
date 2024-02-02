import { ChangeEvent, Dispatch, RefObject, SetStateAction, useRef } from "react";

export interface IInputImg {
    file: string;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFileRemove: () => void;
    fileUploadErrorMsg: string; 
    setFileUploadErrorMsg:  Dispatch<SetStateAction<string>>;
}

interface IUseInputImgHelper {
    fileInputRef: RefObject<HTMLInputElement>;
    onImgContainerClick: () => void;
}

export const useInputImgHelper = (setFileUploadErrorMsg: Dispatch<SetStateAction<string>>): IUseInputImgHelper => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImgContainerOnClick = () => {
        setFileUploadErrorMsg("");
        fileInputRef.current?.click();
    }

    return {
        fileInputRef,
        onImgContainerClick: handleImgContainerOnClick,
    }
}