console.log ("Hola");


function sumResistance(resistances) {
    let sum = 0;
    resistances.forEach(resistance => {
        sum += Math.abs(resistance);
    });
    return sum + " ohms";
}

// Test cases
console.log(sumResistance([-1, 5, 6, 3]));
console.log(sumResistance([14, 3.5, 6])); 
console.log(sumResistance([8, 15, 100])); 

//Número dividido en mitades

function numDiv(num) {
    const half1 = Math.floor(num / 2);
    const half2 = Math.ceil(num / 2);
    return [half1, half2];
}


console.log(numDiv(4)); 
console.log(numDiv(10)); 
//Sociedad secreta

function secretName(members) {
    let name = '';
    members.forEach(member => {
        name += member[0];
    });
    return name.split('').sort().join('');
}


console.log(secretName(["Esperanza", "Franco", "Nia"])); 
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); 
console.log(secretName(['Harry', 'Ron', 'Hermione'])); 

//Display online status for a list of users

function onlineStatus(users) {
    const onlineUsers = [];
    const offlineUsers = [];

    
    function isOnline(user) {
        
        return Math.random() < 0.5; 
    }

    users.forEach(user => {
        if (isOnline(user)) {
            onlineUsers.push(user);
        } else {
            offlineUsers.push(user);
        }
    });

    if (onlineUsers.length === 0) {
        return 'No one is online';
    } else if (onlineUsers.length === 1) {
        return `${onlineUsers[0]} is online`;
    } else if (onlineUsers.length === 2) {
        return `${onlineUsers[0]} and ${onlineUsers[1]} are online`;
    } else {
        return `${onlineUsers.slice(0, 2).join(', ')} and ${onlineUsers.length - 2} more are online`;
    }
}


console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

//Array of Multiples

function arrayMultiplos(number, length) {
    const multiples = [];
    for (let i = 1; i <= length; i++) {
        multiples.push(number * i);
    }
    return multiples;
}


console.log(arrayMultiplos(2, 10)); 
console.log(arrayMultiplos(17, 6));

//Positive Array

function positiveDom(array) {
    let positiveCount = 0;
    let negativeCount = 0;

    array.forEach(element => {
        if (element > 0) {
            positiveCount++;
        } else if (element < 0) {
            negativeCount++;
        }
    });

    return positiveCount > negativeCount;
}

console.log(positiveDom([-1, -3, -5, 4, 6767])); 

//Antipodal

function antipodalAverage(array) {
   
    const mid = Math.floor(array.length / 2);
    const firstPart = array.slice(0, mid);
    const secondPart = array.slice(mid + (array.length % 2));


    const result = [];
    for (let i = 0; i < firstPart.length; i++) {
        result.push((firstPart[i] + (secondPart[secondPart.length - 1 - i])) / 2);
    }

    return result;
}


console.log(antipodalAverage([1, 2, 3, 5, 22, 6])); 

