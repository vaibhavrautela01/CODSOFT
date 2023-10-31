let displayValue='';

function appendToDisplay(value) {
displayValue +=value;
document.getElementById('display').value = displayValue;
}

function clearDisplay(){
     displayValue = '';
     document.getElementById('display').value = displayValue;
}

function calculateResult(){
    try 
    {
    const result = eval (displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
    } 
    catch (error) 
    {
    document.getElementById('display').value = 'Error';
    }
}

function clearEntry() {
        displayValue = displayValue.slice(0,-1);
        document.getElementById('display').value = displayValue;
}

function backspace() {
        displayValue = displayValue.slice(0,-1);        
        document.getElementById('display').value = displayValue;
}
        
document.addEventListener('keydown', function (event) {
            const key = event.key;

        if (/[\d+\-*/]/.test(key)) 
        { 
            appendToDisplay(key);
        } 
        else if (key === 'Enter' || key === '=') 
        {     
            calculateResult();
        } 
        else if (key === 'Backspace')  
        {
             backspace();
        } 
        else if (key === 'Escape') 
        { 
            clearDisplay();
        }
    });
        
let memoryValue = 0;
        
function squareRoot() {
        try 
        {
        const result = Math.sqrt(eval (displayvalue)); 
        document.getElementById('display').value = result; displayValue = result.toString();
        } 
        catch (error) 
        {
            document.getElementById('display').value = 'Error'; 
        }
    }

function memoryAdd() {
try {
   memoryValue += parseFloat(eval (displayValue));
  } 
   catch (error) 
  {
   document.getElementById('display').value = 'Error';
   return;
  }
   clearDisplay();
  }

function memorySubtract(){
    try
    {
    memoryValue-=parseFloat(eval (displayValue));
    }
    catch (error) 
  {
   document.getElementById('display').value = 'Error';
   return;
  }
   clearDisplay();
  }

function memoryRecall() {
    displayValue += memoryValue;
    document.getElementById('display').value = displayValue;
}

function memoryclear(){
memoryValue=0;
}
                  