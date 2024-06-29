import 'package:flame/flame.dart';
import 'package:flame/widgets.dart';
import 'package:flutter/widgets.dart';

class CastingButton extends StatelessWidget {
  const CastingButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Positioned(
      child: SpriteButton(
        sprite: Sprite(Flame.images.fromCache("Casting Button.png")),
        pressedSprite: Sprite(Flame.images.fromCache("Casting Button.png")),
        onPressed: () {},
        width: 120,
        height: 120,
        label: const SizedBox.shrink(),
      ),
    );
  }
}
