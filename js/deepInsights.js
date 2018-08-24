console.log('loading');

function ui() {
	document.body.innerHTML = '';
// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    //var right_img = createImage('Images/right.png', 'image');
    //var red_img = createImage('Images/red.png', 'cross');
    //var home_img = createImage('Images/home.png', 'image');
    //var url = createInputBox('inputbox');
    //div.appendChild(left_img);
    //div.appendChild(right_img);
    //div.appendChild(red_img);
    //div.appendChild(home_img);
    //div.appendChild(url);
    //div.style.backgroundColor = 'grey';
    //document.body.appendChild(image);
    div.appendChild(image);
    
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div); 
    
    var heading5 = createHeading5('....know your customer');
    
    var divpara = createDiv();
    var p = createParagraph('', 'paragraph');
    divpara.appendChild(p);
    p.textContent = 'Building positive relationships with your customers requires you to have a good understanding of their needs and wants. By improving your understanding of your customers, including their purchasing motivations and habits, you can personalise the customer service you provide.';
    p.setAttribute('text-align', 'justify');
    document.body.appendChild(divpara); 
    
    var div2 = createDiv();
    var p1 = createParagraph('', 'paragraph');
    p1.textContent = 'Select what you want to analyze';
    div2.appendChild(p1);
    document.body.appendChild(div2);
    div2.setAttribute('align','center');
    
    var divButton = createDiv();
    var btn_person = createButton('Personality Insight', 'btn');
    var btn_tone = createButton('Analyze Tone', 'btn');
    divButton.appendChild(btn_person);
    divButton.appendChild(btn_tone);
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
    
    btn_person.onclick = personalityInsight;
    btn_tone.onclick = toneAnalyze;
    
}

window.onload = ui;