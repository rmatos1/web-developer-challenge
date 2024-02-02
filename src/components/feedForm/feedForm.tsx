import { InputImg } from "../inputImg";
import { useFeedFormHelper } from "./useFeedFormHelper.hook";
import { FormContainer, StyledInput, StyledTextArea, FormBottom } from "./feedForm.styles";
import { StyledButton, StyledLink } from "../styledComponents";

export const FeedForm = () => {

    const { 
        formData, 
        isValidData, 
        onInputChange, 
        onFileInputChange,
        onFormSubmit, 
        onEraseDataClick,
        onImgRemove,
        fileUploadErrorMsg, 
        setFileUploadErrorMsg
    } = useFeedFormHelper();

    return(
        <FormContainer onSubmit={onFormSubmit} data-testid="feed-form">

            <InputImg 
                file={formData.img}
                onFileChange={onFileInputChange}
                onFileRemove={onImgRemove}
                fileUploadErrorMsg={fileUploadErrorMsg}
                setFileUploadErrorMsg={setFileUploadErrorMsg}
            />

            <StyledInput 
                data-testid="input-name"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={onInputChange}
            />

            <StyledTextArea
                data-testid="input-msg" 
                name="msg"
                placeholder="Mensagem"
                value={formData.msg}
                onChange={onInputChange}
            />

            <FormBottom>

                <StyledLink onClick={onEraseDataClick} data-test="erase-data">Descartar</StyledLink>

                <StyledButton $isDisabled={!isValidData}>Publicar</StyledButton>

            </FormBottom>

        </FormContainer>
    )
}
