
// Algorytmy pro výpočt tahu pocítače

function finnishIt(vstup) {
    let pole = [0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 9; i++) {
        switch (vstup[i]) {
            case null: pole[i] = 1
            break;
            case 'X': pole[i] = 10
            break;
            case 'O': pole[i] = 2
            break;
        }
    }
    if ((pole[0] + pole[4] + pole[8]) == 5) {
        if (vstup[0] == null) {
            return 0;
        } else {
            return 8;
        }
    }
    if ((pole[4] + pole[1] + pole[7]) == 5) {
        if (vstup[1] == null) {
            return 1;
        } else {
            return 7;
        }
    }
    if ((pole[4] + pole[2] + pole[6]) == 5) {
        if (vstup[2] == null) {
            return 2;
        } else {
            return 6;
        }
    }
    if ((pole[4] + pole[3] + pole[5]) == 5) {
        if (vstup[3] == null) {
            return 3;
        } else {
            return 5;
        }
    }
    if ((pole[0] + pole[1] + pole[2]) == 5) {
        if (vstup[0] == null) {
            return 0;
        } else if (vstup[1] == null) {
            return 1;
        } else {
            return 2;
        }
    }
    if ((pole[6] + pole[7] + pole[8]) == 5) {
        if (vstup[6] == null) {
            return 6;
        } else if (vstup[7] == null) {
            return 7;
        } else {
            return 8;
        }
    }
    if ((pole[0] + pole[3] + pole[6]) == 5) {
        if (vstup[0] == null) {
            return 0;
        } else if (vstup[3] == null) {
            return 3;
        } else {
            return 6;
        }
    }
    if ((pole[2] + pole[5] + pole[8]) == 5) {
        if (vstup[2] == null) {
            return 2;
        } else if (vstup[5] == null) {
            return 5;
        } else {
            return 8;
        }
    }
    return false;
}

function defend(vstup) {
    let pole = [0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < 9; i++) {
        switch (vstup[i]) {
            case null: pole[i] = 1
            break;
            case 'X': pole[i] = 10
            break;
            case 'O': pole[i] = 2
            break;
        }
    }
    if ((pole[0] + pole[4] + pole[8]) == 21) {
        if (vstup[0] == null) {
            return 0;
        } else {
            return 8;
        }
    }
    if ((pole[4] + pole[1] + pole[7]) == 21) {
        if (vstup[1] == null) {
            return 1;
        } else {
            return 7;
        }
    }
    if ((pole[4] + pole[2] + pole[6]) == 21) {
        if (vstup[2] == null) {
            return 2;
        } else {
            return 6;
        }
    }
    if ((pole[4] + pole[3] + pole[5]) == 21) {
        if (vstup[3] == null) {
            return 3;
        } else {
            return 5;
        }
    }
    if ((pole[0] + pole[1] + pole[2]) == 21) {
        if (vstup[0] == null) {
            return 0;
        } else if (vstup[1] == null) {
            return 1;
        } else {
            return 2;
        }
    }
    if ((pole[6] + pole[7] + pole[8]) == 21) {
        if (vstup[6] == null) {
            return 6;
        } else if (vstup[7] == null) {
            return 7;
        } else {
            return 8;
        }
    }
    if ((pole[0] + pole[3] + pole[6]) == 21) {
        if (vstup[0] == null) {
            return 0;
        } else if (vstup[3] == null) {
            return 3;
        } else {
            return 6;
        }
    }
    if ((pole[2] + pole[5] + pole[8]) == 21) {
        if (vstup[2] == null) {
            return 2;
        } else if (vstup[5] == null) {
            return 5;
        } else {
            return 8;
        }
    }
    return false;
}

function decide(vstup) {
    let pole = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let soucty = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < vstup.length; i++) {
        for (let j = 0; j < vstup.length; j++) {
            switch (vstup[i*3+j]) {
                case null: pole[i][j] = 1 
                break;
                case 'X': pole[i][j] = 10
                break;
                case '0': pole[i][j] = 0
                break;
            }
        }
    }
    for (let i = 0; i < soucty.length; i++) {
        for (let j = 0; j < soucty.length; j++) {
            if (vstup[i*3+j] == null){
                soucty[i][j] = pole[i][0] + pole[i][1] + pole[i][2] + pole[0][j] + pole[1][j] + pole[2][j];
            }
        }
    }
    let nejvetsi = 0;
    let result = 0;
    for (let i = 0; i < soucty.length; i++) {
        for (let j = 0; j < soucty.length; j++) {
            if(soucty[i][j] > nejvetsi){
                nejvetsi = soucty[i][j];
                result = (i*3+j);
            }
        }
    }
    return result;
}

export {finnishIt, defend, decide};