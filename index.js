const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
  ];
  
  function main() {
    // Define elements to be able to call on them
    const rootElement = document.getElementById("root");
    const rootStyling = rootElement.style;
    rootStyling.backgroundColor = "#e6fcf5";
    rootStyling.display = "flex";
    rootStyling.flexFlow = "column wrap";
    rootStyling.alignItems = "center";
    rootStyling.borderRadius = "2em";
  
    // add an h1 element

    const h1Element = document.createElement("h1");

    // give it text of "FREELANCERS"

    h1Element.innerHTML = "FREELANCERS";
    h1Element.style.fontSize = "4em";
    h1Element.style.color = "#099268";

    // append the HTML document

    rootElement.appendChild(h1Element);
  
    // create an unordered list element

    const ulElement = document.createElement("ul");

    rootElement.appendChild(ulElement);

    // Loop through the users array creating li elements

    for (let i = 0; i < users.length; i++) {

      const liElement = document.createElement("li");

      liElement.style.fontSize = "1.5em";
      liElement.style.paddingBottom = ".5em";

      const userObject = users[i];

      const userName = Object.values(userObject)[0];

      const userAge = Object.values(userObject)[1];

      const userOccupation = Object.values(userObject)[2];

      const userString = `${userName} a ${userAge} year old ${userOccupation}`;
      
      liElement.appendChild(document.createTextNode(userString));
      ulElement.appendChild(liElement); // Append those elements to your HTML document
    }
  }
  
  //call the main function
  main();