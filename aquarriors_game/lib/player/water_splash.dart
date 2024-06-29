import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:flame/sprite.dart';

class WaterSplash extends SpriteAnimationComponent {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    final spritesheet = SpriteSheet(
      image: Flame.images.fromCache("Player/Water Splash (200x80x4).png"),
      srcSize: Vector2(200, 80),
    );
    animation = spritesheet.createAnimation(row: 0, stepTime: 0.1);
  }
}
