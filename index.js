// task #1;

let page = window.open('', 'displayWindow', 'width=400,height=300,status=no,toolbar=no,menubar=no');

function resizeWindow() {
    setTimeout(function(){ page.resizeTo(500,500) }, 2000);
 }

function moveWindow() {
    setTimeout(function(){ page.moveTo(200,200) }, 2000);
}

function closeWindow() {
    setTimeout(function(){ page.close()}, 2000);
}

// task #2;

let changedParagraph = document.getElementById('text');

function changeCSS() {
    changedParagraph.classList.toggle('customText');
};

// task #3

let buttons = document.getElementsByClassName('buttons')[0];
let blue = document.getElementById('blue');
let pink = document.getElementById('pink');
let brown = document.getElementById('brown');
let yellow = document.getElementById('yellow');

blue.addEventListener('click', function(){
    buttons.style.backgroundColor = 'blue';
});

pink.addEventListener('dblclick', function(){
    buttons.style.backgroundColor = 'pink';
});

brown.addEventListener('mousedown', function(){
    buttons.style.backgroundColor = 'brown';
});

brown.addEventListener('mouseup', function(){
    buttons.style.backgroundColor = 'white';
});

yellow.addEventListener('mouseover', function(){
    buttons.style.backgroundColor = 'yellow';
});

yellow.addEventListener('mouseout', function(){
    buttons.style.backgroundColor = 'white';
})

// task #4;

let deleteButton = document.getElementById('deleteOption');
let popSelected = document.getElementById('popSelected');
let returnOptions = document.getElementById('returnOptions');

returnOptions.addEventListener('click', function(){
    popSelected.innerHTML = `
    <option value="peter">Peter</option>
    <option value="john">John</option>
    <option value="alise">Alise</option>
    <option value="alex">Alex</option>
    <option value="iren">Iren</option>`
})

deleteButton.addEventListener('click', function(){
    popSelected.remove(popSelected.selectedIndex);
});

// task #5;

let liveButton = document.getElementById('live_button');
let reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    document.getElementById('demo').innerHTML = '';
})

liveButton.addEventListener('click', function(){
    document.getElementById('demo').innerHTML += '<p>I was pressed</p>';
});

liveButton.addEventListener('mouseover', function(){
    document.getElementById('demo').innerHTML += '<p>Mouse is on me!</p>';
});

liveButton.addEventListener('mouseout', function(){
    document.getElementById('demo').innerHTML += '<p>Mouse is not on me!</p>';
});

// task #6;

let height = document.getElementById('height');
let width = document.getElementById('width');

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    width.innerHTML = `Height: ${window.innerWidth}`;
    height.innerHTML = `Width: ${window.innerHeight}`;
};

// task #7;

let country = document.getElementById('country');
let city = document.getElementById('city');
let userCityResult = document.getElementById('userCity');
let userCountryResult = document.getElementById('userCountry');

country.addEventListener('change', function(){
    switch (country.selectedIndex) {
        case 1: city.innerHTML = `
            <option value="New-York">New-York</option>
            <option value="Washington">Washington</option>
            <option value="Miami">Miami</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            `;
        break;
        case 2: city.innerHTML = `
            <option value="Vienna">Vienna</option>
            <option value="Salzburg">Salzburg</option>
            <option value="Innsbruk">Innsbruk</option>
            <option value="Graz">Graz</option>
            <option value="Linz">Linz</option>
        `;
        break;
        case 3: city.innerHTML = `
            <option value="Rome">Rome</option>
            <option value="Naples">Naples</option>
            <option value="Venice">Venice</option>
            <option value="Genova">Genova</option>
            <option value="Florence">Florence</option>
        `;
        break;
        case 4: city.innerHTML = `
            <option value="Berlin">Berlin</option>
            <option value="Munich">Munich</option>
            <option value="Leipzig">Leipzig</option>
            <option value="Dresden">Dresden</option>
            <option value="Stuttgart">Stuttgart</option>
        `;
        break;
        case 0: city.innerHTML = `
            <option value="selectCountry">Select Country First</option>
        `;
        default: ;
    };
    let userCountry = country.options[country.selectedIndex].innerHTML;
    userCountryResult.innerHTML = `${userCountry}, `;
    let userCity = city.options[city.selectedIndex].innerHTML;
    userCityResult.innerHTML = `${userCity}`;
});

city.addEventListener('change', function(){
    let userCity = city.options[city.selectedIndex].innerHTML;
    userCityResult.innerHTML = `${userCity}`;
});
