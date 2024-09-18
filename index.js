let url = "./fotograf.json";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        //oppgave 1
        console.log(`I denne listen har vi ${data.length} bilder`);

        //oppgave2
        let array = [];
        data.forEach(element => {
            array.push(element.albumId)
        });
        console.log(`I denne listen er det ${Math.max(...array)} albumer`);

        //oppgave3
        data.forEach(element => {
            if (element.id === 238) {
                console.log(element.title);
                console.log(element.id);
                console.log(element.url);
            }
        });

        //oppgave4
        data.forEach(element => {
            if (element.id === 555) {
                if (element.url && element.name) {
                    console.log(element.url);
        
                    const img = document.createElement('img');
                    img.src = element.url;
                    img.alt = element.name;
        
                    document.body.appendChild(img);
                } else {
                    console.error('URL eller navn mangler for element med ID 555');
                }
            }
        });
        
    });

    let ur12 = "https://jsonplaceholder.typicode.com/posts";

    fetch(ur12)
    .then((response) => response.json())
    .then((data) => {
        //spørsmål1
        data.forEach(element => {
            if (element.id == 95) {
                console.log(element.title);
                console.log(element.id);
                }
        });

        //spørsmål2
        data.forEach(post => {
            if (post.userId === 5) {
                post.body = "Denne teksten er oppdatert"
            }    
        });

        const updatedPost = data.filter(post => post.userId === 5);
        console.log('Oppdatert post for userId 5:', updatedPost);
        

});