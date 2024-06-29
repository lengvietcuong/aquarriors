import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flame/flame.dart';
import 'package:flame/widgets.dart';
import 'package:flutter/widgets.dart';

class ReelingButton extends StatelessWidget {
  const ReelingButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      child: SpriteButton(
        sprite: Sprite(Flame.images.fromCache("UI/Reeling Button.png")),
        pressedSprite: Sprite(Flame.images.fromCache("UI/Reeling Button.png")),
        onPressed: game.player.reel,
        width: 120,
        height: 120,
        label: const SizedBox.shrink(),
      ),
    );
  }
}
