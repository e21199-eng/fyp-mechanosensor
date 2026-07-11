#include <Servo.h>
#include <Wire.h>
#include <MPU6050.h>
#include <math.h>

Servo servo1;
Servo servo2;
MPU6050 mpu;

float t = 0;
float stepSize = 0.02;

void setup() {
  Serial.begin(115200);

  servo1.attach(10);
  servo2.attach(9);

  Wire.begin();
  mpu.initialize();

  delay(1000);
}

void loop() {
  // Servo infinity motion
  int angle1 = 90 + 50 * sin(t);
  int angle2 = 90 + 25 * sin(2 * t);

  servo1.write(angle1);
  servo2.write(angle2);

  t += stepSize;

  // MPU6050 readings
  int16_t ax, ay, az;
  int16_t gx, gy, gz;

  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

  // Send to Python: Ax, Ay, Az
  Serial.print(ax);
  Serial.print(",");
  Serial.print(ay);
  Serial.print(",");
  Serial.println(az);

  delay(15);
}