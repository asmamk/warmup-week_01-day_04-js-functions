const leapYear= function(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year %400==0){
                return true;
            }else{
    return false;
    }
    }else{
        return true;
    }
    }else{
        return false
    }	
    }
    undefined
    leapYear(2000)
    true
    leapYear(1997)
    false
    leapYear(1996)
    true
    leapYear(1900)
    false