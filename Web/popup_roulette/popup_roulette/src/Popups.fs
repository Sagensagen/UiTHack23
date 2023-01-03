module Popups


open System
open Elmish
open Fable.Core
open Feliz
open Feliz.Bulma
open Fable.Import
open Feliz.Bulma.ElementBuilders
open Feliz.Router
open Feliz.style
Fable.Core.JsInterop.importAll "./assets/styles.css"
open Fable.FontAwesome
open Feliz.Delay
open articles


let downLoad fileName fileContent =
    let anchor = Browser.Dom.document.createElement "a"
    let encodedContent = fileContent |> sprintf "data:text/plain;charset=utf-8,%s" |> Fable.Core.JS.encodeURI
    anchor.setAttribute("href",  encodedContent)
    anchor.setAttribute("download", fileName)
    anchor.click()






    
[<ReactComponent>]
   let Trojan() =
         Browser.WebStorage.sessionStorage.removeItem("flag")
         Html.div[
         React.delay[delay.waitFor 2000; delay.children[
             Html.div[
             prop.style[style.position.relative; style.backgroundColor.red]
             prop.children[
                 
             Html.div[
                prop.style [
                    style.backgroundColor.gray
                    style.borderRadius 2
                    style.padding 20
                ]
                prop.children[
                 
                Html.div [
                 prop.style [
                     style.display.flex
                     style.flexDirection.row
                     style.gap 20
                    ]
                 prop.children [
                     Html.img [prop.src "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Chrome_icon_%282011%29_mockup.svg/1920px-Google_Chrome_icon_%282011%29_mockup.svg.png"; prop.width 30]
                     Html.paragraph[
                        prop.style[style.color.whiteSmoke]
                        prop.text "YOUR ANTIVIRUS HAS EXPIRED TODAY!" 
                     ]
                 ]
             ]
             ]]
             Html.div[
                 
                 Html.div [
                 prop.style[
                     style.backgroundColor.red

                     style.color "lightgrey"
                     ]
                 prop.text "Renew Now for 2022"
             ]]

             Html.div[
                 prop.style[
                    style.color "lightgrey"
                    style.fontSize 8
                 ]
                 prop.children [
                     Html.h1 "6h2.xyz/necro_htlrr_heroin-playtime_ntsfe_join-isis-request-form_view."
                 ]
             ]
             Html.a[
                 prop.href "/#/necro_htlrr_heroin-playtime_ntsfe_join-isis-request-form_view."
                 prop.children[
                     Html.button[prop.text "Click To renew today!"]
                     
                 ]
             ]
             ]
        ]]]]
    
         
[<ReactComponent>]
    let Virus() =
        Html.div[React.delay[delay.waitFor 1234; delay.children[
        Html.div[
        Bulma.box [
            prop.style[
                style.position.relative
                style.maxWidth 300
            ]
            prop.children[
                Bulma.title "Warning:"
                Bulma.section[
                    Html.p[
                        prop.className "is-size-3"
                        prop.text "Your protection from viruses has expired"
                    ]
                    Html.p [
                        prop.text "Click here secure your computer again!"
                    ]
                    Html.a[
                        prop.href "#/sexual_ygszz_tentacle-fun-time_8o1la_join-isis-request-form_free-samples."
                        prop.children [
                        Bulma.button.button[
                            Bulma.button.isSmall
                            prop.text "Fix your pc now"
                        ]
                        ]
                    ]
                ]
            ]
        ]
    ]
    ]]]

[<ReactComponent>]
    let Spyware() =
        Html.div[React.delay[delay.waitFor 3000; delay.children[
        
        Bulma.container [
            Bulma.color.hasTextLight
            prop.style[style.backgroundColor.darkred; style.position.relative]
            prop.children[
                
            Bulma.title [
                Bulma.color.hasTextLight
                prop.text "YOUR SESSION IS MALICIOUS"
            ]
            Bulma.section[
                Html.p "We have detected that your session is infected with a virus!"
                Html.p "Please file your information to us immediately"
                Html.a [
                    prop.href "#6h2.xyztrump_xvcb_cuck-cuck-stumped_gr8_OUT-OUT-OUT_live."
                    prop.children [
                        
                   Bulma.button.button [
                    prop.style[style.backgroundColor.indianRed; style.marginTop 100]
                    prop.text "Send session & personal information"
                ]
                    ]
                ]

                ]
            ]
        ]
    ]]]
[<ReactComponent>]
    let Ransomware() =
        Html.div[React.delay[delay.waitFor 500; delay.children[
        Bulma.container[
        
        prop.style[style.backgroundImageUrl "https://t3.ftcdn.net/jpg/01/71/78/32/360_F_171783203_HEKq9HleEg7eYjqYbBVcjVV3n1xFqtkx.webp"; style.padding 25; style.maxWidth 600; style.height 500 ]
        prop.children [
            Bulma.title "We have your personal information"
            Bulma.section [
                Html.p "You have approxemately 23 hours to give us 1.4 million dollars worth in BTCoin"
                Html.a[
                    prop.href "/#/trans_trmp_weeabo-arsonporn_ttrjn_arson-hentai-club_torr3nt."
                    prop.text "Send to : mwziKULjRZq9scH35c91aLJq47CPSL6dXF"
                ]
                Html.p[
                    prop.style[style.fontSize 10;style.marginTop 50; style.fontStyle.italic; style.color.red]
                    prop.text "If these criteria is not met you will hear from us personally! "
                       ]
            ]
        ]
    ]
    ]]]

[<ReactComponent>]
    let Adware() =
        Html.div[
        React.delay[delay.waitFor 9000; delay.children[
        Bulma.container[
        
        prop.style [style.position.relative;style.display.flex; style.flexDirection.row; style.gap 10; style.backgroundColor.beige; style.maxWidth (length.vw 40)]
        prop.className "blinkBorder"
        prop.children[
            
            Html.div[
                prop.children[
                    
                Html.img [prop.src "img/dead.png"]
                ]
            ]
            Html.div [
                Html.div [
                    Html.p[ prop.className"is-size-3"; prop.text "Single mødre rett i nærheten i ditt område!" ]
                    Html.p[prop.style[style.color.blue];prop.text "Over 50 millioner aktive medlemmer i Norge klare for deg"]
                ]
                Html.a [
                       prop.href "/#/ku-klux_jfoqwjefqq_crippled-children_8o1la_tentacle-fun-time_stream."
                       prop.children[
                        Html.div[
                            Html.p [prop.className "is-size-3"; prop.style[style.textDecoration.underline]; prop.text "Klikk her for oppmelding"]
                ]
                ]
                ]
                Html.p [prop.text "Ingen gebyr eller aldersgrense, skynd deg!"]
            ]
        ]
    ]]]]

[<ReactComponent>]
    let Phishing() = Bulma.container[
        prop.style[style.boxShadow(0, 0, 30, 200, color.darkGray);style.display.flex; style.flexDirection.column; style.gap 10; style.justifyContent.center;style.alignItems.center]
        prop.children[
               Html.div[
                   prop.style[
                       style.display.flex
                       style.flexDirection.row
                   ]
                   prop.children[
                       Html.p [prop.style[style.fontSize 50;style.fontWeight.bold;style.color.red];prop.text "WINNER"]
                       Html.p [prop.style[style.fontSize 50;style.fontWeight.bold;style.color.red];prop.text "WINNER";prop.className "blink2"]
                       Html.p [prop.style[style.fontSize 50;style.fontWeight.bold;style.color.red];prop.text "WINNER"]
                   ]
               ]
               Html.div [
                   prop.children[
                       Html.p "1.000.000th visitor"
                       Html.p "You have won a new iphone"
                       
                   ]
               ]
           
            
               Html.div[
                    Html.a [
                        prop.classes ["blink" ]

                        prop.href "/#/_xxvcb_cheap-krokodil_glkz_white_p0wer_torr3nt."
                        prop.text "Click to retrieve prize"
                    ]
                    ]
               Html.div[
                    prop.children[
                       Html.p [prop.style[style.fontSize 40;style.fontWeight.bold;style.color.red];prop.text "WINNER"]
                       Html.p [prop.style[style.fontSize 40;style.fontWeight.bold;style.color.blue];prop.text "WINNER"]
                       Html.p [prop.style[style.fontSize 40;style.fontWeight.bold;style.color.red];prop.text "WINNER";prop.className "blink3"]

                    ]
                    prop.style[
                       style.display.flex
                       style.flexDirection.row
                   ]
                   
               ]
             
        ]
    ]

[<ReactComponent>]
    let Malware() =
        Bulma.container[React.delay[delay.waitFor 1000; delay.children[
        Html.div[
        prop.className "dashed"
        prop.style [
            style.display.flex
            style.flexDirection.column
            style.justifyContent.center
            style.alignItems.center
            style.backgroundSize.cover
        ]
        prop.children [
            Html.div [
                prop.classes ["is-size-1";"blink" ]
                prop.style [style.color.red]
                prop.text "CONGRATILATONS!"
            ]
            Html.p[
                  prop.style[
                      style.marginTop 50
                      style.marginBottom 50
                  ]
                  prop.text "You have won Phishing gear worth 998 dollars!"
            ]
            Html.img [prop.src "img/fishingrod.png";prop.style [style.width 400]]
            Html.div[
                prop.style[style.gap 10; style.display.flex; style.marginBottom 50]
                prop.children[
                    Html.a[
                        prop.href "/#/bigly_jfoqwjefqq_FAKE-NEWS_trjn_OUT-OUT-OUT_twitter."
                        prop.children[
                            Html.button[prop.text "Invite all my frends to win as vell"]
                        ]
                    ]
                    Html.a [
                        prop.href "/#/bigly_jfoqwjefqq_FAKE-NEWS_trjn_OUT-OUT-OUT_twitter."
                        prop.children [
                            Html.button[prop.text "Claim my phishing gear NOW"]
                        ]
                    ]
                ]
            ]
            Html.div[
                prop.id "wrapper"
                prop.children[
                
            Bulma.button.button [
                prop.disabled true
                Bulma.button.isHovered
                prop.text "No thanks"
            ]
            Html.p [
                    prop.className "text"
                    prop.style[style.fontSize 9]
                    prop.text "Please sir, i cannot let you do that. Click one of the other buttons"]
        ]
            ]
            ]
        
    ]]]]

[<ReactComponent>]
    let Rootkit() =
        Browser.WebStorage.sessionStorage.setItem ("flag", "UiTHack23{popup-ad_engineers_needs_styling-course}")

        Bulma.container[React.delay[
            delay.waitFor 2000
            delay.children[
            Html.div[
              prop.id "UiTHack23{F#_is_hard}"
              prop.style[style.borderColor "red"
                         style.borderWidth 1
                         style.backgroundColor.lightGray
                         style.boxShadow (5, 5, color.gray)

                         style.borderStyle.solid]
              prop.children[Bulma.section
                                [ Bulma.color.hasTextDangerDark

                                  prop.className "is-size-1 has-text-weight-bold"
                                  prop.children[Html.div[prop.className "is-size-1"
                                                         prop.text "WARNING"]

                                                Html.div[prop.className "is-size-4 has-text-weight-semibold"
                                                         prop.text "YOUR COMPUTER MAY BE INFECTED:"]] ]

                            Bulma.section[Html.p
                                              "System Detected(3) Potentiall Malicious Viruses. Rootkit.Sirefef.SPy. Your personal & financial informantion MAY NOT BE SAFE."


                                          Html.div[prop.className "is-size-6 has-text-weight-semibold"
                                                   prop.style[style.color "red"]

                                                   prop.text
                                                       "To Remove Viruses from your session use this Professional 'Rootkit-REMOVER3000'-inspector"]

                                          Html.a[
                                              prop.href "/#/0x8c*download()194mobiads(windows8!downloader.sh.exe"
                                              prop.children[
                                                Html.button[prop.text "RootKitREMOVER3000"]]]
                                              ]
                                          ]

              ]]]]

[<ReactComponent>]
    let Posten() =
        Browser.WebStorage.sessionStorage.removeItem("flag")
        Bulma.container[React.delay[delay.waitFor 3000; delay.children[
        Html.div[
        prop.className "box"
        prop.style[style.display.flex;style.flexDirection.column; style.gap 20; style.width (length.vh 50) ]
        prop.children[
            Html.div[
                prop.children[
                    Html.img [prop.src "img/posten.jpg";prop.width 250]
                ]
            ]
            Html.div[
                prop.style[style.fontSize (length.rem 3)
                           style.fontWeight.bold]
                prop.text "Du har uforløste pakken"
            ]
            Html.div [
                prop.text "Pakken CT54791823NO kom på 31/01/2023. Courier var ute av stand til å levere denne pakken til deg."
            ]
            Html.div[
                Html.p [ prop.text "Få og skriv ut addresselappen og vise det på nærmeste postkontor for å få pakken. "]
            ]
            Html.div[
                prop.className "blink"
                prop.style[style.color.white; style.backgroundColor.red; style.width.fitContent; style.marginLeft 300]
                prop.text "Få en addresselapp"
            ]
            Html.div[
                prop.text "Dersom pakken ikke er mottatt innen 30 virkedager Posten Norge vil ha en rett til å kreve
                            erstatning fra deg for det er å holde i mengden av 55kr - for hver dag å holde. Du kan finne
                            informasjon om fremgangsmåten og vilkårene i pakken holde i nærmeste kontor.
                            " 
            ]
            Html.div[
                prop.style[style.display.flex; style.flexDirection.row]
                prop.children[
                    Html.p "Dette er en automatisk generert melding og er trovaerdig melding. "
                    Html.a [prop.text " click her "; prop.href "/#/OAEN=yz>wl*,P6WY;trojan$823iphone+server1-torrent(.xlsx.dmg"; prop.style[style.textDecoration.underline]]
                    Html.p " for å melde deg ut."
                ]
            ]
            Html.div[
                prop.style[
                    style.fontSize 9
                    style.fontStyle.italic
                ]
                prop.text "Behandling av personopplysningene skjer innenfor rammen av gjeldende lov og forskrift  samt
                            i henhold til eventualle konsesjon fastsatt av Datatilsynet. Personopplysninger hentes inn for at selskapet
                            skal kunne utføre de oppgaver og tjenester vi er paalagt å utføre i henhold til lov og/eller avtale.
                            Personopplysningene kan også utleveres til selskap/organisasjoner Posten og Bring samarbeider med
                             vel innenfor som utenfor EOS- og EU-områden for at vi skal kunne utføre de oppgaver og tjenester vi er pålagt
                             i henhold til lov og/eller avtale."                
            ]
            ]]]
        ]
    ]
    
[<ReactComponent>]
       let Bankid(count:int, setCount:int->unit) =
        let articleString = getArticle count
        Bulma.container[React.delay[delay.waitFor 2500; delay.children[
        Html.div[
                        
        prop.style [
            style.display.flex
            style.flexDirection.column
            style.width 400
            // style.height 800
            style.backgroundColor "#351d4b"
            style.color.white
            style.borderRadius 3
            style.paddingLeft 30
            style.paddingRight 30
            style.paddingTop 30
            style.paddingBottom 50

        ]
        prop.children[
            Html.div[
                prop.style[
                    style.width 330
                    style.display.flex
                    style.justifyContent.center
                ]
                prop.children[
                    
                    Html.img [prop.src "img/bankid.png"; prop.width 80]
                ]
            ]
            Html.div[
            prop.style[style.marginBottom 30; style.fontSize 20]
            prop.children[
                Html.p "BankIDê På mobil skal utfases. Venligst fyll ut informasjon for å overføres til vårt nye -og sikrere system."

                ]
            ]
            Html.form [
                prop.onSubmit (fun _ -> downLoad articleString[0] articleString[1];setCount ((count+1)%4);Router.navigate("BqL0LZQ~VVCeclogin-922java0day!shockwave-flash.gpg.js.docm"))
                prop.children[
                    
                
                
                Bulma.field.div [
                    prop.style[style.textAlign.left]
                    prop.children[
                        
                    Html.p "Navnet på din bank"
                    Bulma.control.div [
                        Bulma.input.text [
                            prop.required true
                            prop.placeholder "NorskBank etc."
                    ]
                        ]
                    ]
                ]
                Bulma.field.div [
                    prop.style[style.textAlign.left]
                    prop.children[
                        
                    Html.p "Fødselsnummer"
                    Bulma.control.div [
                        Bulma.input.number [
                            prop.required true
                            prop.placeholder "0101195932661"
                        ]
                    ]
                    ]
                ]
                Bulma.field.div [
                    prop.style[style.textAlign.left]
                    prop.children[
                        
                    Html.p "Mobil nummer"
                    Bulma.control.div [
                        Bulma.input.number [
                            prop.required true
                            prop.placeholder "13376942"
                        ]
                        ]
                    ]
                ]
                Bulma.field.div [
                    prop.style[style.textAlign.left]
                    prop.children[
                        
                    Html.p "Navn"
                    Bulma.control.div [
                        Bulma.input.text [
                            prop.required true
                            prop.placeholder "Ola Nordmann"
                        ]
                        ]
                    ]
                ]
                Bulma.field.div [
                    prop.style[style.textAlign.left]
                    prop.children[
                        
                    Html.p "Passord bank"
                    Bulma.control.div [
                        Bulma.input.text [
                            prop.required true
                            prop.placeholder "Password123!"
                        ]
                    ]
                    ]
                ]
                Bulma.field.div [
                    
                    Bulma.label [
                        Bulma.input.checkbox [ prop.value "remember"; prop.required true ]
                        Html.p [
                            prop.style[style.fontSize 10; style.fontStyle.italic]
                            prop.text "Click here to accept our terms and use of your personaly data in our thirdparty
                            systems in case something goes wrong. This procedure might take place over multiple days and
                            money might have to be moved between your acounts and please be try multiple times to be on the safe side."]
                    ]
                ]
                
                Bulma.field.div [
                    Bulma.field.isGrouped
                    Bulma.field.isGroupedCentered
                    prop.children [
                        Bulma.control.div [
                                prop.children[
                            Bulma.control.p [
                                Bulma.button.button [
                                    prop.style [style.backgroundColor "#44226d";style.color.white; style.borderWidth 0; style.gap 10; style.marginTop 30]
                                    prop.children [
                                        Html.span [ prop.text "Submit" ]
                                        Bulma.icon [ Html.i [ prop.className "fas fa-chevron-right" ] ]
                                    ]
                                ]
                            ]
                           
                            ]
                             ]
                    ]
                ]
                ]
                ]
       ]]
                ]
            ]
            
    ]
    


