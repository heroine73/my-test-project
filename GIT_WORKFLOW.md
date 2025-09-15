# Git 작업 표준 가이드라인

이 문서는 my-test-project에서 사용하는 Git 워크플로우 가이드라인을 정의합니다.

## 📋 작업 워크플로우

### 1. 프로젝트 시작시

```bash
# .git 폴더 존재 여부 확인
ls -la

# 없으면 저장소 초기화
git init

# 원격 저장소 연결 확인
git remote -v
```

### 2. 파일 생성/수정 작업 후 필수 단계

모든 파일 작업 완료 후 **반드시** 다음 순서로 실행:

```bash
# 1. 모든 변경사항 추가
git add .

# 2. 의미있는 커밋 메시지로 커밋
git commit -m "의미있는 커밋 메시지"

# 3. 원격 저장소에 푸시
git push origin main
```

### 3. 파일 삭제시

```bash
# 파일 삭제
git rm 파일명

# 폴더 삭제
git rm -r 폴더명

# 커밋
git commit -m "삭제: 파일명 또는 폴더명"

# 푸시
git push origin main
```

### 4. 작업 완료 후 확인사항

- GitHub Pages 업데이트 확인
- 변경사항이 https://heroine73.github.io/my-test-project/ 에 반영되었는지 확인

## 🔧 중요한 규칙

### ✅ 필수 규칙
- **어떤 파일 작업을 하든 상관없이** 작업 완료 후에는 반드시 `add → commit → push` 순서로 실행
- 커밋 메시지는 **한국어**로 작업 내용을 명확히 설명
- 에러 발생시 문제 해결 후 다시 push 시도

### 📝 커밋 메시지 규칙

**형식:**
```
[작업유형]: [간단한 설명]

- 상세 설명 1
- 상세 설명 2
```

**예시:**
```
기능 추가: 새로운 버튼 컴포넌트 구현

- 클릭 이벤트 핸들러 추가
- CSS 스타일링 적용
- 반응형 디자인 지원
```

**작업유형:**
- `기능 추가`: 새로운 기능 구현
- `수정`: 기존 기능 개선
- `버그 수정`: 오류 수정
- `삭제`: 파일/기능 제거
- `문서`: 문서 작업
- `스타일`: CSS/디자인 변경
- `리팩토링`: 코드 구조 개선

## 🚀 자동화된 워크플로우

프로젝트에서 다음과 같은 요청시 **파일 작업 + Git 작업**을 자동으로 처리:

- "파일 만들어줘"
- "수정해줘" 
- "삭제해줘"
- "추가해줘"

## 🔗 관련 링크

- [GitHub 저장소](https://github.com/heroine73/my-test-project)
- [GitHub Pages](https://heroine73.github.io/my-test-project/)
- [프로젝트 README](./README.md)

## 📚 추가 참고사항

### 충돌 해결
```bash
# 원격 변경사항 가져오기
git pull origin main --allow-unrelated-histories --no-rebase

# 충돌 해결 후
git add .
git commit -m "충돌 해결: [설명]"
git push origin main
```

### HTTP 버퍼 설정
```bash
# 대용량 파일 푸시시 안전성을 위해
git config http.postBuffer 524288000
```

---

*이 가이드라인은 프로젝트의 일관성과 안정성을 위해 반드시 준수해야 합니다.*