$(() => {
    $(".eaten").on("click", function() {
        const id = $(this).attr("data-id");
        console.log(id) //this
        $.ajax({
            url: `/api/burgers/${id}`,
            method: "PUT",
            data: {devoured: true}            
        }).then(()=>{
            console.log("success") //this
            location.reload();
        }).catch(err => console.log("Error: ", err)) //this
    })
});