// PokemonController.js
import { PokemonModel } from "../models/PokemonModel.js";
import { PokemonView } from "../views/PokemonView.js";
import UserController from "./UserController.js";
import DBConnection from "../models/dbconnection.js";


export class PokemonController {
  constructor() {
    this.model = new PokemonModel();
    this.view = new PokemonView();
    this.user = new UserController();
    this.database = new DBConnection()
    this.userid = window.location.search.substring(4)
    this.user.fetchData(this.userid)


    this.pokemonsFiltered = [];
    this.newDesireList = [];
    this.desireList = [];
    this.carrito = [];
    this.allpokemons = this.model.getAllPokemons()

    // Bind button event
    document
      .querySelector("button")
      .addEventListener("click", () => this.init());
  }
  async init() {
    this.view.showLoading();
    try {
      await this.model.loadPokemons();
      this.view.hideLoading();
      this.view.showConsole();
      this.view.displayPokemons(this.model.getAllPokemons());
      this.bindingEvents();
      this.view.displayUser({
        username: this.user.name,
        balance: this.user.money,
      });

    } catch (error) {
      console.error(error);
    }
  }
  async bindingEvents() {
    // Bind input filterType
    this.filterType = document.querySelector("#filtroTipo");
    this.filterType.addEventListener("keyup", () => this.filteringPokemonsType());

    // Bind input filterWeight
    this.filterWeight = document.querySelector("#filtroPeso");
    this.filterWeight.addEventListener("keyup", () => this.filteringPokemonsWeight());
  
    // Bind input filterPower
    this.filterPower = document.querySelector("#filtroPoderTotal");
    this.filterPower.addEventListener("keyup", () => this.filteringPokemonsPower());

    // Bind Añadir a Lista de deseos
    document
      .querySelector("#btnAgnadeListaDeseo")
      .addEventListener("click", this.añadirListaDeseo.bind(this));

    // Bind Cards pokemons
    this.cardPokemons = document.querySelectorAll(".card");
    this.cardPokemons.forEach((card) => {
      card.addEventListener("click", () => this.pokemonsClicked(card.id));
    });

    // Bind Ver lista deseos
    const button = document.getElementById('btnVerLista');
    button.addEventListener("click", this.mostrarListaDeseo.bind(this))

    // Bind añadir al carrito
    const carritobutton = document.getElementById('btnAgnadeCarrito');
    carritobutton.addEventListener("click", this.aniadiralCarrito.bind(this))

    // Bind Ver carrito
    const vercarritobutton = document.getElementById('btnVerCarrito');
    vercarritobutton.addEventListener("click", this.mostrarCarrito.bind(this))

    // Bind Comprar
    const comprarbutton = document.getElementById('btnComprar');
    comprarbutton.addEventListener("click", this.comprar.bind(this))
  }

  pokemonsClicked(cardId) {
    if (document.getElementById(cardId).className.includes("selected")) {
      document.getElementById(cardId).classList.remove("selected");
      let pkm_idx = this.newDesireList.indexOf(cardId);
      this.newDesireList.splice(pkm_idx, 1);
    } else {
      document.getElementById(cardId).classList.add("selected");
      this.newDesireList.push(cardId);
    }
  }

  // Filtro por tipo
  async filteringPokemonsType() {
    this.pokemonsFiltered = [];
    this.model.pokemons.forEach((pkm) => {
      this.safePokemon = false;

      if (pkm.pkm_type[0].type.name.includes(this.filterType.value)) {
        this.safePokemon = true;
      } else if (
        pkm.pkm_type.length > 1 &&
        pkm.pkm_type[1].type.name.includes(this.filterType.value)
      ) {
        this.safePokemon = true;
      }
      if (this.safePokemon) {
        this.pokemonsFiltered.push(pkm);
      }
    });
    this.view.displayPokemons(this.pokemonsFiltered);
  }

  // Filtro por peso
  async filteringPokemonsWeight() {
    this.pokemonsFiltered = [];
    this.model.pokemons.forEach((pkm) => {
      this.safePokemon = false;

      if (pkm.weight.toString().includes(this.filterWeight.value.toString())) {
        this.safePokemon = true;
      }
      if (this.safePokemon) {
        this.pokemonsFiltered.push(pkm);
      }
    });
    this.view.displayPokemons(this.pokemonsFiltered);
  }

  // Filtro por ataque
  async filteringPokemonsPower() {
    this.pokemonsFiltered = [];
    this.model.pokemons.forEach((pkm) => {
      this.safePokemon = false;

      if (pkm.attack.toString().includes(this.filterPower.value.toString())) {
        this.safePokemon = true;
      }
      if (this.safePokemon) {
        this.pokemonsFiltered.push(pkm);
      }
    });
    this.view.displayPokemons(this.pokemonsFiltered);
  }

  añadirListaDeseo() {
    let txt = "¿Quieres añadir los siguientes Pokemons a la Lista de Deseo?";
    const show_pokemon_to_add_to_desire_list = Array.from(document.getElementsByClassName("selected"));
    show_pokemon_to_add_to_desire_list.forEach(element => {
      txt = txt + " " + element.id;
    });

    if (window.confirm(txt)) {
      // ToDo Guardar en BBDD
      console.log("Guardando nueva lista de deseo...");
      if (this.newDesireList.length >= 1) {
        this.newDesireList.forEach((pokemon) => {
            this.desireList.push(pokemon)
            this.user.wishlist.push(pokemon)
        });
      this.user.updateWishlist()
    }
  }
  }

  mostrarListaDeseo() {
    let txt = "Los pokemones que están en tu lista de deseados son:"
    this.desireList.forEach(pokemon =>{txt = txt + " " + pokemon});
    alert(txt)
  }

  aniadiralCarrito() {
    let txt = "¿Quieres añadir los siguientes Pokemons al Carrito?";
    this.desireList.forEach(element => {
      txt = txt + " " + element;
    });

    if (window.confirm(txt)) {
      console.log("Guardando nuevo carrito...");
      if (this.desireList.length >= 1) {
        this.desireList.forEach((pokemon) => {
            this.carrito.push(pokemon)
            this.user.basket.push(pokemon)
        });
      this.user.wishlist = []
      this.user.updateWishlist()
      this.user.updateBasket()
    }
  }
  }

  mostrarCarrito() {
    let txt = "Los pokemones que están en tu carrito son:"
    this.carrito.forEach(pokemon =>{txt = txt + " " + pokemon});
    alert(txt)
  }

  comprar() {
    let precioTotal = 0;
    this.carrito.forEach(pokemonid => {
      precioTotal += parseFloat(this.allpokemons[pokemonid].price);
      this.user.inventory.push(pokemonid)
    });
    this.user.money -= precioTotal;
    this.user.basket = [];
    this.user.updateBasket();
    this.user.updateMoney();
    this.user.updateInventory();
  }
}
