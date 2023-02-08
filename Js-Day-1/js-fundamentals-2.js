// given a date of month find out what day of the week it is

var n = 26;
var b = 27%7;
var res = "";
// now we can use switch case to figure out what day of the week it is
switch(b){
    case 0: {
        res="Sunday";
        break;
    }
    case 1: {
        res="Monday";
        break;
    }
    case 2: {
        res="Tue";
        break;
    }
    case 3: {
        res="Wed";
        break;
    }
    case 4: {
        res="Thu";
        break;
    }
    case 5: {
        res="Fri";
        break;
    }
    case 6: {
        res="Sat";
        break;
    }
    case "default": {
        res="invalid date";
    }

}

console.log(res);