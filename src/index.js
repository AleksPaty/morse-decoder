const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let deKey = {
        '10': '.', 
        '11': '-',
        '**': 'space'
    };
    let list = '';
    let decodeString = '';
    for(let i=0; i < expr.length; i+=2) {
        if(!(i%10)) list += ' ';
        for(let d in deKey) {
            if(d == (expr[i] + expr[i+1])) list += deKey[d] 
        }
        if(expr[i]+expr[i+1] == '**') {
            i += 8;
            list += ' ';
        }
    }

    list.split(' ').forEach((word) => {
        if(word === 'space') decodeString += ' ';
        for(let key in MORSE_TABLE) {
            if(key == word) decodeString += MORSE_TABLE[key]
        }
    })
    return decodeString
}

module.exports = {
    decode
}