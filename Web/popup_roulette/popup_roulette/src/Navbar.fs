module Navbar

open Feliz
open Feliz.Bulma
open Fable.FontAwesome



[<ReactComponent>]
let NavBar () =
    Bulma.navbar[
          Bulma.color.hasBackgroundGrey
          prop.children [
            Bulma.navbarBrand.div [
            Bulma.navbarItem.a [
                prop.href "/#/"
                prop.children[
                    Html.i [prop.classes ["fa";"fa-dice"]]                                 
                ]
            ]
        ]
         
    ]  
]
