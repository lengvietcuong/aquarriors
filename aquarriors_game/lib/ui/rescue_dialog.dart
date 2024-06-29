import 'dart:math';

import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

class RescueDialog extends StatelessWidget {
  final String fishType;
  final AquarriorsGame game;
  const RescueDialog({super.key, required this.fishType, required this.game});

  void _handleFreeFish() {
    game.overlays.remove("Rescue $fishType Dialog");

    return;
  }

  void _handleKeepFishInAquarium() {
    final box = Hive.box<List>("aquarium");
    final fishTank = box.get("fishTank", defaultValue: []) ?? <SeaAnimal>[];
    final newFish = SeaAnimal(
      type: fishType,
      displaySize: Random().nextDouble() * 50 + 50,
      description: "",
    );
    box.put("fishTank", fishTank..add(newFish));

    game.overlays.remove("Rescue $fishType Dialog");
    // print(fishTank);
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Container(
        width: 320,
        height: 200,
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.5),
          borderRadius: const BorderRadius.all(Radius.circular(8)),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Container(
              height: 32,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.5),
              ),
              child: Text(
                "You rescued a $fishType!",
                style: const TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
            Container(
              decoration: BoxDecoration(
                border:
                    Border.all(color: Colors.white.withOpacity(0.5), width: 2),
                borderRadius: const BorderRadius.all(Radius.circular(4)),
                color: Colors.white.withOpacity(0.2),
              ),
              clipBehavior: Clip.hardEdge,
              child: Image.asset(
                "assets/images/Sea Animal/$fishType.png",
                width: 80,
                height: 80,
              ),
            ),
            Container(
              height: 48,
              padding: const EdgeInsets.symmetric(horizontal: 10),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.8),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: MaterialButton(
                      onPressed: _handleKeepFishInAquarium,
                      elevation: 0,
                      color: Colors.blueGrey,
                      child: const Text(
                        "Keep in Aquarium",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: MaterialButton(
                      onPressed: _handleFreeFish,
                      elevation: 0,
                      color: Colors.lightBlue,
                      child: const Text(
                        "Free",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
