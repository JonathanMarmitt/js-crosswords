// var time = 1;
var solution;
var d_begin;

function solve(s)
{
    solution = s;
    // faz o corte, interrompendo a recursão já em estados
    // parciais que sejam inválidos (ou seja, com excesso de peso)
    if (s.isValid() == false) {
       return false;
    }
    
    if (s.isSolution() == true) {
        console.log("Solution found");
        return true;
    }

    // procura próxima posição vazia -> será dada por [row][col]
    found = false;
    row_r = 0, col_c = 0;
    for (col_c = 0; col_c < s.m.length; col_c++) {
    	for (row_r = 0; row_r < s.m.length; row_r++) {
            if (s.m[row_r][col_c] == "") {
                found = true;
                break;
            }
        }
        if (found == true) {
            break;
        }
    }
    
    s1 = new state();
    s1.state(s);

    s1.addLetter(row_r,col_c,0);

    if (this.solve(s1) == true) {
        return true;
    }

    s2 = new state();
    s2.state(s);

    s2.addLetter(row_r,col_c,1);

    if (this.solve(s2) == true) {
        return true;
    }   

    s3 = new state();
    s3.state(s);

    s3.addLetter(row_r,col_c,2);

    if (this.solve(s3) == true) {
        return true;
    }


    s4 = new state();
    s4.state(s);

    s4.addLetter(row_r,col_c,3);

    if (this.solve(s4) == true) {
        return true;
    }

    s5 = new state();
    s5.state(s);

    s5.addLetter(row_r,col_c,4);

    if (this.solve(s5) == true) {
        return true;
    }   

    s6 = new state();
    s6.state(s);

    s6.addLetter(row_r,col_c,5);

    if (this.solve(s6) == true) {
        return true;
    }

    s7 = new state();
    s7.state(s);

    s7.addLetter(row_r,col_c,6);

    if (this.solve(s7) == true) {
        return true;
    }   

    s8 = new state();
    s8.state(s);

    s8.addLetter(row_r,col_c,7);

    if (this.solve(s8) == true) {
        return true;
    }   

    s9 = new state();
    s9.state(s);

    s9.addLetter(row_r,col_c,8);

    if (this.solve(s9) == true) {
        return true;
    }

    s10 = new state();
    s10.state(s);

    s10.addLetter(row_r,col_c,9);

    if (this.solve(s10) == true) {
        return true;
    }   

    s11 = new state();
    s11.state(s);

    s11.addLetter(row_r,col_c,10);

    if (this.solve(s11) == true) {
        return true;
    }   

    s12 = new state();
    s12.state(s);

    s12.addLetter(row_r,col_c,11);

    if (this.solve(s12) == true) {
        return true;
    }

    s13 = new state();
    s13.state(s);

    s13.addLetter(row_r,col_c,12);

    if (this.solve(s13) == true) {
        return true;
    }   

    s14 = new state();
    s14.state(s);

    s14.addLetter(row_r,col_c,13);

    if (this.solve(s14) == true) {
        return true;
    }   

    s15 = new state();
    s15.state(s);

    s15.addLetter(row_r,col_c,14);

    if (this.solve(s15) == true) {
        return true;
    }

    s16 = new state();
    s16.state(s);

    s16.addLetter(row_r,col_c,15);

    if (this.solve(s16) == true) {
        return true;
    }   
   
    s17 = new state();
    s17.state(s);

    s17.addLetter(row_r,col_c,16);

    if (this.solve(s17) == true) {
        return true;
    }

    s18 = new state();
    s18.state(s);

    s18.addLetter(row_r,col_c,17);

    if (this.solve(s18) == true) {
        return true;
    }   

    s19 = new state();
    s19.state(s);

    s19.addLetter(row_r,col_c,18);

    if (this.solve(s19) == true) {
        return true;
    }   

    s20 = new state();
    s20.state(s);

    s20.addLetter(row_r,col_c,19);

    if (this.solve(s20) == true) {
        return true;
    }

    s21 = new state();
    s21.state(s);

    s21.addLetter(row_r,col_c,20);

    if (this.solve(s21) == true) {
        return true;
    }   

    s22 = new state();
    s22.state(s);

    s22.addLetter(row_r,col_c,21);

    if (this.solve(s22) == true) {
        return true;
    }   

    s23 = new state();
    s23.state(s);

    s23.addLetter(row_r,col_c,22);

    if (this.solve(s13) == true) {
        return true;
    }

    s24 = new state();
    s24.state(s);

    s24.addLetter(row_r,col_c,23);

    if (this.solve(s24) == true) {
        return true;
    }   

    s25 = new state();
    s25.state(s);

    s25.addLetter(row_r,col_c,24);

    if (this.solve(s25) == true) {
        return true;
    }   

    s26 = new state();
    s26.state(s);

    s26.addLetter(row_r,col_c,25);

    if (this.solve(s26) == true) {
        return true;
    }

    return false;
}

function doit()
{
	s = new state();
    s.setCellOut();
    //s.m[0][0] = 'p';
    d = new Date();
    d_begin = d.getTime();

    solve(s);
}