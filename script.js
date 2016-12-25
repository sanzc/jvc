// ==UserScript==
// @name         NLM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  nique la modération ISSOU
// @author       sanzo
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @require      http://code.jquery.com/jquery-3.1.1.min.js
// @match        http://www.jeuxvideo.com
// ==/UserScript==

/* jshint ignore:start */
var inline_src = ( < > < ![CDATA[
            /* jshint ignore:end */
            /* jshint esnext: false */
            /* jshint esversion: 6 */

            var post =
                ' <div class="bloc-message-forum" data-id="847312289"> <
                div class = "conteneur-message" >
                <
                div class = "bloc-avatar-msg" >
                <
                div class = "back-img-msg" >
                <
                div >
                <
                a class = "xXx"
            href = "//www.jeuxvideo.com/profil/y-craft?mode=infos"
            target = "_blank" > < img alt = "Y-Craft"
            class = "user-avatar-msg"
            src = "http://image.jeuxvideo.com/avatar-sm/y/0/y-craft-1459434268-6caf0114063d2995a455c9f83e3efa39.jpg" > < /a> <
            /div> <
            /div> <
            /div> <
            div class = "inner-head-content" >
            <
            div class = "bloc-header" >
            <
            a class = "xXx bloc-pseudo-msg text-user"
            href = "//www.jeuxvideo.com/profil/y-craft?mode=infos"
            target = "_blank" > Y - Craft < /a> <
            div class = "bloc-mp-pseudo" >
            <
            a class = "xXx"
            href = "//www.jeuxvideo.com/messages-prives/nouveau.php?all_dest=Y-Craft"
            target = "_blank" > < span class = "picto-msg-lettre"
            title = "Envoyer un message privé" > < span > MP < /span></span > < /a> <
            /div> <
            div class = "bloc-options-msg" >
            <
            span class = "picto-msg-quote"
            title = "Citer" > < span > Citer < /span></span > < span class = "picto-msg-tronche"
            data - action = "add"
            data - id - alias = "3828846"
            title = "Blacklister" > < span > Blacklister < /span></span > < span class = "picto-msg-exclam"
            data - cache = "false"
            data - modal = "afficher"
            data - selector = "/gta/signaler.php?type=1&amp;idc=847312289&amp;idp=51&amp;ida=3828846&amp;tv=1482621670&amp;hash=5cf15638f72374ee5c2dc2bece00bcbd"
            title = "Alerter" > < span > Alerte < /span></span >
            <
            /div> <
            div class = "bloc-date-msg" >
            <
            a class = "xXx lien-jv"
            href = "/y-craft/forums/message/847312289"
            target = "_blank" > 24 décembre 2016 à 17: 53: 58 < /a> <
            /div> <
            /div> <
            div class = "bloc-contenu" >
            <
            div class = "txt-msg text-enrichi-forum" >
            <
            p > Signal gouv pour ce jeu de mot < a data - def = "NOELSHACK"
            href = "http://www.noelshack.com/2016-43-1477424638-1472950231-xierdgzraz.png"
            target = "_blank" > < img alt = "http://www.noelshack.com/2016-43-1477424638-1472950231-xierdgzraz.png"
            class = "img-shack"
            height = "51"
            src = "//image.noelshack.com/minis/2016/43/1477424638-1472950231-xierdgzraz.png"
            width = "68" > < /a></p >
            <
            /div> <
            div class = "signature-msg text-enrichi-forum" >
            <
            p > < em > J 'ai glissé, chef !</em></p> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> '

            /* jshint ignore:start */
        ]] > < />).toString();
        var c = Babel.transform(inline_src, { presets: ["es2015", "es2016"] }); eval(c.code);
        /* jshint ignore:end */