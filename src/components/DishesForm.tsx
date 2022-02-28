import { FC } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import InputWrapper from "../UI/InputWrapper";
import Select from "../UI/Select";
import SubmitButton from "../UI/SubmitButton";

const Form = styled.form`
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
    return (
        <Form>
            <InputWrapper>
                <label htmlFor='name'>Name</label>
                <Input id='name' type='text'/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor='name'>Preparation time</label>
                <Input id='name' type='time' step='1'/>
            </InputWrapper>
            <InputWrapper>
                <label htmlFor='type'>Type</label>
                <Select id='type'>
                    <option value={'pizza'}>pizza</option>
                    <option value={'soup'}>soup</option>
                    <option value={'sandwich'}>sandwich</option>
                </Select>
            </InputWrapper>
            <SubmitButton type='submit'>Submit</SubmitButton>
        </Form>
    )
};

export default Dishesform;