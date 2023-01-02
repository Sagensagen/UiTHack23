module RoutingComponent

open Feliz
open Feliz.Router


[<ReactComponent>]
let Router () =
    let (currentUrl, updateUrl) = React.useState (Router.currentUrl ())

    React.router
        [ router.onUrlChanged updateUrl
          router.children[Components.HomePage(currentUrl)] ]
