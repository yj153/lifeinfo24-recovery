# krecovery - 서앤율 원본 이미지 조정본

## 방향
- 이미지 생성 없음.
- 원본 사진 9장 전부 유지.
- 이상한 보완 제목/문구 전부 제거.
- 이미지 확대는 좌우가 잘리지 않도록 100% 기준, PC만 최대 1180px로 조정.
- CTA는 상·중·하 3개만 유지하고 크기를 줄임.

## 상담신청 흐름
/krecovery/
→ /krecovery/apply/
→ 알바리치 입력폼 iframe 표시

iframe:
https://www.albarich.com/intro/_frm/index.php?code=DJqg8LX0UX

## 유지
- 무료 문구 없음
- 전화번호 없음
- 이메일 유지
- 폴더명 krecovery

## 모바일 좌우 잘림 수정
- PC 레이아웃은 유지했습니다.
- 모바일 767px 이하에서 원본 이미지가 100% 폭으로만 표시되도록 강제했습니다.
- 모바일 transform/확대/음수 margin을 제거해 좌우 잘림을 방지했습니다.
