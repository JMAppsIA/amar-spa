import styled from 'styled-components';

export const StyledBadge = styled.span`
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    color: #333333;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 10px;
    background-color: ${({success, warning, danger}) => (success ? '#B8E8D1': (
        warning ? '#8D482F' : (
                        danger ? 'rgb(220, 53, 69)' : 'none'
                )
        )
    )};
`;