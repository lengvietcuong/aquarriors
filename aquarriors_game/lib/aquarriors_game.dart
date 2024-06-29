import 'dart:async';

import 'package:flame/flame.dart';
import 'package:flame/game.dart';

class AquarriorsGame extends FlameGame {

  @override
  Future<void> onLoad() async {
    super.onLoad();

    await _loadAllImages();
  }

  Future<void> _loadAllImages() async {
    Flame.images.loadAll([
      "assets/images/Player/Boat.png",
      "assets/images/Player/Casting (512x512x10).png",
      "assets/images/Player/Character.png",
      "assets/images/Player/Hook.png",
      "assets/images/Player/Water Splash (200x80x4).png",
      "assets/images/Scenes/Aquarium Background.png",
      "assets/images/Scenes/Ocean Background.png",
      "assets/images/Scenes/Land 1.png",
      "assets/images/Scenes/Land 2.png",
      "assets/images/Scenes/Land 3.png",
      "assets/images/Scenes/Sun.png",
      "assets/images/Scenes/Water.png",
      "assets/images/Sea Animal/Angel Fish.png",
      "assets/images/Sea Animal/Blue Tang.png",
      "assets/images/Sea Animal/Clown Fish.png",
      "assets/images/Sea Animal/Turtle.png",
      "assets/images/Trapped/Angel Fish.png",
      "assets/images/Trapped/Blue Tang.png",
      "assets/images/Trapped/Clown Fish.png",
      "assets/images/Trapped/Turtle.png",
      "assets/images/Trash/Aluminum Can.png",
      "assets/images/Trash/Broken Glass.png",
      "assets/images/Trash/Broken Phone.png",
      "assets/images/Trash/Broken Vase.png",
      "assets/images/Trash/Carton.png",
      "assets/images/Trash/Food Waste.png",
      "assets/images/Trash/Light Bulb.png",
      "assets/images/Trash/Plastic Bag.png",
      "assets/images/Trash/Plastic Bottle.png",
      "assets/images/Trash/Styrofoam.png",
      "assets/images/UI/Casting Button.png",
      "assets/images/UI/Reeling Button.png",
      "assets/images/UI/Upgrade Button.png",
    ]);
  }
}