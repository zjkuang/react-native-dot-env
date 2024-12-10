@objc(ReactNativeDotEnv)
class ReactNativeDotEnv: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
  
  @objc(pwd:withRejecter:)
  func pwd(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    let fileManager = FileManager.default
    let currentPath = fileManager.currentDirectoryPath
    resolve(currentPath)
  }
  
  @objc(ls:withResolver:withRejecter:)
  func ls(path:String,resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    let fileManager = FileManager.default
    let p = (path == "" ? fileManager.currentDirectoryPath : path)
    do {
      let items = try fileManager.contentsOfDirectory(atPath: p)
      resolve(items)
    } catch {
      let code = -1
      let message = "try fileManager.contentsOfDirectory(atPath: \(p))"
      let error = NSError(domain: "FileManager", code: code, userInfo: ["message": message, "path": p])
      reject("\(code)", message, error)
    }
  }
}
