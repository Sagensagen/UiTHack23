module Main

open Feliz
open Browser.Dom
open Fable.Core.JsInterop
open MainContent

importSideEffects "./styles/global.scss"

ReactDOM.render (MainContent.MainContent(), document.getElementById "feliz-app")
