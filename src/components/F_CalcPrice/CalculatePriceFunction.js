import {
  StatePriceUnderHundredAcres,
  StatePriceOverHundredAcres,
} from './BaseStatePriceHunting.js'
//
function CalcPrice(americanState, acreage, duration) {
  let totalAnnualPrice = 0
  let finalPrice = 0

  let statePriceUnderHundredAcres = StatePriceUnderHundredAcres[americanState]
  let statePriceOverHundredAcres = StatePriceOverHundredAcres[americanState]

  // Get price based on acreage
  if (acreage < 100) {
    totalAnnualPrice = Math.sqrt(statePriceUnderHundredAcres * acreage) * 35
  } else {
    totalAnnualPrice = Math.sqrt(statePriceOverHundredAcres * acreage) * 41
  }

  // Set Total Annaul Price min at $1000
  if (totalAnnualPrice <= 1000) {
    totalAnnualPrice = 1000
  }
  console.log('total annual price: ', totalAnnualPrice)

  //get price based on duration
  if (duration <= 5) {
    return totalAnnualPrice * 0.05 * duration
  }
  if (duration <= 10) {
    return totalAnnualPrice * 0.04 * duration
  }
  if (duration <= 30 && acreage <= 20) {
    return totalAnnualPrice * 0.03 * duration
  }
  if (duration <= 30 && acreage > 20) {
    console.log('totalAnnualPrice: ', totalAnnualPrice, ' duration: ', duration)
    return totalAnnualPrice * 0.038 * duration
  }
  if (duration <= 60 && acreage > 0) {
    return totalAnnualPrice * 0.02 * duration
  }
  if (duration <= 120) {
    return totalAnnualPrice * 0.01 * duration
  }
  if (duration <= 365 && acreage <= 100) {
    return totalAnnualPrice * 0.006 * duration
  }
  if (duration <= 365 && acreage > 100) {
    return totalAnnualPrice * 0.004 * duration
  }
  if (duration && acreage <= 100) {
    return totalAnnualPrice * 0.004 * duration
  }
  if (duration && acreage > 100) {
    console.log(
      'totalAnnualPrice: ',
      totalAnnualPrice,
      ' duration: ',
      duration,
      ' totalAnnualPrice * 0.002 * duration: ',
      totalAnnualPrice * 0.002 * duration
    )
    return totalAnnualPrice * 0.002 * duration
  }
  return 0
}

export default CalcPrice