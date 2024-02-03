import { describe, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputImg } from '../inputImg';
import { IInputImg } from '../useInputImgHelper';
import { feedTest } from '../../../constants';

const defaultProps = {
    file: "",
    onFileChange: jest.fn(),
    onFileRemove: jest.fn(),
    fileUploadErrorMsg: "",
    setFileUploadErrorMsg: jest.fn(),
}

const setup = (componentProps?: IInputImg): JSX.Element => {

    const baseProps = componentProps || defaultProps;

    return(
        <InputImg {...baseProps} />
    );
};

describe('<InputImg />', () => {
  test('should render the empty image container and call setFileUploadErrorMsg', () => {
    render(setup());

    const emptyImg = screen.getByTestId("empty-img");

    expect(emptyImg).toBeDefined()

    fireEvent.click(emptyImg)

    expect(defaultProps.setFileUploadErrorMsg).toHaveBeenCalled()
  });

  test('should call onFileChange', () => {
    render(setup());

    const file = new File([''], 'test.jpg', { type: 'image/jpeg' });

    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;

    fireEvent.change(inputFile, { target: { files: [file] } })

    expect(defaultProps.onFileChange).toHaveBeenCalled()
  });

  test("should render the uploaded image" , () => {
    render(setup({ ...defaultProps, file: feedTest.img }))

    const feedImg = screen.getByTestId("feed-img");

    expect(feedImg).toBeDefined();
  })

  test("should call onFileRemove" , () => {
    render(setup({ ...defaultProps, file: feedTest.img }))

    const removeImg = screen.getByTestId("remove-img");

    fireEvent.click(removeImg)

    expect(defaultProps.onFileRemove).toHaveBeenCalled()
  })

  test("should render the specified error message" , () => {

    const INVALID_FILE = "invalid file";

    render(setup({ ...defaultProps, fileUploadErrorMsg: INVALID_FILE }))

    const errorMsg = screen.getByText(INVALID_FILE);

    expect(errorMsg).toBeDefined()
  })
});
