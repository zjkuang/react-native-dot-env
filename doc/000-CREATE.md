# Create

% npx create-react-native-library react-native-dot-env
```
✔ What is the name of the npm package? … @zjkuang/react-native-dot-env
✔ What is the description for the package? … A package for managing .env file in React Native projects
✔ What is the name of package author? … Zhengqian Kuang
✔ What is the email address for the package author? … dev.kuang@gmail.com
✔ What is the URL for the package author? … https://github.com/zjkuang
✔ What is the URL for the repository? … https://github.com/zjkuang/zjkuang-react-native-dot-env
✔ What type of library do you want to develop? › Native module
✔ Which languages do you want to use? › Kotlin & Swift
✔ Project created successfully at react-native-dot-env!

Get started with the project:

  $ yarn

Run the example app on iOS:

  $ yarn example ios

Run the example app on Android:

  $ yarn example android

See CONTRIBUTING.md for more details. Good luck!
```

# Build & Run

$ cd example

example/Gemfile
```
gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1', '!= 1.15.2'
```
(example/) $ bundle install

(example/) $ yarn add pod-install -D

example/package.json
```
{
  ...
  "scripts": {
    ...
    "pod": "yarn pod-install --repo-update",
    ...
  },
  ...
}
```

(example/) $ yarn pod

(example/) $ yarn start

(Run it from Xcode and Android Studio ...)
