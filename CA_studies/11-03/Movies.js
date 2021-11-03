class Movie {
    constructor(name, year, director, budget, income){
      this.name = name;
      this.year = year;
      this.director = director;
      this.budget = budget;
      this.income = income;
    }
    getIntroduction(){
        return  `Movie ${this.name} was created in ${this.year} by director ${this.director}`;
    }
    getProfit(){
        return `Movie ${this.name} had a budget of ${this.budget} and since ${this.year} it has made a profit of ${this.income}`;
    }
}