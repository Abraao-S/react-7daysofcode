import { StyledNewsletterSubscription, StyledNewsletterSubscriptionContainer, StyledNewsletterForm, StyledNewsletterFormFieldGroup } from './styles';
import { useState } from 'react';

export default function NewsletterSubscription() {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleClick = () => {
        alert('CLICKED!');
        setIsButtonEnabled(!isButtonEnabled);
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
                <StyledNewsletterForm action='/'>
                    <StyledNewsletterFormFieldGroup>
                        <input type='email' placeholder='Insira seu e-mail' />
                        <button onClick={handleClick}>
                            Assinar newsletter
                        </button>
                    </StyledNewsletterFormFieldGroup>
                </StyledNewsletterForm>
            </StyledNewsletterSubscriptionContainer>
        </StyledNewsletterSubscription>
    );
}
