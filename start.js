const fs=require('fs');
const chalk=require('chalk');
const yargs = require('yargs');
const notes=require('./try.js');
const { demandOption } = require('yargs');
var i=0;
yargs.version('1.1.0');
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
       body:{
           describe:'body',
           demandOption:true,
           type:'string',
       },
       title:{
        describe:'title',
        demandOption:true,
        type:"string",
    }
    },
    handler: function(argv)
    {
      notes.addNotes(argv.title,argv.body);
}
});
yargs.command({
    command:'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv)
    {
       notes.removeNote(argv.title);
    }
});
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
       title:{
        describe:'title',
        demandOption:true,
        type:"string",
    }
    },
    handler: function(argv)
    {
       notes.read(argv.title);
    }
});
yargs.command({
    command:'List',
    describe:'List note',
    handler: function ()
    {
        notes.ListNote();

    }
});
yargs.parse();
