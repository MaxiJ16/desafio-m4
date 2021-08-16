function addServicesContent(params = {}) {
  const template = document.querySelector(".service__content-template");
  const container = document.querySelector(".service__content");
  
  const subtitle = template.content.querySelector(".service__subtitle");
  subtitle.textContent = params.subtitle;
  //one 
  const imgCardOne = template.content.querySelectorAll(".card__img")[0];
  imgCardOne.src = params.imgCardOne;

  const titleCardOne = template.content.querySelectorAll(".card__title")[0];
  titleCardOne.textContent = params.titleCardOne;
  
  const pCardOne = template.content.querySelectorAll(".card__p")[0];
  pCardOne.textContent = params.pCardOne;

  // two
  const imgCardTwo = template.content.querySelectorAll(".card__img")[1];
  imgCardTwo.src = params.imgCardTwo;

  const titleCardTwo = template.content.querySelectorAll(".card__title")[1];
  titleCardTwo.textContent = params.titleCardTwo;
  
  const pCardTwo = template.content.querySelectorAll(".card__p")[1];
  pCardTwo.textContent = params.pCardTwo;
  
  // three
  const imgCardThree = template.content.querySelectorAll(".card__img")[2];
  imgCardThree.src = params.imgCardThree;

  const titleCardThree = template.content.querySelectorAll(".card__title")[2];
  titleCardThree.textContent = params.titleCardThree;
  
  const pCardThree = template.content.querySelectorAll(".card__p")[2];
  pCardThree.textContent = params.pCardThree;
  
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServicesContent() {
  return fetch('https://cdn.contentful.com/spaces/j7x7byynhemm/environments/master/entries?access_token=gRBax9-L1fx6zwVsR8EVUT-qwb9zotugaJw2i5XITpo&content_type=dfm4Services')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    const fieldsCollection = json.items.map((item) => {
      return {
        subtitle: item.fields.subtitle,
        imgCardOne: json.includes.Asset["0"].fields.file.url,
        imgCardTwo: json.includes.Asset["1"].fields.file.url,
        imgCardThree: json.includes.Asset["2"].fields.file.url,
        titleCardOne: item.fields.titleCardOne,
        titleCardTwo: item.fields.titleCardTwo,
        titleCardThree: item.fields.titleCardThree,
        pCardOne: item.fields.pCardOne,
        pCardTwo: item.fields.pCardTwo,
        pCardThree: item.fields.pCardThree
      }
    })
    return fieldsCollection;
  })
}

function main() {
  getServicesContent()
   .then((serv) => {
     for (const s of serv) {
       addServicesContent(s)
     };
   });
}

main();