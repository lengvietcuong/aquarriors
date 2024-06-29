import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hive_flutter/hive_flutter.dart';

class NewSlotDialog extends StatelessWidget {
  final AquarriorsGame game;
  const NewSlotDialog({super.key, required this.game});

  void _handleCancel() {
    game.overlays.remove("New Slot Dialog");
  }

  void _handleUpgrade() {
    final box = Hive.box("gameData");
    final currentCoins = box.get("coins");
    box.put("coins", currentCoins - 765);

    game.overlays.remove("New Slot Dialog");
  }

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: Alignment.center,
      child: Container(
        width: 340,
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
              child: const Text(
                "More Aquarium Slots",
                style: TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
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
                    child: SvgPicture.asset(
                      "assets/images/UI/Plus.svg",
                      width: 50,
                      height: 50,
                    ),
                  ),
                  const SizedBox(width: 20),
                  const Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("New slot"),
                      // SizedBox(height: 5),
                      // Text(
                      //   "Length +5%",
                      //   style: TextStyle(fontSize: 10),
                      // ),
                    ],
                  )
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
                      onPressed: _handleCancel,
                      elevation: 0,
                      color: Colors.blueGrey,
                      child: const Text(
                        "Cancel",
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
                      onPressed: _handleUpgrade,
                      elevation: 0,
                      color: Colors.blue,
                      child: const Text(
                        "Expand (500 Coins)",
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
