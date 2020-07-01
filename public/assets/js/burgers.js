$(() => {
    $(".eaten").on("click", function() {
        const id = $(this).attr("data-id");
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "PUT", 
            data: {devoured: true}
        }).then(()=>{
            location.reload();
        })
    })
});