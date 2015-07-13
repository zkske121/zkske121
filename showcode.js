setTimeout(function() {
    var s = document.getElementsByTagName('script'),
        tmp, body = document.getElementsByTagName('body')[0];
    for (var i = 0; i < s.length; i++) {
        if (!s[i].src) {
            tmp = document.createElement('pre');
            tmp.style.border = '1px solid #ccc';
            tmp.style.backgroundColor = '#f5f5f5';
            tmp.innerHTML = s[i].innerHTML;
            body.appendChild(tmp);
        }
    }
}, 100);
