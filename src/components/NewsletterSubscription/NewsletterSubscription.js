import { StyledNewsletterSubscription, StyledNewsletterSubscriptionContainer, StyledNewsletterForm, StyledNewsletterFormFieldGroup, StyledNewsletterSubscriptionButton, StyledNewsletterFormInput } from './styles';
import { useEffect, useState } from 'react';

export default function NewsletterSubscription() {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [formContent, setFormContent] = useState('');

    // checks for each formContent change and enables the button when there is a valid email!
    useEffect( () => {
        if(isValidEmail(formContent)) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [formContent]);

    const handlesInputChange = e => {
        setFormContent(e.target.value);
    }
    
    const isValidEmail = (email) => {
        if ( 
            (email.length < 5) ||  
            (email.split("").filter((x) => x === "@").length !== 1 ) || 
            (email.indexOf(".") === -1)
        ) {
           return false;
        } else {
            return true;
        }
    }

    const handleClick = () => {
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${formContent}`);
    }
    
    return (
        <StyledNewsletterSubscription>
            <StyledNewsletterSubscriptionContainer>
                <h1>
                    Sua casa com as
                    <br />
                    <strong>
                        melhores
                        <br />
                        plantas
                    </strong>
                </h1>
                <p>
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                </p>
                <StyledNewsletterForm 
                    action='/'
                >
                    <StyledNewsletterFormFieldGroup>
                        <StyledNewsletterFormInput 
                            type='email' 
                            placeholder='Insira seu e-mail'
                            value={formContent}
                            onChange={handlesInputChange}
                        />
                        <StyledNewsletterSubscriptionButton 
                            type="button"
                            onClick={handleClick}
                            $enabled={isButtonEnabled}
                        >
                            Assinar newsletter
                        </StyledNewsletterSubscriptionButton>
                        {/* <span>error message here</span> */}
                    </StyledNewsletterFormFieldGroup>
                </StyledNewsletterForm>
            </StyledNewsletterSubscriptionContainer>
        </StyledNewsletterSubscription>
    );
}
