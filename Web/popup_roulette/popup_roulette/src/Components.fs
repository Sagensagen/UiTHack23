module Components

open System
open System.Threading
open Fable.FontAwesome
open Fable.React.ReactiveComponents
open Feliz
open Feliz.Bulma.ElementBuilders
open Feliz.Delay
open Feliz.Bulma
open Elmish
open Feliz.Router
open Feliz.style






[<ReactComponent>]
let HomePage (url: List<string>) =
    let (currentState, setState) = React.useState(false)
    let (count, setCount) = React.useState(0)
    
    Html.div[
    prop.style[
    style.display.flex
    style.flexDirection.column
    style.justifyContent.center
    style.alignItems.center
    style.textAlign.center
    // style.width (length.vw 60)
             
    ]
    prop.children[
        React.delay[
            delay.waitFor 1000
            delay.children[
                Html.p [
                    prop.text "Ever played popup-roulette?"
                    prop.style[
                        style.width (length.vw 60)
                        style.marginTop 200
                        style.fontFamily "Bloody"
                        if currentState then style.display.none
                    ]
                   
            ]
        ]]
      
        React.delay[
            delay.waitFor 5000
            delay.children[
                Html.p [
                    prop.text "The flag will appear once you have dared to navigate your way through
                        popup-hell just the right amount of ads."
                    prop.style[
                        style.fontSize 3
                        style.width (length.vw 60)
                        style.marginTop 200
                        style.fontFamily "Bloody"
                        if currentState then style.display.none
                    ]
                   
            ]
        ]
        ]
               
        React.delay[
            delay.waitFor 10000
            delay.children[
                Html.p [
                    prop.style[
                        style.width (length.vw 60)
                        style.marginTop 20  
                        style.fontSize 60
                        style.color.darkred
                        style.fontFamily "Bloody"
                        style.marginBottom 50
                        if currentState then style.display.none
                    ]
                    prop.text "But be warned,
                        bypassing the flag will only give viruses, trojans and
                        whatever malicious terms you can imagine!
                        "]
            ]
        ]    
        React.delay[
            delay.waitFor 12000
            delay.children[
                Bulma.button.button[
                    Bulma.button.isOutlined
                    Bulma.color.isDanger
                    prop.style[if currentState then style.display.none]
                    prop.onClick (fun _ -> setState(true);Router.navigate("BqL0LZQ~VVCeclogin-922java0day!shockwave-flash.gpg.js.docm"))
                    prop.children[
                    Html.span [ prop.text "Play";prop.style[style.fontFamily "Bloody"] ]
                    Bulma.icon [ Html.i [ prop.className "fa fa-dice" ] ]
                        
                    ]
                ]
        ]
            ]
        
        
        Bulma.modal[
                if currentState = true
                    then modal.isActive
                    
                prop.children[
                Bulma.modalBackground []
                Bulma.content[
                    
                        
                match url with
                | [] -> Html.none
                // | ["BqL0LZQ~VVCeclogin-922java0day!shockwave-flash.gpg.js.docm"] -> Popups.bankid (count, setCount)
                | ["BqL0LZQ~VVCeclogin-922java0day!shockwave-flash.gpg.js.docm"] -> Popups.Trojan ()
                | [ "necro_htlrr_heroin-playtime_ntsfe_join-isis-request-form_view." ] -> Popups.Virus ()
                | [ "sexual_ygszz_tentacle-fun-time_8o1la_join-isis-request-form_free-samples." ] -> Popups.Spyware ()
                | [ "6h2.xyztrump_xvcb_cuck-cuck-stumped_gr8_OUT-OUT-OUT_live." ] -> Popups.Ransomware ()
                | [ "trans_trmp_weeabo-arsonporn_ttrjn_arson-hentai-club_torr3nt." ] -> Popups.Adware ()
                | [ "ku-klux_jfoqwjefqq_crippled-children_8o1la_tentacle-fun-time_stream." ] -> Popups.Phishing ()
                | [ "_xxvcb_cheap-krokodil_glkz_white_p0wer_torr3nt." ] -> Popups.Malware ()
                | [ "bigly_jfoqwjefqq_FAKE-NEWS_trjn_OUT-OUT-OUT_twitter." ] -> Popups.Rootkit ()
                | [ "0x8c*download()194mobiads(windows8!downloader.sh.exe" ] -> Popups.Posten ()
                | [ "OAEN=yz>wl*,P6WY;trojan$823iphone+server1-torrent(.xlsx.dmg" ] -> Popups.Bankid (count, setCount)
                | otherwise -> Html.h1 "404 invalid link"] ]]
                ]]
                
                    
