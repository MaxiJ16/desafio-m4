function addHeaderContent(params = {}) {
  const templateHeaderContent = document.querySelector(".content-template");
  const containerHeaderContent = document.querySelector(".header-container__content-template");
  
  const titleHeaderContent = templateHeaderContent.content.querySelector(".content-template__title");
  titleHeaderContent.textContent = params.title;
  
  const subtitleHeaderContent = templateHeaderContent.content.querySelector(".content-template__subtitle");
  subtitleHeaderContent.textContent = params.subtitle;
  
  const clone = document.importNode(templateHeaderContent.content, true);
  containerHeaderContent.appendChild(clone);
}

function getHeaderContent() {
  return fetch('https://cdn.contentful.com/spaces/j7x7byynhemm/environments/master/entries?access_token=gRBax9-L1fx6zwVsR8EVUT-qwb9zotugaJw2i5XITpo&content_type=dfm4Header')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    
    const fieldsCollection = json.items.map((item) => {
      return {
        title: item.fields.headerTitle,
        subtitle: item.fields.headerSubtitle
      }
    })
    return fieldsCollection;
  })
}

function main(){
  getHeaderContent()
  .then((headerContent) => {
    for(const h of headerContent) {
      addHeaderContent(h);
    };
  });
}

main();