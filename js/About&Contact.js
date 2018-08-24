function about_us() {
	document.body.innerHTML = '';
	
	// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    div.appendChild(image);
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div);
     
    var heading5 = createHeading5('....know your customer');
    var para = createParagraph("About Us",'paragraph');
    para.setAttribute('align', 'center');
    document.body.appendChild(para);
    var textData = "This an application for a business organization to analyse customer communication data to obtain insights to customer requirements, satisfaction and their behaviour which could benefit the business in several ways.There has always been a need for businesses around the globe to understand their customer market as much as possible. Specially at present when businesses tend to launch, develop or change their products according to the requirement of the customers; unlike a few years ago when the businesses used to launch their products and then spend a lot to market it so that customer will feel a need to buy that product. This is a web app which enables any business to analyse the email communications between the customer support team or any other customer representative to get insights to the customer behaviour and needs. This will give the business a better competency along with increased customer satisfaction.";
    var para = createParagraph(textData,'paragraph');
    para.setAttribute('align', 'center');
    document.body.appendChild(para);
    var divBottom = createDiv();
    var about = createParagraph('About Us', 'para');
    var contact = createParagraph('Contact Us', 'para');
    var bar = createParagraph('|', 'para');
    divBottom.appendChild(about);
    divBottom.appendChild(bar);
    divBottom.appendChild(contact);
    divBottom.classList.add('bottom');
    document.body.appendChild(divBottom);
    
    var button = createButton('Back', 'hom');
    document.body.appendChild(button);
    button.onclick = ui;
    
    about.onclick = about_us;
    contact.onclick = contact_us;
}

function contact_us() {
	document.body.innerHTML = '';
	
	// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    div.appendChild(image);
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div);
    
    var heading5 = createHeading5('....know your customer');	
    var para = createParagraph("Contact Us",'paragraph');
    para.setAttribute('align', 'center');
    document.body.appendChild(para);
    var textData = "Arbind Agrahari Baniya, Email: aagrahar@deakin.edu.au, Phone: 0416002680";
    var para = createParagraph(textData,'paragraph');
    para.setAttribute('align', 'center');
    document.body.appendChild(para);
    
    var textData = "Neha, Email: ole@deakin.edu.au, Phone: 0449101878";
    var para = createParagraph(textData,'paragraph');
    para.setAttribute('align', 'center');
    document.body.appendChild(para);
    
     var button = createButton('Back', 'hom');
    document.body.appendChild(button);
    button.onclick = ui;
    
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
}
