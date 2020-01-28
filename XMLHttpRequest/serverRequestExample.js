const req = () => {
    
    const xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    xmlReq.onload = () => {
      const serverResponse = JSON.parse(xmlReq.response);
      console.log(serverResponse.squadName);
      // JSON.stringify(javaScriptObj)
      const body = document.getElementsByTagName('body')[0];
      body.innerHTML = serverResponse.squadName;
    };
    xmlReq.send();
};
  
req();