import 'package:animated_digit/animated_digit.dart';
import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:hive_flutter/hive_flutter.dart';

class CoinCounter extends StatelessWidget {
  const CoinCounter({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      right: 40,
      top: 20,
      child: Material(
        color: Colors.transparent,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 20),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.2),
            borderRadius: const BorderRadius.all(Radius.circular(4)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              SvgPicture.asset("assets/images/UI/Coin.svg"),
              const SizedBox(width: 20),
              ValueListenableBuilder(
                valueListenable:
                    Hive.box("gameData").listenable(keys: ["coins"]),
                builder: (context, box, widget) {
                  return AnimatedDigitWidget(
                    value: box.get("coins", defaultValue: 0),
                    textStyle: const TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
