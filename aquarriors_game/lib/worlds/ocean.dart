import 'dart:async';
import 'dart:math';

import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:aquarriors_game/entities/trapped_sea_animal.dart';
import 'package:aquarriors_game/entities/trash.dart';
import 'package:flame/components.dart';

final trashInfo = [
  Trash(
    name: "Aluminum Can",
    description:
        "Aluminum cans are lightweight, recyclable containers commonly used for beverages. Recycling aluminum saves energy, reduces mining impacts, and can create new products.",
    coins: 30,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Glass Bottle",
    description:
        "Shattered glass can injure marine animals and disrupt delicate aquatic ecosystems. When recycled, can be transformed into decorative glass pebbles or caves for aquariums.",
    coins: 40,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Phone",
    description:
        "Broken phones, if not disposed of properly, can release toxic substances into waterways, endangering aquatic life and ecosystems.",
    coins: 50,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Vase",
    description:
        "Ceramics, when improperly disposed of, can leach toxic chemicals such as lead and cadmium into water sources. This contamination poses serious risks to aquatic life.",
    coins: 50,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Carton",
    description:
        "Cartons can be recycled into various paper products, such as cardboard, paperboard, and tissue paper.",
    coins: 30,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Food Waste",
    description:
        "Food waste constitutes a significant portion of ocean debris, endangering marine life through ingestion and entanglement. It is biodegradable but not easily recyclable.",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: false,
  ),
  Trash(
    name: "Light Bulb",
    description:
        "Light bulbs are not a significant portion of ocean waste but pose dangers due to mercury and glass if improperly disposed of.",
    coins: 50,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Plastic Bag",
    description:
        "Plastic bags are a major component of ocean waste, endangering marine life through ingestion and entanglement. ",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Plastic Bottle",
    description:
        "Plastic bottles are a significant part of ocean waste, they are recyclable but persist in the environment for hundreds of years if not propoerly disposed.",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: true,
  ),
  Trash(
    name: "Styrofoam",
    description:
        "Styrofoam breaks down into small, persistent pieces that marine animals mistake for food. It is challenging to recycle due to its composition and contamination issues.",
    coins: 30,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
];
final trappedFishInfo = [
  TrappedSeaAnimal(
    name: "Turtle",
    displaySize: Vector2.all(50),
    coins: 100,
  ),
  TrappedSeaAnimal(
    name: "Clown Fish",
    displaySize: Vector2.all(50),
    coins: 100,
  ),
  TrappedSeaAnimal(
    name: "Blue Tang",
    displaySize: Vector2.all(50),
    coins: 100,
  ),
  TrappedSeaAnimal(
    name: "Angel Fish",
    displaySize: Vector2.all(50),
    coins: 100,
  ),
];
final fishInfo = {
  "Turtle": SeaAnimal(
    customName: "",
    type: "Turtle",
    displaySize: 100,
    description:
        "Turtles are long-lived reptiles, vital for marine ecosystems. Sadly, they are often threatened by pollution, particularly plastic waste, which they can mistake for food.",
  ),
  "Clown Fish": SeaAnimal(
    customName: "",
    type: "Clown Fish",
    displaySize: 100,
    description:
        "Clownfish are vibrant, reef-dwelling fish known for their symbiotic relationship with sea anemones, providing mutual protection and benefiting from their stinging tentacles.",
  ),
  "Blue Tang": SeaAnimal(
    customName: "",
    type: "Blue Tang",
    displaySize: 100,
    description:
        'Blue tangs are vibrant, blue and yellow reef fish known for their role in algae control and their popularity as "Dory" from the movie "Finding Nemo."',
  ),
  "Angel Fish": SeaAnimal(
    customName: "",
    type: "Angel Fish",
    displaySize: 100,
    description:
        "Angelfish are colorful, tropical fish known for their distinctive, laterally compressed bodies and elongated fins. They are popular in aquariums and play a role in maintaining reef health.",
  ),
};

class Ocean extends World with HasGameRef {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    _spawnTrash();
    _spawnTrappedSeaAnimals();
  }

  @override
  void onMount() {
    super.onMount();

    game.overlays.remove("Fish Tank Panel");
    // game.overlays.remove("Aquarium Actions Panel");
    game.overlays.remove("Aquarium Back Button");
    game.overlays.add("Casting Button");
    game.overlays.add("Upgrade Button");
    game.overlays.add("Aquarium Button");
    game.overlays.add("Trash Collection Button");
    game.overlays.add("Coin Counter");
    game.overlays.add("Daily Ads Button");
  }

  void _spawnTrash() {
    for (int i = 0; i < 200; i++) {
      int randomIndex = Random().nextInt(10);
      final randomTrash = trashInfo[randomIndex];
      add(Trash(
        name: randomTrash.name,
        displaySize: randomTrash.displaySize,
        description: randomTrash.description,
        coins: randomTrash.coins,
        recyclable: randomTrash.recyclable,
      ));
    }
  }

  void _spawnTrappedSeaAnimals() {
    for (int i = 0; i < 100; i++) {
      int randomIndex = Random().nextInt(trappedFishInfo.length);
      final randomTrappedFish = trappedFishInfo[randomIndex];
      add(TrappedSeaAnimal(
        name: randomTrappedFish.name,
        displaySize: randomTrappedFish.displaySize,
        coins: randomTrappedFish.coins,
      ));
    }
  }
}
