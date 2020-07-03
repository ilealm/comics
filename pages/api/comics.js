
export default (req, res) => {
  res.statusCode = 200
  res.json([
    { num:1, safe_title: 'one', alt:"uno" },
    { num:2, safe_title: 'two', alt:"uno" },
    { num:3, safe_title: 'three', alt:"tres" },
     ])
}
