import { StyledFileInput, ImgUploadedContainer, InputImgContainer, EmptyImgIcon, DeleteButton, DeleteIcon } from "./inputImg.styles";
import { FeedImg } from "../styledComponents";
import { icons } from "../../assets";
import { useInputImgHelper, IInputImg } from "./useInputImgHelper";

export const InputImg = ({ file, onFileChange, onFileRemove }: IInputImg) => {

    const { fileInputRef, onImgContainerClick } = useInputImgHelper();

    return(
        <>
            {
                file ? (
                    <ImgUploadedContainer>
                    
                        <FeedImg
                            data-testid="feed-img" 
                            alt=""
                            src={file}
                        />
                    
                        <DeleteButton onClick={onFileRemove} data-testid="delete-button">
                            <DeleteIcon alt="delete-icon" src={icons.deleteIcon} />
                        </DeleteButton>

                    </ImgUploadedContainer>
                ) : (
                    <>
                        <StyledFileInput
                            data-testid="input-file" 
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                        />
                    
                        <InputImgContainer onClick={onImgContainerClick} data-testid="empty-img">
                            <EmptyImgIcon src={icons.emptyImg} alt="" />
                        </InputImgContainer>
                    </>
                )
            }
        </>
    )
}