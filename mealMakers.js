const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers = appetizerIn;
    },
    get mains() {
       return this._courses.mains;
    },
    set mains(mainsIn) {
      this._courses.mains = mainsIn;
    },
    get desserts () {
       return this._courses.desserts;
    },
    set desserts(dessertsIn) {
      this._courses.desserts = dessertsIn;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function (courseName) {
      const dishes = this._courses[courseName];
      const indx = Math.floor(Math.random() * dishes.length);
      return dishes[indx];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}. The price is $${totalPrice}.`;
    }
  };
  
  
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Blue Salad', 5.25);
  menu.addDishToCourse('appetizers', 'Bean Salad', 3.25);
  menu.addDishToCourse('mains', 'Steak', 24.25);
  menu.addDishToCourse('mains', 'Chicken', 14.25);
  menu.addDishToCourse('mains', 'Fish', 17.25);
  menu.addDishToCourse('desserts', 'Cake', 3.25);
  menu.addDishToCourse('desserts', 'Pudding', 2.25);
  menu.addDishToCourse('desserts', 'Cookies', 1.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);