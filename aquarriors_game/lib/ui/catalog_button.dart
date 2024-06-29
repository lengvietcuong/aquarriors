import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class CatalogButton extends StatelessWidget {
  const CatalogButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      bottom: 20,
      left: 40,
      child: Material(
        color: Colors.transparent,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SvgPicture.asset("assets/images/UI/Catalog.svg"),
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
