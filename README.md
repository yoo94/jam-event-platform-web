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

### 아키텍처의 장점과 단점

#### 장점

- 아키텍처 구성 요소를 쉽게 교체, 추가, 제거할 수 있다.
- 아키텍처 표준화.
- 확장성.
- 방법론은 개발 스택과 독립적.
- 예기치 않은 부작용 없이 모듈 간의 연결이 제어되고 명시적.
- 아키텍처 방법론이 비즈니스 지향적.

#### 단점

- 다른 많은 아키텍처 솔루션들에 비해 높은 진입 장벽
- 인식, 팀 문화 및 개념 준수가 필요
- 도전 과제와 문제를 나중이 아닌 즉시 해결. 코드 문제와 개념에서 벗어난 부분을 즉시 확인할 수 있다. 그러나 이는 장점으로도 볼 수 있다.

---

### 🆚 고전적 아키텍처 vs 기능 분할 설계 (FSD)

| 항목              | 고전적 아키텍처                                           | 기능 분할 설계 (FSD)                                                   |
| ----------------- | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| **기준**          | 기술 중심 (기능이 아닌 파일 타입으로 구분)                | 기능(비즈니스 시나리오) 중심                                           |
| **디렉토리 구조** | `components/`, `pages/`, `utils/`, `styles/` 등           | `features/`, `entities/`, `widgets/`, `shared/`, `app/` 등 레이어 기반 |
| **응집도**        | 낮음 – 기능에 필요한 코드가 여러 폴더에 흩어짐            | 높음 – 관련 코드가 하나의 슬라이스 안에 모여 있음                      |
| **결합도**        | 상대적으로 높음 – 컴포넌트 간 의존 관계가 복잡해지기 쉬움 | 낮음 – 상위 레이어는 하위 레이어만 참조 가능 (단방향 흐름)             |
| **유지보수**      | 특정 기능 수정 시 여러 폴더를 오가야 함                   | 슬라이스 단위로 독립적 수정 가능                                       |
| **확장성**        | 프로젝트가 커질수록 폴더가 복잡해짐                       | 기능 단위로 구조를 자연스럽게 확장 가능                                |
| **협업 효율**     | 파일 찾기 어려워 협업 진입 장벽 있음                      | 슬라이스 단위로 작업을 나눌 수 있어 협업 용이                          |
| **표준화 수준**   | 팀/개발자마다 구조가 달라 일관성 부족                     | 레이어 구조와 역할이 정해져 있어 일관성 유지                           |
