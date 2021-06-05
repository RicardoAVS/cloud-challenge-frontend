import React from 'react';
import { ContactContainer, ContactIcon } from './contact.styles';

interface Props {
    iconClass: string,
    urlLink?: string,
    name: string,
}

const Contact: React.FC<Props> = ({iconClass, urlLink, name}) => (
    <ContactContainer>
        <ContactIcon>
            <i className={iconClass}></i>
            <a href={urlLink} target="_blank"
            >{name}</a>
        </ContactIcon>
    </ContactContainer>
)

export default Contact;