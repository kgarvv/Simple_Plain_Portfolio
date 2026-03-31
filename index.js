let hamburger_menu = document.getElementById("hamburger_menu");
    let cross_menu = document.getElementById("cross_menu");
    let hidden_menu = document.getElementById("hidden_menu");
    
    function showMenu() {
        hamburger_menu.style.display = "none";
        cross_menu.style.display = "flex";
        hidden_menu.style.display = "flex";
    }

    function hideMenu() {
        hamburger_menu.style.display = "flex";
        cross_menu.style.display = "none";
        hidden_menu.style.display = "none";
    }