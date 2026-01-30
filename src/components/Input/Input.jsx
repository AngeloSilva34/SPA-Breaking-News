import { InputSpace, TextSpace } from "./InputStyled";

export function Input({ type, placeholder, name, register, isInput = true, disabled = false }) {
    const inputProps = {
        type, 
        placeholder, 
        ...register(name),
        disabled
    };

    return (
        <>
            {isInput ? (
                <InputSpace {...inputProps} />
            ) : (
                <TextSpace {...inputProps} />
            )}
        </>
    );
}