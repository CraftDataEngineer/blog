import React from 'react';

const appendScript = (scriptToAppend) => {
    removeScript(scriptToAppend);
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}

const removeScript = (scriptToremove) => {
    let allsuspects = document.getElementsByTagName("script");
    for (let i = allsuspects.length; i >= 0; i--) {
        if (allsuspects[i] && allsuspects[i].getAttribute("src") !== null
            && allsuspects[i].getAttribute("src").indexOf(`${scriptToremove}`) !== -1) {
            allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
    }
}

const AXEPTIO_URL = "//static.axept.io/sdk-slim.js"
const HOTJAR_URL = "https://static.hotjar.com/c/hotjar-3103556.js?sv=6"
const GOOGLE_ANALYTICS_URL = "https://www.googletagmanager.com/gtag/js?id=G-QY5XLW8D4B"

class CookieSetter extends React.Component {


    componentDidMount() {
        window.axeptioSettings = {
            clientId: "62f39ee8688bcf7220ae832d",
            cookiesVersion: "dataguru-fr",
        };
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QY5XLW8D4B');

        appendScript(AXEPTIO_URL);
        appendScript(GOOGLE_ANALYTICS_URL);

        void 0 === window._axcb && (window._axcb = []);
        window._axcb.push(function (axeptio) {
            axeptio.on("cookies:complete", function (choices) {

                if(choices.hotjar) {
                    appendScript(HOTJAR_URL);
                }
            })
        });

    }


    render() {
        return null
    }


}

export default CookieSetter;