import 'dart:async';

import 'package:aquarriors_game/constants.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';

class Water extends SpriteComponent with HasGameRef {
  @override
  Future<void> onLoad() async {
    super.onLoad();
    final waterImg = Flame.images.fromCache("Scenes/Water.png");
    sprite = Sprite(waterImg);
    position = Vector2(0, game.size.y - waterLevel);
    size = Vector2(5000, 1000);
  }
}
