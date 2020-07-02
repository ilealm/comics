
export default (req, res) => {
  res.statusCode = 200
  res.json([
    { id:1, name: 'one', category:"uno" },
    { id:1, name: 'one', category:"uno" },
    { id:3, name: 'three', category:"tres" },
     ])
}
