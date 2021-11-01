// ALERT FUNCTION
function popUpAlert()
{
    window.alert('Hello, World!');
}


// BUTTON FUNCTIONS
function bigger()
{
    var inputText = document.getElementById('text');

    popUpAlert();
    inputText.style.fontSize = '24pt';
}

function bigMoo()
{
    var bigMoo = document.getElementById('text'); 
    var addMoo; 
    

    popUpAlert();
    bigMoo.value = bigMoo.value.toUpperCase();
    addMoo = bigMoo.value.split('.'); 
    bigMoo.value = addMoo.join('-Moo'); // Following the order of instructions, I am making the assumption that my result should be XXX-Moo and not XXX-MOO./yh

}

// RADIO BUTTON FUNCTIONS
function boringOrFancy()
{

    var inputText = document.getElementById('text');
    var fancyText = document.getElementById('fancy');
    var boringText = document.getElementById('boring');

    popUpAlert();

    if(fancyText.checked)
    {
        inputText.style.fontWeight = 'bold';
        inputText.style.color = 'blue';
        inputText.style.textDecoration = 'underline';
    }
    else if(boringText.checked)
    {
        inputText.style.fontWeight = 'normal';
        inputText.style.color = 'black';
        inputText.style.textDecoration = 'none';
    }
}






