const TEST = "java";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const defaultState = {
  questions: shuffle(QUESTIONS),
  current: 0,
  answers: {}
};

/* ❗ ИСПРАВЛЕНО ЗДЕСЬ */
let state = loadProgress(TEST)
  || JSON.parse(JSON.stringify(defaultState));

const nav = document.getElementById("nav");
const content = document.getElementById("content");

/* ---------- NAV ---------- */
function renderNav() {
  nav.innerHTML = "";

  state.questions.forEach((q, i) => {
    const a = state.answers[q.id];
    const b = document.createElement("button");
    b.textContent = i + 1;

    if (i === state.current) {
      b.classList.add("nav-active");
    } else if (a?.checked === true) {
      b.classList.add(a.correct ? "nav-good" : "nav-bad");
    } else if (a?.choice !== undefined) {
      b.classList.add("nav-selected");
    } else {
      b.classList.add("nav-empty");
    }

    b.onclick = () => {
      state.current = i;
      render();
    };

    nav.appendChild(b);
  });
}

/* ---------- QUESTION ---------- */
function renderQuestion() {
  const q = state.questions[state.current];

  if (!state.answers[q.id]) {
    state.answers[q.id] = {};
  }

  const a = state.answers[q.id];

  if (!a.qText) {
    a.qText = q.question[0];
  }

  if (!a.order) {
    a.order = shuffle(q.options.map((_, i) => i));
  }

  const locked = a.checked === true;

  content.innerHTML = `
    <div class="card">
      <div class="question">${a.qText}</div>
      <div class="options">
        ${a.order.map((opt, i) => {
          let cls = "";
          if (locked) {
            if (opt === q.correct) cls = "correct";
            else if (a.choice === i) cls = "wrong";
          } else if (a.choice === i) {
            cls = "selected";
          }

          return `
            <div class="option ${locked ? "locked" : ""} ${cls}"
                 ${locked ? "" : `onclick="answer(${i})"`}>
              ${q.options[opt]}
            </div>
          `;
        }).join("")}
      </div>
      ${locked ? `<div class="explanation">${q.explanation}</div>` : ""}
    </div>
  `;
}

/* ---------- CORE ---------- */
function render() {
  renderNav();
  renderQuestion();
  saveProgress(TEST, state);
}

function answer(i) {
  const q = state.questions[state.current];
  const a = state.answers[q.id];
  if (a.checked) return;
  a.choice = i;
  render();
}

function check() {
  const q = state.questions[state.current];
  const a = state.answers[q.id];
  if (!a || a.choice === undefined || a.checked) return;
  const real = a.order[a.choice];
  a.correct = real === q.correct;
  a.checked = true;
  render();
}

/* ---------- NAVIGATION ---------- */
function next() {
  if (state.current < state.questions.length - 1) {
    state.current++;
    render();
  }
}

function prev() {
  if (state.current > 0) {
    state.current--;
    render();
  }
}

/* ---------- FINISH ---------- */
function finish() {
  let score = 0;
  const detailed = {};

  state.questions.forEach(q => {
    const a = state.answers[q.id];
    if (!a || a.choice === undefined) {
      detailed[q.id] = { skipped: true };
    } else {
      if (a.correct) score++;
      detailed[q.id] = { choice: a.choice, correct: a.correct };
    }
  });

  const id = crypto.randomUUID();
  saveAttempt(TEST, {
    id,
    date: Date.now(),
    score,
    total: state.questions.length,
    detailed
  });

  clearProgress(TEST);
  location.href = `results.html?id=${id}`;
}

function exitMenu() {
  saveProgress(TEST, state);
  location.href = "../../index.html";
}

render();
