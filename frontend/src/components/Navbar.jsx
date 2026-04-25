import HandHeartIcon from '@icons/hand-heart.svg';
import FirstAidIcon from '@icons/first-aid.svg';
import DonateIcon from '@icons/donate.svg';
import HospitalIcon from '@icons/hospital.svg';
import MailIcon from '@icons/envelope.svg';
import UserIcon from '@icons/user.svg';
import GitHubIcon from '@icons/github-logo.svg';


export default function Navbar() {
  return (
    <>
      <nav class="topnav">
        <ul>
          <li><strong><a href="/" class="contrast">CareBridge <img src={HandHeartIcon} /></a></strong></li>
        </ul>
        
        <ul>
          <li><a href="/need-help">Need help <img src={FirstAidIcon} /></a></li>
          <li><a href="/requests">Donate <img src={DonateIcon} /></a></li>
          <li><a href="/login-hospital">Hospital Portal <img src={HospitalIcon} /></a></li>
          <li><a href="/email-us">Email Us <img src={MailIcon} /></a></li>
        </ul>
        
        <ul>
          <li>
            <a role="button" href="/login" class="">Login <img src={UserIcon} /></a>
          </li>
          <li>
            <a role="button" class="contrast" target="_blank" href="https://www.github.com/omar-hossam/CareBridge">
            <img src={GitHubIcon} /></a>
          </li>
        </ul>
        
      </nav>
      <hr />
    </>
  )
}
