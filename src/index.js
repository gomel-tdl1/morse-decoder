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
    const regexp=/[01*]{10}/g;
    let arrayExp=expr.match(regexp);
    return arrayExp.map(item=>{
       return parseInDotDash(item);
    }).map(code=>{
        if(code===' ')return code;
        return MORSE_TABLE[code];
    }).join('');
}

function parseInDotDash(word){
    const dot=/10/g;
    const dash=/11/g;
    const space=/\*{10}/;
    const deleter=/^0+/;

    if(space.test(word))return ' ';
    let clearWord=word.replace(deleter,'');
    return clearWord.replace(dot,'.').replace(dash,'-');
}

module.exports = {
    decode
};