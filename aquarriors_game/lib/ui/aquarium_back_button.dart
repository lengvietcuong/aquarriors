import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class AquariumBackButton extends StatelessWidget {
  const AquariumBackButton({super.key, required this.game});

  final AquarriorsGame game;

  void _backToOcean() {
    game.switchToOcean();
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 20,
      left: 40,
      child: Material(
        borderRadius: const BorderRadius.all(Radius.circular(4)),
        color: Colors.white.withOpacity(0.2),
        clipBehavior: Clip.hardEdge,
        child: InkWell(
          onTap: _backToOcean,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            child: Row(
              children: [
                SvgPicture.asset("assets/images/UI/Back.svg", width: 20),
                const SizedBox(width: 10),
                const Text(
                  "Back to Ocean",
                  style: TextStyle(fontSize: 12, color: Colors.white),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
