function scrollToBottom() {
    return new Promise((res, rej) => {
        let intervalCount = 0;
        var interval = setInterval(function() {
           // method to be executed;       
            const modalElement = document.getElementsByClassName("artdeco-modal__content discover-cohort-recommendations-modal__content")[0];
            modalElement.scrollTop = modalElement.scrollHeight;
           intervalCount++;
           if(intervalCount > 10) {
               clearInterval(interval);
               res();
           }
         }, 1000);
    })
}
async function connect () {
    const searchTitles = ["sr.", "senior", "lead", "chief", "vice president", "director", "architect", "manager"];
    const searchKeywords = ["developer", "development", "software", "engineer", "tech", "technology", "technical"];
    const ofCourse = ["cto", "chief technology"];
    const dontWant = ["quality", "business"]
    let count = 0;
    const cards = document.querySelectorAll(".artdeco-modal__content .discover-entity-type-card");
    Array.prototype.forEach.call(cards, cardContainer => {
        const connectButton = cardContainer.childNodes[9].childNodes[8].childNodes[2];
        const card = cardContainer.childNodes[7];
        if(connectButton.textContent.includes("Connect")){
            const name = card.childNodes[3].childNodes[4].textContent.trim();
            const infoText = card.childNodes[3].childNodes[9].textContent.trim();
            const isFilteredTitles = searchTitles.some(f => infoText.toLowerCase().includes(f));
            const isFilteredKeywords = searchKeywords.some(f => infoText.toLowerCase().includes(f));
            const isMust = ofCourse.some(f => infoText.toLowerCase().includes(f));
            const isDontWant = dontWant.some(f => infoText.toLowerCase().includes(f));
            if(!isDontWant && (isMust || (isFilteredTitles && isFilteredKeywords))){
               connectButton.click();
//                console.log("Person:", name, infoText);
               count++;
            }   
        }
    });
    console.log(new Date(), "Connected: ", count);
} 
async function run () {
    await scrollToBottom();
    await connect();
}
(() => {
    var intervalLoop = setInterval(run, 10000);
})();
