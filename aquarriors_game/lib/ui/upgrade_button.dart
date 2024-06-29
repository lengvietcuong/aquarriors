import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flame/flame.dart';
import 'package:flame/widgets.dart';
import 'package:flutter/widgets.dart';

class UpgradeButton extends StatelessWidget {
  const UpgradeButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      right: 180,
      child: SpriteButton(
        sprite: Sprite(Flame.images.fromCache("UI/Upgrade Button.png")),
        pressedSprite: Sprite(Flame.images.fromCache("UI/Upgrade Button.png")),
        onPressed: () => game.overlays.add("Upgrade Dialog"),
        width: 80,
        height: 80,
        label: const SizedBox.shrink(),
      ),
    );
  }
}
