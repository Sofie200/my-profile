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

addTrait("Accountable", 12);
addTrait("Problem-solving", 11);
addTrait("Adaptable", 7);
addTrait("Collaborative", 10);
addTrait("Communicative", 9);
addTrait("Independent", 10);