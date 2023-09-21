import telegram from '../assets/icons/telegram.svg';
import gitHub from '../assets/icons/gitHub.svg';
import linkedIn from '../assets/icons/linkedIn.svg';

import { BaseLink } from './BaseLink';

function Socials() {
  return (
    <ul className="flexCenter socials">
      <li>
        <BaseLink href="https://t.me/KamajorQA">
          <img src={telegram} alt="Telegram Link" className="socialIcon" />
        </BaseLink>
      </li>
      <li>
        <BaseLink href="https://github.com/KamajorQA">
          <img src={gitHub} alt="GitHub Link" className="socialIcon" />
        </BaseLink>
      </li>
      <li>
        <BaseLink href="https://www.linkedin.com/in/KamajorQA">
          <img src={linkedIn} alt="LinkedIn Link" className="socialIcon" />
        </BaseLink>
      </li>
    </ul>
  );
}

export { Socials };
