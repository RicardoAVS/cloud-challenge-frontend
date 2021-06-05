import React from 'react';
import { FooterContainer, CountTitle, CountBox, ViewCountContainer } from './footer.styles';

interface Props {
    count: any
}

const Footer: React.FC<Props> = ({ count }) => {
    let countList = count.split('');
    console.log(countList)
    return (
        <FooterContainer>
        <CountTitle>
            <p>View Count</p>
        </CountTitle>
        <ViewCountContainer>
            <CountBox>
                <p id="hundred">{countList[0]}</p>
            </CountBox>
            <CountBox>
                <p id="tenth">{countList[1]}</p>
            </CountBox>
            <CountBox>
                <p id="ones">{countList[2]}</p>
            </CountBox>
        </ViewCountContainer>
    </FooterContainer>
    )
}

export default Footer;