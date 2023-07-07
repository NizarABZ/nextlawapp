const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsByTagName("lawyer-list");
    const lawyer = document.querySelectorAll(".lawyer")
    const lname = document.getElementsByTagName("h2")

    for(var i=0; i < lname.length; i++){
        let match = lawyer[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                lawyer[i].style.display = "";
            } else {
                lawyer[i].style.display = "none";
            }
        }

    }
}