function getupdatedate(){
    var modified = new Date(document.lastModified);

    var year = modified.getFullYear();
    var month= modified.getMonth() + 1;
    var date = modified.getDate();

    document.write( "最終更新: " + year + "/" + month + "/" + date);

    return 0;
}