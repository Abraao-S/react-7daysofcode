// import './App.css';
// import './components/Body/body.css';
// import './components/Body/reset.css';
import {GlobalStyle} from './components/Body/GlobalStyle';
import Menu from './components/Menu/Menu.js';
import NewsletterSubscription from './components/NewsletterSubscription/NewsletterSubscription.js';

export default function HomePage() {
  return (
    <>
    <GlobalStyle />
      <main>
        <Menu />
        <NewsletterSubscription />
      </main>
    </>
  );
}