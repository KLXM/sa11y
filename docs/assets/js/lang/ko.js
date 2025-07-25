
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 4.1.9
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2025 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var ko = {
  // Korean
  strings: {
    LANG_CODE: 'ko',
    MAIN_TOGGLE_LABEL: '접근성 확인',
    CONTAINER_LABEL: '접근성 검사기',
    ERROR: '오류',
    ERRORS: '오류',
    WARNING: '경고',
    WARNINGS: '경고',
    GOOD: '양호함',
    ON: '켜짐',
    OFF: '꺼짐',
    ALERT_TEXT: '경고',
    ALERT_CLOSE: '닫기',
    OUTLINE: '개요',
    READABILITY_DESC: '<strong>개요</strong> 탭에 가독성 점수를 표시하여 읽기 난이도를 측정하는 데 도움을 줍니다.',
    TITLE: '제목',
    ALT: '대체 텍스트',
    IMAGES: '이미지',
    EDIT: '편집',
    NO_IMAGES: '이미지를 찾을 수 없음',
    DECORATIVE: '장식용',
    MISSING: '누락됨',
    PAGE_ISSUES: '페이지 문제',
    SETTINGS: '설정',
    DEVELOPER_CHECKS: '개발자 검사',
    DEVELOPER_DESC: 'HTML 속성, 양식 등 수정에 코딩 지식이 필요할 수 있는 문제를 확인합니다.',
    DARK_MODE: '다크 모드',
    SHORTCUT_SR: '문제로 건너뛰기. 키보드 단축키: Alt S',
    SKIP_TO_ISSUE: '문제로 건너뛰기',
    NEW_TAB: '새 탭에서 열기',
    LINKED: '연결됨',
    PANEL_HEADING: '접근성 확인',
    NO_ERRORS_FOUND: '오류 없음.',
    WARNINGS_FOUND: '경고 발견.',
    TOTAL_FOUND: '총 문제 발견.',
    NOT_VISIBLE: '보려는 항목이 보이지 않습니다. 숨겨져 있거나 아코디언 또는 탭 컴포넌트 안에 있을 수 있습니다. 미리 보기:',
    MISSING_ROOT: '타겟 영역 <code>%(root)</code>이(가) 없기 때문에 전체 페이지에 대한 접근성을 확인했습니다.',
    MISSING_READABILITY_ROOT: '가독성 점수는 <code>%(fallback)</code> 콘텐츠 영역을 기반으로 합니다. 대상 영역 <code>%(root)</code>가 존재하지 않기 때문입니다.',
    HEADING_NOT_VISIBLE: '표시되지 않는 제목입니다. 숨겨져 있거나 아코디언 또는 탭 컴포넌트 안에 있을 수 있습니다.',
    SKIP_TO_PAGE_ISSUES: '페이지 문제로 건너뛰기',
    CONSOLE_ERROR: '죄송합니다. 이 페이지에서 접근성 점검기에 문제가 있습니다. <a href="%(link)">이 양식</a>이나 <a href="%(link)">GitHub</a>을 통해 신고해 주십시오.',
    APPEARANCE: '모양',
    MOVE_PANEL: '패널을 이동',

    // Export
    DATE: '날짜',
    PAGE_TITLE: '페이지 제목',
    RESULTS: '결과',
    EXPORT_RESULTS: '결과 내보내기',
    GENERATED: '%(TOOL)로 생성된 결과입니다.',
    PREVIEW: '미리 보기',
    ELEMENT: '요소',
    PATH: '경로',

    // Dismiss
    PANEL_DISMISS_BUTTON: '%(dismissCount) 무시된 항목 표시',
    DISMISS: '무시',
    DISMISS_ALL: '모두 무시',
    DISMISSED: '무시됨',
    DISMISS_REMINDER: '경고는 <strong>임시로</strong> 무시됩니다. 브라우저 기록 및 쿠키를 삭제하면 모든 페이지에서 이전에 무시된 경고가 복원됩니다.',

    // Colour filters
    COLOUR_FILTER: '컬러 필터',
    PROTANOPIA: '프로타노피아',
    DEUTERANOPIA: '듀테라노피아',
    TRITANOPIA: '트리타노피아',
    MONOCHROMACY: '단색',
    COLOUR_FILTER_MESSAGE: '다른 색상과 구분하기 어렵거나 인지하기 어려운 요소가 있는지 확인하세요.',
    RED_EYE: '레드 블라인드.',
    GREEN_EYE: '녹색 블라인드.',
    BLUE_EYE: '블루 블라인드.',
    MONO_EYE: '빨간색, 파란색, 녹색 블라인드.',
    COLOUR_FILTER_HIGH_CONTRAST: '고대비 모드에서는 컬러 필터가 작동하지 않습니다.',

    // Alternative text stop words
    SUS_ALT_STOPWORDS: [
      '이미지',
      '그래픽',
      '사진',
      '사진',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      '이미지',
      '사진',
      '장식',
      '자리 표시자',
      '플레이스홀더 이미지',
      '스페이서',
    ],
    PARTIAL_ALT_STOPWORDS: [
      '클릭',
      '여기를 클릭하세요',
      '자세한 내용을 보려면 여기를 클릭하세요.',
      '자세히 알아보려면 여기를 클릭하세요.',
      '여기를 클릭',
      '체크 아웃',
      '여기에서 자세히 보기',
      '다운로드',
      '여기에서 다운로드',
      '자세히 알아보기',
      '자세히 알아보기',
      'form',
      '여기',
      '정보',
      '정보',
      '링크',
      '배우기',
      '자세히 알아보기',
      '다음을 배우십시오.',
      '더 보기',
      '페이지',
      '종이',
      '자세히 보기',
      '읽기',
      '이 글 읽기',
      '이',
      '이 페이지',
      '이 웹사이트',
      '보기',
      '보기',
      '웹사이트',
    ],
    CLICK: ['click', '클릭'],
    NEW_WINDOW_PHRASES: [
      '외부',
      '새 탭',
      '새 창',
      '팝업',
      '팝업',
    ],
    FILE_TYPE_PHRASES: [
      '문서',
      '스프레드시트',
      '계산 시트',
      '압축 파일',
      '보관된 파일',
      '워크시트',
      '파워포인트',
      '프레젠테이션',
      '설치',
      '비디오',
      '오디오',
      'pdf',
    ],

    // Readability
    READABILITY: '가독성',
    AVG_SENTENCE: '문장당 평균 단어 수:',
    COMPLEX_WORDS: '복잡한 단어:',
    TOTAL_WORDS: '단어:',
    VERY_DIFFICULT: '매우 어려움',
    DIFFICULT: '어려움',
    FAIRLY_DIFFICULT: '상당히 어려움',
    READABILITY_NO_CONTENT: '가독성 점수를 계산할 수 없습니다. 단락 <code>&lt;p&gt;</code> 또는 목록 콘텐츠 < code>&lt;li&gt;</code>를 찾을 수 없습니다.',
    READABILITY_NOT_ENOUGH: '가독성 점수를 계산할 콘텐츠가 충분하지 않습니다.',

    // Headings
    HEADING_SKIPPED_LEVEL: '제목은 레벨을 건너뛰거나 <strong>제목 %(PREV_LEVEL)</strong>에서 <strong {C}>제목 %(LEVEL)</strong>로 이동하지 않아야 합니다. 이는 콘텐츠의 순서와 계층을 방해하여 따라가기가 어려워집니다. <hr> <strong {C}>%(HEADING)</strong>이(가) <strong>%(PREV_HEADING)</strong> 섹션에 속한다면, 대신 <strong>제목 %(LEVEL)</strong>으로 포맷하는 것을 고려하세요.',
    HEADING_EMPTY: '빈 제목이 발견되었습니다! 수정하려면 이 줄을 삭제하거나 형식을 <strong {C}>헤딩 %(level)</strong>에서 <strong>일반</strong> 또는 <strong>단락</strong>으로 변경하세요.',
    HEADING_LONG: '제목이 길어요! 제목은 콘텐츠를 구성하고 구조를 전달하는 데 사용해야 합니다. 제목은 간결하고 유익하며 독창적이어야 합니다. 제목은 %(MAX_LENGTH)자 이내(한 문장 이하)로 유지하세요. <hr> <strong {B}>%(HEADING_LENGTH) 문자</strong>',
    HEADING_FIRST: '페이지의 첫 번째 제목은 일반적으로 제목 1 또는 제목 2여야 합니다. 제목 1은 주요 콘텐츠 섹션의 시작 부분이어야 하며 페이지의 전반적인 목적을 설명하는 주요 제목입니다. <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">헤딩 구조에 대해 자세히 알아보기.</a>',
    HEADING_MISSING_ONE: '제목 1이 누락되었습니다. 제목 1은 주요 콘텐츠 영역의 시작 부분이어야 하며 페이지의 전반적인 목적을 설명하는 기본 제목입니다. <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">헤딩 구조에 대해 자세히 알아보기.</a>',
    HEADING_EMPTY_WITH_IMAGE: '제목에 텍스트가 없지만 이미지가 포함되어 있습니다. 제목이 아닌 경우 형식을 <strong {C}>제목 %(level)</strong>에서 <strong>일반</strong> 또는 <strong>단락</strong>으로 변경합니다. 그렇지 않으면 장식용 이미지가 아닌 경우 이미지에 대체 텍스트를 추가하세요.',
    PANEL_HEADING_MISSING_ONE: '제목 1이 없습니다!',
    PANEL_NO_HEADINGS: '제목을 찾을 수 없습니다.',

    // Links
    LINK_EMPTY: '텍스트가 없는 빈 링크를 제거합니다.',
    LINK_EMPTY_LABELLEDBY: '링크에는 다른 페이지 요소의 <code>id</code> 속성 값과 일치하지 않거나 비어 있는 <code>aria-labelledby</code> 값이 있습니다.',
    LINK_EMPTY_NO_LABEL: '링크에는 스크린 리더 및 기타 보조 기술에서 볼 수 있는 구별 가능한 텍스트가 없습니다. 해결 방법: <ul><li>링크가 어디로 이동하는지 설명하는 간결한 텍스트를 추가하십시오.</li><li>아이콘 링크나 SVG인 경우 <a href="https://a11y-101.com/development/icons-and-links">여기</a>를 참조하십시오.</li><li>복사 및 붙여넣기 버그로 인한 이 링크가 오류라고 생각되면 삭제를 고려하십시오.</li></ul>',
    LINK_STOPWORD: '링크 텍스트가 문맥 없이 충분히 설명적이지 않을 수 있습니다: <strong {C}>%(ERROR)</strong>',
    LINK_STOPWORD_ARIA: '접근 가능한 이름이 제공되었더라도, 표시된 링크 텍스트를 수정하는 것을 고려해 보세요. &quot;<strong {C}>%(ERROR)</strong>&quot;와 같은 표현은 의미가 없습니다.',
    LINK_TIP: '<hr> <strong>팁!</strong> 링크의 목적지를 설명하는 명확하고 고유한 링크 텍스트를 사용하세요. 일반적으로 페이지나 문서 제목입니다.',
    LINK_CLICK_HERE: '"클릭" 또는 "여기를 클릭하세요"라는 표현은 마우스 사용에 초점을 맞추지만, 많은 사람들이 마우스를 사용하지 않거나 모바일 기기로 웹사이트를 볼 수 있습니다. 작업과 관련된 다른 동사를 사용하는 것을 고려하세요.',
    DUPLICATE_TITLE: '링크와 이미지의 <code>title</code> 속성은 추가 정보를 제공하기 위한 것이며, 텍스트나 alt 텍스트와는 <strong>다른</strong> 것이어야 합니다. 제목 텍스트는 요소 위에 마우스를 올릴 때 나타나지만, 키보드나 터치 입력으로는 접근할 수 없습니다. <a href="https://www.a11yproject.com/posts/title-attributes/">title 속성을 완전히 피하는 것</a>을 고려하세요.',
    LINK_SYMBOLS: '링크 텍스트 내에서 기호를 행동 요청으로 사용하지 마세요. 보조 기술에서 숨겨져 있지 않으면 스크린 리더가 기호를 소리 내어 읽어 혼란을 줄 수 있습니다. 제거를 고려하세요: <strong {C}>%(ERROR)</strong>',
    LINK_URL: '링크 텍스트로 사용되는 길고 이해하기 어려운 URL은 보조 기술로 이해하기 어려울 수 있습니다. 대부분의 경우 URL 대신 사람이 읽을 수 있는 텍스트를 사용하는 것이 좋습니다. 짧은 URL(예: 사이트 홈페이지)은 괜찮습니다.',
    LINK_DOI: '웹 페이지 또는 온라인 전용 리소스의 경우 <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA 스타일 가이드</a>에서는 제목 주위에 저작물의 URL 또는 DOI를 감싸는 설명 링크를 사용할 것을 권장합니다. 링크 텍스트로 사용되는 길고 이해하기 어려운 URL은 보조 기술을 사용하여 이해하기 어려울 수 있습니다.',
    LINK_NEW_TAB: '경고 없이 새 탭 또는 새 창에서 링크가 열립니다. 특히 시각적 콘텐츠를 인식하는 데 어려움을 겪는 사람들에게는 혼란을 줄 수 있습니다. 둘째, 다른 사람의 경험을 통제하거나 대신 결정을 내리는 것은 항상 좋은 관행이 아닙니다. 링크 텍스트 내에 링크가 새 창에서 열림 <hr> <strong>팁!</strong> 모범 사례 알아보기임을 표시하세요: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">새 브라우저 창 및 탭에서 링크 열기</a>',
    LINK_FILE_EXT: '링크는 경고 없이 PDF 또는 다운로드 가능한 파일(예: MP3, Zip, Word Doc)을 가리킵니다. 링크 텍스트에 파일 유형을 표시합니다. 대용량 파일인 경우 파일 크기를 포함하는 것이 좋습니다. <hr> <strong>예시:</strong> 임원 보고서(PDF, 3MB)',
    LINK_IDENTICAL_NAME: '다른 페이지를 가리키지만 링크의 텍스트가 다른 링크와 동일합니다. 동일한 텍스트의 링크가 여러 개 있으면 화면 리더를 사용하는 사용자에게 혼란을 줄 수 있습니다. <strong>다음 링크를 다른 링크와 구분할 수 있도록 더 설명적으로 만드는 것을 고려하세요.</strong> <hr> <strong {B}>접근 가능한 이름</strong> <strong {C}>%(TEXT)</strong>',

    // Images
    MISSING_ALT_LINK_HAS_TEXT: '이미지가 주변 텍스트와 함께 링크로 사용되고 있지만 alt 속성은 장식용 또는 null로 표시되어야 합니다.',
    MISSING_ALT_LINK: '이미지가 링크로 사용 중이지만 대체 텍스트가 누락되었습니다! 링크가 어디로 연결되는지 설명하는 대체 텍스트를 입력하세요.',
    MISSING_ALT: '대체 텍스트가 누락되었습니다! 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 이미지에 대한 설명을 반드시 기재하세요.',
    LINK_ALT_FILE_EXT: '대체 텍스트에는 파일 확장자나 이미지 크기가 포함되지 않아야 합니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 목적지를 설명하는지 확인하세요. 제거합니다: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: '링크된 이미지에 설명이 없거나 자리 표시자 대체 텍스트가 발견되었습니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 대상을 설명하는지 확인합니다. 다음 대체 텍스트를 교체합니다. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_SUS_ALT: '보조 기술은 이미 이미지임을 표시하므로 <strong {C}>%(ERROR)</strong>가 중복될 수 있습니다. 대체 텍스트가 이미지에 대한 문자 그대로의 설명이 아니라 링크의 목적지를 설명하는지 확인하세요. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: '대체 텍스트에는 파일 확장자나 이미지 크기가 포함되지 않아야 합니다. 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 이미지를 설명해야 합니다. 제거합니다: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: '설명이 없거나 자리 표시자 대체 텍스트가 발견되었습니다. 다음 대체 텍스트를 더 의미 있는 것으로 바꾸세요. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    SUS_ALT: '보조 기술은 이미 이미지임을 표시하므로 <strong {C}>%(ERROR)</strong>가 중복될 수 있습니다. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_NO_ALT_TEXT: '링크 내 이미지는 장식용으로 표시되어 있으며 링크 텍스트가 없습니다. 링크의 목적지를 설명하는 대체 텍스트를 이미지에 추가하세요.',
    LINK_IMAGE_TEXT: '링크가 주변 텍스트를 설명 레이블로 사용하고 있지만 이미지는 장식용으로 표시됩니다.',
    LINK_IMAGE_LONG_ALT: '링크된 이미지의 대체 텍스트 설명이 <strong>너무 깁니다</strong>. 링크된 이미지의 대체 텍스트는 이미지에 대한 문자 그대로의 설명이 아니라 링크를 통해 이동하는 위치를 설명해야 합니다. <strong>링크되는 페이지의 제목을 대체 텍스트로 사용하는 것이 좋습니다.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) 문자</strong> <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: '이미지 링크에 대체 텍스트가 포함되어 있습니다. 대체 텍스트에 링크가 어디로 연결되는지 설명되어 있나요? <strong>링크하는 페이지의 제목을 대체 텍스트로 사용하는 것이 좋습니다.</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: '이미지 링크에 <strong>대체 텍스트와 주변 링크 텍스트가 모두 포함됨</strong> 이 이미지가 장식용이고 다른 페이지에 대한 기능적 링크로 사용되는 경우 이미지를 장식용으로 표시하거나 주변 링크 텍스트로 충분할 수 있도록 null로 표시하는 것을 고려하세요. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>접근 가능한 이름</strong> {L} <strong {C}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: '이미지가 <strong>장식</strong>으로 표시되어 보조 기술에서 무시됩니다. <hr> <strong>캡션</strong>이 제공되었더라도 이미지에는 대부분의 경우 대체 텍스트가 있어야 합니다. <ul><li>대체 텍스트는 이미지에 포함된 내용에 대한 간결한 설명을 제공해야 합니다.</li><li>캡션은 일반적으로 이미지를 주변 콘텐츠와 다시 연관시키거나 특정 정보에 주의를 기울일 수 있도록 맥락을 제공해야 합니다.</li></ul>자세히 알아보기: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">알트 대 그림 캡션.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: '대체 텍스트와 캡션 텍스트에 정확히 같은 단어를 사용하지 마세요. 화면 리더는 정보를 두 번 알립니다.<ul><li>대체 텍스트는 이미지에 포함된 내용에 대한 간결한 설명을 제공해야 합니다.</li><li>캡션은 일반적으로 이미지를 주변 콘텐츠와 다시 연관시키거나 특정 정보에 주목할 수 있도록 맥락을 제공해야 합니다.</li></ul> 자세히 알아보기: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">알트 대 그림 캡션.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: "이미지는 '장식용'으로 표시되어 보조 기술에서 무시됩니다. 이미지가 스토리, 분위기 또는 중요한 정보를 전달하는 경우 대체 텍스트를 추가해야 합니다.",
    IMAGE_DECORATIVE_CAROUSEL: '이미지가 장식용으로 표시되었지만, 캐러셀이나 갤러리의 모든 이미지에는 모든 사람에게 동등한 경험을 제공하기 위해 설명적 대체 텍스트를 포함해야 합니다.',
    IMAGE_ALT_TOO_LONG: '대체 텍스트 설명이 <strong>너무 깁니다</strong>. 대체 텍스트는 간결하면서도 트윗처럼 의미 있는 내용이어야 합니다(100자 내외). 복잡한 이미지나 그래프인 경우 이미지에 대한 긴 설명을 아래 텍스트나 아코디언 구성 요소에 넣는 것이 좋습니다. <hr> {ALT} <strong {B}>%(altLength) 문자</strong> <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '<strong {B}>대체 텍스트</strong> %(ALT_TEXT)',

    // Form labels
    LABELS_MISSING_IMAGE_INPUT: '이미지 버튼에 대체 텍스트가 없습니다. 접근 가능한 이름을 제공하기 위해 대체 텍스트를 추가하세요. 예: <em>검색</em> 또는 <em>제출</em>.',
    LABELS_INPUT_RESET: '재설정 버튼은 실수로 활성화하기 쉬우므로 특별히 필요한 경우가 아니라면 사용하지 않는 것이 좋습니다. <hr> <strong>Tip!</strong> <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">재설정 및 취소 버튼이 사용성 문제를 일으키는 이유에 대해 알아보세요.</a>',
    LABELS_ARIA_LABEL_INPUT: '입력에 접근 가능한 이름이 있지만 레이블도 표시되어 있는지 확인하세요. <hr> <strong {B}>접근 가능한 이름</strong> <strong {C}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: '이 입력과 연결된 레이블이 없습니다. 이 입력의 <code>ID</code>와 일치하는 레이블에 <code>용</code> 속성을 추가합니다. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    LABELS_MISSING_LABEL: '이 입력과 연결된 레이블이 없습니다. 이 입력에 <code>아이디</code>를 추가하고 레이블에 일치하는 <code>용</code> 속성을 추가하세요.',
    LABELS_PLACEHOLDER: '사라지는 자리 표시자 텍스트는 사람들이 필드에 어떤 정보가 들어가야 하는지 기억하는 데 어려움을 주며 유효성 검사 문제를 식별하고 수정하기 어렵게 만듭니다. 대신, 양식 필드 앞에 항상 표시되는 힌트를 사용하는 것을 고려하십시오. <hr> 자세히 알아보세요: <a href="https://www.nngroup.com/articles/form-design-placeholders/">양식 필드의 자리 표시자는 유해합니다.</a>',

    // Embedded content
    EMBED_VIDEO: '모든 동영상에 자막이 있는지 확인하세요. 모든 오디오 및 동영상 콘텐츠에 자막을 제공하는 것은 필수 레벨 A 요건입니다. 자막은 청각 장애가 있거나 난청인 사용자를 지원합니다.',
    EMBED_AUDIO: '모든 팟캐스트에 <strong>대본을 제공해야 합니다.</strong> 오디오 콘텐츠에 대한 대본 제공은 필수 레벨 A 요건입니다. 대본은 청각 장애가 있거나 청각이 불편한 사람들을 지원하지만 모든 사람에게 도움이 될 수 있습니다. 대본을 아래 또는 아코디언 패널 안에 배치하는 것을 고려하세요.',
    EMBED_DATA_VIZ: '이와 같은 데이터 시각화 위젯은 키보드나 화면 리더를 사용하여 탐색하는 사람들에게 종종 문제가 되며, 저시력자나 색맹인 사람들에게는 상당한 어려움을 초래할 수 있습니다. 위젯 아래에 동일한 정보를 다른 형식(텍스트 또는 표)으로 제공하는 것이 좋습니다. <hr> 복잡한 이미지에 대해 자세히 알아보기 <a href="https://www.w3.org/WAI/tutorials/images/complex">컴플렉스 이미지.</a>',
    EMBED_MISSING_TITLE: '임베드된 콘텐츠에는 콘텐츠를 설명하는 접근 가능한 이름이 필요합니다. <code>iframe</code> 요소에 고유한 <code>title</code> 또는 <code>aria-label</code> 속성을 제공하세요. <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>에 대해 자세히 알아보기',
    EMBED_GENERAL: '삽입된 콘텐츠를 확인할 수 없습니다. 이미지에 대체 텍스트가 있는지, 동영상에 캡션이 있는지, 텍스트의 대비가 충분한지, 인터랙티브 구성 요소가 <a href="https://webaim.org/techniques/keyboard/">키보드에 액세스할 수 있는지 확인하세요.',
    EMBED_UNFOCUSABLE: '포커스할 수 없는 요소를 포함한 <code>&lt;iframe&gt;</code>은 <code>tabindex="-1"</code>을 가져서는 안 됩니다. 포함된 콘텐츠는 키보드로 접근할 수 없습니다.',

    // QA
    QA_BAD_LINK: '잘못된 링크를 찾았습니다. 링크가 개발 환경을 가리키는 것으로 보입니다. <hr> {L} <strong {C}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: '부서진 동일 페이지 링크입니다. 링크 대상이 이 페이지에 있는 어떤 요소와도 일치하지 않습니다.',
    QA_STRONG_ITALICS: '굵게 및 이탤릭체 태그는 의미론적 의미가 있으며, 전체 단락을 강조할 때는 <강함>이 아닌 <강함>을 사용해야 합니다. 굵은 텍스트는 단어나 문구에 강한 <강한> 강조를 제공할 때 사용해야 합니다. 고유명사(예: 책 및 기사 제목), 외래어, 따옴표는 이탤릭체로 강조 표시해야 합니다. 긴 따옴표는 블록 따옴표로 서식을 지정해야 합니다.',
    QA_PDF: 'PDF의 접근성을 확인할 수 없습니다. PDF는 웹 콘텐츠로 간주되며 접근성을 확보해야 합니다. PDF에는 종종 스크린 리더를 사용하는 사람들을 위한 문제가 있습니다(구조 태그가 누락되거나 양식 필드 레이블이 누락됨) 및 시각이 낮은 사람들(텍스트가 확대되면 재배치되지 않음). <ul><li>이것이 양식이면 접근 가능한 HTML 양식을 대안으로 사용하는 것을 고려하십시오.</li><li>이것이 문서인 경우 웹 페이지로 변환하는 것을 고려하십시오.</li></ul>그렇지 않으면, <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">Acrobat DC에서 PDF의 접근성을 확인하세요.</a>',
    QA_DOCUMENT: '문서의 접근성을 확인할 수 없습니다. 링크된 문서는 웹 콘텐츠로 간주되므로 접근성을 제공해야 합니다. 이 문서를 수동으로 검토해 주세요. <a href="https://support.google.com/docs/answer/6199477?hl=ko">Google 스페이스 문서 또는 프레젠테이션에 더 쉽게 액세스할 수 있도록 설정하세요.</a></li><li><a href="https://support.microsoft.com/ko/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office 문서에 더 쉽게 액세스할 수 있도록 설정하세요.</a></li></ul>',
    QA_BLOCKQUOTE: '제목인가요? <strong {C}>%(TEXT)</strong> <hr> 블록 따옴표는 따옴표로만 사용해야 합니다. 제목으로 사용하려는 경우 이 블록 따옴표를 의미론적 제목(예: 제목 2 또는 제목 3)으로 변경하세요.',
    QA_FAKE_HEADING: '이것이 제목인가요? <strong {C}>%(TEXT)</strong> <hr> 굵거나 큰 텍스트 한 줄은 제목처럼 보일 수 있지만 화면 리더를 사용하는 사람은 이 텍스트가 중요하다는 것을 알거나 해당 콘텐츠로 넘어갈 수 없습니다. 굵거나 큰 텍스트는 의미론적 제목(제목 2~제목 6)을 절대 대체해서는 안 됩니다.',
    QA_FAKE_LIST: '목록을 만들려고 하나요? 가능한 목록 항목을 찾았습니다: <strong {C}>%(firstPrefix)</strong> <hr> 대신 글머리 기호 또는 숫자 서식 지정 버튼을 사용하여 시맨틱 목록을 사용해야 합니다. 시맨틱 목록을 사용하는 경우 보조 기술은 총 항목 수 및 목록에서 각 항목의 상대적 위치와 같은 정보를 전달할 수 있습니다. 시맨틱 목록에 대해 자세히 알아보기 <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">시맨틱 목록.</a>',
    QA_UPPERCASE: '모든 대문자를 찾았습니다. 일부 화면 리더는 대문자 텍스트를 약어로 해석하여 각 문자를 개별적으로 읽을 수 있습니다. 또한 일부 사람들은 대문자를 더 읽기 어려워하며 소리치는 것처럼 보일 수 있습니다.',
    QA_UNDERLINE: '밑줄 친 텍스트는 링크와 혼동될 수 있습니다. <code>&lt;strong&gt;</code><strong>강조</strong><code>&lt;/strong&gt;</code> 또는 <code>&lt;em&gt;</code><em>강조</em><code>&lt;/em&gt;</code>와 같은 다른 스타일을 사용하는 것을 고려하세요.',
    QA_SUBSCRIPT: '아래 첨자 및 위 첨자 서식 옵션은 인쇄 규칙이나 표준에 따라 텍스트의 위치를 변경할 때만 사용해야 합니다. 프레젠테이션이나 외관을 위한 용도로만 사용해서는 안 됩니다. 문장 전체에 서식을 지정하면 가독성 문제가 발생할 수 있습니다. 적절한 사용 사례로는 지수 표시, 4번째 대신 4<sup>th</sup>와 같은 서수 표시, 화학식(예: H<sub>2</sub>O) 등이 있습니다.',
    QA_NESTED_COMPONENTS: '상호작용 레이아웃 컴포넌트를 중첩하는 것을 피하십시오. 예를 들어, 아코디언을 탭 안에 배치하거나 탭을 아코디언 안에 배치하는 것입니다. 이는 탐색을 복잡하게 하고 인지적 부담을 증가시킬 수 있으며, 콘텐츠를 간과하게 만들 수 있습니다.',
    QA_JUSTIFY: '왼쪽 및 오른쪽 여백에 맞춘 정렬된 텍스트를 사용하지 마십시오. 단어 사이의 불균등한 간격 때문에 일부 사람들에게는 읽기 어렵습니다. 더 나은 가독성을 위해 왼쪽 정렬된 텍스트를 사용하십시오.',
    QA_SMALL_TEXT: '작은 글씨는 특히 시력이 낮은 사람들에게 읽기 어렵습니다. 더 나은 가독성을 보장하려면 기본값보다 작은 글꼴 크기를 사용하지 마십시오.',

    // Shared
    ACC_NAME: '<strong {B}>접근 가능한 이름</strong> %(TEXT)',
    ACC_NAME_TIP: '<hr><strong>팁!</strong> "접근 가능한 이름"은 보조 기술을 사용하는 사람들에게 전달되는 최종 레이블이며 ARIA에 의해 계산됩니다. 이를 통해 링크 또는 버튼의 목적을 이해하는 데 도움이 됩니다.',
    HIDDEN_FOCUSABLE: '링크 또는 버튼에 <code>aria-hidden=&quot;true&quot;</code> 속성이 있지만 여전히 키보드로 포커스할 수 있습니다. 중복된 링크 또는 버튼을 숨기려면 <code>tabindex=&quot;-1&quot;</code> 속성을 추가하세요. 그렇지 않으면, 포커스를 받을 수 있는 요소에 <code>aria-hidden=&quot;true&quot;</code>를 사용해서는 안 됩니다. <hr> <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">aria-hidden 속성</a>에 대해 더 알아보세요.',

    // Developer
    DUPLICATE_ID: '중복 ID를 찾았습니다. 중복 ID 오류는 보조 기술이 콘텐츠와 상호 작용할 때 문제를 일으키는 것으로 알려져 있습니다. 다음 ID를 제거하거나 변경하세요. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    UNCONTAINED_LI: '모든 <code>&lt;li&gt;</code> 목록 항목은 <code>&lt;ul&gt;</code> 비정렬 목록 또는 <code>&lt;ol&gt;</code> 정렬 목록 요소 안에 배치해야 합니다. 이 구조는 스크린 리더가 목록과 항목을 정확하게 읽어주는 데 도움이 됩니다.',
    TABINDEX_ATTR: '요소는 <code>tabindex</code> 속성이 0보다 커서는 안 됩니다.',

    // Meta checks
    META_LANG: '페이지 언어가 선언되지 않았습니다! <a href="https://www.w3.org/International/questions/qa-html-language-declarations">HTML 태그에 언어를 선언하세요.</a>',
    META_TITLE: '페이지 제목이 누락되었습니다! <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/title">페이지 제목을 입력하세요.</a>',
    META_SCALABLE: '확대를 허용하기 위해 <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Viewport_meta_tag">뷰포트 메타 태그</a>에서 <code>user-scalable="no"</code> 매개변수를 제거하십시오.',
    META_MAX: '<a href="https://developer.mozilla.org/ko/docs/Web/HTML/Viewport_meta_tag">뷰포트 메타 태그</a>에서 <code>maximum-scale</code> 매개변수가 2보다 작지 않도록 하십시오.',
    META_REFRESH: '페이지는 메타 태그를 사용하여 자동으로 새로고침되지 않아야 합니다.',

    // Buttons
    BTN_EMPTY: '버튼에 그 목적을 설명하는 접근 가능한 이름이 없습니다.',
    BTN_EMPTY_LABELLEDBY: '버튼에 비어 있는 <code>aria-labelledby</code> 값이 있거나, 페이지의 다른 요소의 <code>id</code> 값과 일치하지 않습니다.',
    BTN: '버튼',
    BTN_TIP: '접근 가능한 <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">버튼 만드는 법</a> 배우기.',
    BTN_ROLE_IN_NAME: '버튼 이름에 "버튼"이라는 단어를 포함하지 마십시오. 스크린 리더는 이름 외에도 요소의 역할을 전달합니다.',
    LABEL_IN_NAME: '이 요소의 표시되는 텍스트가 접근 가능한 이름과 다른 것처럼 보이며, 지원 기술을 사용하는 사용자에게 혼란을 줄 수 있습니다. 검토해 주세요: <hr> <strong {B}>접근 가능한 이름</strong> <strong {C}>%(TEXT)</strong>',

    // Tables
    TABLES_MISSING_HEADINGS: '표 헤더가 누락되었습니다! 접근 가능한 표에는 머리글 셀과 데이터 셀의 관계를 정의하는 HTML 마크업이 필요합니다. 이 정보는 보조 기술을 사용하는 사람들에게 컨텍스트를 제공합니다. 표는 표 형식의 데이터에만 사용해야 합니다. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 표에 대해 자세히 알아보기.</a>',
    TABLES_SEMANTIC_HEADING: '제목 2 또는 제목 3과 같은 시맨틱 제목은 콘텐츠 섹션에만 사용해야 하며, HTML 표에는 <strong>이 아닌</strong>을 사용해야 합니다. 대신 <code>&lt;th&gt;</code> 요소를 사용하여 표 제목을 표시하세요. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 표에 대해 자세히 알아보기.</a>',
    TABLES_EMPTY_HEADING: '빈 테이블 헤더가 발견되었습니다! 테이블 헤더는 비어 있으면 안 됩니다. 행 및/또는 열 머리글을 지정하여 관계를 전달하는 것이 중요합니다. 이 정보는 보조 기술을 사용하는 사람들에게 맥락을 제공합니다. 표는 표 형식의 데이터에만 사용해야 한다는 점에 유의하세요. <hr> <a href="https://www.w3.org/WAI/tutorials/tables/">액세스 가능한 테이블에 대해 자세히 알아보기.</a>',

    // Contrast
    CONTRAST_NORMAL: '일반 크기의 텍스트는 최소 %(RATIO) 대비 비율을 가져야 합니다.',
    CONTRAST_LARGE: '큰 크기의 텍스트는 최소 %(RATIO) 대비 비율을 가져야 합니다.',
    CONTRAST_ERROR: '텍스트와 배경 간의 대비가 충분하지 않아 읽기 어려울 수 있습니다.',
    CONTRAST_WARNING: '이 텍스트의 대비가 불명확하며 수동으로 검토해야 합니다. 텍스트와 배경이 강한 대비를 가지고 있는지 확인하십시오.',
    CONTRAST_ERROR_GRAPHIC: '그래픽과 배경 간의 대비가 충분하지 않아 보기 어려울 수 있습니다.',
    CONTRAST_WARNING_GRAPHIC: '이 그래픽의 대비가 불명확하며 수동으로 검토해야 합니다.',
    CONTRAST_TIP_GRAPHIC: '그래픽 및 사용자 인터페이스 요소는 최소한 3:1의 대비 비율을 가져야 합니다.',
    CONTRAST_OPACITY: '더 나은 가시성을 위해 불투명도를 증가시키세요.',
    CONTRAST_APCA: '이 색상 조합은 모든 텍스트 크기에 대해 충분한 대비가 아닙니다. 이 색상과 텍스트 크기 조합을 사용하시겠습니까?',
    CONTRAST_COLOR: '이 색상을 대신 사용하는 것을 고려해 보세요.',
    CONTRAST_SIZE: '이 색상 조합에 대해 텍스트 크기를 더 크게 만드는 것을 고려해 보세요.',
    CONTRAST_PLACEHOLDER: '이 입력란의 자리 표시자 텍스트는 배경과의 대비가 충분하지 않아 읽기 어렵습니다.',
    CONTRAST_PLACEHOLDER_UNSUPPORTED: '이 자리 표시자 텍스트의 대비는 알려지지 않았으며 수동으로 검토해야 합니다. 텍스트와 배경이 강한 대비 색상을 갖도록 하세요.',
    CONTRAST_INPUT: '이 입력란의 텍스트는 배경과의 대비가 충분하지 않아 읽기 어렵습니다.',
    CONTRAST: '대비',
    UNKNOWN: '알 수 없음',
    FG: '전경',
    BG: '배경',
    NO_SUGGESTION: '텍스트 색상만 변경하여는 접근 가능한 조합을 찾을 수 없습니다. 배경 색상을 변경해 보세요.',
  },
};

export { ko as default };
