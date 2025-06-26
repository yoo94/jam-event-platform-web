# nextjs14-starter-fsdAA

### fsd 아키텍처 구조 만든 보일러 플레이트

#### 포함된 기술스택

- **nextJs** 14.2.0
- react
- typeScript
- tailwind css
- eslint
- prettier
- huscky
- lint-staged

Client State 관리 => Zustand
Server State 관리 => tanstack Query

- form
  - react hook form
  - zod

```
npm install react-hook-form zod @hookform/resolvers
```

---

#### Husky + lint-staged 설정 (커밋 전에 자동 검사 및 포맷)

```shell
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

---

#### eslint-plugin-import + simple-import-sort로 import 정렬

```shell
npm install --save-dev eslint-plugin-import eslint-plugin-simple-import-sort
```

### FSD 아키텍처 (템플릿 구조)

```text
/src
  /app                      # Next.js의 라우트 진입점
    /(main)                # 라우트 그룹: 실제 페이지 구조와 매칭
      /home
        page.tsx
      /profile
        layout.tsx
        page.tsx
    /api                   # API 라우트 (app 기반이면 여기도 가능)
  /shared                  # 전역 공통 모듈
    /ui                    # 공통 UI 컴포넌트(Button, Text 등)
    /lib                   # 헬퍼 함수, API 클라이언트
    /config                # 설정 파일들(env, theme 등)
    /types                 # 글로벌 타입 정의
    /hooks
  /entities                # 도메인 모델 단위(User, Product 등) / 도메인(실체) 중심
    /user
      /model               # 상태, 스토어, 비즈니스 로직
        useUserStore.ts         # 사용자 상태를 관리하는 Zustand store
        user.ts                 # User 타입 정의, 유저 관련 로직
      /ui
        UserAvatar.tsx          // 유저 프로필 사진을 보여주는 UI 컴포넌트
        UserName.tsx            // 유저 이름만 보여주는 컴포넌트
    /event
      /model               # 상태, 스토어, 비즈니스 로직
        useEventStore.ts         # 이벤트 상태를 관리하는 Zustand store
        event.ts                 # event 타입 정의, 유저 관련 로직
      /ui
        EventCard.tsx          // 이벤트 상세내용만 보여주는 카드
  /features                # 사용자 행동 단위 기능들 / "행위" 중심의 기능 모듈
    /auth
      /model
      /ui
      /api
  /widgets                 # 페이지 구성 요소(Header, Footer 등)
    /layout
      Header.tsx
      Footer.tsx
  /processes               # 복합 플로우 예: Checkout, Onboarding
```

- entities: 조각조각 부품 / 핵심 도메인 모델별 상태 & UI 컴포넌트 보관소 → 단일 도메인(예: user, event)에 집중된 책임
- features: 조립해서 기능 수행 / 사용자 행위 중심의 기능 단위 (예: auth, addToCart 등) → 여러 entity를 조합해서 동작하는 기능
- widgets: 전체적인 레이아웃 조립 / 페이지 구성에 사용되는 고수준 UI 조합 (Header, Footer 등) → 여러 features, entities를 포함하는 조립 단위

---

```text
entities/auth: 기본 UI 컴포넌트 관리

SigninForm: 로그인 폼 UI 컴포넌트
Button: 로그인 버튼 컴포넌트
SNSLogin: 소셜 로그인 컴포넌트
features/auth: 비즈니스 로직 처리

유효성 검사
API 요청 및 데이터 처리
widgets/auth: 컴포넌트 조합

Dialog: entities와 features를 조합한 다이얼로그
app/(main): 최종 사용

다이얼로그를 화면에 표시
```
