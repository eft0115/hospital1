# 03. Visual Direction — 스마트허브병원

## 문서 역할

이 문서는 스마트허브병원 웹사이트가 **왜 이렇게 보여야 하는가**를 정의한다.

스마트허브병원의 브랜드 철학은 다음 세 가지다.

```txt
편의성
문제해결력
안정감
```

Visual Direction은 이 세 가지 철학을 시각 언어로 번역한다.  
단순히 색상, 폰트, 버튼 모양을 정하는 문서가 아니라, 사용자가 사이트를 보며 **복잡한 검진 문제를 어떻게 이해하고, 어떤 감각으로 안심하며, 어디로 이동해야 하는지**를 정의하는 시각 경험 사양서다.

스마트허브병원은 일반적인 “지역 병원 홈페이지”보다 **산업·현장 건강검진 인프라**에 가깝다.  
따라서 시각 방향은 감성적인 병원 브랜딩이나 일반 웹앱 UI가 아니라 다음의 균형 위에 있어야 한다.

```txt
의료적 신뢰
+ 산업 현장 대응력
+ 에디토리얼한 설명성
+ 사용자 동선의 명확성
+ 접근성 우선 설계
```

최종 방향은 다음 한 문장으로 확정한다.

```txt
스마트허브병원의 Visual Direction은
복잡한 검진 절차를 차분하고 명확하게 안내하는
에디토리얼 의료 인터페이스다.
```

---

# 0. 최신 트렌드 반영 원칙

최신 트렌드는 그대로 도입하지 않는다.  
의료·검진 사이트에서는 유행보다 **신뢰, 접근성, 전환 명확성**이 우선이다.

따라서 2026년 기준의 최신 흐름 중 스마트허브병원에 적합한 것만 선별한다.

| 트렌드 | 반영 여부 | 스마트허브 적용 방식 |
|---|---|---|
| Bento / Modular Grid | 채택 | 메인 요약, 서비스 비교, 산업군별 대응을 모듈형 카드로 정리한다. 단, 장식적 타일이 아니라 정보 요약 구조로 사용한다. |
| Oversized Typography | 부분 채택 | Hero와 섹션 선언부에만 사용한다. 병원 사이트 특성상 과한 실험형 타이포는 피한다. |
| Fluid / Responsive Typography | 채택 | `clamp()` 기반으로 데스크톱과 모바일의 읽기 리듬을 유지한다. |
| Accessible-first Color System | 필수 채택 | 색상은 아름다움보다 대비와 상태 구분을 먼저 통과해야 한다. |
| Micro-interactions | 제한 채택 | 버튼, 폼, FAQ, CTA 상태 변화에만 적용한다. 사용자의 불안을 높이는 과한 모션은 금지한다. |
| Scroll-based Storytelling | 제한 채택 | 출장검진/배치전검진 절차를 단계적으로 이해시키는 데만 사용한다. |
| Glassmorphism / Blur Layer | 비추천 | 의료 신뢰와 폼 가독성을 해칠 수 있으므로 메인 시각 언어로 사용하지 않는다. 필요 시 네비게이션 보조 레이어에만 아주 얕게 사용한다. |
| Claymorphism / 3D Softness | 비채택 | 소비재·앱 느낌이 강해 산업검진/의료 신뢰와 맞지 않는다. |
| Dark Mode First | 비채택 | 병원·검진 안내 사이트는 Light-first가 기본이다. 단, MUI `colorSchemes` 구조는 확장성을 위해 준비한다. |
| AI-generated Imagery | 제한 채택 | 인물/환자 이미지는 실제 사진 또는 신뢰 가능한 촬영 이미지 우선. AI 이미지는 추상 패턴, 라인 그래픽, 프로세스 보조 일러스트 수준으로만 사용한다. |

정리하면 스마트허브병원은 **트렌디한 병원 사이트**가 아니라,  
**현대적인 정보 구조를 가진 신뢰형 의료 인터페이스**여야 한다.

---

# 1. 톤앤매너

## 1-1. 핵심 키워드

스마트허브병원의 시각 톤은 다음 키워드를 기준으로 한다.

```txt
Clear Medical
Operational Trust
Field-ready
Editorial Calm
Structured
Accessible
Reliable
```

한국어로 풀면 다음과 같다.

```txt
명확한 의료성
운영 신뢰
현장 대응력
차분한 에디토리얼 감각
구조적 정보 설계
접근 가능한 전문성
신뢰 가능한 안내
```

이 사이트는 “예쁜 병원 사이트”가 아니라 **검진 문제를 해결하는 안내 시스템**으로 보여야 한다.

사용자는 사이트를 보며 다음 감각을 느껴야 한다.

```txt
여기는 무엇을 하는 병원인지 바로 알 수 있다.
내 상황에 맞는 검진을 빠르게 찾을 수 있다.
기업 담당자와 개인 근로자의 동선이 섞이지 않는다.
검진 전후 절차가 명확해서 불안이 줄어든다.
의료적으로 신뢰되지만 차갑거나 권위적이지 않다.
```

---

## 1-2. 태도 선언

스마트허브병원 웹사이트는 사용자에게 과하게 설득하지 않는다.  
대신 복잡한 검진 상황을 정리하고, 다음 행동을 분명하게 제시한다.

```txt
외치지 않는다. 안내한다.
과장하지 않는다. 정리한다.
꾸미지 않는다. 구조화한다.
차갑게 권위적이지 않다. 차분하게 신뢰를 준다.
모든 서비스를 나열하지 않는다. 사용자의 목적을 먼저 분리한다.
```

이 태도는 세 가지 브랜드 가치와 연결된다.

| 브랜드 가치 | 시각적 해석 | 사용자가 느끼는 경험 |
|---|---|---|
| 편의성 | 분리된 CTA, 목적별 카드, 읽기 쉬운 타이포, 모바일 고정 CTA | “내가 어디로 가야 하는지 알겠다.” |
| 문제해결력 | 프로세스 타임라인, 체크리스트, FAQ, 상황별 안내 카드 | “내 질문에 바로 답해준다.” |
| 안정감 | 차분한 색감, 절제된 모션, 낮은 그림자, 선 중심 구조, 명확한 focus 상태 | “복잡하지만 불안하지 않다.” |

---

## 1-3. 피해야 할 톤

스마트허브병원의 시각 방향은 아래와 반대편에 있어야 한다.

```txt
과도한 의료 광고 톤
강한 블루 그라데이션과 장비 과시형 디자인
모든 섹션이 카드 박스로만 구성된 웹앱 느낌
번쩍이는 CTA와 과한 애니메이션
감성 병원 브랜딩처럼 흐릿하고 추상적인 화면
쇼핑몰처럼 전환만 압박하는 흐름
공포 마케팅을 암시하는 강한 경고 색상
AI로 만든 듯한 무표정한 인물 이미지
```

특히 이 사이트는 검진, 특수건강검진, 배치전검진, 출장검진을 다루기 때문에 사용자의 불안이 높을 수 있다.  
시각 언어는 사용자를 더 조급하게 만들지 말고, 절차를 차분히 정리해주는 방향이어야 한다.

---

# 2. 색감

## 2-1. 색감의 원칙

스마트허브병원의 색은 “병원 블루”를 그대로 쓰지 않는다.  
MUI 기본 팔레트의 선명한 Primary Blue를 낮추고, 더 차분하고 운영적인 의료 색감으로 변환한다.

색의 목표는 다음이다.

```txt
밝지만 가볍지 않게
의료적이지만 차갑지 않게
산업적이지만 거칠지 않게
전문적이지만 접근 가능하게
```

색상은 다음 세 조건을 통과해야 한다.

```txt
1. 본문과 버튼 텍스트 대비가 충분한가?
2. 상태 정보가 색상만으로 전달되지 않는가?
3. 스마트허브병원의 편의성 / 문제해결력 / 안정감 중 하나 이상과 연결되는가?
```

---

## 2-2. 4색 원칙

색상 체계는 네 가지 축으로 확정한다.

| 색상 역할 | 확정 방향 | 경험적 의미 | 사용처 |
|---|---|---|---|
| Warm White | 따뜻한 백색 | 병원 특유의 차가움을 줄이고 읽기 편한 바탕 제공 | 전체 배경, 섹션 배경 |
| Warm Black | 완전한 검정이 아닌 따뜻한 먹색 | 정보의 신뢰, 가독성, 선의 기준 | 본문, 헤드라인, 라인, 아이콘 |
| Smart Medical Blue | 선명한 블루가 아닌 muted navy-blue | 의료 신뢰, 기업 대응, 공식성 | 주요 CTA, 활성 상태, 핵심 링크 |
| Field Sage | 저채도 세이지 그린 | 현장성, 안정감, 건강관리의 부드러운 확장 | 보조 강조, 상태 안내, 정보 배지 |

추천 비율은 다음과 같다.

```txt
Warm White / Surface: 65~75%
Warm Black / Text & Line: 15~25%
Smart Medical Blue: 5~8%
Field Sage: 2~5%
```

즉, 컬러가 화면을 장악하지 않아야 한다.  
대부분의 경험은 **여백, 선, 타이포, 정보 구조**로 만들어지고, 색은 사용자의 다음 행동을 안내하는 정도로만 사용한다.

---

## 2-3. 확정 색상 토큰

아래 값은 Visual Direction 기준의 확정 토큰이다.  
구현 단계에서 미세 조정은 가능하지만, 역할과 대비 기준은 유지한다.

```txt
Background / Warm White       #F7F4ED
Surface / Soft Paper          #EEEAE1
Surface Alt / Calm Panel      #E7E3D8
Text / Warm Black             #181714
Text Secondary / Muted Ink    #4A4740
Line / Warm Line              #D8D2C7
Primary / Smart Medical Blue  #244B63
Primary Dark / Deep Blue      #173446
Primary Soft / Blue Surface   #DDE8EE
Secondary / Field Sage        #D8E2DC
Secondary Dark / Sage Deep    #526B63
Error / Muted Medical Red     #A94A43
Warning / Warm Sand           #D9A75F
Success / Care Green          #3F6F5A
```

### 색상 사용 규칙

```txt
배경은 Warm White를 기본으로 한다.
카드는 순백이 아니라 Soft Paper 계열로 분리한다.
CTA는 Smart Medical Blue를 기본으로 한다.
Sage는 CTA 대체색이 아니라 보조 상태와 정보 분류에 사용한다.
Error는 강한 빨강이 아니라 muted red로 낮춘다.
Line은 회색이 아니라 Warm Black 계열의 낮은 알파값으로 통일한다.
```

---

## 2-4. 접근성 기준

색상은 “보기에 예쁜가”보다 “읽히는가”가 먼저다.

최소 기준은 다음과 같다.

```txt
본문 텍스트: 4.5:1 이상
대형 텍스트: 3:1 이상
아이콘, 입력 테두리, focus ring 등 비텍스트 요소: 3:1 이상
```

스마트허브병원은 의료·검진 정보를 다루므로, 실제 구현에서는 가능한 한 **AA 이상**을 기본값으로 잡고, CTA와 폼 상태는 더 높은 대비를 목표로 한다.

---

## 2-5. MUI 기본 팔레트 변경 방향

MUI 기본 팔레트는 웹앱의 기능성을 잘 보여주지만, 그대로 사용하면 스마트허브병원의 에디토리얼 의료 방향과 충돌할 수 있다.  
따라서 다음처럼 바꾼다.

| MUI 기본 축 | 기본 경향 | 스마트허브 변경 방향 |
|---|---|---|
| `primary` | 선명한 Material Blue | muted navy-blue로 낮춘다. CTA와 활성 상태에만 사용한다. |
| `secondary` | 보조 포인트 컬러 | Field Sage 계열로 설정해 안정감을 만든다. |
| `background.default` | 순백 또는 회색 | Warm White로 변경해 차가운 병원 느낌을 줄인다. |
| `background.paper` | 카드형 흰색 | Warm White보다 한 단계 어둡거나 밝은 표면으로 레이어를 만든다. |
| `text.primary` | 거의 검정 | Warm Black으로 변경한다. |
| `divider` | 기본 회색선 | Warm Black 계열의 낮은 알파 또는 Warm Line으로 통일한다. |
| `action.hover` | 파란빛 또는 회색 hover | Warm Black 4~6% 또는 Primary 6%로 절제한다. |
| `error` | 강한 빨강 | 의료적 경고는 유지하되 채도를 낮춘다. |

MUI 구현 시에는 컴포넌트에 HEX 값을 직접 넣지 않는다.  
`createTheme`, `colorSchemes`, `cssVariables` 기반으로 의미 토큰을 만든 뒤 컴포넌트가 그 토큰을 참조하도록 한다.

---

## 2-6. Light-first + 준비된 Dark Scheme

스마트허브병원은 Light-first 사이트다.  
의료·검진 안내는 밝은 화면에서 신뢰와 가독성이 가장 좋다.

다만 최신 구현 기준에서는 다음을 준비한다.

```txt
Light Mode: 기본 경험
Dark Mode: 개발 확장성 및 야간근로자 콘텐츠/운영 화면 대비용
High Contrast Layer: 접근성 대응용
```

Dark Mode를 메인 디자인 방향으로 삼지는 않는다.  
단, MUI `colorSchemes`와 CSS Variables 구조를 사용하면 추후 다크모드 또는 고대비 모드로 확장할 수 있다.

---

# 3. 타이포

## 3-1. 타이포의 기본 방향

스마트허브병원의 타이포는 두 개의 얼굴을 가진다.

```txt
선언하는 얼굴
설명하는 얼굴
```

이 이원 구조는 사이트의 카피 톤과 연결된다.

```txt
선언: 사업장과 현장으로 찾아가는 건강검진 인프라
해설: 배치전·특수건강검진부터 출장검진까지, 검진 절차를 명확하게 안내합니다.
```

---

## 3-2. 두 개의 얼굴

### Display — Editorial Serif

Display는 에디토리얼 헤드라인의 역할을 한다.

```txt
사용처:
- Hero의 영문 라인
- Section number
- 핵심 선언 문장 일부
- 수치, 통계, 인용구
- 큰 카테고리 타이틀
```

성격은 다음과 같다.

```txt
빛이 확산되는 감각이 있는 세리프
너무 고전적이지 않은 현대적 세리프
의료 사이트를 지나치게 럭셔리하게 만들지 않는 절제된 세리프
```

참조 계열:

```txt
Tiempos Headline
Canela 계열
Editorial New 계열
Fraunces 계열
Source Serif 계열
```

단, 실제 배포에서는 라이선스를 반드시 확인해야 한다.  
라이선스 리스크가 있다면 무료 대체로 `Fraunces`, `Source Serif 4`, `Libre Baskerville` 계열을 검토한다.

---

### Body / Label — Pretendard 기반 Sans-serif

본문과 라벨은 Pretendard 기반으로 확정한다.

```txt
사용처:
- 본문
- 라벨
- 버튼
- 내비게이션
- 폼
- FAQ
- 검진 절차 설명
- 모바일 UI 전반
```

이유는 다음과 같다.

```txt
한글 가독성이 좋다.
영문과 숫자 표현이 무난하다.
의료 안내 문장과 폼 라벨에 안정적이다.
MUI 컴포넌트와 충돌이 적다.
```

---

## 3-3. 스마트허브 적용 방식

기본 원칙은 다음과 같다.

```txt
영문/숫자/섹션 선언: Serif Display
한글 본문/설명/버튼/폼: Pretendard Sans
```

즉, 모든 H1~H6를 무조건 세리프로 만들지 않는다.  
의료·검진 사이트에서는 한글 정보 전달이 핵심이므로, 한글 헤드라인은 Pretendard의 두꺼운 웨이트를 사용하고, 세리프는 에디토리얼 장치로 제한적으로 사용한다.

### 추천 구조

```txt
Hero Eyebrow: Editorial Serif 또는 Sans Overline
Hero H1 Korean: Pretendard 760~800
Hero English accent: Editorial Serif 700
Section Number: Editorial Serif 600~700
Section Title Korean: Pretendard 700
Body: Pretendard 400~500
Label: Pretendard 600 + letter spacing
Button: Pretendard 600
```

이 방식이 스마트허브병원에 가장 안정적이다.

이유는 다음과 같다.

```txt
세리프만 쓰면 의료 정보의 즉시성이 떨어진다.
산세리프만 쓰면 일반 병원/웹앱처럼 보인다.
두 얼굴을 분리하면 브랜드의 선언성과 검진 정보의 설명성이 동시에 살아난다.
```

---

## 3-4. 기본 타이포에서 바꾸는 방향

MUI 기본 타이포를 그대로 쓰지 않는다.

| 항목 | MUI 기본 경향 | 스마트허브 변경 방향 |
|---|---|---|
| Display weight | Light 또는 regular 중심 | 700~800의 선언적 두께 |
| Display letter-spacing | 기본값 또는 넓은 자간 | 타이트한 음수값. 압축된 에디토리얼 감각 |
| Body scale | `body1` 16px | 데스크톱 18~20px, 모바일 16.5~17px |
| Body line-height | 1.5 전후 | 1.65~1.75. 한글 장문 읽기 쾌적성 확보 |
| Overline label | 작은 캡션 | 0.08~0.12em 자간. 분류 정보처럼 읽히게 |
| Button text | uppercase | 자연 케이스. 한국어 버튼은 외치지 않는다 |
| Link style | 컬러 링크 중심 | 선, 밑줄, arrow, hover line으로 구분 |

---

## 3-5. 타이포 스케일 확정

구현 단계에서는 `clamp()` 기반 fluid scale을 권장한다.

```txt
Display XL / Hero
- 48~88px
- weight 780~820
- line-height 0.98~1.08
- letter-spacing -0.045em

H1
- 40~72px
- weight 760~800
- line-height 1.05~1.12
- letter-spacing -0.035em

H2
- 32~52px
- weight 720~780
- line-height 1.12~1.18
- letter-spacing -0.025em

H3
- 26~36px
- weight 700
- line-height 1.2
- letter-spacing -0.015em

Body Lead
- 20~22px
- weight 400~500
- line-height 1.7

Body
- 17~19px
- weight 400
- line-height 1.72

Small / Caption
- 13~14px
- weight 400~500
- line-height 1.55

Overline
- 12px
- weight 650
- letter-spacing 0.1em
- text-transform none 또는 uppercase only for English

Button
- 15~16px
- weight 650
- line-height 1
- text-transform none
```

---

# 4. 모양, 평면성

## 4-1. 기본 방향

스마트허브병원의 형태는 **부드러운 각짐**을 기준으로 한다.

```txt
너무 둥글면 앱/웰니스 느낌이 강해진다.
너무 각지면 관공서/산업 문서처럼 딱딱해진다.
따라서 선과 면은 정돈하되, 작은 radius로 긴장을 낮춘다.
```

---

## 4-2. Radius 원칙

```txt
0px: 구분선, 테이블 라인, 섹션 divider
4px: 작은 배지, 태그, 미니 버튼
8px: 폼, 작은 카드, FAQ 항목
12px: 기본 카드, 서비스 카드
16px: Bento 요약 타일, 큰 CTA 패널
24px: 아주 제한적으로 사용. 히어로 그래픽, 큰 배경 패널
999px: pill 버튼/태그에만 사용
```

스마트허브병원은 MUI 기본의 과도한 둥근 카드보다 **12px 중심의 정돈된 radius**를 사용한다.

---

## 4-3. 그림자 원칙

그림자는 거의 사용하지 않는다.

```txt
그림자로 계층을 만들지 않는다.
선, 여백, 배경 톤 차이로 계층을 만든다.
CTA와 floating 요소에만 아주 낮은 shadow를 허용한다.
```

권장:

```txt
Card shadow: none
Sticky CTA shadow: 0 8px 24px rgba(24, 23, 20, 0.08)
Modal shadow: 0 16px 48px rgba(24, 23, 20, 0.16)
```

---

## 4-4. 평면성

이 사이트는 3D적이거나 과하게 입체적인 UI가 아니다.  
의료 정보는 장식보다 명확성이 중요하다.

```txt
표면은 평면적이다.
계층은 선과 배경 톤 차이로 만든다.
강조는 크기, 자간, 선, 간격으로 만든다.
CTA만 면으로 명확하게 분리한다.
```

---

# 5. 선이 디자인 언어다 — 미니멀 매거진 감각

## 5-1. 원칙

스마트허브병원 웹사이트에서 선은 장식이 아니라 정보 구조다.

```txt
선은 정보를 나눈다.
선은 사용자의 시선을 잡는다.
선은 입력 가능 상태를 알려준다.
선은 신뢰의 밀도를 만든다.
```

---

## 5-2. 선의 사용처

| 사용처 | 역할 | 기준 |
|---|---|---|
| 그리드 | 콘텐츠 정렬 기준 | 숨겨진 12-column / 모바일 4-column |
| 섹션 구분 | 페이지 호흡 조절 | 상단 또는 하단 1px line |
| 카드 구분 | 면 대신 구조 | 1px border, shadow 없음 |
| 폼 필드 | 입력 가능성 | underline 중심 |
| 강조 | 정보 우선순위 | 좌측 vertical line 또는 top line |
| 타임라인 | 절차 흐름 | 선 + 숫자 + 상태 |
| FAQ | 질문/답변 분리 | divider 중심 |

---

## 5-3. 선의 굵기

```txt
0.5px: 고해상도 장식선. 실제 CSS에서는 1px + opacity로 처리
1px: 기본 구분선
2px: focus, active, selected 상태
3px 이상: 사용 금지에 가깝다. 아주 중요한 상태에만 사용
```

---

## 5-4. 시각 효과

선은 다음처럼 변화한다.

```txt
기본: 낮은 대비의 Warm Line
Hover: Warm Black 알파 증가
Focus: Smart Medical Blue 2px
Active: Smart Medical Blue + 명확한 텍스트 변화
Error: Muted Red + 메시지
Success: Care Green + 완료 아이콘 또는 텍스트
```

색만으로 상태를 전달하지 않는다.  
상태는 항상 텍스트, 아이콘, 선 두께, 위치 중 하나 이상과 함께 표현한다.

---

# 6. 인풋, 폼 — 에디토리얼 핵심

## 6-1. 폼의 역할

스마트허브병원 웹사이트에서 폼은 단순 입력창이 아니다.  
기업 담당자와 개인 근로자의 목적을 실제 문의와 예약으로 연결하는 핵심 접점이다.

따라서 폼은 다음을 충족해야 한다.

```txt
어렵지 않아야 한다.
어떤 정보를 왜 입력하는지 보여야 한다.
입력 전, 입력 중, 입력 후 상태가 명확해야 한다.
기업 문의와 개인 예약의 질문 구조가 분리되어야 한다.
불필요한 재입력을 줄여야 한다.
```

---

## 6-2. 박스에서 언더라인으로

MUI 기본 `OutlinedInput`을 그대로 사용하면 박스 기반 웹앱 느낌이 강해진다.  
스마트허브병원은 에디토리얼 매거진 감각을 유지하기 위해 기본 폼을 **underline 중심**으로 바꾼다.

```txt
기본 입력: underline
긴 문의 내용: border textarea 허용
날짜/인원/선택값: underline + select indicator
중요한 오류/확인 단계: 얕은 panel 안에 배치 가능
```

---

## 6-3. 언더라인의 4단계

| 상태 | 시각 처리 | 경험 |
|---|---|---|
| 기본 | 1px Warm Line | 조용히 입력 가능성을 제시 |
| Hover | 1px Warm Black 45~55% | 사용 가능 상태를 인지 |
| Focus | 2px Smart Medical Blue + focus ring | 현재 입력 중임을 명확히 인지 |
| Complete | 1px Sage Deep + 체크 텍스트 | 입력 완료 안정감 |
| Error | 2px Muted Red + 오류 문장 | 색만이 아니라 메시지로 설명 |

중요: 키보드 접근성 때문에 focus 상태는 underline 변화만으로 끝내지 않는다.  
키보드 focus 시에는 최소 2px 수준의 명확한 outline 또는 focus-visible 처리가 필요하다.

---

## 6-4. 라벨

라벨은 작고 또렷해야 한다.

```txt
font-size: 12~13px
font-weight: 650
letter-spacing: 0.04~0.08em
color: Warm Black
```

라벨의 역할은 감성 문장이 아니라 **분류 정보**다.

예:

```txt
회사명
담당자명
검진 인원
희망 일정
검진 유형
연락처
문의 내용
```

---

## 6-5. 플레이스홀더

플레이스홀더는 본문보다 눈에 덜 띄어야 한다.

```txt
color: Muted Ink 55~65%
font-weight: 400
```

플레이스홀더를 라벨 대신 사용하지 않는다.  
의료/검진 폼은 사용자가 다시 확인해야 하므로, 라벨은 항상 남아 있어야 한다.

---

## 6-6. Select

Select는 포커스 시 배경색을 과하게 입히지 않는다.  
배경보다 언더라인과 라벨이 우선이다.

```txt
기본: underline + caret
hover: underline 진해짐
focus: 2px underline + focus-visible outline
selected: 선택값은 Warm Black, placeholder는 Muted Ink
error: red underline + 오류 메시지
```

---

## 6-7. 버튼, 액션

버튼은 외치지 않는다.  
하지만 다음 행동은 분명해야 한다.

### Primary Button

```txt
사용처:
- 기업 출장·특수검진 문의
- 개인 배치전검진 예약
- 폼 제출

형태:
- Smart Medical Blue fill
- Warm White text
- radius 999px 또는 10~12px 중 페이지 맥락에 따라 선택
- height 48~56px
```

### Secondary Button

```txt
사용처:
- 절차 보기
- 준비물 확인
- FAQ 이동
- 전화 문의

형태:
- transparent background
- 1px Warm Black line
- Warm Black text
```

### Text Action

```txt
사용처:
- 콘텐츠 내부 링크
- 자세히 보기
- 관련 글 이동

형태:
- underline 또는 arrow
- hover 시 line 확장
```

---

## 6-8. 간격, 호흡

폼은 꽉 차 보이면 안 된다.

```txt
필드 간격: 24~32px
라벨과 입력선 사이: 8~10px
그룹 간격: 40~56px
폼 섹션 간격: 64~96px
모바일 필드 간격: 최소 20px
```

기업 문의 폼은 한 번에 너무 많은 입력을 요구하지 않는다.  
우선 `회사명 / 담당자 / 연락처 / 검진 유형 / 인원 / 희망 일정`까지만 받고, 세부 항목은 상담 흐름에서 보완한다.

---

## 6-9. 전환의 템포

폼 인터랙션은 빠르지만 급하지 않아야 한다.

```txt
Hover: 120~160ms
Focus: 160~200ms
Validation: 180~240ms
Accordion open: 220~320ms
Page section reveal: 320~480ms
```

오류 메시지는 갑자기 튀어나오지 않는다.  
입력 흐름을 방해하지 않도록 부드럽게 나타나되, 위치는 명확해야 한다.

---

# 7. 레이아웃과 최신 모듈 구조

## 7-1. Bento Lite

스마트허브병원은 Bento Grid를 제한적으로 채택한다.  
목적은 “트렌디해 보이기”가 아니라, 정보가 많은 서비스를 빠르게 훑게 하는 것이다.

사용처:

```txt
Home 핵심 서비스 요약
출장검진 가능 대상
배치전검진 FAQ 요약
특수검진 대상 구분
산업군별 대응 카드
```

금지:

```txt
모든 섹션을 타일로 만들기
과도한 라운드와 그림자
아이콘만 큰 카드
텍스트가 부족한 장식형 카드
불규칙한 그리드로 정보 순서 흐리기
```

---

## 7-2. Editorial Section Flow

각 페이지는 잡지 기사처럼 읽히되, 병원 서비스처럼 행동이 명확해야 한다.

기본 섹션 순서:

```txt
1. 선언
2. 상황 설명
3. 서비스 구조
4. 절차
5. 준비물 / 대상 / FAQ
6. 신뢰 보강
7. 문의·예약 CTA
```

---

## 7-3. 모바일 우선 구조

모바일에서는 사용자가 길게 읽지 않는다.  
따라서 모바일에서는 정보 밀도를 낮추고, 다음 행동을 고정한다.

```txt
상단: 목적 분리 CTA
본문: 1-column card / accordion
하단: sticky CTA
폼: 단계형 또는 섹션 분리형
FAQ: 접히는 구조
```

모바일 sticky CTA는 반드시 두 갈래여야 한다.

```txt
[기업문의]
[개인예약]
```

---

# 8. 시각 자산 방향

## 8-1. 사진

사진은 실제감을 우선한다.

```txt
실제 병원 공간
검진 장비
검진 차량 또는 현장 대응 이미지
의료진/운영진의 자연스러운 업무 장면
접수/안내/검진 흐름
```

피해야 할 사진:

```txt
과하게 연출된 외국인 스톡 이미지
환자가 불안해 보이는 의료 이미지
장비만 크게 클로즈업한 차가운 이미지
AI로 생성된 듯한 비현실적 인물
```

---

## 8-2. 아이콘

아이콘은 얇은 라인 기반으로 한다.

```txt
stroke: 1.5~2px
corner: round보다 slightly rounded
fill icon 금지에 가깝게 제한
```

아이콘은 장식이 아니라 분류 보조다.

예:

```txt
기업
근로자
출장
결과
준비물
일정
검진항목
위치
```

---

## 8-3. 그래픽

그래픽은 현장과 병원을 연결하는 선형 구조가 좋다.

```txt
지도형 라인
프로세스 타임라인
검진 흐름 다이어그램
산업군 연결 네트워크
문서/체크리스트 그래픽
```

3D 오브젝트나 과도한 추상 그래픽은 피한다.

---

# 9. MUI 기본 축

## 9-1. Palette

MUI Palette는 브랜드 색상보다 **의미 역할**을 먼저 정의한다.

```ts
const palette = {
  mode: 'light',
  primary: {
    main: '#244B63',
    dark: '#173446',
    light: '#DDE8EE',
    contrastText: '#F7F4ED',
  },
  secondary: {
    main: '#D8E2DC',
    dark: '#526B63',
    contrastText: '#181714',
  },
  background: {
    default: '#F7F4ED',
    paper: '#EEEAE1',
  },
  text: {
    primary: '#181714',
    secondary: '#4A4740',
  },
  divider: '#D8D2C7',
  error: {
    main: '#A94A43',
  },
  warning: {
    main: '#D9A75F',
  },
  success: {
    main: '#3F6F5A',
  },
};
```

추가 semantic token:

```ts
const semantic = {
  surfaceAlt: '#E7E3D8',
  lineStrong: 'rgba(24, 23, 20, 0.36)',
  focusRing: '#244B63',
  fieldComplete: '#526B63',
};
```

---

## 9-2. Typography

```ts
const typography = {
  fontFamily: [
    'Pretendard',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'sans-serif',
  ].join(','),
  h1: {
    fontWeight: 800,
    letterSpacing: '-0.035em',
    lineHeight: 1.08,
  },
  h2: {
    fontWeight: 760,
    letterSpacing: '-0.025em',
    lineHeight: 1.14,
  },
  h3: {
    fontWeight: 720,
    letterSpacing: '-0.015em',
    lineHeight: 1.2,
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.72,
  },
  body2: {
    fontSize: '1rem',
    lineHeight: 1.68,
  },
  button: {
    textTransform: 'none',
    fontWeight: 650,
    letterSpacing: '-0.01em',
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 650,
    letterSpacing: '0.1em',
    textTransform: 'none',
  },
};
```

Display Serif는 MUI typography variant를 별도로 신설한다.

```ts
const displaySerif = {
  fontFamily: ['Tiempos Headline', 'Fraunces', 'Source Serif 4', 'serif'].join(','),
  fontWeight: 700,
  letterSpacing: '-0.04em',
  lineHeight: 1.02,
};
```

---

## 9-3. Shape

```ts
const shape = {
  borderRadius: 12,
};
```

세부 radius token:

```ts
const radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};
```

---

## 9-4. Shadows

MUI 기본 shadow는 대부분 제거한다.

```ts
const shadows = [
  'none',
  '0 1px 2px rgba(24,23,20,0.04)',
  '0 4px 12px rgba(24,23,20,0.06)',
  '0 8px 24px rgba(24,23,20,0.08)',
  '0 16px 48px rgba(24,23,20,0.16)',
];
```

실제 운영에서는 MUI의 25개 shadow 배열을 위 철학에 맞게 확장하거나, 대부분 `none`으로 둔다.

---

## 9-5. Input

기본 방향:

```txt
OutlinedInput 기본 사용 지양
Standard / underline 기반으로 재정의
라벨은 항상 표시
focus-visible 명확화
error/success 메시지 텍스트 동반
```

MUI override 방향:

```ts
MuiTextField: {
  defaultProps: {
    variant: 'standard',
    fullWidth: true,
  },
}

MuiInput: {
  styleOverrides: {
    underline: {
      '&:before': {
        borderBottomColor: '#D8D2C7',
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'rgba(24, 23, 20, 0.56)',
      },
      '&:after': {
        borderBottomColor: '#244B63',
        borderBottomWidth: 2,
      },
    },
  },
}
```

---

## 9-6. Button

Button은 전환을 명확하게 만들되, 쇼핑몰처럼 압박하지 않는다.

```ts
MuiButton: {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      minHeight: 48,
      borderRadius: 999,
      textTransform: 'none',
      fontWeight: 650,
      paddingInline: 24,
    },
    containedPrimary: {
      backgroundColor: '#244B63',
      color: '#F7F4ED',
      '&:hover': {
        backgroundColor: '#173446',
      },
    },
    outlined: {
      borderColor: 'rgba(24, 23, 20, 0.36)',
      color: '#181714',
    },
  },
}
```

---

## 9-7. Transitions

모션은 “보여주기”가 아니라 “상태 변화 확인”에 사용한다.

```txt
Micro interaction: 120~200ms
Accordion / FAQ: 220~320ms
Section reveal: 320~480ms
Modal / drawer: 260~360ms
Ambient transition: 480ms 이하 권장
```

원칙:

```txt
transform + opacity 중심
layout shift 유발 금지
scroll animation은 절차 설명에만 제한
prefers-reduced-motion 대응 필수
```

---

## 9-8. Layout / Grid

```txt
Desktop: 12-column grid
Tablet: 8-column grid
Mobile: 4-column grid
Max content width: 1180~1280px
Long text max width: 680~760px
Hero max width: 960~1120px
Section vertical padding desktop: 96~144px
Section vertical padding mobile: 56~80px
```

Bento Lite 기준:

```txt
2x2 또는 3x2 구조만 사용
가장 중요한 CTA는 가장 큰 tile에 배치
서비스 카드 안에는 제목, 한 줄 설명, 대상, action만 둔다
```

---

## 9-9. Card / Surface

```txt
기본 카드: 1px border + paper background + shadow none
중요 카드: primary soft background 또는 top line 강조
CTA 패널: blue fill 또는 warm surface + primary button
FAQ: divider 중심 accordion
```

Card는 “예쁜 박스”가 아니라 정보 단위다.

---

## 9-10. Icon

```txt
stroke icon 우선
1.5~2px stroke
단색 Warm Black 또는 Primary
상태 아이콘은 텍스트 동반
```

---

## 9-11. Data Display

검진 항목, 대상자, 준비물, 결과 안내는 표 또는 리스트로 명확하게 보여준다.

```txt
Table은 모바일에서 card stack으로 전환
중요 행은 배경색보다 left border로 강조
상태는 color + text + icon 조합
```

---

## 9-12. Accessibility

스마트허브병원은 의료 정보를 다루므로 접근성은 선택이 아니라 기본 조건이다.

```txt
키보드 탐색 가능
focus-visible 명확화
모바일 touch target 최소 44px 이상
모션 축소 설정 대응
폼 라벨 상시 노출
오류 메시지 텍스트 제공
색상만으로 상태 전달 금지
```

---

# 10. 확정 컴포넌트 시각 방향

## 10-1. Dual CTA

```txt
기업 출장·특수검진 문의
개인 배치전검진 예약
```

두 CTA는 항상 같은 레벨로 출발하되, 페이지 맥락에 따라 primary/secondary를 바꿀 수 있다.

---

## 10-2. Situation Card

사용자가 자신의 상황을 선택하는 카드다.

```txt
기업 담당자
개인 근로자
학교/기관 담당자
지역 주민
```

형태:

```txt
border card
small label
title
one-line explanation
action arrow
```

---

## 10-3. Process Timeline

검진 절차를 불안하지 않게 보여주는 핵심 컴포넌트다.

```txt
문의
일정 조율
검진 항목 확인
현장 방문 또는 병원 방문
검진 진행
결과 전달
```

형태:

```txt
number + line + short body
mobile에서는 vertical timeline
```

---

## 10-4. Preparation Checklist

개인 근로자에게 특히 중요하다.

```txt
신분증
사업장 안내문
금식 여부
검진 가능 시간
결과 확인 방법
```

형태:

```txt
check icon + label + short description
```

---

## 10-5. FAQ Accordion

FAQ는 숨겨진 보조 콘텐츠가 아니라 전환을 돕는 핵심 영역이다.

```txt
질문은 사용자 말투로 쓴다.
답변은 3~5줄 이내로 시작한다.
필요 시 관련 CTA를 붙인다.
```

---

## 10-6. Inquiry Form

기업 문의와 개인 예약을 같은 폼으로 만들지 않는다.

```txt
기업 문의 폼:
회사명 / 담당자 / 연락처 / 검진 유형 / 예상 인원 / 희망 일정 / 문의 내용

개인 예약 폼:
이름 / 연락처 / 검진 유형 / 희망일 / 준비사항 확인 / 문의 내용
```

---

# 11. 정리

이 Visual Direction은 **“왜 이렇게 보여야 하는가”**를 정의한다.  
토큰의 구체 값은 구현 단계에서 미세 조정될 수 있지만, 어떤 값이든 아래 세 질문을 통과해야 한다.

```txt
1. 이 값은 브랜드 철학 중 하나 이상과 연결되는가?
2. MUI 기본 톤을 에디토리얼 의료 브랜드로 끌어오는가?
3. 다른 토큰과 같은 체계 안에 있는가?
```

세 질문 중 하나라도 통과하지 못하면 그 값은 다시 선택한다.

---

# 최종 정의

```txt
스마트허브병원의 시각 언어는
유행하는 병원 디자인을 따라가는 것이 아니라,
기업과 근로자의 검진 문제를 명확히 정리하는
접근성 우선의 에디토리얼 의료 시스템이다.

선은 구조를 만들고,
색은 행동을 안내하며,
타이포는 선언과 해설을 분리하고,
폼은 불안을 문의와 예약으로 바꾼다.
```
