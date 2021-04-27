menu_list_array=[
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Dulexe Veggie Pizza",
    "Veg Extravaganza Pizza",
]
function getmenu(){
    var htmlata;
    html-"< ol class-'menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
    }
        
    }
    function additem(){
        var htmldata
        var item=document.getElementById ("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort
        htmldata="< section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ '< div class= "card">' + '< img src="image/pizzas.Img.png"/>' + menu_list_array[i] + '</div>' 
        }
        htmldata=htmldata="</section>"
        document.getElementById("display_addedmenu").innerHTML - htmldata;
        }