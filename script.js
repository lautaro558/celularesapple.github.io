let carrito = [];
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    lista.appendChild(li);
    total += item.precio;
  });
  document.getElementById("total").textContent = total;
}
function irAlCheckout() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  window.location.href = "checkout.html";
}
document.getElementById("toggle-carrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("oculto");
});
<script>
  let contador = 0;

  function agregarAlCarrito() {
    contador++;
    const span = document.getElementById("contador-carrito");
    span.textContent = contador;
    span.style.display = "inline-block"; // Lo muestra si estaba oculto
  }
</script>
