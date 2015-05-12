function* chooseYourAdventure() {
yield adventure.say("This will be some kind of wonderful.....");

var myName = yield adventure.ask("What's your name?");

yield adventure.say("Hi, " + myName + " welcome to the game!");

var myClass = yield adventure.choose( myName + ", I need you to choose a class, what will you be?", "Warrior", "Rogue", "Priest", "Mage");

yield adventure.say("You chose to be a " + myClass + ", interesting!");

var myWep = yield adventure.choose("I also need you to choose a weapon! What would you like to use?", "Sword", "Bow", "Lance", "Grimoire", "Tome");

yield adventure.say("Wonderful, " +myName+ " looks like you're a " +myClass+ " with a " +myWep);

var local = yield adventure.choose("Where do you want to venture to, " +myName+ "?", "The Forest", "The Mountains", "Dragon Land Extravaganza", "I don't know...")

if(local == "The Forest") {
yield adventure.say("Welcome to the forest!" + " Fight some Green stuff!")
}


else if(local == "The Mountains") {
yield adventure.say("Welcome to the Mountains!" +" Fight some Mountainous stuff!");
}

else if(local == "Dragon Land Extravaganza") {
yield adventure.say("Welcome to the The worst possible choice you could've possibly made!" +" You're going to burn to death... quickly.");
}

else if(local == "I don't know...") {
yield adventure.say("You're actually already dead... Kind of like Bruce Willis in The Sixth Sense.");
}

yield adventure.say("That's the end of our journey. Thanks for coming along!  ... Unless you were dead the whole time.  Sorry about that!")


}