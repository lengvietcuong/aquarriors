import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class AquariumButton extends StatelessWidget {
  const AquariumButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      left: 100,
      child: GestureDetector(
        onTap: game.switchToAquarium,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SvgPicture.asset("assets/images/UI/Aquarium.svg"),
            const SizedBox(height: 2),
            const Text(
              "Aquarium",
              style: TextStyle(
                color: Colors.white,
                fontSize: 10,
              ),
            )
          ],
        ),
      ),
    );
  }
}
