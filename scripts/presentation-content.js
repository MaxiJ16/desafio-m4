function addPresentationContent(params = {}) {
  const template = document.querySelector(".presentation__content-template");
  const container = document.querySelector(".presentation__content");
  
  
  const subtitle = template.content.querySelector(".subtitle");
  subtitle.textContent = params.subtitle;
  
  const p = template.content.querySelector(".presentation__text-p");
  p.textContent = params.p;
  
  const img = template.content.querySelector(".presentation__img");
  img.src = params.img;
  
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPresentationContent() {
  return fetch('https://cdn.contentful.com/spaces/j7x7byynhemm/environments/master/entries?access_token=gRBax9-L1fx6zwVsR8EVUT-qwb9zotugaJw2i5XITpo&content_type=dfm4Presentation')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    const fieldsCollection = json.items.map((item) => {
      
      return {
        subtitle: item.fields.subtitlePresentation,
        p: item.fields.textPresentation,
        img: json.includes.Asset["0"].fields.file.url
      }
    })
    return fieldsCollection;
  })
}