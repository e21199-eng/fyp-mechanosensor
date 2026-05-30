#include <Wire.h>
#include <MPU6050_light.h>

MPU6050 mpu(Wire);

void setup() {
  Serial.begin(115200);
  Wire.begin();

  byte status = mpu.begin();
  Serial.print("MPU6050 status: ");
  Serial.println(status);

  if (status != 0) {
    Serial.println("Could not connect to MPU6050! Check wiring.");
    while (true); // halt
  }

  Serial.println("Calibrating... keep sensor still.");
  delay(1000);
  mpu.calcOffsets(true, true); // gyro + accel calibration
  Serial.println("Done!");
}

void loop() {
  mpu.update();

  Serial.print("ACCEL  X: "); Serial.print(mpu.getAccX());
  Serial.print("  Y: ");       Serial.print(mpu.getAccY());
  Serial.print("  Z: ");       Serial.println(mpu.getAccZ());

  Serial.print("GYRO   X: "); Serial.print(mpu.getGyroX());
  Serial.print("  Y: ");       Serial.print(mpu.getGyroY());
  Serial.print("  Z: ");       Serial.println(mpu.getGyroZ());

  Serial.print("ANGLE  X: "); Serial.print(mpu.getAngleX());
  Serial.print("  Y: ");       Serial.print(mpu.getAngleY());
  Serial.print("  Z: ");       Serial.println(mpu.getAngleZ());

  Serial.println("---");
  delay(500);
}