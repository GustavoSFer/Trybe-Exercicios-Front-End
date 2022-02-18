var racaDog;
(function (racaDog) {
    racaDog["viraLata"] = "Vira Lata";
    racaDog["Pit"] = "PitBull";
    racaDog["Hot"] = "Hotwaler";
    racaDog["pincher"] = "Pincher";
})(racaDog || (racaDog = {}));
var Dog = /** @class */ (function () {
    function Dog(name, raca, peso) {
        this.name = name;
        this.raca = raca;
        this.peso = peso;
    }
    Dog.prototype.latir = function () {
        console.log("au au!!");
    };
    Dog.prototype.andar = function () {
        console.log("".concat(this.name, " esta andando"));
    };
    Dog.prototype.getName = function () {
        return this.name;
    };
    Dog.prototype.info = function () {
        console.log("Nome: ".concat(this.name, " sua ra\u00E7a \u00E9: ").concat(this.raca, " e seu peso: ").concat(this.peso, " kg"));
    };
    return Dog;
}());
var dog1 = new Dog("Slinky", racaDog.viraLata, 26);
console.log(dog1.getName());
dog1.info();
