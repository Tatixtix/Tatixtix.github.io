const productos = [
  { nombre: "Food Trailer", imagen: "pics/1.png", descripcion: "Food Trailer" },
  { nombre: "Food Trailer", imagen: "pics/4.png", descripcion: "Food Trailer" },
  { nombre: "Food Trailer", imagen: "pics/5.ppg", descripcion: "Food" },
];

const seccionProductos = document.getElementById("productos");

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:auto;">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
    `;
  seccionProductos.appendChild(div);
});
