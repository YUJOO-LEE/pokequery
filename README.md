## PokeQuery <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

[PokeApi](https://pokeapi.co/) 에서 제공하는 포켓몬 데이터 검색 APP 입니다.

포켓몬의 고유 ID 또는 영문 이름으로 데이터를 검색합니다.

영문 이름은 대소문자를 가리지 않습니다.

---

### Components Structure

- **assets**    
-- globalStyle : styled-components 의 createGlobalStyle 로 전역 스타일 지정 (reset 및 font-family)    
-- searchState : 검색 상태값 객체화    
-- types : APP 내 사용 type 지정

- **components**    
-- layout : APP 기본틀, 페이지 상단 Title Logo 출력   
-- serchForm : 검색 form 출력    
-- card : 카드 레이아웃    
**(아래는 검색 상태에 따라 출력됩니다.)**    
-- init : 초기화면, query 값 null 상태    
-- loading : API 데이터 로딩중    
-- pokemon : API 데이터 로드 성공    
-- failure : API 데이터 로드 실패    

---

작성자 : [이유주](https://leeyujoo.com/)