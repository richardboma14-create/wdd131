const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // Additional temples
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
  "https://www.churchofjesuschrist.org/imgs/a108bda9a4f3f818feff3b632e7be35ee5882c69/full/800%2C/0/default"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
   imageUrl:
  "https://www.churchofjesuschrist.org/imgs/e44b3c89b3485fa2f2c8aa09791d4334dfe23511/full/%2C500/0/default"
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo",
    location: "Kinshasa, Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
   imageUrl:
  "https://www.churchofjesuschrist.org/imgs/129596d37fe88a5062c10f4b8ca84ddd6e0535f9/full/800%2C/0/default"
  }
];

const templeGrid = document.querySelector(".temple-grid");

function displayTemples(templeList) {
  templeGrid.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img
        src="${temple.imageUrl}"
        alt="${temple.templeName} Temple"
        loading="lazy"
      >
      <figcaption>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    templeGrid.appendChild(card);
  });
}

function filterTemples(type) {
  let filteredTemples = temples;

  if (type === "old") {
    filteredTemples = temples.filter((temple) => {
      const year = Number(temple.dedicated.split(",")[0]);
      return year < 1900;
    });
  } else if (type === "new") {
    filteredTemples = temples.filter((temple) => {
      const year = Number(temple.dedicated.split(",")[0]);
      return year > 2000;
    });
  } else if (type === "large") {
    filteredTemples = temples.filter((temple) => temple.area > 90000);
  } else if (type === "small") {
    filteredTemples = temples.filter((temple) => temple.area < 10000);
  }

  displayTemples(filteredTemples);
}

document.querySelector("#home").addEventListener("click", () => {
  filterTemples("home");
});

document.querySelector("#old").addEventListener("click", () => {
  filterTemples("old");
});

document.querySelector("#new").addEventListener("click", () => {
  filterTemples("new");
});

document.querySelector("#large").addEventListener("click", () => {
  filterTemples("large");
});

document.querySelector("#small").addEventListener("click", () => {
  filterTemples("small");
});

displayTemples(temples);

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;