import { InputImg } from "../inputImg";
import { useFeedFormHelper } from "./useFeedFormHelper.hook";
import { FormContainer, StyledInput, StyledTextArea, FormBottom } from "./feedForm.styles";
import { StyledButton, StyledLink } from "../styledComponents";

export const FeedForm = () => {

    const { 
        formData, 
        isButtonDisabled, 
        onInputChange, 
        onFileInputChange,
        onFormSubmit, 
        onEraseDataClick,
        onImgRemove 
    } = useFeedFormHelper();

    return(
        <FormContainer onSubmit={onFormSubmit} data-testid="feed-form">

            <InputImg 
                file={formData.img}
                onFileChange={onFileInputChange}
                onFileRemove={onImgRemove}
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

                <StyledButton $isDisabled={isButtonDisabled}>Publicar</StyledButton>

            </FormBottom>

        </FormContainer>
    )
}
