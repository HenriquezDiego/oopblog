const $resumen = document.getElementById("blog");
const $recentBlog = document.getElementById("recent-blog");
let texto = `${$resumen.innerText.substring(0,60)}...`
$recentBlog.innerHTML = '';
$recentBlog.innerHTML = texto;

const $title = document.getElementsByTagName('title');
let pathname = window.location.pathname;
let pathnameSplit = pathname.split('/');
if(pathnameSplit != null){
    pathname = pathnameSplit[pathnameSplit.length-1];
    pathname = pathname.split('.')[0];
}

$title[0].innerHTML = pathname;

