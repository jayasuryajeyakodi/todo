$('#added-text').on("keypress", function(event){
    if(event.which === 13){
        console.log("list added");
        $('.todo-list').append(getListItem($('#added-text').val()));
        $(this).val("");
    }
});


$('div').on("click",".list-item",function(){
    console.log("totlist clicked");
    $(this).addClass("strike");
});

$('button.btn-title').click(function(){
    $('.add-list').toggleClass("hide");
});

function getListItem(text){
 return "<div class = 'list-item-container'><button class = 'delete-list'>Delete</button><span class = 'list-item'>" + text + "</span></div>";
}

$('div').on("click", ".delete-list",function(){
$(this).parent().remove();
});