import 'dart:async';

import 'package:flame/components.dart';

class Ocean extends World with HasGameRef {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    game.overlays.add("Casting Button");
  }
}
