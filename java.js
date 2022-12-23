function getTaxiCount(passengersCount) 
{
    if (passengersCount<= 7) 
    return 1;
    
    if (passengersCount >7){
        let xe7cho = Math.trunc(passengersCount/7) ;
        let soDu = passengersCount%7;
      if (soDu == 0) return xe7cho;
      if (soDu <7) return xe7cho +1 ;
    }

    
}

  console.log (getTaxiCount(18));