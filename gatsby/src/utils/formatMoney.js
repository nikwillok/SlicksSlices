const formatter = Intl.NumberFormat('en-NZ', {
  style: 'currency',
  currency: 'NZD',
})

const formatMoney = (cents) => {
  return formatter.format( cents / 100 )
}

export default formatMoney