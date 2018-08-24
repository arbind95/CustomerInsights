var input;

function addToneContentFrench() {
	document.body.innerHTML = '';
// create Div element
    var div = createDiv();
    var image = createImage('Images/headphone.png', 'image');
    div.appendChild(image);
    
    var heading1 = createHeading1('Customer Insights');
    div.appendChild(heading1);
    document.body.appendChild(div); 
    
    var heading5 = createHeading5('....know your customer');
    
    var divpara = createDiv();
    var p = createParagraph('', 'paragraph');
    divpara.appendChild(p);
    p.textContent = 'Paste your content below (minimum 100 words)';
    p.setAttribute('align', 'center');
    document.body.appendChild(divpara);
    
    var divinput = createDiv();
    input = createTextArea('input');
    input.minLength = '100';
    input.cols = "40";
	input.rows = "80";
    divinput.appendChild(input);
    var submit_Eng = createButton('Submit', 'sub');
    divinput.appendChild(submit_Eng);
    var btn_back = createButton('Go Back', 'sub');
    divinput.appendChild(btn_back);
    document.body.appendChild(divinput);
    
    submit_Eng.onclick = getToneResponse_French;
    btn_back.onclick = toneAnalyze;
    
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

function getToneResponse_French(){
	var input_text = input.value;
	var url = 'https://customerdeepinsights.mybluemix.net/FrenchToneAnalyze';
	var txt={};
	txt.data = input_text;
	$.get(url, txt, function(res){
		document.body.innerHTML = '';
		
		var body = document.getElementsByTagName('body')[0];
		var mainpara = document.createElement('p');
    	mainpara.classList.add('reportheading');
    	mainpara.appendChild(document.createTextNode('Tone Analysis Report'));
    	mainpara.setAttribute('align', 'center');
    	mainpara.classList.add('theading');
    	body.appendChild(mainpara);
    	var tbl = document.createElement('table');
    	var tbdy = document.createElement('tbody');
    	var tr1 = document.createElement('tr');
    	var th1 = document.createElement('th');
    	th1.appendChild(document.createTextNode('Tone Name'));
    	var th2 = document.createElement('th');
    	th2.appendChild(document.createTextNode('Score in Percentile'));
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tbdy.appendChild(tr1);
        tbl.appendChild(tbdy);
        body.appendChild(tbl);
        
        $.each (res.document_tone.tones, function (i) {
       			 var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                 var td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(res.document_tone.tones[i].tone_name));
                td2.appendChild(document.createTextNode(res.document_tone.tones[i].score));
       
                tr.appendChild(td1);
                 tr.appendChild(td2);
        tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
		});
		var par = document.createElement('div');
   par.setAttribute('align', 'center');
   var button = createButton('Home','hom');
	  button.setAttribute('margin', 'auto');
 	button.onclick=ui;
 	par.appendChild(button);
 	 body.appendChild(button);
	});
}
