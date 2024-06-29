import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

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
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Stack(
              alignment: Alignment.center,
              children: [
                Container(
                  height: 32,
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
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
