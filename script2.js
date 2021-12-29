var word=prompt("Enter String");
var conf=confirm("do you want to make case sensitive");
flag=0;

if(conf==false){
    word =word.toUpperCase();
   
}

for(var i=0;i<(word.length)/2;i++){
    
    if(word[i]==word[word.length -1 -i]){
    }
    else{
        flag=1;
    }
    
}
if(flag==0){
    document.write("word is palindrome");
}
else{
    document.write("word is not palindrome");
}
