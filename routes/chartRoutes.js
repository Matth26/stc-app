const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Chart = mongoose.model('charts');

module.exports = (app) => {
  app.get('/api/charts', requireLogin, async (req, res) => {
    const charts = await Chart.find({ _user: req.user.id });
    res.send(charts);
  });

  app.post('/api/charts', requireLogin, async (req, res) => {
    console.log(req.body);
    const { name, current, goal, steps } = req.body;
    const chart = new Chart({
      name,
      current,
      goal,
      steps,
      _user: req.user.id,
    });
    await chart.save();

    const charts = await Chart.find({ _user: req.user.id });
    res.send(charts);
  });

  app.delete('/api/charts/:id', requireLogin, async (req, res) => {
    try {
      console.log(`Id to delete ${req.params.id}`);
      const response = await Chart.findOneAndDelete({
        _user: req.user.id,
        _id: req.params.id,
      });
      console.log(response);

      const charts = await Chart.find({ _user: req.user.id });
      res.send(charts);
    } catch (err) {
      console.log(err);
      res.status(401).send();
    }
  });
};
