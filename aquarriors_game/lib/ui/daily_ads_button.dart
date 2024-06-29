import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class DailyAdsButton extends StatelessWidget {
  const DailyAdsButton({super.key, required this.game});
  final AquarriorsGame game;

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: 16,
      right: 160,
      child: GestureDetector(
        onTap: () {},
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            SvgPicture.asset(
              "assets/images/UI/Present.svg",
              width: 32,
              height: 32,
            ),
            const SizedBox(height: 2),
            const Text(
              "Daily (Ads)",
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
