
//modules
var fs = require('fs');
//custom modules - for WIP
var genericHTTP = require('node-default-server')();
//varaibles
var doc_root='./',
    gen_HTTP={},
    root_params={
        'silent':false,//actual settings
        'ports':'3000',
        'config':'./config',
        'found_params':[]
    };

root_params.ports=root_params.ports.split(',');//this needs to be an array


fs.stat(doc_root, function(err, stats){
    if((!err || err===null) && stats.isDirectory()){
        if(doc_root.indexOf('./')===0){//express won't like this
            fs.realpath(doc_root, function(err, relPath){
                if(!err || err===null){
                    gen_HTTP=new genericHTTP({'ports':root_params.ports,'doc_root':relPath});
                }
            });
        }else{
            gen_HTTP=new genericHTTP({'ports':root_params.ports,'doc_root':doc_root});
        }
    }else{
        console.log("COULD NOT START BAD DOCROOT",err.toString());
        process.exit();//not needed ^_^
    }
});
