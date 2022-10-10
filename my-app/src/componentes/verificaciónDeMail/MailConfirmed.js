import React from 'react';
import './MailConfirmed.css';
import logo from './mailAccepted.PNG';
import { useCookies} from 'react-cookie';

export function MailConfirmed(){
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    return (
        <div>
        </div>
      );

}