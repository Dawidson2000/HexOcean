import { FC } from "react";
import { Field } from "react-final-form";

export interface ICondition {
    when: string,
    is: string | boolean | number,
}

const Condition: FC<ICondition> = (props) => {
    return (
        <Field name={props.when} subscription={{ value: true }}>
        {({ input: { value } }) => (value === props.is ? props.children : null)}
    </Field>
    ) 
};

export default Condition;