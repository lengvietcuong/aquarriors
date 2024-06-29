import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flame/flame.dart';
import 'package:flame/widgets.dart';
import 'package:flutter/widgets.dart';

class CastingButton extends StatelessWidget {
  const CastingButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      right: 40,
      child: SpriteButton(
        sprite: Sprite(Flame.images.fromCache("UI/Casting Button.png")),
        pressedSprite: Sprite(Flame.images.fromCache("UI/Casting Button.png")),
        onPressed: game.player.cast,
        width: 120,
        height: 120,
        label: const SizedBox.shrink(),
      ),
    );
  }
}
