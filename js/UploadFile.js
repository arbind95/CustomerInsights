var textBox;

function personalityInsight(){
	document.body.innerHTML = '';
	
	// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    div.appendChild(image);
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div);
    
    var heading5 = createHeading5('....know your customer');
    
    var div2 = createDiv();
	var p = createParagraph('Select your communication language', 'paragraph');    
    div2.appendChild(p);
    document.body.appendChild(div2);
    div2.setAttribute('align','center');
    
    var divButton = createDiv();
    var btn_eng = createButton('English', 'btns');
    divButton.appendChild(btn_eng);
    var btn_french = createButton('French', 'btns');
    divButton.appendChild(btn_french);
    var btn_spanish = createButton('Spanish', 'btns');
    divButton.appendChild(btn_spanish);
    var btn_back = createButton('Go Back', 'btns');
    divButton.appendChild(btn_back);
    document.body.appendChild(divButton);
    divButton.setAttribute('align','center');
    
    var divBottom = createDiv();
    var about = createParagraph('ABOUT_US', 'para');
    var contact = createParagraph('CONTACT_US', 'para');
    var bar = createParagraph('|', 'para');
    divBottom.appendChild(about);
    divBottom.appendChild(bar);
    divBottom.appendChild(contact);
    divBottom.classList.add('bottom');
    document.body.appendChild(divBottom);
    
    about.onclick = about_us;
    contact.onclick = contact_us;
    
    btn_eng.onclick = addContentEng;
    btn_french.onclick = addContentFrench;
    btn_spanish.onclick = addContentSpanish;
    btn_back.onclick = ui;
    
}


function toneAnalyze() {
	document.body.innerHTML = '';
	
	// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    div.appendChild(image);
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div);
    
    var heading5 = createHeading5('....know your customer');
    
    var div2 = createDiv();
	var p = createParagraph('Select your communication language', 'paragraph');    
    div2.appendChild(p);
    document.body.appendChild(div2);
    div2.setAttribute('align','center');
    
    var divButton = createDiv();
    var btn_eng = createButton('English', 'btns');
    divButton.appendChild(btn_eng);
    var btn_french = createButton('French', 'btns');
    divButton.appendChild(btn_french);
    var btn_spanish = createButton('Spanish', 'btns');
    divButton.appendChild(btn_spanish);
    var btn_back = createButton('Go Back', 'btns');
    divButton.appendChild(btn_back);
    document.body.appendChild(divButton);
    divButton.setAttribute('align','center');
    
    var divBottom = createDiv();
    var about = createParagraph('About Us', 'para');
    var contact = createParagraph('Contact Us', 'para');
    var bar = createParagraph('|', 'para');
    divBottom.appendChild(about);
    divBottom.appendChild(bar);
    divBottom.appendChild(contact);
    divBottom.classList.add('bottom');
    document.body.appendChild(divBottom);
    
    about.onclick = about_us;
    contact.onclick = contact_us;
    
    btn_eng.onclick = addToneContentEng;
    btn_french.onclick = addToneContentFrench;
    btn_spanish.onclick = addToneContentSpanish;
    
    btn_back.onclick = ui;
    
}


    
    
    