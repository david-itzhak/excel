const LETTER_CODES = {
  A: 65,
  Z: 90
};

function toCell() {
  return `<div class="cell" contenteditable></div>`;
}

function toColumn(columLetter) {
  return `
    <div class="column">${columLetter}</div>
  `;
}

function createRow(number, content) {
  return `
    <div class="row">
        <div class="row-info">${number ? number : ''}</div>
        <div class="row-data">${content}</div>
    </div>
`;
}

function codeToChar(_, index) {
  return String.fromCharCode(LETTER_CODES.A + index);
}

export function createTable(rowsCount = 20,) {
  const colCount = LETTER_CODES.Z - LETTER_CODES.A + 1;
  const rows = [];
  const cols = new Array(colCount)
    .fill('')
    .map(codeToChar)
    .map(toColumn)
    .join('');
  rows.push(createRow(null, cols));
  const cells = new Array(colCount)
    .fill('')
    .map(toCell)
    .join('');
  for (let i = 1; i <= rowsCount; i++) {
    rows.push(createRow(i, cells));
  }
  return rows.join('');
}
