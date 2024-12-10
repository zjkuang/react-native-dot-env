package com.zjkuang.reactnativedotenv

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.io.File
import java.nio.file.Paths

class ReactNativeDotEnvModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }

  @ReactMethod
  fun pwd(promise: Promise) {
    val path = Paths.get("").toAbsolutePath().toString()
    promise.resolve(path)
  }

  @ReactMethod
  fun ls(path: String, promise: Promise) {
    var p = path
    if (p == "") {
      p = Paths.get("").toAbsolutePath().toString()
    }
    val files = File(p).listFiles()
    if (files == null || files.isEmpty()) {
      promise.resolve(null)
      return
    }
    val fileNames = arrayOfNulls<String>(files.size)
    files.mapIndexed { index, item ->
      fileNames[index] = item?.name
    }
    promise.resolve(files)
  }

  companion object {
    const val NAME = "ReactNativeDotEnv"
  }
}
