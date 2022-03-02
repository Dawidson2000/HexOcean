import { FC } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import InputWrapper from "../UI/InputWrapper";
import Select from "../UI/Select";
import SubmitButton from "../UI/SubmitButton";
import Condition from "./Condition";

import { Form, Field } from 'react-final-form';
import type Dish from "../modals/dish-type";
import useHttp from "../hooks/use-http";
import { LoadingScreen } from "../UI/LoadingScreen";
import Error from "./Error";
import { FormApi } from "final-form";

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
    const { error, isLoading, sendRequest: sendData } = useHttp();
    const errorMessage = JSON.parse(error);

    const onSubmit = async (values: Dish, form: FormApi<Dish, Partial<Dish>>, ) => {
        const applyResponse = (obj: any) => {
            form.restart();
        };
        
        const parsingValues = { ...values };

        for (const prop in parsingValues) {
            const actualProp = parsingValues[prop as keyof typeof values];
            const parsedProp = isNaN(actualProp as number) ? 
                actualProp : parseFloat(actualProp as string);
            (values as any)[prop] = parsedProp;
        }
        
       sendData({
            url: 'https://frosty-wood-6558.getsandbox.com:443/dishes',
            method: 'POST',
            body: values,
            headers: {
                'Content-Type': 'application/json',
            }
        }, applyResponse);
    };

    const required = (value: string | number) => {
        if(value === 0) return undefined;
        return value ? undefined : 'Required';
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit}) => (
                <StyledForm onSubmit={handleSubmit}>
                    <InputWrapper>
                        <label>Name</label>
                        <Field name='name' validate={required}>
                            {props => (
                                <>
                                    <Input id='name' type='text' onChange={props.input.onChange} value={props.input.value} />
                                    <Error name='name' errorMessage={errorMessage}/>
                                </>
                            )}
                        </Field>
                    </InputWrapper>
                    <InputWrapper>
                        <label>Preparation time</label>
                        <Field name='preparation_time' validate={required}>
                            {props => (
                                <>
                                    <Input id='preparation_time' type='time' step='1' onChange={props.input.onChange} value={props.input.value} />
                                    <Error name='preparation_time'  errorMessage={errorMessage}/>
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
                                        <option/>
                                        <option value={'pizza'}>🍕Pizza</option>
                                        <option value={'soup'}>🍛Soup</option>
                                        <option value={'sandwich'}>🥪Sandwich</option>
                                    </Select>
                                    <Error name='type' errorMessage={errorMessage}/>
                                </>
                            )}
                        </Field>
                    </InputWrapper>

                    <Condition when='type' is='pizza'>
                        <InputWrapper>
                            <label>Number of slices</label>
                            <Field name='no_of_slices' validate={required}>
                                {props => (
                                    <>
                                        <Input id='no_of_slices' type='number' onChange={props.input.onChange} value={props.input.value} />
                                        <Error name='no_of_slices' errorMessage={errorMessage}/>
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
                                        <Error name='diameter' errorMessage={errorMessage}/>
                                    </>
                                )}
                            </Field>
                        </InputWrapper>
                    </Condition>

                    <Condition when='type' is='soup'>
                        <InputWrapper>
                            <label>Spiciness</label>
                            <Field name='spiciness_scale' validate={required}>
                                {props => (
                                    <>
                                        <Input type='range' min={1} max={10} step={1} onChange={props.input.onChange} value={props.input.value} />
                                        <Error name='range' errorMessage={errorMessage}/>
                                    </>
                                )}
                            </Field>
                        </InputWrapper>
                    </Condition>
                    
                    <Condition when='type' is='sandwich'>
                        <InputWrapper>
                            <label>Number of slices of bread</label>
                            <Field name='slices_of_bread' validate={required}>
                                {props => (
                                    <>
                                        <Input id='slices_of_bread' type='number' onChange={props.input.onChange} value={props.input.value} />
                                        <Error name='slices_of_bread' errorMessage={errorMessage}/>
                                    </>
                                )}
                            </Field>
                        </InputWrapper>
                    </Condition>

                    <SubmitButton type='submit'>Submit</SubmitButton>
                    {isLoading && <LoadingScreen/>}
                </StyledForm>
            )}
        />
    )
};

export default Dishesform;