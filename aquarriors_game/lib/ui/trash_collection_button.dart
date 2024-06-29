import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class TrashCollectionButton extends StatelessWidget {
  const TrashCollectionButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      left: 40,
      child: GestureDetector(
        onTap: () => game.overlays.add("Trash Collection"),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SvgPicture.asset("assets/images/UI/Trash Collection.svg"),
            const SizedBox(height: 2),
            const Text(
              "Trash Collection",
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
