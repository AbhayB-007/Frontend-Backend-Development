function doSomething() {
    var i1 = 0;
    for (var i = 0; i < 5; i++) {
        console.log(i);
        i1 = i;
    }
    console.log('Finally i1: ' + i1);
}
doSomething();
