import { createContext } from "react"

const PortfolioContext = createContext()

export const PortfolioProvider = PortfolioContext.Provider
export const PortfolioConsumer = PortfolioContext.Consumer

export default PortfolioContext
