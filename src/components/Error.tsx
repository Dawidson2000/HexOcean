import { FC } from "react";
import { useField } from "react-final-form";

export interface IError {
    name: string,
    errorMessage: any;
}
const Error: FC<IError> = (props) => {
    const {
        meta: { touched, error }
      } = useField(props.name, { subscription: { touched: true, error: true } });
      const fieldLevelError = touched && error ? <span>{error}</span> : null;
    return (
        <>
            {fieldLevelError}
            <span>{props.errorMessage && props.errorMessage[props.name]}</span>
        </>
    )
};
 
export default Error; 