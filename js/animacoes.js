document.addEventListener("DOMContentLoaded", () => {
  const produtos = document.querySelectorAll(".produto");
  produtos.forEach((produto, index) => {
    setTimeout(() => {
      produto.classList.add("animar-entrada");
      produto.classList.remove("oculto");
    }, 50 * index);
  });

  const formBoxes = document.querySelectorAll(".form-box");
  formBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("animar-entrada");
      box.classList.remove("oculto");
    }, 150 * index);
  });

  const carrinhoItens = document.querySelector(".tabela-carrinho");
  const resumo = document.querySelector(".resumo");

  if (carrinhoItens) {
    carrinhoItens.classList.add("animar-entrada");
    carrinhoItens.classList.remove("oculto");
  }
  if (resumo) {
    setTimeout(() => {
      resumo.classList.add("animar-entrada");
      resumo.classList.remove("oculto");
    }, 300);
  }
});

const linksInternos = document.querySelectorAll('a[href]:not([href="#"])');
const body = document.body;

linksInternos.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = this.getAttribute("href");

    body.classList.add("animar-saida");

    setTimeout(() => {
      window.location.href = destino;
    }, 400);
  });
});