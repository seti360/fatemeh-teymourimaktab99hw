
  function elemCreator(elementType, callback) {
    let element = document.createElement("elementType");
    document.body.appendChild(element);
    callback(element);
   }
   let callback = function(elem) {
    elem.style.backgroundColor = "red";
    elem.textContent="test";
   };
   callback = 1
   elemCreator("div", callback);
  
  
  