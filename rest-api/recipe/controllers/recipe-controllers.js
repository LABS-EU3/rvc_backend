async function getRecipes(req, res) {
  try {
    res.status(200).json({ message: 'up an running' });
  } catch (error) {
    res.status(500).json({ message: 'fell flat on my face' });
  }
}

module.exports = { getRecipes };
