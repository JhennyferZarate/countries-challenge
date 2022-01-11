var icon = document.getElementById('icon');
var flag = 0;

icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(flag == 0){
        document.getElementById("icon").src="/images/moon-fill.png";
        flag++;
    }else{
        document.getElementById("icon").src="/images/moon.png";
        flag--;
    }
    
}