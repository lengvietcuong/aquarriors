import 'dart:async';

import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:hive_flutter/hive_flutter.dart';

class Aquarium extends World with HasGameRef {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    _loadAquariumBackground();
    _addFishFromLocalStorage();
  }

  @override
  void onMount() {
    super.onMount();

    game.overlays.remove("Casting Button");
    game.overlays.remove("Upgrade Button");
    game.overlays.remove("Aquarium Button");
    game.overlays.remove("Trash Collection Button");
    game.overlays.add("Fish Tank Panel");
    game.overlays.add("Aquarium Actions Panel");
    game.overlays.add("Aquarium Back Button");
  }

  void _loadAquariumBackground() {
    final aquariumBackground =
        Flame.images.fromCache("Scenes/Aquarium Background.png");
    final aquariumBgComponent = SpriteComponent.fromImage(
      aquariumBackground,
      size: Vector2(game.size.x, game.size.y),
      position: Vector2(0, 0),
      anchor: Anchor.topLeft,
    );
    add(aquariumBgComponent);
  }

  void _addFishFromLocalStorage() {
    final aquarium = Hive.box<List>("aquarium");
    final fishTank =
        aquarium.get("fishTank", defaultValue: [])?.cast<SeaAnimal>() ?? [];

    for (final fish in fishTank) {
      add(fish);
    }
  }
}
