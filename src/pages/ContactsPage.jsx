import { Content } from 'antd/es/layout/layout';

import { TitleComponent } from '../components/TitleComponent';
import { BaseLink } from '../components/BaseLink';

function ContactsPage() {
  return (
    <Content
      style={{
        padding: '20px 50px',
      }}
    >
      <TitleComponent level={2}>Contacts page</TitleComponent>
      <section className="flexCenter contentWrapper">
        <ul className="flexCenter contactsList">
          <li>
            <h2>Location</h2>
            Saint-Petersburg, Russia
          </li>
          <li>
            <h2>Phone / WhatsApp</h2>
            <BaseLink href="tel:+79641872190">+7 (964) 187-21-90</BaseLink>
          </li>
          <li>
            <h2>Telegram</h2>
            <BaseLink href="https://t.me/KamajorQA">@KamajorQA</BaseLink>
          </li>
          <li>
            <h2>Email</h2>
            <BaseLink href="mailto:kamajor@mail.ru">kamajor@mail.ru</BaseLink>
          </li>
        </ul>
      </section>
    </Content>
  );
}

export { ContactsPage };
