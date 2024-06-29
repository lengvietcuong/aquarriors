import 'dart:async';
import 'dart:math';

import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:aquarriors_game/entities/trapped_animal.dart';
import 'package:aquarriors_game/entities/trash.dart';
import 'package:flame/components.dart';

final trashInfo = [
  Trash(
    name: "Aluminum Can",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Glass Bottle",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Phone",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Broken Vase",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Carton",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: true,
  ),
  Trash(
    name: "Food Waste",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(32),
    recyclable: false,
  ),
  Trash(
    name: "Light Bulb",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Plastic Bag",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
  Trash(
    name: "Plastic Bottle",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: true,
  ),
  Trash(
    name: "Styrofoam",
    description: "lorem ipsum",
    coins: 20,
    displaySize: Vector2.all(40),
    recyclable: false,
  ),
];
final trappedFishInfo = [
  TrappedAnimal(
    name: "Turtle",
    displaySize: Vector2.all(50),
    description: "lorem ipsum",
    coins: 100,
  ),
  TrappedAnimal(
    name: "Clown Fish",
    displaySize: Vector2.all(50),
    description: "lorem ipsum",
    coins: 100,
  ),
  TrappedAnimal(
    name: "Blue Tang",
    displaySize: Vector2.all(50),
    description: "lorem ipsum",
    coins: 100,
  ),
  TrappedAnimal(
    name: "Angel Fish",
    displaySize: Vector2.all(50),
    description: "lorem ipsum",
    coins: 100,
  ),
];
final fishInfo = {
  "Turtle": SeaAnimal(
    type: "Turtle",
    displaySize: 100,
    description: "lorem ipsum",
  ),
  "Clown Fish": SeaAnimal(
    type: "Clown Fish",
    displaySize: 100,
    description: "lorem ipsum",
  ),
  "Blue Tang": SeaAnimal(
    type: "Blue Tang",
    displaySize: 100,
    description: "lorem ipsum",
  ),
  "Angel Fish": SeaAnimal(
    type: "Angel Fish",
    displaySize: 100,
    description: "lorem ipsum",
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
    game.overlays.remove("Aquarium Actions Panel");
    game.overlays.remove("Aquarium Back Button");
    game.overlays.add("Casting Button");
    game.overlays.add("Upgrade Button");
    game.overlays.add("Aquarium Button");
    game.overlays.add("Catalog Button");
    game.overlays.add("Coin Counter");
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
      add(TrappedAnimal(
        name: randomTrappedFish.name,
        displaySize: randomTrappedFish.displaySize,
        description: randomTrappedFish.description,
        coins: randomTrappedFish.coins,
      ));
    }
  }
}
