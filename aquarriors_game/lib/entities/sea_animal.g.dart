// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sea_animal.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class SeaAnimalAdapter extends TypeAdapter<SeaAnimal> {
  @override
  final int typeId = 0;

  @override
  SeaAnimal read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return SeaAnimal(
      type: fields[0] as String,
      displaySize: fields[1] as double,
      description: fields[2] as String,
      customName: fields[3] ?? "",
    );
  }

  @override
  void write(BinaryWriter writer, SeaAnimal obj) {
    writer
      ..writeByte(4)
      ..writeByte(0)
      ..write(obj.type)
      ..writeByte(1)
      ..write(obj.displaySize)
      ..writeByte(2)
      ..write(obj.description)
      ..writeByte(3)
      ..write(obj.customName);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is SeaAnimalAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
