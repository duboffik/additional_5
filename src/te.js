var stroka = '([{}])';
stroka = '[{}]'
var pair = [['(', ')'], ['[', ']'], ['{', '}']];

var fal = 'false';
var i = 0;

while ((stroka.length > 0)&&(fal == 'false')) {
    for (i = 0; i<pair.length; i++) {
        lastBracketPos = stroka.lastIndexOf(pair[i][0] );

        if (lastBracketPos != -1) {
            console.log('lastBracketPos =' + lastBracketPos);
            if (stroka[lastBracketPos + 1] == pair[i][1]) {
                console.log('da')
                stroka = stroka.substr(0,lastBracketPos)+ stroka.substr(lastBracketPos + 2, stroka.length-1 )
                i++;
            }
            else {
                if (i == pair.length -1) {
                    //return 'false'
                    fal = 'true';
                    console.log('false')
                }
            }

            console.log('stroka = ' + stroka);
        }
        else {
            fal = 'true';
        }
    }

}
console.log('stroka_final = ' + stroka);