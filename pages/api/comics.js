
export default (req, res) => {
  res.statusCode = 200
  res.json([
    { num:1, safe_title: 'one_in_api', alt:"uno" },
    { num:2, safe_title: 'two_in_api', alt:"uno" },
    { num:3, safe_title: 'three_in_api', alt:"tres" },
     ])
}
