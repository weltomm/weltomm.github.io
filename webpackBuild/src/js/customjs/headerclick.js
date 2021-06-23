import tripleMe from "./tripleMe";

function headerclick () {
    var $header = $(".hello");

    $header.on("click", function (){
        alert(tripleMe(20));
    });
}

export default headerclick;