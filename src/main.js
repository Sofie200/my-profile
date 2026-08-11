export function addTrait(title, score){

    let domWrapper = document.createElement('div');
    let domTitle = document.createElement('h4');
    let domDiv = document.createElement('div');
    domDiv.className = "score-bar";
    

    for (let i = 0; i < score; i++){
        let domScore = document.createElement('div');
        domScore.className = "score";
        domDiv.append(domScore);
    }

    for (let i = score; i < 12; i++){
        let domScore = document.createElement('div');
        domScore.className = "grey";
        domDiv.append(domScore);
    }

    domTitle.innerText = title;
    domWrapper.append(domTitle, domDiv)
    document.getElementById("personality-grid").append(domWrapper);
    
}

addTrait("Ansvarstagande ", 12);
addTrait("Problemlösande", 11);
addTrait("Tålmodig", 10);
addTrait("Samarbetsvillig", 10);
addTrait("Kommunikativ", 11);
addTrait("Självständig", 10);