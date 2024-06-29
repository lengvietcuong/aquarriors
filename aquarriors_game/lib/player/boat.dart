import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/flame.dart';

class Boat extends SpriteComponent {
  @override
  Future<void> onLoad() async {
    super.onLoad();

    final boatImg = Flame.images.fromCache("Player/Boat.png");
    sprite = Sprite(boatImg);
  }
}
