function state(s){
    this.m = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];
    this.cellOut = 0;

    this.state = function(s)
    {
        //this.cleanTable();
        for (row = 0; row < this.m.length; row++)
        {
            for (col = 0; col < this.m.length; col++)
            {
                this.m[row][col] = s.m[row][col];
                this.addLetterOnTable(row,col,s.m[row][col]);
            }
        }
        this.cellOut = s.cellOut;
        //console.log(this.m);
    }

    this.setCellOut = function()
    {
        x = 0;
        $('#table td').each(function(){
            if($(this).html() == '#')
                x++;
        });
        this.cellOut = x;
        this.setCellBlack();
    }

    this.isCellBlack = function(row,col)
    {
        //return this.m[row][col] == '#';
        return ($('#table td').eq(((row*5)+col)).attr('black') == 1);
    }

    this.setCellBlack = function()
    {
        for (row = 0; row < this.m.length; row++)
        {
            for (col = 0; col < this.m.length; col++)
            {
                if(this.isCellBlack(row,col))
                    this.m[row][col] = '#';
            }
        }
    }

    /*this.cleanTable = function()
    {
    	$('#table td').each(function(){(
    		$(this).html(""));
    	});
    }*/

    this.addLetter = function(row,col,letter_index)
    {
    	alert(row,col);

        d_end = new Date();
        $('#timer').html((d_end.getTime() - d_begin)/1000);

        this.m[row][col] = alphabet[letter_index];
    	this.addLetterOnTable(row, col, alphabet[letter_index]);
    }

    this.addLetterOnTable = function(row,col,letter)
    {
    	$('#table td').eq(((row*5)+col)).html(letter);
    }

    this.isWord = function(str)
    {
        for (w = 0; w < dicionary.length; w++)
        {
            if(dicionary[w] == str)
                return true;
        }

        return false;
    }

    this.existsInDicionary = function(str)
    {
    	match = false;
    	for(ii = 0; ii < dicionary.length; ii++)
    	{
    		for(jj = 0; jj < str.length; jj++)
    		{
    			if(str.charAt(jj) == dicionary[ii].charAt(jj))
    				match = true;
    			else
    			{
    				match = false;
    				break;
    			}
    		}

    		if(match)
    			return true;
    	}

    	return false;
    }

    this.isRowValid = function(row)
    {
        str = "";
        for (col = 0; col < this.m.length; col++)
        {
            if(this.m[row][col] != "")
            	str += this.m[row][col];
            else
            	break;
        }

        if(str == "")
        	return true;
        else if(str.indexOf('#') != -1) // se tiver #
        {
            words = str.split('#');
            for (a = 0; a < words.length; a++)
            {
                //neste momento, aceita apenas palavras que existam e nao pedaços
                if(words[a] != "" && !this.isWord(words[a]) && words[a].length > 1){
                    return false;
                }
            }

            return true;
        }
        else
            return this.existsInDicionary(str);
    }
    
    this.isColValid = function(col)
    {    
        str = "";
        for (row = 0; row < this.m.length; row++)
        {
            if(this.m[row][col] != "")
            	str += this.m[row][col];
            else
            	break;
        }

        if(str == "")
        	return true;
        else if(str.indexOf('#') != -1)
        {
            words = str.split('#');
            for (e = 0; e < words.length; e++)
            {
                //neste momento, aceita apenas palavras que existam e nao pedaços
                if(words[e] != "" && !this.isWord(words[e]) && words[e].length > 1){
                    return false;
                }
            }

            return true;
        }
        else{
            return this.existsInDicionary(str);
        }
    }

    this.isValid = function()
    {
        for (col = 0; col < this.m.length; col++) {
            if(!this.isColValid(col))
                return false;
        }

        for (row = 0; row < this.m.length; row++) {
            if(!this.isRowValid(row))
                return false;
        }

        return true;
    }
   
    this.isSolution = function()
    {
        c = 0;
        for (row = 0; row < this.m.length; row++)
        {
            for (col = 0; col < this.m.length; col++)
            {
                if (this.m[row][col] == "")
                {
                	c++;
                }
            }
        }

        return (c == 0);

    }
}