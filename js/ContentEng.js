var input;

function addContentEng() {
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
    
    submit_Eng.onclick = getResponse_Eng;
    btn_back.onclick = personalityInsight;
    
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

function getResponse_Eng(){
	var input_text = input.value;
	
	input_text = input_text.replace(/(^\s*)|(\s*$)/gi,"");
	input_text = input_text.replace(/[ ]{2,}/gi," ");
	input_text = input_text.replace(/\n /,"\n");
	var len = input_text.split(' ').length;
	if(len >= 100) {
		var url = 'https://customerdeepinsights.mybluemix.net/PersonalityInsights';
		var txt={};
		txt.data = input_text;
		$.get(url, txt, function(res){
		var response = res;
		
		document.body.innerHTML = '';
		
		var body = document.getElementsByTagName('body')[0];
    	var tbl = document.createElement('table');
    	
    	tbl.classList.add("table");
    
    	var tbdy = document.createElement('tbody');
    	
    	var mainpara = document.createElement('p');
    	mainpara.classList.add('reportheading');
    	mainpara.appendChild(document.createTextNode('Personality Insights Report'));
    	mainpara.setAttribute('align', 'center');
    	mainpara.classList.add('theading');
    	body.appendChild(mainpara);
    	
    	var para = document.createElement('p');
    	para.setAttribute('align', 'çenter');
    		
    	
    		var tr2 = document.createElement('tr');
    		var th3 = document.createElement('th');
    		th3.appendChild(document.createTextNode('Personaltity Traits'));
    		var th4 = document.createElement('th');
    		th4.appendChild(document.createTextNode('Score in Percentile'));
             tr2.appendChild(th3);
             tr2.appendChild(th4);
             tbdy.appendChild(tr2);
             tbl.appendChild(tbdy);
            para.appendChild(tbl);
    		
    		
    	
    		    		
		$.each (response.personality, function (i) {
       			 var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                 var td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(response.personality[i].name));
                td2.appendChild(document.createTextNode(response.personality[i].percentile));
       
                tr.appendChild(td1);
                 tr.appendChild(td2);
        tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    para.appendChild(tbl);
    para.setAttribute('align', 'çenter');
    body.appendChild(para);
		});
		
		
		
		$.each (response.needs, function (i) {
			var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                 var td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(response.needs[i].name));
                td2.appendChild(document.createTextNode(response.needs[i].percentile));
       
                tr.appendChild(td1);
                 tr.appendChild(td2);
        tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    para.appendChild(tbl);
    para.setAttribute('align', 'çenter');
    body.appendChild(para);
		});
		
		
		$.each (response.values, function (i) {
			var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                 var td2 = document.createElement('td');
                td1.appendChild(document.createTextNode(response.values[i].name));
                td2.appendChild(document.createTextNode(response.values[i].percentile));
       
                tr.appendChild(td1);
                 tr.appendChild(td2);
        tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
   para.appendChild(tbl);
		});		
		
   var par = document.createElement('div');
   par.setAttribute('align', 'center');
   var button = createButton('Home','hom');
	  //button.setAttribute('margin-right', '5px');
 	button.onclick=ui;
 	par.appendChild(button);
 	 body.appendChild(button);
	});
	
}
else {
	alert('Minimum words should be hundred');
}
 
}

	





