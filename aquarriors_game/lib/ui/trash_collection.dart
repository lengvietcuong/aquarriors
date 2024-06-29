import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/worlds/ocean.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:hive_flutter/hive_flutter.dart';

class TrashCollection extends StatelessWidget {
  const TrashCollection({super.key, required this.game});
  final AquarriorsGame game;

  void _handleClose() {
    game.overlays.remove("Trash Collection");
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Container(
        width: 600,
        height: 400,
        clipBehavior: Clip.hardEdge,
        decoration: const BoxDecoration(
          color: Color(0xff5A686D),
          borderRadius: BorderRadius.all(Radius.circular(8)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Stack(
              alignment: Alignment.centerRight,
              children: [
                Container(
                  height: 32,
                  width: double.infinity,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.5),
                  ),
                  child: const Text(
                    "Trash Collection",
                    style: TextStyle(color: Colors.white, fontSize: 16),
                  ),
                ),
                Positioned(
                  right: 10,
                  child: GestureDetector(
                      onTap: _handleClose,
                      child: SvgPicture.asset("assets/images/UI/Close.svg")),
                ),
              ],
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: ListView(
                  children: [
                    ...trashInfo
                        .map((e) => Padding(
                              padding: const EdgeInsets.only(bottom: 20),
                              child: Row(
                                children: [
                                  Container(
                                    height: 80,
                                    width: 80,
                                    alignment: Alignment.center,
                                    decoration: BoxDecoration(
                                      color: Colors.black.withOpacity(0.2),
                                      borderRadius: const BorderRadius.all(
                                          Radius.circular(4)),
                                    ),
                                    child: Image.asset(
                                      "assets/images/Trash/${e.name}.png",
                                      width: 60,
                                      height: 60,
                                    ),
                                  ),
                                  const SizedBox(width: 20),
                                  Expanded(
                                    child: Column(
                                      mainAxisSize: MainAxisSize.max,
                                      mainAxisAlignment:
                                          MainAxisAlignment.start,
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          "${e.name} - ${e.recyclable ? "Recyclable" : "Non-Recyclable"}",
                                          style: const TextStyle(
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        const SizedBox(height: 5),
                                        Text(
                                          e.description,
                                          style: const TextStyle(fontSize: 10),
                                        ),
                                      ],
                                    ),
                                  ),
                                  const SizedBox(width: 20),
                                  Container(
                                    width: 140,
                                    height: 60,
                                    decoration: BoxDecoration(
                                      color: Colors.white.withOpacity(0.2),
                                      borderRadius: const BorderRadius.all(
                                        Radius.circular(4),
                                      ),
                                    ),
                                    child: Column(
                                      mainAxisAlignment:
                                          MainAxisAlignment.center,
                                      children: [
                                        Text(
                                          Hive.box("trashCollection")
                                              .get(e.name, defaultValue: 0)
                                              .toString(),
                                          style: const TextStyle(
                                              fontWeight: FontWeight.bold),
                                        ),
                                        const Text("Collected"),
                                      ],
                                    ),
                                  )
                                ],
                              ),
                            ))
                        .toList(),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
