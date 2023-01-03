module MainContent

open Feliz

type MainContent =
    [<ReactComponent>]
    static member MainContent() =
        Html.div[prop.children[Navbar.NavBar()
                               RoutingComponent.Router()]]
