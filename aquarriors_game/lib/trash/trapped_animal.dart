import 'dart:async';
import 'dart:math';

import 'package:aquarriors_game/constants.dart';
import 'package:aquarriors_game/player/hook.dart';
import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';

const floatVelocity = 10;

class TrappedAnimal extends SpriteComponent
    with HasGameRef, CollisionCallbacks {
  TrappedAnimal({
    required this.name,
    required this.displaySize,
    required this.description,
    required this.coins,
  });

  final String name;
  final Vector2 displaySize;
  final String description;
  final int coins;

  bool collected = false;
  bool movingRight = false;
  bool movingDown = false;

  @override
  Future<void> onLoad() async {
    super.onLoad();
    flipHorizontallyAroundCenter();

    position = Vector2(
      Random().nextDouble() * 5000,
      game.size.y - waterLevel + Random().nextDouble() * 900,
    );
    size = displaySize;

    final fishImg = Flame.images.fromCache("Trapped/$name.png");
    sprite = Sprite(fishImg);

    final hitbox = RectangleHitbox(
      size: displaySize,
      position: Vector2(0, 0),
    );
    add(hitbox);
    hitbox.collisionType = CollisionType.passive;
  }

  void handleCollisionWithHook(Hook hook) {
    if (!collected) {
      removeFromParent();
      hook.add(this);

      position = Vector2(0, 0);
      anchor = Anchor.center;
      collected = true;
    }
  }

  @override
  void update(double dt) {
    super.update(dt);

    if (!collected) {
      // 1% chance to change direction every tick
      if ((Random().nextDouble() * 100).round() == 0) {
        movingRight = !movingRight;
        flipHorizontallyAroundCenter();
      }
      if ((Random().nextDouble() * 100).round() == 0) {
        movingDown = !movingDown;
      }

      if (movingRight) {
        position.translate(floatVelocity * dt, 0);
      }
      if (!movingRight) {
        position.translate(-floatVelocity * dt, 0);
      }
      if (movingDown) {
        position.translate(0, floatVelocity * dt);
      }
      if (!movingDown) {
        position = Vector2(
          position.x,
          max(game.size.y - waterLevel + size.x,
              position.y - floatVelocity * dt),
        );
      }
    }
  }
}
