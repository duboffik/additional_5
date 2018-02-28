var stroka = '|()|';
var pair = [['(', ')'], ['|', '|']];

var fal = 'false';
var lastBracketPos, lastBracketPos2, i = 0;

while ((stroka.length > 0)&&(fal == 'false')) {

        lastBracketPos = stroka.lastIndexOf(pair[0][0] );
        if (pair[0][0] == pair[0][1]) {
            //console.log('ttt')
            lastBracketPos = stroka.substr(lastBracketPos).lastIndexOf(pair[0][0]);
        }

        targ = pair[0][1];

        for (i = 1; i<pair.length; i++) {
            var lastBracketPos2 = stroka.lastIndexOf(pair[i][0]);
            if (pair[i][0] == pair[i][1]) {
                console.log ('&&&& ' + stroka.substr(lastBracketPos))
                lastBracketPos2 = stroka.substr(lastBracketPos2).lastIndexOf(pair[i][0]);
                console.log ('$$$ ' + stroka.substr(lastBracketPos2).lastIndexOf(pair[0][0]));
            }
            console.log(lastBracketPos2 + '****' + lastBracketPos);
          if (lastBracketPos2 > lastBracketPos) {

              lastBracketPos = lastBracketPos2;
              targ = pair[i][1];
          }
        }

        if (lastBracketPos != -1) {
            console.log('lastBracketPos = ' + lastBracketPos);
            if (stroka[lastBracketPos + 1] == targ) {
                console.log('da')
                stroka = stroka.substr(0,lastBracketPos)+ stroka.substr(lastBracketPos + 2, stroka.length-1 )
                i++;
            }
            else {
                console.log('i= ' + i + ' pair.length ' + pair.length);
                if (i >= pair.length -1) {
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
console.log('stroka_final = ' + stroka);