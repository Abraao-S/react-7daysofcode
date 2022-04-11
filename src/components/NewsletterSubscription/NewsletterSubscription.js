// import './NewsletterSubscription.css';
import { StyledNewsletterSubscription, StyledNewsletterSubscriptionContainer, NewsletterForm, NewsletterFormFieldGroup } from './styles';

export default function NewsletterSubscription() {
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
                <NewsletterForm action='/'>
                    <NewsletterFormFieldGroup>
                        <input type='email' placeholder='Insira seu e-mail' />
                        <button>
                            Assinar newsletter
                        </button>
                    </NewsletterFormFieldGroup>
                </NewsletterForm>
            </StyledNewsletterSubscriptionContainer>
        </StyledNewsletterSubscription>
    );
}
