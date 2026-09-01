# Vibe Wars — 바이브 워즈 (한글화)

[![Live Demo](https://img.shields.io/badge/Live-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://sigco3111.github.io/VibeWars/)

브라우저에서 바로 도는 육각 그리드 턴제 전략 게임. 서버 없이, 백엔드 없이, 런타임 의존성 0개로 동작하는 **AI 코딩 에이전트가 처음부터 끝까지 만든 게임**을 한국어로 즐기세요.

> 본 저장소는 [`asynkron/VibeWars`](https://github.com/asynkron/VibeWars) 원본의 **한글화 미러**입니다. 원본의 모든 기능을 그대로 보존하면서 사용자 대면 텍스트(메뉴, 버튼, 유닛/스킬/맵 이름, 패널 라벨, 종료 배너)를 한국어로 전환했습니다.

---

## 🌐 라이브 데모

**라이브 데모 : https://sigco3111.github.io/VibeWars/**

브라우저에서 바로 실행 — 설치·로그인·회원가입 불필요.

---

## ✨ 핵심 특징

| 항목 | 설명 |
|---|---|
| **장르** | 육각 그리드 턴제 전략 (Wargame) |
| **렌더링** | Three.js r128 (CDN global) — 5단계 LOD · 절차 생성 지형 · 발광 효과 |
| **AI** | Web Worker + 빔 서치로 비동기 탐색 — UI 멈춤 없이 다섯 턴 앞까지 내다봄 |
| **유닛 수** | 15종 (육상/해상/공중, 시나리오 전용 primitive 유닛 3종 포함) |
| **맵 수** | 8종 (4 authored 대칭 맵 + 4 절차 생성 시나리오/랜덤 맵) |
| **테스트** | Vitest 4 + jsdom — 508개 테스트, 100% 통과 |
| **번들** | Vite 8 정적 빌드 (CDN 캐시로 초기 로딩 후 즉시 플레이) |
| **런타임 의존성** | **0개** (`package.json`의 `dependencies` 키가 비어있음) |

---

## 🎮 빠른 시작 (브라우저에서)

1. 위 라이브 데모 링크 클릭
2. 우측 상단 도구 모음에서 **맵**과 **AI 난이도** 선택
3. **매치 유형** 버튼 클릭 (인간 vs AI / AI vs AI / 인간 vs 인간)
4. 내 유닛 클릭 → 이동 또는 공격 → **턴 종료** 버튼

### 30초 첫 매치

```
1. 시작 화면에서 "왕관 (14x14)" 맵 선택 (대칭 작전 맵)
2. AI 난이도 "보통" 선택 (4턴 앞을 내다보는 합리적 AI)
3. "인간 vs AI" 클릭
4. 파란색 유닛 중 하나 클릭 → 헥스 보드에서 갈 수 있는 칸이 녹색으로 표시됨
5. 녹색 칸 클릭 → 이동 → 같은 유닛을 다시 클릭하면 적 유닛이 빨간색으로 사거리 표시됨
6. 빨간 칸 클릭 → 공격 (이동력 소모)
7. 유닛의 모든 행동이 끝나면 우측 하단 "턴 종료" 클릭
```

---

## 🕹️ 조작법 한 눈에

| 동작 | 조작 |
|---|---|
| 유닛 선택 | 좌클릭 |
| 이동 | 유닛 선택 후 녹색 칸 클릭 |
| 공격 | 유닛 선택 후 빨간 칸 클릭 (보라색 = 명중 불확실) |
| 스킬 사용 | 유닛 선택 후 하단 중앙 스킬 바의 아이콘 클릭 |
| 다음 유닛으로 점프 | 좌측 하단 "다음 유닛" 버튼 |
| 턴 종료 | 우측 하단 "턴 종료" 버튼 |
| 카메라 회전 | 우클릭 드래그 |
| 카메라 줌 | 마우스 휠 |
| 카메라 이동 | 가운데 드래그 |
| 미니맵 클릭 | 미니맵 영역 좌클릭으로 시점 점프 |

---

## ⚔️ 유닛 15종 (한글명)

### 육상 (tank / aa / artillery / infantry)

| 한글명 | 영문 키 | 클래스 | 특징 |
|---|---|---|---|
| **로드** | Road | infantry | 싸구려 드로이드. 2HP에 3~5 데미지, 전장이 깔려있으면 본진 다이슨처럼 보임 |
| **방패** | Bulwark | tank | 중전차. 10HP에 1칸 사거리 — 가까이 와서 받아치세요 |
| **세이버** | Sabre | tank | 중형 전차. 5HP에 4~6 데미지 |
| **링스** | Lynx | tank | 경장갑 정찰. 5HP에 4 이동력 — 정찰·교란용 |
| **할버드** | Halberd | aa | 대공전차. 헬기·제트를 요격합니다 |
| **케스트럴** | Kestrel | artillery | 곡사포. 2~3 사거리 — 닿기 전에 죽여야 살아남음 |
| **파이크** | Pike | infantry | 보병 + 수리 + 불 지피기 + **유일한 점령 유닛** |
| **드라버** | Drover | tank | 유일한 수송차. 보병 한 명 태우고 이동 가능 |
| **클로스** | Kloss | tank | 시나리오 전용. 99HP에 1 데미지 — 자리를 지키는 성벽 |
| **피라미드** | Pyramid | artillery | 시나리오 전용. 잃으면 매치 종료. **목표물** |
| **볼** | Boll | tank | 시나리오 전용. 14HP, 4 이동력 — 피라미드 급습용 공 |

### 해상 (naval)

| 한글명 | 영문 키 | 특징 |
|---|---|---|
| **구급함** | Gunboat | 대형 함선. 10HP에 4~6 데미지 — 느린 중거포 |
| **공격정** | AttackBoat | 고속 경함. 7HP에 4 이동력 — 해안 급습용 |

### 공중 (air)

| 한글명 | 영문 키 | 특징 |
|---|---|---|
| **나이트자** | Nightjar | 공격 헬기. 6HP에 4 이동력, 로켓 폭격 |
| **슈라이크** | Shrike | 공격 제트. 4HP에 **5 이동력**, 6~9 데미지 — 가장 빠르고 강한 단일 유닛 |

### 보너스 스킬

| 한글명 | 영문 키 | 보유 유닛 | 효과 |
|---|---|---|---|
| **수리** | Repair | 파이크 | HP를 3 회복 (기계 유닛만, 매 턴 사용 불가) |
| **불 지피기** | Start Fire | 파이크 | 인접한 식생 칸에 6턴간 화염 — 화염 위는 어떤 유닛도 통과 불가 |
| **탑승** | Load | 드라버 | 인접한 보병을 태움 |
| **하차** | Unload | 드라버 | 인접한 빈 칸에 보퍼을 내려줌 (행동 소모 없음) |

---

## 🗺️ 맵 8종

| 한글명 | 영문 키 | 크기 | 설명 |
|---|---|---|---|
| **쌍둥이 능선** | Mirror8 | 8x8 | 소규모 대칭 작전 맵 |
| **반바퀴** | HalfTurn | 12x18 | 회전 대칭의 중형 맵 |
| **두 개의 여울** | TwoFords | 10x10 | 두 개의 얕은 여울이 있는 맵 |
| **왕관 (14x14)** | Crown14 | 14x14 | 4방향 대칭의 대형 맵 |
| **임의 작은** | RandomSmall | 8x12 | 절차 생성 (시드 무작위) |
| **임의 중간** | RandomMedium | 12x16 | 절차 생성 (시드 무작위) |
| **고정 중간** | FixedRandomMedium | 12x16 | 절차 생성 (시드 고정) |
| **임의 큰** | RandomLarge | 16x20 | 절차 생성 (시드 무작위) |

URL로 직접 진입: `?map=crown14&mode=human-vs-ai&difficulty=medium`

---

## ⚙️ AI 난이도

| 한글명 | 영문 키 | 설명 |
|---|---|---|
| **낮음** | low | 3턴 앞을 내다봅니다 |
| **보통** | medium | 4턴 앞을 내다보고 더 넓게 탐색 |
| **높음** | hard | 5턴 앞을 내다보고 가장 넓게 탐색 — 사고 시간이 길어집니다 |

---

## 🏗️ 아키텍처

```
  src/shared/hexengine/     라이브 게임: Three.js 렌더링 + 룰 테이블
            │                (38 파일 — GridSystem, TerrainSystem, UnitSystem, BuildingSystem …)
            │
            │  룰 테이블을 import-free 모듈로 분리
            │  (unitStats, terrainStats, skills, hexMath, priorityQueue)
            ▼
  src/systems/sim/          순수, 렌더링-프리 시뮬레이션 모델
            │                SimState = frozen base + append-only event log
            │
            │  AI가 점유할 때만 Web Worker로 postMessage 직렬화
            ▼
  src/systems/sim/ai/       빔 서치 +12개 tactical gene
                             (mend, holdDoor, regroup, storm, sink, repair …)
```

**단일 계약**: 룰 테이블(`unitStats`, `skills`, `terrainStats`)은 import-free 데이터 모듈입니다. 양쪽 — 라이브 게임과 시뮬레이션 — 이 같은 정의를 읽습니다. AI가 평가하는 시뮬레이션은 Three.js 없이도 동작할 수 있어서 Web Worker에서 돌고, 그 결과는 `eventDigest`로 부모 스레드에 반환됩니다.

---

## 💻 기술 스택

| 영역 | 스택 |
|---|---|
| **언어** | TypeScript 7 (strict) |
| **빌드** | Vite 8 → 정적 사이트, `base: './'` (서브패스 호환) |
| **렌더링** | Three.js r128 (CDN global, 18개 script 태그) |
| **테스트** | Vitest 4 + jsdom + THREE stub |
| **동시성** | Web Worker (`type: 'module'`) AI 검색 |
| **CI/CD** | GitHub Actions: typecheck → test → gh-pages 자동 배포 |

---

## 📦 빌드 & 개발

```bash
# 의존성 설치 (주의: Three.js는 dependencies에 없음 — CDN global)
npm ci

# 개발 서버 (Vite, :5173)
npm run dev

# 타입 체크
npm run typecheck

# 전체 테스트 (37 파일, 508 테스트)
npm test

# AI vs AI 헤드리스 매치 10번
npm run simulate

# 토너먼트 20라운드
npm run tournament

# 정적 빌드 (dist/)
npm run build
```

---

## 📁 프로젝트 구조

```
src/
├─ constants.ts              MAP_CONFIG, MAP_KEY, players, HIGHLIGHT_COLORS
├─ types.ts                  UnitTypeConfig, GameUnit, GameState 타입
├─ game.ts                   시작 메뉴, 매치 진입, 승리 배너, 도구 모음
├─ render.ts                 카메라, Three.js 씬, 미니맵, 프레임 통계
├─ treeViewer.ts             trees.html의 절차 생성 나무 뷰어
│
├─ shared/hexengine/         라이브 게임 (Three.js 의존)
│  ├─ GridSystem.ts          헥스 격자 + pathfinding
│  ├─ TerrainSystem.ts      절차 생성 지형 (Perlin noise)
│  ├─ TerrainShader.ts      GLSL 셰이더 (비·눈·크레이터)
│  ├─ UnitSystem.ts         유닛 렌더링 + 포트레이트
│  ├─ BuildingSystem.ts     본거지 (HQ) + 점령
│  ├─ FireSystem.ts         화염 + 잔해
│  ├─ AirMarkerSystem.ts    공중 유닛 표시
│  ├─ WaterReflectionSystem.ts  물 반사 + 파동
│  ├─ ProceduralDecorations.ts  절차 생성 나무 (broadleaf / spruce / pine / birch)
│  ├─ unitStats.ts          ★ 15개 유닛 데이터 테이블
│  ├─ skills.ts             ★ 5개 스킬 데이터 테이블
│  ├─ terrainStats.ts       6개 지형 비용/통과성
│  ├─ hexMath.ts            헥스 좌표 + 거리 계산
│  └─ options.ts            전역 HEX_ENGINE_OPTIONS
│
├─ systems/
│  ├─ GameState.ts          게임 상태 + 승리 판정
│  ├─ gameStateStore.ts     게임 ↔ UI 단방향 통신
│  ├─ viewToolbar.ts        ★ 6개 토글 (격자/텍스처/미니맵/블룸/잔디/통계)
│  ├─ unitInfoPanel.ts      ★ 좌측 레일 유닛 정보 패널
│  ├─ skillBar.ts           하단 중앙 스킬 바
│  ├─ frameStats.ts         좌측 상단 FPS/draw-call 통계
│  ├─ maps/                 4 authored + 4 random + 4 scenario 맵 제공자
│  └─ sim/                  순수 시뮬레이션 (Three.js 무관)
│     ├─ SimState.ts        베이스 + event log
│     ├─ SimCommands.ts     명령 → event 변환
│     ├─ search.ts          빔 서치 + 12개 tactical gene
│     ├─ resolveAttack.ts   명중률 / 데미지 결정론
│     ├─ score.ts           휴리스틱 평가 함수
│     └─ ai/                AI 엔진 (feint / parthian / baseline)
│
└─ test/
   └─ threeStub.ts          Vitest jsdom용 THREE global stub

index.html                   메인 게임 진입점
terrain.html                 지형 뷰어 (전장만, 유닛/턴 없음)
trees.html                   ★ 절차 생성 나무 모델 작업장 (스웨덴어→한글)
public/                      정적 자산
.github/workflows/           typecheck + test + build → Pages 자동 배포
```

---

## 🔬 코드베이스 핵심 관찰

**1. 코드 주석이 압도적으로 잘 쓰여 있음**. 거의 모든 비자명한 결정 옆에 "왜 이렇게 했는지" + "측정한 결과는 무엇인지" + "어떤 버그가 이 결정을 강요했는지"가 적혀 있습니다. 본 README의 **유닛** 섹션에 있는 각 수치는 주석에서 직접 가져온 것입니다.

**2. 룰 테이블을 import-free 데이터로 분리**. `unitStats.ts`, `skills.ts`, `terrainStats.ts`는 Three.js를 import하지 않습니다. 이 셋이야말로 게임의 진실의 원천이며, `UnitSystem.ts`는 단순히 이 테이블을 읽어서 렌더링할 뿐입니다.

**3. AI는 Web Worker에서 돈다**. `systems/sim/ai/aiWorker.ts`가 `postMessage`로 시뮬레이션 상태를 받아 빔 서치를 수행하고 `eventDigest`만 반환합니다. UI는 한 프레임도 안 멈춥니다.

**4. CI가 매 푸시마다 typecheck → test → build → Pages 자동 배포**를 돌립니다. `.github/workflows/` 참조.

---

## 📚 관련 문서

- [원본 저장소](https://github.com/asynkron/VibeWars) — 영어 원본
- [Three.js r128 CDN](https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) — Three.js 글로벌 참조
- [Vitest 4 문서](https://vitest.dev/)
- [Vite 8 문서](https://vite.dev/)

---

## 🗺️ 로드맵

| 단계 | 상태 |
|---|---|
| MVP (15 유닛 + 4 authored 맵 + 빔 서치 AI) | ✅ 출시 |
| 절차 생성 나무 + 잔디 + 발광 효과 | ✅ 출시 |
| 시나리오 맵 (Choke, Grove 등) | ✅ 출시 |
| 한글화 (sigco3111/VibeWars) | ✅ 완료 (본 저장소) |
| 멀티플레이어 (WebRTC / WebSocket) | ⏳ 예정 |
| 캠페인 모드 (스토리 시나리오 10종) | ⏳ 예정 |
| 모바일 터치 UI 최적화 | ⏳ 예정 |

---

## 🤝 기여 가이드

본 저장소는 한글로 표시되는 미러입니다. 코드 변경(버그 수정, 새 기능)은 [원본 저장소](https://github.com/asynkron/VibeWars)에 PR을 보내주세요. **표시 텍스트 한글로의 추가 변환**이나 **README 한국어 번역 개선**은 본 저장소에 자유롭게 PR 보내주세요.

---

## ⚠️ 제한사항 & 라이선스

- 본 저장소는 **한글화 미러**이며, 게임의 모든 지적 재산권은 원작자 [`asynkron`](https://github.com/asynkron)에게 있습니다.
- 원본 라이선스: **Apache License 2.0** (LICENSE 파일 참조)
- 본 미러는 원본의 라이선스를 그대로 따릅니다 — 상업적 사용 가능, 원작자 표기 필수, 변경 사항 명시 필요.

---

## 📄 라이선스

`Apache License 2.0` — 자세한 내용은 [LICENSE](./LICENSE) 파일을 참조하세요.