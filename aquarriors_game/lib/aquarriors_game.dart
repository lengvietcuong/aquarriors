import 'dart:async';
import 'dart:ui';

import 'package:aquarriors_game/constants.dart';
import 'package:aquarriors_game/player/player.dart';
import 'package:aquarriors_game/scenes/water.dart';
import 'package:aquarriors_game/worlds/aquarium.dart';
import 'package:aquarriors_game/worlds/ocean.dart';
import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flame/parallax.dart';

class AquarriorsGame extends FlameGame {
  final oceanWorld = Ocean();
  final aquariumWorld = Aquarium();
  final water = Water();
  final player = Player();

  late final ParallaxComponent parallaxBackground;

  @override
  Color backgroundColor() => const Color(0xFFE3E0D0);

  void switchToOcean() {
    world = oceanWorld;
    camera = CameraComponent.withFixedResolution(width: size.x, height: size.y);
    camera.viewfinder.anchor = Anchor.topLeft;
  }

  void switchToAquarium() {
    world = aquariumWorld;
    camera = CameraComponent.withFixedResolution(width: size.x, height: size.y);
    camera.viewfinder.anchor = Anchor.topLeft;
  }

  @override
  Future<void> onLoad() async {
    super.onLoad();
    switchToOcean();

    await _loadAllImages();
    await _loadParallaxBackground();
    world.add(parallaxBackground);
    world.add(player);
    world.add(water);
  }

  Future<void> _loadAllImages() async {
    await images.loadAll([
      "Player/Boat.png",
      "Player/Casting (512x512x10).png",
      "Player/Character.png",
      "Player/Hook.png",
      "Player/Water Splash (200x80x4).png",
      "Scenes/Aquarium Background.png",
      "Scenes/Ocean Background.png",
      "Scenes/Land 1.png",
      "Scenes/Land 2.png",
      "Scenes/Land 3.png",
      "Scenes/Sun.png",
      "Scenes/Water.png",
      "Sea Animal/Angel Fish.png",
      "Sea Animal/Blue Tang.png",
      "Sea Animal/Clown Fish.png",
      "Sea Animal/Turtle.png",
      "Trapped/Angel Fish.png",
      "Trapped/Blue Tang.png",
      "Trapped/Clown Fish.png",
      "Trapped/Turtle.png",
      "Trash/Aluminum Can.png",
      "Trash/Broken Glass Bottle.png",
      "Trash/Broken Phone.png",
      "Trash/Broken Vase.png",
      "Trash/Carton.png",
      "Trash/Food Waste.png",
      "Trash/Light Bulb.png",
      "Trash/Plastic Bag.png",
      "Trash/Plastic Bottle.png",
      "Trash/Styrofoam.png",
      "UI/Casting Button.png",
      "UI/Reeling Button.png",
      "UI/Upgrade Button.png",
    ]);
  }

  Future<void> _loadParallaxBackground() async {
    parallaxBackground = await loadParallaxComponent(
      [
        ParallaxImageData("Scenes/Ocean Background.png"),
        ParallaxImageData("Scenes/Land 1.png"),
        ParallaxImageData("Scenes/Land 2.png"),
        ParallaxImageData("Scenes/Land 3.png"),
      ],
      size: Vector2(5000, size.y),
      fill: LayerFill.none,
      position: Vector2(0, size.y - waterLevel),
      anchor: Anchor.bottomLeft,
    );
  }
}