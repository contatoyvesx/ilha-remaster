const reservaForm = document.getElementById("reservaForm");

if (reservaForm) {
  reservaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = document.getElementById("data").value;
    const pessoas = document.getElementById("pessoas").value;
    const tipo = document.getElementById("tipo").value;

    if (!data || !pessoas || !tipo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Garantir que o campo pessoas aceite apenas números
    document.getElementById("pessoas").addEventListener("input", function (e) {
      this.value = this.value.replace(/[^0-9]/g, "");
    });

    const mensagem = `Olá! Gostaria de fazer uma reserva:\n\n📅 Data: ${data}\n👥 Número de pessoas: ${pessoas}\n🏖️ Tipo de passeio: ${tipo}`;
    const numeroWhatsApp = "558293511294";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
}

const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (carouselWrapper && prevBtn && nextBtn && carouselItems.length > 0) {
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
}

const arrowButtons = document.querySelectorAll(".arrows button");
arrowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300);
  });
});

const whatsappButtons = document.querySelectorAll(".btWhatsapp");
whatsappButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = document.getElementById("data")?.value || "";
    const pessoas = document.getElementById("pessoas")?.value || "";
    const tipo = document.getElementById("tipo")?.value || "";

    let mensagem = "Olá! Tenho interesse em saber mais sobre os passeios da Ilha do Paraíso.";

    if (data && pessoas && tipo) {
      mensagem = `Olá! Gostaria de fazer uma reserva: \n\n📅 Data: ${data} \n👥 Número de pessoas: ${pessoas} \n🏖️ Tipo de passeio: ${tipo} `;
    }

    const numeroWhatsApp = "558293511294";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});

const carouselWrapperFotos = document.querySelector(".carousel-wrapper-fotos");
const carouselItemsFotos = document.querySelectorAll(".carousel-item-foto");
const prevBtnFoto = document.querySelector(".prev-foto");
const nextBtnFoto = document.querySelector(".next-foto");

if (carouselWrapperFotos && prevBtnFoto && nextBtnFoto && carouselItemsFotos.length > 0) {
  let currentIndexFoto = 0;

  function updateCarouselFotos() {
    const offset = -currentIndexFoto * 50;
    carouselWrapperFotos.style.transform = `translateX(${offset}%)`;
  }

  prevBtnFoto.addEventListener("click", () => {
    if (currentIndexFoto > 0) {
      currentIndexFoto--;
      updateCarouselFotos();
    } else {
      currentIndexFoto = carouselItemsFotos.length - 1;
      updateCarouselFotos();
    }
  });

  nextBtnFoto.addEventListener("click", () => {
    if (currentIndexFoto < carouselItemsFotos.length - 1) {
      currentIndexFoto++;
      updateCarouselFotos();
    } else {
      currentIndexFoto = 0;
      updateCarouselFotos();
    }
  });
}

const elementsToAnimate = document.querySelectorAll(".beneficio, .card, .foto");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});

const filtroBtns = document.querySelectorAll(".filtro-btn");
const categorias = document.querySelectorAll(".categoria");
filtroBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoriaSelecionada = btn.getAttribute("data-categoria");

    filtroBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    categorias.forEach((categoria) => {
      const categoriaItem = categoria.getAttribute("data-categoria");

      if (categoriaSelecionada === "todos" || categoriaSelecionada === categoriaItem) {
        categoria.style.display = "block";
        categoria.classList.remove("show");
        void categoria.offsetWidth;
        categoria.classList.add("show");
      } else {
        categoria.classList.remove("show");
        setTimeout(() => {
          categoria.style.display = "none";
        }, 400);
      }
    });
  });
});

const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (toggleBtn && navbar) {
  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
