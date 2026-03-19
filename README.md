# 📝 React Todo App

할 일 목록을 간단하고 직관적으로 관리할 수 있는 Todo 애플리케이션입니다.
React + Context API + Tailwind CSS v4를 기반으로 구성되었으며,
localStorage를 통한 데이터 영속성, 커스텀 포인트 컬러 및 다크 모드 지원,
모듈화된 컴포넌트 설계가 특징입니다.

## ✨ 주요 기능

- ✅ **할 일 추가, 수정, 삭제**
- 🗂️ **할 일 완료 여부 체크**
- 🔄 **새로고침에도 유지되는 `localStorage` 기반 데이터 저장**
- ⚡ **전역 상태 관리를 위한 `Context API` 활용**
- 🌙 **라이트/다크 모드 부드러운 전환 및 커스텀 컬러 피커 적용**
- 🎨 **Tailwind CSS v4를 통한 깔끔하고 반응형인 UI 지원**

## 📸 페이지 미리보기

🖼️ **앱 데모 동작 화면**
![App Demo](./demo.webp)

## ⚙️ 기술 스택

| 기술 | 설명 |
| --- | --- |
| React | UI 라이브러리 |
| Context API | React 내장 전역 상태 관리 로직 |
| Tailwind CSS v4 | 유틸리티 기반 CSS 프레임워크 |
| localStorage | 브라우저 전역 저장소 (데이터 영속성 확보) |
| Vite | 빠른 개발 서버 및 번들러 (프론트엔드 환경) |

## 📁 프로젝트 구조

```text
src/
├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── Header.jsx
│   └── TodoItem.jsx
├── context/            # Context API 전역 상태 관리
│   └── TodoContext.jsx
├── index.css           # Tailwind 뼈대 및 글로벌 설정 파일
├── App.jsx             # 메인 최상단 컴포넌트
└── main.jsx            # 애플리케이션 엔트리포인트
```

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 로컬 실행
npm run dev
```

🙋‍♀️ 리뷰 부탁드립니다!
