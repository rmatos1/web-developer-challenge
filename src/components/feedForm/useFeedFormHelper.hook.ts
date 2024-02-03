import { useState, ChangeEvent, FormEvent, useContext, useMemo, Dispatch, SetStateAction } from "react";
import { MIN_CHARS_NAME, MIN_CHARS_MSG } from "../../constants";
import { IFeed } from "../../types";
import { FeedsContext } from "../../context";

interface IUseFeedFormHelper {
    formData: IFeed;
    isValidData: boolean;
    onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFileInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onEraseDataClick: () => void;
    onImgRemove: () => void;
    fileUploadErrorMsg: string; 
    setFileUploadErrorMsg: Dispatch<SetStateAction<string>>;
}

export const useFeedFormHelper = (): IUseFeedFormHelper => {

    const { feeds, setFeeds } = useContext(FeedsContext);

    const [formData, setFormData] = useState<IFeed>({
        img: "",
        name: "",
        msg: ""
    });
    const [fileUploadErrorMsg, setFileUploadErrorMsg] = useState("")

    const isValidData = useMemo(() => {

        const isValidName = formData.name.length >= MIN_CHARS_NAME;
        const isValidMSg = formData.msg.length >= MIN_CHARS_MSG;

        return !!formData.img.length && isValidName && isValidMSg;

    }, [formData])

    const handleInputOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value} = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleFileInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { files } = e.target;
    
        if(files && files.length > 0) {

            const reader = new FileReader();

            reader.onloadend = () => {
        
                const base64Img = reader.result as string;

                if(base64Img.match(/data:image\//)) {
                    setFormData((prevData) => ({
                        ...prevData,
                        img: base64Img
                    }));
                } else {
                    setFileUploadErrorMsg("Formato de arquivo inválido")
                }
            };

            reader.readAsDataURL(files[0]);
        }
    };

    const handleRemoveImgOnClick = () => {
        setFormData((prevData) => ({
            ...prevData,
            img: ""
        }));
    }

    const handleFormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        const { img, name, msg } = formData;

        const updatedFeeds = [...feeds];

        updatedFeeds.unshift({
            id: new Date().getTime().toString() + btoa(name),
            img,
            name,
            msg
        })

        setFeeds(updatedFeeds);

        handleEraseDataOnClick();
    }

    function handleEraseDataOnClick() {
        setFormData({
            img: "",
            name: "",
            msg: ""
        })

        return false;
    }

    return {
        formData,
        isValidData,
        onInputChange: handleInputOnChange,
        onFileInputChange: handleFileInputOnChange,
        onFormSubmit: handleFormOnSubmit,
        onEraseDataClick: handleEraseDataOnClick,
        onImgRemove: handleRemoveImgOnClick,
        fileUploadErrorMsg, 
        setFileUploadErrorMsg
    }
}