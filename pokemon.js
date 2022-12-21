$(document).ready(function() {
    $.get("https://uyghur.ai/course/data/pokemon.json", function(data, status) {
        displayPokemonCards(data);
    });

    function displayPokemonCards(pokemonInfo) {
        let pokemonDiv = document.getElementById("pokemonContainer");
        let pokemon1 = 3;
        let rows = pokemonInfo.length / 6;
        for (let eachrow = 0; eachrow < rows; eachrow++) {
            pokemonDiv.innerHTML += "<div class='row' id='row" + eachrow + "'></div>";
            let rowId = "row" + eachrow;
            for (let i = 0; i < 6; i++) {
                let currentItem = eachrow * 6 + i;
                let pokemonTypeColour = "default";
                if (pokemonInfo[currentItem] != null || pokemonInfo[currentItem] != undefined) {

                    if (pokemonInfo[currentItem].type[0] == "Grass") {
                        pokemonTypeColour = "grass";
                    } else if (pokemonInfo[currentItem].type[0] == "Fire") {
                        pokemonTypeColour = "fire";
                    } else if (pokemonInfo[currentItem].type[0] == "Water") {
                        pokemonTypeColour = "water";
                    } else if (pokemonInfo[currentItem].type[0] == "Bug") {
                        pokemonTypeColour = "bug";
                    } else if (pokemonInfo[currentItem].type[0] == "Normal") {
                        pokemonTypeColour = "normal";
                    } else if (pokemonInfo[currentItem].type[0] == "Poison") {
                        pokemonTypeColour = "poison";
                    } else if (pokemonInfo[currentItem].type[0] == "Electric") {
                        pokemonTypeColour = "electric";
                    } else if (pokemonInfo[currentItem].type[0] == "Ground") {
                        pokemonTypeColour = "ground"
                    } else if (pokemonInfo[currentItem].type[0] == "Fighting") {
                        pokemonTypeColour = "fighting"
                    } else if (pokemonInfo[currentItem].type[0] == "Psychic") {
                        pokemonTypeColour = "psychic"
                    } else if (pokemonInfo[currentItem].type[0] == "Rock") {
                        pokemonTypeColour = "rock"
                    } else if (pokemonInfo[currentItem].type[0] == "Ghost") {
                        pokemonTypeColour = "ghost"
                    } else if (pokemonInfo[currentItem].type[0] == "Ice") {
                        pokemonTypeColour = "ice"
                    } else if (pokemonInfo[currentItem].type[0] == "Dragon") {
                        pokemonTypeColour = "dragon"
                    } else {
                        console.log(pokemonInfo[currentItem].type[0] + " Does not have a color!")
                    }
                    document.getElementById(rowId).innerHTML +=
                        "<div class='col-2'>" +
                        "<div class='card h-100 " + pokemonTypeColour + " '>" +
                        "<img src='" + pokemonInfo[currentItem].img + "'onclick='pokemonClick(" + JSON.stringify(pokemonInfo[currentItem]) + ")' + class='card-img-top' id ='pokepics'>" +
                        "<div class='card-body' id='card-color'>" +
                        "<p class='card-text'></p></div>" +
                        "<div class='card-footer card-text'>" + pokemonInfo[currentItem].name + "</div>" +
                        "</div></div>";
                }
            }
        }
    }



    function pokemonClick(pokemonInfo) {
        document.getElementById("pokemoninfos").innerHTML =
            "<div class='container-fluid infocard'>" +
            "<div class='row r-1'><h1> Name: " + pokemonInfo.name + " Id: " + pokemonInfo.id + "</h1></div>" +
            "<div class='row r-2'>" +
            "<div class ='col c-1'><img src='" + pokemonInfo.img + "' class='info1'></div>" +
            "<div class='col c-2'><div class='it-1'>Pokemon Types: " + pokemonInfo.type + "</div><div class='it-2'> Height: " + pokemonInfo.height + "</div>" + " <div class ='it-3'>Weight: " + pokemonInfo.weight + "</div>" + "<div class= 'it-4'> Weaknesses: " + pokemonInfo.weaknesses + "</div></div>" +
            "</div>" +
            "<button id='stop' onclick ='infoclick()' class ='b1'>Close Info Card</button></div>" +
            "</div>";
    }

    function infoclick() {
        document.querySelector('.infocard').style.display = 'none';
    }


    $("#pokedextop").click(function() {
        $("#pokedextop").hide();
        $("#topofpage").fadeIn("slow");
        $("#pokemonContainer").fadeIn("slow");
        $("#bottomofpage").fadeIn("slow");
        $("#hide-type").fadeIn("slow");
        $("#pokemonTypeOption").fadeIn("slow");
        $("#show-type").fadeIn("slow");
    });

    $("#close").click(function() {
        $("#pokedextop").show();
        $("#topofpage").fadeOut("slow");
        $("#pokemonContainer").fadeOut("slow");
        $("#bottomofpage").fadeOut("slow");
        $("#hide-type").fadeOut("slow");
        $("#pokemonTypeOption").fadeOut("slow");
        $("#show-type").fadeOut("slow");
    });


    $("#hide-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").hide();
        } else if (selectedType == "Fire") {
            $(".fire").hide();
        } else if (selectedType == "Grass") {
            $(".grass").hide();
        } else if (selectedType == "Electric") {
            $(".electric").hide();
        } else if (selectedType == "Bug") {
            $(".bug").hide();
        } else if (selectedType == "Normal") {
            $(".normal").hide();
        } else if (selectedType == "Psychic") {
            $(".psychic").hide();
        } else if (selectedType == "Dragon") {
            $(".dragon").hide()
        } else if (selectedType == "Ice") {
            $(".ice").hide()
        } else if (selectedType == "Poison") {
            $(".poison").hide()
        } else if (selectedType == "Ground") {
            $(".ground").hide()
        } else if (selectedType == "Rock") {
            $(".rock").hide()
        } else if (selectedType == "Fighting") {
            $(".fighting").hide()
        }


    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").show();
        } else if (selectedType == "Fire") {
            $(".fire").show();
        } else if (selectedType == "Grass") {
            $(".grass").show();
        } else if (selectedType == "Electric") {
            $(".electric").show();
        } else if (selectedType == "Bug") {
            $(".bug").show();
        } else if (selectedType == "Normal") {
            $(".normal").show();
        } else if (selectedType == "Psychic") {
            $(".psychic").show();
        } else if (selectedType == "Dragon") {
            $(".dragon").show()
        } else if (selectedType == "Ice") {
            $(".ice").show()
        } else if (selectedType == "Poison") {
            $(".poison").show()
        } else if (selectedType == "Ground") {
            $(".ground").show()
        } else if (selectedType == "Rock") {
            $(".rock").show()
        } else if (selectedType == "Fighting") {
            $(".fighting").show()
        }
    });

    $("#show-type").click(function() {
        let selectedType = $('#pokemonTypeOption :selected').text();
        if (selectedType == "Water") {
            $(".water").show();
        } else if (selectedType == "Fire") {
            $(".fire").show();
        } else if (selectedType == "Grass") {
            $(".grass").show();
        }
    });
});