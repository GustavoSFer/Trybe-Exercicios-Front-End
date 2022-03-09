import express from 'express';
import PlantsModule from './Plants';

const app = express();
const PORT = 3000;
app.use(express.json());
const plants = new PlantsModule();

app.get('/plants', async (req, res) => {
  const result = await plants.getPlants();

  res.status(200).json(result);
});

app.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const response = await plants.getPlantById(id);

  res.status(200).json(response);
});

app.delete('/plant/:id', async (req, res) => {
  const { id } = req.params;
  await plants.removePlantById(id);

  res.status(200).json({ message: 'Deletado com sucesso!' });
});

app.post('/plant/:id', async (req, res) => {
  const { id } = req.params;
  const { breed, needsSun, origin, size } = req.body;
  const response = await plants.editPlant(id, { id, breed, needsSun, origin, size });

  res.status(201).json(response);
});

app.listen(PORT, () => console.log(`Rodando na posta ${PORT}`));