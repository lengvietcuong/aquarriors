import 'dart:math';

import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

const randomNames = [
  'Max',
  'Bella',
  'Charlie',
  'Luna',
  'Rocky',
  'Daisy',
  'Milo',
  'Chloe',
  'Buddy',
  'Coco',
  'Simba',
  'Rosie',
  'Leo',
  'Molly',
  'Gizmo',
  'Sophie',
  'Duke',
  'Ruby',
  'Ollie',
  'Pepper'
];

class NameFishDialog extends StatelessWidget {
  final String fishType;
  final AquarriorsGame game;
  NameFishDialog({super.key, required this.fishType, required this.game});

  final randomName = randomNames[Random().nextInt(20)];

  void _handleKeepFishInAquarium() {
    final box = Hive.box<List>("aquarium");
    final fishTank = box.get("fishTank", defaultValue: []) ?? <SeaAnimal>[];
    final newFish = SeaAnimal(
      customName: randomName,
      type: fishType,
      displaySize: Random().nextDouble() * 50 + 50,
      description: "",
    );
    box.put("fishTank", fishTank..add(newFish));

    game.overlays.remove("Name $fishType Dialog");
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Container(
        width: 400,
        height: 200,
        decoration: const BoxDecoration(
          color: Color(0xff5A686D),
          borderRadius: BorderRadius.all(Radius.circular(8)),
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
                "Name your new $fishType!",
                style: const TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Container(
                width: 100,
                padding: const EdgeInsets.symmetric(horizontal: 10),
                height: 40,
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.all(Radius.circular(4)),
                  color: Colors.black.withOpacity(0.2),
                ),
                clipBehavior: Clip.hardEdge,
                alignment: Alignment.center,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(randomName),
                    const Icon(
                      Icons.replay,
                      color: Colors.white,
                    )
                  ],
                ),
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
                        "Confirm",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 12,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
