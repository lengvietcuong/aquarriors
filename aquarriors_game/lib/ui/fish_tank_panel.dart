import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:hive_flutter/hive_flutter.dart';

class FishTankPanel extends StatelessWidget {
  const FishTankPanel({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        width: 600,
        height: 80,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          borderRadius: const BorderRadius.vertical(top: Radius.circular(4)),
          color: Colors.white.withOpacity(0.2),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.max,
          children: [
            Material(
              color: Colors.black.withOpacity(0.5),
              borderRadius: const BorderRadius.all(Radius.circular(4)),
              clipBehavior: Clip.hardEdge,
              child: InkWell(
                onTap: () => game.overlays.add("New Slot Dialog"),
                child: SizedBox(
                  width: 100,
                  height: 60,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        "Slot",
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                      const SizedBox(height: 4),
                      SvgPicture.asset(
                        "assets/images/UI/Plus.svg",
                        width: 24,
                        height: 24,
                      )
                    ],
                  ),
                ),
              ),
            ),
            const SizedBox(width: 20),
            Expanded(
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.all(0),
                children: (Hive.box<List>("aquarium")
                            .get("fishTank", defaultValue: <SeaAnimal>[]) ??
                        <SeaAnimal>[])
                    .map((e) => Container(
                          width: 60,
                          height: 60,
                          margin: const EdgeInsets.only(right: 10),
                          decoration: BoxDecoration(
                            color: Colors.black.withOpacity(0.2),
                            borderRadius:
                                const BorderRadius.all(Radius.circular(4)),
                          ),
                          child: Stack(
                            children: [
                              Image.asset(
                                "assets/images/Sea Animal/${e.type}.png",
                              ),
                              Align(
                                alignment: Alignment.topCenter,
                                child: Container(
                                  margin: const EdgeInsets.all(4),
                                  width: double.infinity,
                                  alignment: Alignment.centerLeft,
                                  height: 3,
                                  decoration: BoxDecoration(
                                    color: Colors.black.withOpacity(0.2),
                                    borderRadius: const BorderRadius.all(
                                        Radius.circular(3)),
                                  ),
                                  child: Container(
                                    width: 30,
                                    height: 3,
                                    decoration: const BoxDecoration(
                                      color: Colors.yellow,
                                      borderRadius:
                                          BorderRadius.all(Radius.circular(3)),
                                    ),
                                  ),
                                ),
                              )
                            ],
                          ),
                        ))
                    .toList(),
              ),
            )
            // return fishTank.toString().map((e) => Text(e.toString()));
          ],
        ),
      ),
    );
  }
}
