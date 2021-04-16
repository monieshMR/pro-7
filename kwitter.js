function adduser()
{
    username=document.getElementById("user_name").Value;
    localStorage.setItem("user_name" , username);
    window.location="Kwitter_room.html";
}