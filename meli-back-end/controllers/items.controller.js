const { json } = require('express')
const { obtainItems, obtainItem } = require('../services/items.service')

const searchItems = async (req, res) => {
  const q = req.query.q

  try {
    const items = await obtainItems(q)
    return res.json(items).status(200)
  } catch (err) {
    console.error(err)
    return res.status(500)
  }
}

const searchItem = async (req, res) => {
  const id = req.params.id

  try {
    const item = await obtainItem(id)
    return res.json(item).status(200)
  } catch (err) {
    console.error(err)
    return res.status(500)
  }
}

module.exports = {
  searchItems,
  searchItem
}
