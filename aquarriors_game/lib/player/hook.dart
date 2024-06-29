import 'dart:async';

import 'package:aquarriors_game/entities/trapped_animal.dart';
import 'package:aquarriors_game/entities/trash.dart';
import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/flame.dart';

class Hook extends SpriteComponent with CollisionCallbacks, HasGameRef {
  late RectangleHitbox hitbox;

  @override
  FutureOr<void> onLoad() {
    super.onLoad();
    sprite = Sprite(Flame.images.fromCache("Player/Hook.png"));
    size = Vector2(24, 24);
    hitbox = RectangleHitbox(position: Vector2(0, 0), size: size)
      ..debugMode = true;

    hitbox.collisionType = CollisionType.active;
    add(hitbox);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);
    if (other is Trash) {
      other.handleCollisionWithHook(this);
    } else if (other is TrappedAnimal) {
      other.handleCollisionWithHook(this);
    }
  }

  @override
  void onRemove() {
    super.onRemove();

    _handleCollectedTrash();
  }

  void _handleCollectedTrash() {
    // final box = Hive.box("gameData");
    // final currentCoins = box.get("coins", defaultValue: 0);

    // int coinsCollected = 0;
    // for (final component in children) {
    //   if (component is Trash) {
    //     final trashCounter = box.get(component.name, defaultValue: 0);
    //     box.put(component.name, trashCounter + 1);

    //     coinsCollected += component.coins;
    //   } else if (component is TrappedAnimal) {
    //     // game.overlays.add("Rescue ${component.name} Dialog");

    //     coinsCollected += component.coins;
    //   }
    // }
    // box.put("coins", currentCoins + coinsCollected);
  }
}
