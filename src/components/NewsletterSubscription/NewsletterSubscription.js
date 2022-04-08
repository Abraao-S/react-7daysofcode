import './NewsletterSubscription.css';

export default function NewsletterSubscription() {
    return (
        <div className='newsletterSubscription'>
            <div className='newsletterSubscription__container'>
                <div className='newsletterSubscription__container__text'>
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
                </div>

                <form className='form' action='/'>
                    <div className='form-field-group'>
                        <input type='email' placeholder='Insira seu e-mail' />
                        <button>
                            Assinar newsletter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
