import styled from 'styled-components';
import { Colors } from '../styledHelpers/Colors';

const InputWrapper = styled.div`    
    display: flex;
    flex-direction: column;
    
    & label {
        font-size: 0.9rem;
        color: ${Colors.mainThemeColor};
    }

    & span {
        font-size: 0.8rem;
        color: red;
    }
`;

export default InputWrapper;