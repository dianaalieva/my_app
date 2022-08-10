import React from "react";

import whatsapp from '../../images/logos_whatsapp.svg'
import telegram from '../../images/logos_telegram.svg'
import post from '../../images/gmail.svg'
import phone from '../../images/icon-park_phone-telephone.svg'
import {
    Contact,
    BlockLink,
    BlockText
} from './style'
import { Contain } from '../../components/container'

export const Contacts = () => {
    return (
        <div>
                <BlockText>
                    Если Вас заинтересовало моё резюме, Вы можете связаться со мной по активным ссылкам, представленным ниже. 
                    Я открыта к любым предложениям и надеюсь на дальнейшее сотрудничество.
                </BlockText>
            <Contain>
                <BlockLink>
                    <Contact href="whatsapp://send?phone=79142667993">
                        <img src={whatsapp} alt="whatsapp"/>
                        <p>+7(914)266-79-93</p>
                    </Contact>
                </BlockLink>
                <BlockLink>
                    <Contact href="https://t.me/Didijia">
                        <img src={telegram} alt="telegram"/>
                        <p>Didijia</p>
                    </Contact>
                </BlockLink>
                <BlockLink>
                    <Contact href="mailto:didilina25@gmail.com">
                        <img src={post} alt="post"/>
                        <p>didilina25@gmail.com</p>
                    </Contact>
                </BlockLink>
                <BlockLink>
                    <Contact href="tel:+79142667993">
                        <img src={phone} alt="phone"/>
                        <p>+7(914)266-79-93</p>
                    </Contact>
                </BlockLink>
            </Contain>
        </div>
    )
}