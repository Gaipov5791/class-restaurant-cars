// Class Restaurant

class Restaurant {
	constructor(name, cusineType) {
		this.name = name;
		this.cusineType = cusineType;
		this.served = 0;
	}

	showInfo() {
		return `${this.name} is a restarant of ${this.cusineType} meal.`;
	}

	isOpen() {
	var currentHour = new Date().getHours();
	var currentDay = new Date().getDay();
	if (currentDay === 6 || currentDay === 0) {
		return `${this.name} is closed`;
	} else {
			if(currentHour > 9 && currentHour < 22) {
		    return `${this.name} is open`;
	    } else {
		    return `${this.name} is closed`;
	    }
	}
	
} 

	Serve() {
		return (this.served += 1);
	}

	setServed(number) {
		return (this.served = this.served += number);
	}

	showTotalServed() {
		return `Show Total Served: ${this.served}`;
	}
}


const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
console.log(beshBarmak.isOpen());
console.log(beshBarmak.Serve());
console.log(beshBarmak.setServed(22));
console.log(beshBarmak.showTotalServed());


// Cars

class Cars {
	constructor(model, year, color, engine) {
		this.model = model;
		this.year = year;
		this.color = color;
		this.engine = engine;

	}

	showInfo() {
		return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Engine type: ${this.engine}`;
	}
}

class ElectroCars extends Cars {
	constructor(model, year, color, engine, batery){
		super(model, year, color, engine);
		this.batery = batery;

	}

	promote() {
		return `Электроседан BYD Seal: новый китайский электрокар с мощным аккумулятором емкостью 83 кВТ.ч, обеспечивающий дальнобойность в 650 км.`;
	}
} 

const toyota = new Cars("Toyota Land-Cruiser", "2020", "black", "deisel.");
console.log(toyota.showInfo());

const tesla = new ElectroCars("Tesla", "2022", "red", "electro");
console.log(tesla.showInfo());

const seal = new ElectroCars("BYD Seal", "2021", "white", "electro");
console.log(seal.showInfo());
console.log(seal.promote());







