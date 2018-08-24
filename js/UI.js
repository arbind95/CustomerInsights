/* function to create div element */
function createDiv(){
      var element = document.createElement("div");
      //document.body.appendChild(element);
      //element.setAttribute('align', 'center');
      return element;
}

/* function to create anchor element */
function createAnchor(Text){
      var element = document.createElement("a");
      var text = document.createTextNode(Text);
      //document.body.appendChild(element);
      element.appendChild(text);
      return element;
}

/* creating function to create Button */
function createButton(ButtonText, className){

    //creating button element
    var element = document.createElement("button");
    //creating text for button
    var text = document.createTextNode(ButtonText);
    //assigning class to element button
    if (typeof className != undefined){
      element.classList.add(className);
    }
    //appending element to body
    document.body.appendChild(element);
    //appending text to button
    element.appendChild(text);
    return element;
}

/* function to create image element */
function createImage(imageSource, className){
        //creating image element with a name element
        var element = document.createElement("img");
        //defining the source attribute of image
        element.src = imageSource;
        //assigning class to element
        if (typeof className != undefined){
          element.classList.add(className);
        }
        //adding image to body
        //document.body.appendChild(element);
        return element;
}

/*creating function to create input box */
    function createInputBox(className){
      var textBox = document.createElement("input");
      
      //assigning class to element
      if (typeof className != undefined){
        textBox.classList.add(className);
      }
      document.body.appendChild(textBox);
      return textBox;
    }
    
/*creating function to create Text Area */
    function createTextArea(className){
      var element = document.createElement("textarea");
      
      //assigning class to element
      if (typeof className != undefined){
        element.classList.add(className);
      }
      document.body.appendChild(element);
      return element;
    }
    
  /* creating function to create a Paragraph  */
    function createParagraph(text, className){
        //creating paraghraph element
        var paragraph = document.createElement("p");
        //creating text for paragraph
        var txt = document.createTextNode(text);
        //assigning class to element
        if (typeof className != undefined){
          paragraph.classList.add(className);
        }
        //appending element to body
        document.body.appendChild(paragraph);
        //paragraph.setAttribute("align", "center");
        //appending text to paragraph
        paragraph.appendChild(txt);
        return paragraph;
    }
    
    /* creating function createheading for H1  */
  function createHeading1(titleText){
        //creating h1 element
        var heading1 = document.createElement("h1");
        //creating text for heading
        var text = document.createTextNode(titleText);
        //appending element to body
        document.body.appendChild(heading1);
        heading1.setAttribute("align", "center");
        //appending text to h1
        heading1.appendChild(text);
        return heading1;
    }
    
    /* creating function createheading for H5  */
  function createHeading5(titleText){
        //creating h5 element
        var heading5 = document.createElement("h5");
        //creating text for heading
        var text = document.createTextNode(titleText);
        //appending element to body
        document.body.appendChild(heading5);
        //appending text to h5
        heading5.appendChild(text);
        return heading5;
    }
    
    /*creating function to create break element */
    function createlinebreak(){
      var linebreak = document.createElement("br");
      document.body.appendChild(linebreak);
    }