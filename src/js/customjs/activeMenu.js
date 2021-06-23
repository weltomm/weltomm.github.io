export function setActiveMenu() {
    String.prototype.removeCharAt = function (i) {
        var tmp = this.split(''); // convert to an array
        tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
        return address = tmp.join(''); // reconstruct the string
    }

    var url = window.location.pathname;
    var address = url.substring(url.lastIndexOf('/'));
    if (url === "/") {
        $("li.menu-item a[href='index.html']").parent().addClass("active");
    }
    if(address.charAt(address.length-1) == "/")
        address = address.substring(0, address.length - 1);
    if(address.charAt(0) == "/") {
        address.removeCharAt(1);
        $("li.menu-item a[href='"+address+"']").parent().addClass("active");
    } else {
        address = "/" + address;
    }
    $("li.menu-item a[href='"+address+"']").parent().addClass("active");
}