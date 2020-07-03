export default (req, res) => {
    res.statusCode = 200

    const comics = [
      { id:1, name: 'one', category:"uno" },
      { id:2, name: 'two', category:"uno" },
      { id:3, name: 'three', category:"tres" },
       ]

    const comic = comics[parseInt(req.query.id) -1];
    res.json(comic);

}