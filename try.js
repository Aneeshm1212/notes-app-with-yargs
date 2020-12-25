const fs=require('fs');
const chalk=require('chalk');
debugger
var getNote=function()
{
   return "notes are ";
};
var addNote=function(title,body)
{
var notes=loadNote();
var duplicate=notes.filter(function(note){
   return note.title===title;
});

if(duplicate.length!==0){
  
   console.log('Title already exits ')
}
else{
notes.push({title:title,body:body});
saveNotes(notes);
}};
var saveNotes=function(note)
{
const datas=JSON.stringify(note);
fs.writeFileSync('notes.json',datas);
};

var loadNote=function(){
try{
var databuff=fs.readFileSync('notes.json');
var actData=databuff.toString();
return JSON.parse(actData);
}
catch(e)
{
   return [];
}
};
var removeNote=function(title){
   var data=loadNote();
  
   var newDtaa=data.filter(function(daata){
      return daata.title!==title;
   });
   if(data.length>newDtaa.length)
   {
      console.log(chalk.green('Node removed'));
      saveNotes(newDtaa);
   }
   else{
      console.log(chalk.red('Node Not found'));
   }

};
var ListNote=function()
{
   var adata =loadNote();
   console.log(getNote());
   adata.map((data)=>{
      console.log(data.title)
   });
}
var readNote=function(title)
{
   var data=loadNote();

   var og=data.filter(function(e){
      return e.title===title;
   });
 
     if(og.length===0)
   {
console.log(chalk.red('NO node found'));
   }
   else{
      og.map((e)=>{
         console.log(chalk.green('Title:'+e.title+'\nBody:'+e.body));
      });
   }

}
module.exports={
   getnotes:getNote,
   addNotes:addNote,
   removeNote:removeNote,
   ListNote:ListNote,
   read:readNote,
}