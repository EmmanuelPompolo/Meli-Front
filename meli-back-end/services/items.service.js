const axios = require('axios')
const { splitDecimal } = require('../utils/number.utils')

const mapItem = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping
}) => {
  const priceChunks = splitDecimal(price)

  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: priceChunks.integer,
      decimals: priceChunks.decimal
    },
    picture: thumbnail,
    condition,
    free_shipping: shipping.free_shipping
  }
}

const obtainItems = async query => {
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
  )

  const categories = response.data.filters
    .find(f => f.id === 'category')
    .values[0].path_from_root.map(x => x.name)
  console.table(`Se obtuvieron las categorias ${categories}`)

  const items = response.data.results.map(mapItem).slice(0,4);

  return {
    categories,
    items
  }
}

const obtainItem = async id => {
  const itemResponse = await axios.get(
    `https://api.mercadolibre.com/items/${id}`
  )
  const itemDescriptionResponse = await axios.get(
    `https://api.mercadolibre.com/items/${id}/description`
  )

  return {
    item: {
      ...mapItem(itemResponse.data),
      sold_quantity: itemResponse.data.sold_quantity,
      description: itemDescriptionResponse.data.plain_text
    }
  }
}

module.exports = {
  obtainItems,
  obtainItem
}
