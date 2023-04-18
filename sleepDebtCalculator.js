const getSleepHours = day => {
    switch (day) {
      case 'Monday': return 8;
      case 'Tuesday': return 6;
      case 'Wednesday': return 7;
      case 'Thursday': return 8;
      case 'Friday': return 5;
      case 'Saturday': return 9;
      case 'Sunday': return 7;
      default: return 'Hm, did you spell that right?';
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  // for extra practice - here's an alternative way to write the above function
  
  /*const getActualSleepHours = () => 8 + 7 + 6 + 7.5 + 6 + 7 + 8; */
  
  const getIdealSleepHours = hours => hours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(7.5);
    if (actualSleepHours === idealSleepHours) {
      console.log('Awesome! You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`Ooo, maybe a bit too much sleep than needed this week. You got ${actualSleepHours - idealSleepHours} more hours of sleep than your ideal.`);
    } else {
      console.log(`Oh no, you should get more sleep! You got ${idealSleepHours - actualSleepHours} hours less than your ideal.`);
    }
  }
  
  calculateSleepDebt()
  
  