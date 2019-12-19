let redWords = [ 'the', 'to', 'i', 'go', 'no', 'in', 'he', 'she',
 'we', 'me', 'be', 'was', 'my', 'you', 'her', 'they', 'all', 'are',
  'said', 'so', 'do', 'have', 'like', 'some', 'come', 'were',
	 'there', 'little', 'one', 'when', 'out', 'what', 'peter',
	  'jane', 'water', 'here' ];
text = ['so', 'this', 'is', 'the', 'actual', 'thing!'];

for (i=0; i<text.length; i++) {
	cWord = text[i];
  
  if (redWords.includes(cWord)) {
  	cWord = cWord.replace(cWord, '<span class="makeRed">'+cWord+'</span>');
    text[i] = cWord;
    console.log(cWord);
  }
}
for (j=0; j<text.length; j++) {
	document.getElementById('resultText').innerText += text[j];
}


// <div>
//   <img src="https://playcode.io/static/img/logo.png" 
//        alt="PlayCode logo">
//   <h1 id="msg"></h1>
// </div>


