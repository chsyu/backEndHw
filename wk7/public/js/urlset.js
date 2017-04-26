function changurl(newUrl){
    var stateObject={id:newUrl};
    var title="/"+newUrl+"";
    history.pushState(stateObject,title,newUrl);
}