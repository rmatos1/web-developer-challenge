import { StyledFileInput, ImgUploadedContainer, InputImgContainer, EmptyImgIcon, RemoveImg } from "./inputImg.styles";
import { FeedImg, Icon } from "../styledComponents";
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
                    
                        <RemoveImg onClick={onFileRemove} data-testid="remove-img">
                            <Icon alt="remove-img" src={icons.removeImg} />
                        </RemoveImg>

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