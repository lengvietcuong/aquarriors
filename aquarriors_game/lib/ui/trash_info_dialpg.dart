import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/worlds/ocean.dart';
import 'package:flutter/material.dart';

class TrashInfoDialog extends StatelessWidget {
  final AquarriorsGame game;
  const TrashInfoDialog({
    super.key,
    required this.game,
    required this.trashName,
  });

  final String trashName;

  void _handleOK() {
    game.overlays.remove("$trashName Dialog");
  }

  void _handleOpenTrashCollection() {
    game.overlays.remove("$trashName Dialog");
    game.overlays.add("Trash Collection");
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
                "You collected a $trashName",
                style: const TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Row(
                children: [
                  Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      border: Border.all(
                          color: Colors.white.withOpacity(0.5), width: 2),
                      borderRadius: const BorderRadius.all(Radius.circular(4)),
                      color: Colors.white.withOpacity(0.2),
                    ),
                    alignment: Alignment.center,
                    clipBehavior: Clip.hardEdge,
                    child: Image.asset(
                      "assets/images/Trash/$trashName.png",
                      width: 60,
                      height: 60,
                    ),
                  ),
                  const SizedBox(width: 20),
                  Expanded(
                      child: Text(
                    trashInfo
                        .firstWhere((t) => t.name == trashName)
                        .description,
                    style: const TextStyle(fontSize: 12),
                  ))
                ],
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
                      onPressed: _handleOK,
                      elevation: 0,
                      color: Colors.blueGrey,
                      child: const Text(
                        "OK",
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
                      onPressed: _handleOpenTrashCollection,
                      elevation: 0,
                      color: Colors.blue,
                      child: const Text(
                        "View Collection",
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
