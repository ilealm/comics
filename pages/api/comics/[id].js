export default (req, res) => {
    res.statusCode = 200

    const comics = [
      { num:1, safe_title: 'one', alt:"uno" },
      { num:2, safe_title: 'two', alt:"uno" },
      { num:3, safe_title: 'three', alt:"tres" },
       ]

    const comic = comics[parseInt(req.query.id) -1];
    res.json(comic);

}