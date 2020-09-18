const splitDecimal = n => {
  const chunks = n.toString().split('.')

  const integer = Number(chunks[0])
  const decimal = Number(chunks[1])
  return {
    integer,
    decimal: decimal ? decimal : 0
  }
}

module.exports = {
  splitDecimal
}
