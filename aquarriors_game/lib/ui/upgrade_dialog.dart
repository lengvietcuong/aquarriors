import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hive_flutter/hive_flutter.dart';

class UpgradeDialog extends StatelessWidget {
  final AquarriorsGame game;
  const UpgradeDialog({super.key, required this.game});

  void _handleCancel() {
    game.overlays.remove("Upgrade Dialog");
  }

  void _handleUpgrade() {
    final box = Hive.box("gameData");
    final currentCoins = box.get("coins");
    box.put("coins", currentCoins - 765);

    game.overlays.remove("Upgrade Dialog");
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
                "Upgrade Equipments",
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
                      "assets/images/UI/Hook.svg",
                      width: 50,
                      height: 50,
                    ),
                  ),
                  const SizedBox(width: 20),
                  const Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Hook - Level 4"),
                      SizedBox(height: 5),
                      Text(
                        "Length +5%",
                        style: TextStyle(fontSize: 10),
                      ),
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
                        "Upgrade (765 Coins)",
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
