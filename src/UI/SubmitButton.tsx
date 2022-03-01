import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';

const SubmitButton = styled.button`
    border: none;
    padding: 5px;
    outline: none;
    font-family: inherit;
    background-color: ${Colors.mainThemeColor};
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    height: 30px;
`;

export default SubmitButton;