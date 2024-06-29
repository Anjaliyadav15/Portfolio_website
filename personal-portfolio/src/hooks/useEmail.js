import { Resend } from 'resend';
const useEmail = () => {


    const sendEmail = () => {

        const resend = new Resend('re_9f1hyP8S_KXGaHDCwq4yMh5Zxzr2DpoH1');

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'yyanjali15@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
    }


    return {
        sendEmail
    }
}

export default useEmail