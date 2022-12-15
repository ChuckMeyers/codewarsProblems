// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

// Solution

function getDrinkByProfession(param){
    let str = param.toLowerCase();
      switch(str){
          case 'jabroni':
          return 'Patron Tequila';
          break;
          case 'school counselor':
          return 'Anything with Alcohol';
          break;
          case 'programmer':
          return 'Hipster Craft Beer';
          break;
          case 'bike gang member':
          return 'Moonshine';
          break;
          case 'politician':
          return 'Your tax dollars';
          break;
          case 'rapper':
          return 'Cristal';
          break;
          default:
          return 'Beer';
          
      }
  }