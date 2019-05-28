var getData= function(){

    
    var poke1 = document.getElementById("poke1").value;
    var poke2 = document.getElementById("poke2").value;
    console.log(poke1+" "+poke2);

    function Pokemon(nombre)
    {
        this.nombre=nombre;
        this.ataque=100;
        this.vida=100; 
        this.atacar = function(PokemonObjetivo)
        {
            if(PokemonObjetivo.vida <=0){
                console.error("Pokemon-murio");
            }
            else{
                PokemonObjetivo.vida -=50;
                this.vida +=50;
                this.mostrarInfo(PokemonObjetivo)
            }
        }
        this.mostrarInfo = function(PokemonObjetivo)
        {
            console.log(PokemonObjetivo);
            console.log(this);
        }
    }

    var pokemenon1= new Pokemon(poke1); 
    var pokemenon2= new Pokemon(poke2);//le damos paramentros a la funcion creando una instancia 

    console.log(pokemenon1); 
    console.log(pokemenon2);
    pokemenon1.atacar(pokemenon2);

    
}

