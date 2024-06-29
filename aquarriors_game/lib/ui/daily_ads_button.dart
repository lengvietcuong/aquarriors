import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class DailyAdsButton extends StatelessWidget {
  const DailyAdsButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 60,
      right: 40,
      child: GestureDetector(
        onTap: game.switchToAquarium,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SvgPicture.asset(
              "assets/images/UI/Present.svg",
              width: 36,
              height: 36,
            ),
            const SizedBox(height: 2),
            const Text(
              "Daily Reward (Ads)",
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
