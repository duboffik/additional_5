module.exports = function check(str, bracketsConfig) {

    var stroka = str;
 //   var pair = [['(',')'], ['[',']']];
    var pair = bracketsConfig;

 //   var fal = 'false';
    var i = 0;

 //   while ((stroka.length > 0)&&(fal == 'false')) {
    while (stroka.length > 0) {

        lastBracketPos = stroka.lastIndexOf(pair[0][0] );
        if (pair[0][0] == pair[0][1]) {
            //console.log('ttt')
            lastBracketPos = stroka.substr(lastBracketPos).lastIndexOf(pair[0][0]);
        }

       // console.log('lastBracketPos= ' + lastBracketPos + ' stroka.length - 1= ' + stroka.length)

        targ = pair[0][1];

        for (i = 0; i<pair.length; i++) {

            lastBracketPos2 = stroka.lastIndexOf(pair[i][0]);
            if (pair[i][0] == pair[i][1]) {
                lastBracketPos2 = stroka.substr(lastBracketPos2).lastIndexOf(pair[i][0]);
            }
            if (lastBracketPos2 > lastBracketPos) {
                lastBracketPos = lastBracketPos2;
                targ = pair[i][1];
            }

        }

        if (lastBracketPos == stroka.length - 1) {
            return false;
        }

            if (lastBracketPos != -1) {
  //              console.log('lastBracketPos =' + lastBracketPos);
                if (stroka[lastBracketPos + 1] == targ) {
  //                  console.log('da')
                    stroka = stroka.substr(0,lastBracketPos)+ stroka.substr(lastBracketPos + 2, stroka.length-1 )
                    i++;
                }
                else {
                    if (i >= pair.length -1) {
                        return false
                        //fal = 'true';
                        console.log('false')
                    }
                }

  //              console.log('stroka = ' + stroka);
            }
            else {
                return false
                //fal = 'true';
            }


    }
    return true;
    //console.log('stroka_final = ' + stroka);


}
