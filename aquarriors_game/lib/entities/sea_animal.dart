import 'dart:async';
import 'dart:math';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:hive/hive.dart';
import 'package:hive_flutter/hive_flutter.dart';

part 'sea_animal.g.dart';

const floatVelocity = 10;

@HiveType(typeId: 0)
class SeaAnimal extends SpriteComponent with HasGameRef, CollisionCallbacks {
  SeaAnimal({
    required this.type,
    required this.displaySize,
    required this.description,
    required this.customName,
  });

  @HiveField(0)
  final String type;
  @HiveField(1)
  final double displaySize;
  @HiveField(2)
  final String description;
  @HiveField(3)
  final String customName;

  bool movingRight = false;
  bool movingDown = false;

  @override
  Future<void> onLoad() async {
    super.onLoad();
    flipHorizontallyAroundCenter();

    position = Vector2(
      Random().nextDouble() * game.size.x,
      Random().nextDouble() * game.size.y,
    );
    size = Vector2.all(displaySize);

    final seaAnimalImg = Flame.images.fromCache("Sea Animal/$type.png");
    sprite = Sprite(seaAnimalImg);
  }

  @override
  void update(double dt) {
    super.update(dt);

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
      position.translate(0, -floatVelocity * dt);
    }
  }
}
