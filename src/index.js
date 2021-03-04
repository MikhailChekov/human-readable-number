module.exports = // const foo = document.querySelectorAll('#content');
// const bar = document.querySelectorAll('#content');

function toReadable(number) {
  if(number === 0) return 'zero';

  const numStr = String(number);
  //for 1 digits
  if (numStr.length === 1) {
    return one(number);
  }

  //for 2 digits
  if (numStr.length === 2) {
    // for nums with 0 end
    if (numStr.split('')[1] == 0) {
      return two(Number(numStr.split('')[0]));
    }
    if (number > 20) {
      return two(Number(numStr.split('')[0])) + ' ' + one(Number(numStr.split('')[1]));
    } else {
      return rough(number);
    }
  }

  //for 3 digits
  if (numStr.length === 3) {
    // for nums with 00 end
    if (numStr.split('')[1] == 0 && numStr.split('')[2] == 0) {
      return one(Number(numStr.split('')[0])) + ' hundred';
    }
    // for nums with 0 middle
    if (numStr.split('')[1] == 0 && !numStr.split('')[2] == 0) {
      return one(Number(numStr.split('')[0])) + ' hundred ' + one(Number(numStr.split('')[2]));
    }

    //for 11 - 19
    if(numStr.split('')[1] == 1 && numStr.split('')[2] != 0) {
      return one(Number(numStr.split('')[0])) + ' hundred ' + rough(Number(numStr.split('')[1] + numStr.split('')[2]));
    }

    // for 10, 20, ... 90; 
    if(numStr.split('')[1] !== 0 && numStr.split('')[2] == 0) {
      
      console.log(Number(numStr.split('')[1]))
      return one(Number(numStr.split('')[0])) + ' hundred ' + two(Number(numStr.split('')[1]));;
    }

    // for nums width middle !== 0 and last !== 0
    if (numStr.split('')[1] !== 0 && numStr.split('')[2] !== 0) {
      return one(Number(numStr.split('')[0])) + ' hundred ' + two(Number(numStr.split('')[1])) + ' ' + one(Number(numStr.split('')[2]));
    }
  
  }


  function two(n) {
    switch (n) {
      case 1:
        return 'ten';
      case 2:
        return 'twenty';
      case 3:
        return 'thirty';
      case 4:
        return 'forty';
      case 5:
        return 'fifty';
      case 6:
        return 'sixty';
      case 7:
        return 'seventy';
      case 8:
        return 'eighty';
      case 9:
        return 'ninety';
    }
  }

  function one(n) {
    switch (n) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
    }
  }

  function rough(n) {
    switch (n) {
      case 11:
        return 'eleven';
      case 12:
        return 'twelve';
      case 13:
        return 'thirteen';
      case 14:
        return 'fourteen';
      case 15:
        return 'fifteen';
      case 16:
        return 'sixteen';
      case 17:
        return 'seventeen';
      case 18:
        return 'eighteen';
      case 19:
        return 'nineteen';
    }
  }
}