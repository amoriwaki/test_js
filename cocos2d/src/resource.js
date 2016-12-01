var res = {
    HelloWorld_png : "res/HelloWorld.png",
};

var g_resources = [];
var i;
for (i in res) { 
    if (res.hasOwnProperty(i)) {
        g_resources.push(res[i]);
    }
}
