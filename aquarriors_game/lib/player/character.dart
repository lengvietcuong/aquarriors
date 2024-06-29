import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:flame/sprite.dart';

enum CharacterState { idle, casting }

class Character extends SpriteAnimationGroupComponent {
  late SpriteAnimation idleAnimation;
  late SpriteAnimation castingAnimation;

  @override
  Future<void> onLoad() async {
    super.onLoad();

    current = CharacterState.idle;
    size = Vector2(60, 60);
    position = Vector2(160, -40);

    final spritesheet = SpriteSheet(
      image: Flame.images.fromCache("Player/Casting (512x512x10).png"),
      srcSize: Vector2(512, 512),
    );
    idleAnimation = spritesheet.createAnimation(
      row: 0,
      stepTime: 1,
      from: 0,
      to: 1,
    );
    castingAnimation = spritesheet.createAnimation(
      row: 0,
      stepTime: 0.1,
    );
    animations = {
      CharacterState.idle: idleAnimation,
      CharacterState.casting: castingAnimation,
    };
  }
}
