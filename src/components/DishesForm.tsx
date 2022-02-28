import { FC } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import InputWrapper from "../UI/InputWrapper";
import Select from "../UI/Select";
import SubmitButton from "../UI/SubmitButton";

import { Form, Field } from 'react-final-form';

const StyledForm = styled.form`
    max-width: 500px;
    margin: 0 auto;
    margin-top: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Dishesform: FC = () => {
    const onSubmit = async (values: any) => {
        console.log(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <label>First Name</label>
                        <Field name='name'>
                            {props => (
                                <Input id='name' type='text' onChange={props.input.onChange} value={props.input.value}/>
                            )}
                        </Field>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Prepaparation Time</label>
                        <Field name='preparation_time'>
                            {props => (
                                <Input id='preparation_time' type='time' step='1' onChange={props.input.onChange} value={props.input.value}/>
                            )}
                        </Field>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Type</label>
                        <Field name='type'>
                            {props => (
                                <Select id='type' name='type' value={props.input.value} onChange={props.input.onChange}>
                                    <option value={'pizza'}>pizza</option>
                                    <option value={'soup'}>soup</option>
                                    <option value={'sandwich'}>sandwich</option>
                                </Select>
                            )}
                        </Field>
                    </InputWrapper>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </StyledForm>
            )}
        />
    )
};

export default Dishesform;