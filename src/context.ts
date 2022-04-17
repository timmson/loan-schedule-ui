import {createContext, Dispatch} from "react"
import {ActionType} from "./types"

const defaultValue: Dispatch<ActionType> = () => {}
export default createContext(defaultValue)