var apiKey="";

function books(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
            res = JSON.parse(xmlHttp.responseText).results.books;
           
            for(var i=0;i<res.length;i++){
                rank = res[i].rank;
                title = res[i].title;
                image = res[i].book_image;
                weeks = res[i].weeks_on_list;
                description = res[i].description;
                link = res[i].buy_links[0].url;
                document.getElementById("books").innerHTML += `<div class="book"> 
                                                                    <header class="up">
                                                                        <span class="rank"># ${rank}</span>
                                                                        <h3 class="title">${title} </h3>
                                                                    </header>                                                                
                                                                    <a href="${link}" target="_blank"><img src=${image} class="book_image"></a>
                                                                    <p>Semanas en lista: <b>${weeks}</b></p>
                                                                    <p class="description">${description}</p>
                                                                </div>`;
            }
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

books(" https://api.nytimes.com/svc/books/v3/lists/2019-01-20/hardcover-fiction.json?api-key="+apiKey);