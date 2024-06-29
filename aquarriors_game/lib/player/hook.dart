import 'package:flame/components.dart';
import 'package:flame/flame.dart';

class Hook extends SpriteComponent {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    final hookImg = Flame.images.fromCache("Player/Hook.png");
    sprite = Sprite(hookImg);
    size = Vector2(20, 20);
  }
}
