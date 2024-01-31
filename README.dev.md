# 개발을 위한 문서

## 맥에서 개발 환경

brew 가 설치되어있다는 전제로 시작합니다.

rb 버전을 관리하기 위한 rbenv 와 rb 빌드를 위한 ruby-build 설치

```sh
brew update
brew install rbenv ruby-build
```

```sh
rbenv versions
```

처음에는 아무것도 설치 안되었으니 시스템 rb가 지정되어있을 것.

```sh
* system (set by /Users/garampark/.rbenv/version)
```

3.1 버전으로 설치 필수.(의존성 문제 있음 - tainted method 없어짐)

```sh
rbenv install --list-all | grep 3.1.
```

최신 버전으로 설치하는 것을 권장함. 동작하지 않을 경우 `3.1.4`에서는 동작하는 것을 확인

```sh
rbenv install 3.1.4
```

설치 후 사용 버전 지정

```sh
rbenv global 3.1.4
```

```sh
rbenv versions
```

버전 지정 된 것을 확인 가능

```sh
  system
* 3.1.4 (set by /Users/garampark/.rbenv/version)
```

필요한 라이브러리 설치

```sh
gem install bundler jekyll
```

의존성 설치

```sh
bundle install
```

## docker 및 compose

- 추후에 docker 및 docker compose 로 실행 가능하도록 구성할 예정
