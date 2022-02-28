import { FC } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import InputWrapper from "../UI/InputWrapper";
import Select from "../UI/Select";
import SubmitButton from "../UI/SubmitButton";

import { Form, Field } from 'react-final-form';
import type Dish from "../modals/dish-type";

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
    const required = (value: any) => (value ? undefined : 'Required')

    const onSubmit = async (values: Dish) => {
        console.log(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <label>Name</label>
                        <Field name='name' validate={required}>
                            {props => (
                                <>
                                    <Input id='name' type='text' onChange={props.input.onChange} value={props.input.value} />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Prepaparation Time</label>
                        <Field name='preparation_time' validate={required}>
                            {props => (
                                <>
                                    <Input id='preparation_time' type='time' step='1' onChange={props.input.onChange} value={props.input.value} />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Type</label>
                        <Field name='type' validate={required}>
                            {props => (
                                <>
                                    <Select id='type' name='type' value={props.input.value} onChange={props.input.onChange}>
                                        <option />
                                        <option value={'pizza'}>pizza</option>
                                        <option value={'soup'}>soup</option>
                                        <option value={'sandwich'}>sandwich</option>
                                    </Select>
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </InputWrapper>

                    {values.type === 'pizza' &&
                        <>
                            <InputWrapper>
                                <label>Number of slices</label>
                                <Field name='no_of_slices' validate={required}>
                                    {props => (
                                        <>
                                            <Input id='no_of_slices' type='number' onChange={props.input.onChange} value={props.input.value} />
                                            {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                            </InputWrapper>

                            <InputWrapper>
                                <label>Diameter</label>
                                <Field name='diameter' validate={required}>
                                    {props => (
                                        <>
                                            <Input id='diameter' type='number' onChange={props.input.onChange} value={props.input.value} />
                                            {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                            </InputWrapper>
                        </>
                    }

                    {values.type === 'soup' &&
                        <InputWrapper>
                            <label>Spiciness</label>
                            <Field name='spiciness_scale' validate={required}>
                                {props => (
                                    <>
                                        <Select id='spiciness_scale' name='spiciness_scale' value={props.input.value} onChange={props.input.onChange}>
                                            <option />
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                        </Select>
                                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                    </>
                                )}
                            </Field>
                        </InputWrapper>
                    }

                    {values.type === 'sandwich' &&
                        <InputWrapper>
                            <label>Number of slices of bread</label>
                            <Field name='slices_of_bread' validate={required}>
                                {props => (
                                    <>
                                        <Input id='slices_of_bread' type='number' onChange={props.input.onChange} value={props.input.value} />
                                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                    </>
                                )}
                            </Field>
                        </InputWrapper>
                    }

                    <SubmitButton type='submit'>Submit</SubmitButton>
                </StyledForm>
            )}
        />
    )
};

export default Dishesform;