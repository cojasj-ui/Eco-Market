const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Base de datos simulada (VARIEDADES DE CHÍA)
const productos = [
  { id: 1, nombre: "Chía Negra", precio: 10, descripcion: "Alta en fibra y omega-3" },
  { id: 2, nombre: "Chía Blanca", precio: 12, descripcion: "Sabor suave y nutritiva" },
  { id: 3, nombre: "Chía Orgánica", precio: 15, descripcion: "Cultivo ecológico certificado" },
  { id: 4, nombre: "Chía Premium", precio: 18, descripcion: "Calidad exportación" }
];

// Ruta API
app.get('/productos', (req, res) => {
  res.json(productos);
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
