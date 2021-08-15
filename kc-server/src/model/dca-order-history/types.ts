type DCAOrderHistory = {
  UID: string
  userUID: string
  dcaOrderUID: string
  orderUID: string | undefined
  assetSymbol: string
  marketPriceNZD: number
  marketOffset: number
  calculatedAmountNZD: number
  availableBalanceNZD: number
  description: string
}

export { DCAOrderHistory }
