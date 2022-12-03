if(!window.localStorage.getItem('name') && window.location.href == "http://localhost:5173/"){
    window.location.href = "http://localhost:5173/preview";
}