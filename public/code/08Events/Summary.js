/* ============================================================
   SECTION 0 — QUICK UTILS (helpers used across demos)
   ============================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const log = (...args) => console.log('[LOG]', ...args);
const dbg = (...args) => console.debug('[DEBUG]', ...args);
const warn = (...args) => console.warn('[WARN]', ...args);

/* Creates a DOM element with attributes and children quickly */
function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => {
    if (k === 'style' && typeof v === 'object') {
      Object.assign(el.style, v);
    } else if (k in el) {
      el[k] = v;
    } else {
      el.setAttribute(k, v);
    }
  });
  for (const ch of children) {
    if (ch == null) continue;
    if (typeof ch === 'string' || typeof ch === 'number') {
      el.appendChild(document.createTextNode(ch));
    } else {
      el.appendChild(ch);
    }
  }
  return el;
}

/* Debounce & Throttle (used in later sections) */
function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}
function throttle(fn, wait = 200) {
  let last = 0;
  let timer = null;
  return (...args) => {
    const now = Date.now();
    const remaining = wait - (now - last);
    if (remaining <= 0) {
      if (timer) { clearTimeout(timer); timer = null; }
      last = now;
      fn(...args);
    } else if (!timer) {
      timer = setTimeout(() => {
        last = Date.now();
        timer = null;
        fn(...args);
      }, remaining);
    }
  };
}

/* ============================================================
   SECTION 1 — YOUR ORIGINAL COMMENT BLOCK (kept & expanded)
   ============================================================ */

// Javascript ke adar jitne bh events hote hai vo sequentially hi run hote hai (kuch exceptions hai isme jo badme dekhenge)
// Ye events kisi activity pe invoke hote hai

// attachEvent() - Jab internet explorer pe bht mushkil hota tha applications ko chalana
// jOuery - on event listner milta tha isme

// self study - types of events , timestamps(Date activity kaise change karte hai and all) , defaultPrevented (kisi bhi tag ka default behaviour hai vo rok sakte hai isse)
// target  , toElement , sourceElement , currentTarget 
// Interview related - clientX , clientY , offset , screenX , screenY 
// altkey , ctrlKey , shiftKey , keyCode

// Isme bhi problems ho sakti kyuki hame bht jyada information nahi milti hai aur iske liye hame eventListeners use karne chaiye kyuki ye hame propagation ke ability dete hai 
// document.getElementById('owl').onclick = function (){
//     alert('owl clicked') //(Ye method features kam deta hai)
// }

// document.getElementById('owl').addEventListener('click' , (e) => {
//     // alert('Owl clicked')
//     // e = event object 
// }, false) // Event Propagation 2 context hota hai eventBubbling and event Capturing ( false yani default pe hota hai use Event Bubbling ) 

// Bubbling
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// })

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
// }) // aise likho ya ,false) same hi hai default false hota hai

// Event Propagation isme ye hai ki jaise bubble jata hai niche se upar vaise hi eventListeners bhi jaenge child se parent ke taraf matlab li->ul->div aise 

// Capturing
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// }, true)

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
// }, true) // isme likhna padega ,true) aise kyuki by default false hota hai

// Capturing opposite hai bubbling ke jo jaega top se bottom matlab parent se child so basically div->ul->li

// How to prevent the default bubbling?
// document.getElementById('images').addEventListener('click', (e) => {
//     alert('clicked inside the ul')
// }, false)

// document.getElementById('owl').addEventListener('click', (e) => {
//     alert('clicked the owl')
//     e.stopPropagation() // isse ab bubbling ruk jaegi ya even if capturing laga rakha hai toh voh bhi ruk jaega 
// }, false) 

// document.getElementById('google').addEventListener('click' , function(e){
//     console.log("google clicked");
//     e.preventDefault() // isse ye by default jo google page pe redirect karra tha usse nahi karega
//     e.stopPropagation()
// }, false)

/* ============================================================
   SECTION 2 — YOUR DELEGATION EXAMPLE (kept & enhanced)
   ============================================================ */

// Minimal demo container (create once for playground)
const imagesDemo = h('div', { id: 'events-playground', style: { padding: '16px', border: '1px dashed #999', margin: '16px 0' } },
  h('h3', {}, 'Event Delegation Demo (Click an image to remove)'),
  h('ul', { id: 'images', style: { display: 'flex', gap: '12px', listStyle: 'none', padding: 0 } },
    // li>img set
    ...['owl', 'cat', 'dog', 'koala', 'tiger'].map((name, i) =>
      h('li', {}, h('img', {
        id: name,
        src: `https://placehold.co/80x80?text=${name}`,
        alt: name,
        style: { display: 'block', borderRadius: '8px', cursor: 'pointer' }
      }))
    )
  ),
  h('a', { id: 'google', href: 'https://google.com', target: '_blank', style: { display: 'inline-block', marginTop: '12px' } }, 'Open Google (preventDefault demo)')
);
document.body.appendChild(imagesDemo);

// YOUR handler (kept) + enhancements
document.querySelector('#images').addEventListener('click', function(e){
  console.log(e.target); // konse element pe ye eventListner target hora ya ya fire hora hai
  console.log(e.target.parentNode); // target ke parent node ko trigger karna hai

  // Applying strict checks to ensure ki pura hi parent node na udd jaye if we trigger some unexpected node for it( jaise img ke badle li click hua toh ul trigger ho gaya aur pura ul udd gaya)
  if (e.target.tagName === 'IMG') {
      console.log(e.target.id);
      let removeIt = e.target.parentNode
      removeIt.remove() // method 1
  }

  // removeIt.parentNode.removeChild(removeIt) // method 2 removeIt dega img ka parentNode li aur ye uske parentNode ul ko target karke bolega tere child node iss li ko hata( same hi way hai upar vale ke tarah )
  // Just a catch ki remove() vale method mai if by chance li pe click hua toh hamara target.parentNode dega return ul toh isse pura ul hi gayab ho jaega
}, false);

// Prevent default + stop propagation example (anchor)
document.getElementById('google').addEventListener('click' , function(e){
  console.log("google clicked");
  e.preventDefault() // isse ye by default jo google page pe redirect karra tha usse nahi karega
  e.stopPropagation()
}, false)

/* ============================================================
   SECTION 3 — EXPANDED THEORY: target, currentTarget, etc.
   ============================================================ */

/**
 * e.target        → exact element jaha event fire hua (deepest child)
 * e.currentTarget → woh element jiske upar listener attached hai
 * e.relatedTarget → mouseover/mouseout ke during, enter/leave counterpart
 * e.toElement / e.srcElement / e.fromElement → legacy (IE) — avoid
 */
const bubbleBox = h('div', { id: 'bubbleBox', style: { padding: '12px', border: '1px solid #ccc', margin: '12px 0' } },
  h('div', { className: 'outer', style: { padding: '12px', background: '#f0f9ff' } }, 'Outer (has listener)',
    h('div', { className: 'middle', style: { padding: '12px', background: '#e0f2fe' } }, 'Middle (no listener)',
      h('button', { className: 'inner', style: { padding: '8px 12px' } }, 'Click INNER (target)')
    )
  )
);
document.body.appendChild(bubbleBox);

$('.outer').addEventListener('click', (e) => {
  log('target:', e.target.className || e.target.tagName, '| currentTarget:', e.currentTarget.className);
});

/* Mouseover/Out with relatedTarget (enter from / leave to) */
const hoverBox = h('div', { style: { marginTop: '12px', padding: '10px', border: '1px solid #ddd' } },
  h('div', { id: 'hoverArea', style: { padding: '16px', background: '#fff7ed' } }, 'Hover over me'),
  h('div', { id: 'hoverLog', style: { padding: '8px', fontSize: '12px' } })
);
document.body.appendChild(hoverBox);
$('#hoverArea').addEventListener('mouseover', (e) => {
  $('#hoverLog').textContent = `mouseover from ${e.relatedTarget && e.relatedTarget.id || 'outside'} → hoverArea`;
});
$('#hoverArea').addEventListener('mouseout', (e) => {
  $('#hoverLog').textContent = `mouseout to ${e.relatedTarget && e.relatedTarget.id || 'outside'} ← hoverArea`;
});

/* ============================================================
   SECTION 4 — Timestamps, defaultPrevented, meta info
   ============================================================ */

/**
 * e.timeStamp → milliseconds since page navigation start (High Resolution Time),
 *               not the same as Date.now(), but both can be compared relatively.
 * e.defaultPrevented → true after preventDefault() is called
 */
const tsBox = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #eee' } },
  h('button', { id: 'tsBtn', style: { padding: '8px 12px' } }, 'Click to log timestamp'),
  h('button', { id: 'preventBtn', style: { padding: '8px 12px', marginLeft: '8px' } }, 'Prevent default on link'),
  h('a', { id: 'tsLink', href: 'https://example.com', style: { marginLeft: '8px' } }, 'Example link')
);
document.body.appendChild(tsBox);

$('#tsBtn').addEventListener('click', (e) => {
  const now = Date.now();
  log('e.timeStamp:', e.timeStamp.toFixed(2), 'ms since page start');
  log('Date.now():', now, 'ms since Unix epoch');
});

$('#preventBtn').addEventListener('click', () => {
  const onClick = (e) => {
    e.preventDefault();
    log('defaultPrevented?', e.defaultPrevented); // true
    $('#tsLink').removeEventListener('click', onClick);
  };
  $('#tsLink').addEventListener('click', onClick);
  alert('Now clicking the link will NOT navigate once.');
});

/* ============================================================
   SECTION 5 — Coordinates (clientX/Y, pageX/Y, screenX/Y, offset)
   ============================================================ */

/**
 * clientX/clientY: viewport coordinates (exclude page scroll)
 * pageX/pageY:     document coordinates (include scroll top/left)
 * screenX/screenY: absolute screen coordinates (monitor)
 * offsetX/offsetY: relative to the target element’s padding box
 */
const coordBox = h('div', { style: { marginTop: '16px', border: '1px solid #ddd' } },
  h('div', { id: 'coordArea', style: { height: '140px', background: '#fef2f2', position: 'relative' } },
     h('div', { id: 'coordLabel', style: { position: 'absolute', bottom: '6px', left: '6px', background: '#fff', padding: '4px 6px', fontSize: '12px' } }, 'Move mouse here...')
  )
);
document.body.appendChild(coordBox);

$('#coordArea').addEventListener('mousemove', (e) => {
  $('#coordLabel').textContent = `client(${e.clientX}, ${e.clientY}) | page(${e.pageX}, ${e.pageY}) | screen(${e.screenX}, ${e.screenY}) | offset(${e.offsetX}, ${e.offsetY})`;
});

/* ============================================================
   SECTION 6 — Modifier keys (altKey, ctrlKey, shiftKey, metaKey)
   ============================================================ */

const modBox = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd' } },
  h('button', { id: 'modBtn', style: { padding: '8px 12px' } }, 'Click with Ctrl/Alt/Shift/Meta')
);
document.body.appendChild(modBox);

$('#modBtn').addEventListener('click', (e) => {
  log('alt:', e.altKey, 'ctrl:', e.ctrlKey, 'shift:', e.shiftKey, 'meta:', e.metaKey);
});

/* ============================================================
   SECTION 7 — Keyboard events (key, code, keyCode)
   ============================================================ */

/**
 * key     → character value (respects keyboard layout) e.g., "a", "A", "Enter"
 * code    → physical key position (layout independent) e.g., "KeyA", "Enter"
 * keyCode → DEPRECATED, but still asked in interviews (e.g., 13 for Enter)
 */
const keyBox = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd' } },
  h('input', { id: 'keyInput', placeholder: 'Type here...', style: { padding: '8px', width: '240px' } }),
  h('div', { id: 'keyLog', style: { marginTop: '8px', fontSize: '12px' } })
);
document.body.appendChild(keyBox);

$('#keyInput').addEventListener('keydown', (e) => {
  $('#keyLog').textContent = `keydown → key: ${e.key}, code: ${e.code}, keyCode: ${e.keyCode}`;
});
$('#keyInput').addEventListener('keyup', (e) => {
  // Example: blocking default (prevent typing a)
  if (e.key.toLowerCase() === 'a') {
    // e.preventDefault(); // keyup won't stop character entry; use keydown/keypress to prevent
    warn('Pressed "A" — typically prevention done on keydown.');
  }
});

/* ============================================================
   SECTION 8 — Propagation (Bubbling vs Capturing) + stop* APIs
   ============================================================ */

const propDemo = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ccc' } },
  h('div', { className: 'prop-outer', style: { padding: '10px', background: '#eef2ff' } }, 'OUTER',
    h('div', { className: 'prop-middle', style: { padding: '10px', background: '#e0e7ff' } }, 'MIDDLE',
      h('button', { className: 'prop-inner', style: { padding: '6px 10px' } }, 'INNER')
    )
  ),
  h('div', { style: { marginTop: '8px' } }, 'Watch console for order.')
);
document.body.appendChild(propDemo);

// Bubbling listeners (default = false)
$('.prop-outer').addEventListener('click', () => log('[Bubbling] OUTER'));
$('.prop-middle').addEventListener('click', () => log('[Bubbling] MIDDLE'));
$('.prop-inner').addEventListener('click', () => log('[Bubbling] INNER'));

// Capturing listeners (third arg true)
$('.prop-outer').addEventListener('click', () => log('[Capturing] OUTER'), true);
$('.prop-middle').addEventListener('click', () => log('[Capturing] MIDDLE'), true);
$('.prop-inner').addEventListener('click', () => log('[Capturing] INNER'), true);

// stopPropagation vs stopImmediatePropagation
$('.prop-middle').addEventListener('click', (e) => {
  // Try toggling comments to see effects:
  // e.stopPropagation(); // stops moving up (bubbling) or down (capturing)
  // e.stopImmediatePropagation(); // ALSO prevents other handlers at the same element from running
  // log('Middle handler after stopImmediatePropagation would not log if multiple handlers exist');
});

/* ============================================================
   SECTION 9 — addEventListener options: once, passive, signal
   ============================================================ */

/**
 * once: true       → auto-remove listener after first call
 * passive: true    → tells browser we WON’T call preventDefault() (scroll optimizations)
 * signal: AbortSignal → programmatically remove listener with controller.abort()
 */
const advBox = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd' } },
  h('button', { id: 'onceBtn', style: { padding: '8px 12px' } }, 'Click me (once)'),
  h('div', {}, 'Scroll page to see passive listener in action (no blocking).')
);
document.body.appendChild(advBox);

$('#onceBtn').addEventListener('click', () => alert('Will only fire once!'), { once: true });

// Passive scroll listener (should not call preventDefault inside)
window.addEventListener('scroll', throttle(() => {
  // Just logging — heavy computations throttled
  dbg('scroll event (throttled, passive by default in some browsers)');
}, 250), { passive: true });

// Abortable listener
const controller = new AbortController();
const { signal } = controller;
window.addEventListener('resize', debounce(() => {
  dbg('resize (debounced). Will stop listening after 3s.');
}, 300), { signal });
setTimeout(() => controller.abort(), 3000);

/* ============================================================
   SECTION 10 — Real-world: Event Delegation Patterns
   ============================================================ */

/** 1) Todo list (add/remove/edit via delegation) **/
const todo = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd' } },
  h('h3', {}, 'Todo (Delegation)'),
  h('form', { id: 'todoForm', style: { display: 'flex', gap: '8px' } },
    h('input', { id: 'todoInput', placeholder: 'Add task...', required: true, style: { flex: 1, padding: '8px' } }),
    h('button', { type: 'submit', style: { padding: '8px 12px' } }, 'Add')
  ),
  h('ul', { id: 'todoList', style: { listStyle: 'none', paddingLeft: 0, marginTop: '10px' } })
);
document.body.appendChild(todo);

$('#todoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = $('#todoInput').value.trim();
  if (!text) return;
  $('#todoList').appendChild(
    h('li', { style: { display: 'flex', justifyContent: 'space-between', padding: '6px 0' } },
      h('span', { className: 'label' }, text),
      h('span', {},
        h('button', { className: 'edit', style: { marginRight: '6px' } }, 'Edit'),
        h('button', { className: 'remove' }, 'Remove')
      )
    )
  );
  $('#todoInput').value = '';
});

// Delegation for edit/remove
$('#todoList').addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.matches('.remove')) {
    li.remove();
  } else if (e.target.matches('.edit')) {
    const label = li.querySelector('.label');
    const newText = prompt('Edit task:', label.textContent);
    if (newText != null) label.textContent = newText.trim();
  }
});

/** 2) Menu with nested items (bubbling to highlight path) **/
const menu = h('ul', { id: 'menu', style: { listStyle: 'none', paddingLeft: 0, marginTop: '16px' } },
  ...['Home', 'Products', 'About', 'Contact'].map(item =>
    h('li', { className: 'menu-item', style: { padding: '6px', cursor: 'pointer' } }, item)
  )
);
document.body.appendChild(menu);

$('#menu').addEventListener('click', (e) => {
  if (e.target.matches('.menu-item')) {
    $$('.menu-item').forEach(li => li.style.background = '');
    e.target.style.background = '#e2e8f0';
  }
});

/* ============================================================
   SECTION 11 — Forms: submit, input, change, validation
   ============================================================ */

/* Simple BMI calculator (your earlier logic, polished) */
const bmiForm = h('form', { id: 'bmiForm', style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd', display: 'grid', gap: '8px', maxWidth: '360px' } },
  h('h3', {}, 'BMI Calculator'),
  h('input', { id: 'height', type: 'number', placeholder: 'Height (cm)', required: true, min: 1, style: { padding: '8px' } }),
  h('input', { id: 'weight', type: 'number', placeholder: 'Weight (kg)', required: true, min: 1, style: { padding: '8px' } }),
  h('button', { type: 'submit', style: { padding: '8px 12px' } }, 'Calculate'),
  h('div', { id: 'results', style: { fontWeight: '600' } }),
  h('p', { id: 'info', style: { margin: 0 } })
);
document.body.appendChild(bmiForm);

bmiForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt($('#height').value, 10);
  const weight = parseInt($('#weight').value, 10);
  const results = $('#results');
  const infoPara = $('#info');

  // Clear previous result
  results.textContent = '';
  infoPara.textContent = '';

  if (!height || height < 0 || Number.isNaN(height)) {
    results.textContent = `Please give a valid height`;
    return;
  }
  if (!weight || weight < 0 || Number.isNaN(weight)) {
    results.textContent = `Please give a valid weight`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;

  if (bmi < 18.6) {
    infoPara.innerHTML = '<span>You are Underweight</span>';
  } else if (bmi >= 18.6 && bmi < 24.9) {
    infoPara.innerHTML = '<span>You are in Normal Range</span>';
  } else {
    infoPara.innerHTML = '<span>You are Overweight</span>';
  }
});

/* ============================================================
   SECTION 12 — Pointer/Mouse/Touch Events (modern pointer events)
   ============================================================ */

/**
 * pointerdown / pointerup / pointermove unify mouse + touch + pen.
 * Use pointer events in modern apps to avoid writing two code paths.
 */
const drawArea = h('div', { style: { marginTop: '16px' } },
  h('h3', {}, 'Pointer Demo (draw dots)'),
  h('div', { id: 'pad', style: { width: '100%', maxWidth: '600px', height: '180px', border: '1px solid #aaa', position: 'relative', background: '#fafafa' } })
);
document.body.appendChild(drawArea);

let drawing = false;
$('#pad').addEventListener('pointerdown', (e) => { drawing = true; drawDot(e); });
$('#pad').addEventListener('pointermove', (e) => { if (drawing) drawDot(e); });
window.addEventListener('pointerup', () => { drawing = false; });

function drawDot(e) {
  const pad = $('#pad');
  const rect = pad.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const dot = h('div', { style: { width: '6px', height: '6px', borderRadius: '50%', background: '#1e293b', position: 'absolute', left: `${x - 3}px`, top: `${y - 3}px` } });
  pad.appendChild(dot);
}

/* ============================================================
   SECTION 13 — Drag & Drop (project-style example)
   ============================================================ */

const dnd = h('div', { style: { marginTop: '16px', display: 'flex', gap: '12px' } },
  h('div', { className: 'bin', style: { flex: 1, minHeight: '120px', border: '2px dashed #888', padding: '10px' } }, 'Drop Here'),
  h('div', { className: 'bin', style: { flex: 1, minHeight: '120px', border: '2px dashed #888', padding: '10px' } }, 'Drop Here'),
  h('div', { style: { display: 'flex', gap: '8px' } },
    ...['JS', 'TS', 'Node', 'React'].map(label =>
      h('div', { className: 'card', draggable: true, style: { padding: '8px 12px', border: '1px solid #aaa', cursor: 'grab', userSelect: 'none', background: '#fff' } }, label)
    )
  )
);
document.body.appendChild(dnd);

let dragged = null;
$$('.card').forEach(el => {
  el.addEventListener('dragstart', (e) => {
    dragged = e.currentTarget;
    e.dataTransfer.setData('text/plain', dragged.textContent);
    e.dataTransfer.effectAllowed = 'move';
  });
});
$$('.bin').forEach(bin => {
  bin.addEventListener('dragover', (e) => e.preventDefault()); // allow drop
  bin.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dragged) bin.appendChild(dragged);
  });
});

/* ============================================================
   SECTION 14 — Custom Events (project analytics or state)
   ============================================================ */

/**
 * Dispatch and listen for custom events (great for decoupling modules)
 */
const customBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('button', { id: 'fireEvent', style: { padding: '8px 12px' } }, 'Fire Custom Event'),
  h('div', { id: 'eventLog', style: { marginTop: '8px', fontSize: '12px' } })
);
document.body.appendChild(customBox);

document.addEventListener('user:action', (e) => {
  $('#eventLog').textContent = `Custom received → type: ${e.type}, detail: ${JSON.stringify(e.detail)}`;
});

$('#fireEvent').addEventListener('click', () => {
  const evt = new CustomEvent('user:action', { detail: { at: Date.now(), action: 'clicked' } });
  document.dispatchEvent(evt);
});

/* ============================================================
   SECTION 15 — Timers + requestAnimationFrame (clock demo)
   ============================================================ */

const clockBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Clock (textContent replace vs createTextNode approach)'),
  h('div', { id: 'clockA', style: { fontFamily: 'monospace', fontSize: '20px' } }, 'HH:MM:SS'),
  h('div', { id: 'clockB', style: { fontFamily: 'monospace', fontSize: '20px', marginTop: '6px' } }) // empty; we’ll manage firstChild
);
document.body.appendChild(clockBox);

// Approach A: textContent (simple & efficient)
setInterval(() => {
  $('#clockA').textContent = new Date().toLocaleTimeString();
}, 1000);

// Approach B: createTextNode + manual replace (your “explicit” requirement)
setInterval(() => {
  const host = $('#clockB');
  const node = document.createTextNode(new Date().toLocaleTimeString());
  if (host.firstChild) host.removeChild(host.firstChild);
  host.appendChild(node);
}, 1000);

/* ============================================================
   SECTION 16 — Real-world: Prevent expensive work (scroll/resize)
   ============================================================ */

// Throttle a scroll-triggered analytics event
window.addEventListener('scroll', throttle(() => {
  // pretend analytics
  dbg('Analytics: user scrolled ', window.scrollY);
}, 1000));

// Debounce a search input
const searchBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Debounced Search'),
  h('input', { id: 'searchInput', placeholder: 'Type to search…', style: { padding: '8px', width: '260px' } }),
  h('div', { id: 'searchLog', style: { marginTop: '6px', fontSize: '12px' } })
);
document.body.appendChild(searchBox);

$('#searchInput').addEventListener('input', debounce((e) => {
  $('#searchLog').textContent = `Searching for: "${e.target.value}" … (debounced)`;
}, 400));

/* ============================================================
   SECTION 17 — Clipboard, Focus/Blur, Visibility
   ============================================================ */

const miscBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Clipboard + Focus/Blur + Visibility'),
  h('textarea', { id: 'clipArea', rows: 3, placeholder: 'Copy some text...', style: { width: '100%', maxWidth: '520px' } }),
  h('button', { id: 'copyBtn', style: { marginTop: '6px' } }, 'Copy above'),
  h('div', { id: 'visLog', style: { marginTop: '6px', fontSize: '12px' } }, `Page visible: ${document.visibilityState}`)
);
document.body.appendChild(miscBox);

$('#copyBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText($('#clipArea').value);
    alert('Copied!');
  } catch (err) {
    warn('Clipboard blocked:', err);
  }
});

$('#clipArea').addEventListener('focus', () => log('textarea: focus'));
$('#clipArea').addEventListener('blur', () => log('textarea: blur'));

document.addEventListener('visibilitychange', () => {
  $('#visLog').textContent = `Page visible: ${document.visibilityState}`;
});

/* ============================================================
   SECTION 18 — Context Menu (Right-click) & Preventing Defaults
   ============================================================ */

const ctxBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Custom Context Menu'),
  h('div', { id: 'ctxArea', style: { padding: '20px', background: '#f8fafc' } }, 'Right-click here')
);
document.body.appendChild(ctxBox);

const ctxMenu = h('div', { id: 'ctxMenu', style: { position: 'fixed', top: '0', left: '0', background: '#111827', color: '#fff', padding: '6px 8px', borderRadius: '6px', fontSize: '12px', display: 'none' } }, 'Custom Menu');
document.body.appendChild(ctxMenu);

$('#ctxArea').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  ctxMenu.style.display = 'block';
  ctxMenu.style.left = `${e.pageX}px`;
  ctxMenu.style.top = `${e.pageY}px`;
});
document.addEventListener('click', () => (ctxMenu.style.display = 'none'));

/* ============================================================
   SECTION 19 — AbortController with fetch + button signal
   ============================================================ */

const abortBox = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Abortable Fetch (Button)'),
  h('button', { id: 'fetchBtn', style: { padding: '6px 10px' } }, 'Start Fetch'),
  h('button', { id: 'abortBtn', style: { padding: '6px 10px', marginLeft: '6px' } }, 'Abort'),
  h('div', { id: 'fetchLog', style: { marginTop: '8px', fontSize: '12px' } })
);
document.body.appendChild(abortBox);

let fetchCtrl = null;
$('#fetchBtn').addEventListener('click', async () => {
  if (fetchCtrl) fetchCtrl.abort();
  fetchCtrl = new AbortController();
  $('#fetchLog').textContent = 'Fetching... (simulated via timeout)';
  try {
    await new Promise((res, rej) => {
      const t = setTimeout(res, 3000);
      fetchCtrl.signal.addEventListener('abort', () => {
        clearTimeout(t);
        rej(new DOMException('Aborted', 'AbortError'));
      });
    });
    $('#fetchLog').textContent = 'Done!';
  } catch (err) {
    $('#fetchLog').textContent = `Fetch aborted: ${err.name}`;
  } finally {
    fetchCtrl = null;
  }
});
$('#abortBtn').addEventListener('click', () => fetchCtrl?.abort());

/* ============================================================
   SECTION 20 — Your “Clock via createTextNode” Q (explicit cleanup)
   ============================================================ */

const explicitClock = h('div', { style: { marginTop: '16px', padding: '8px', border: '1px solid #ddd' } },
  h('h3', {}, 'Explicit createTextNode + remove old node'),
  h('div', { id: 'clockExplicit', style: { fontFamily: 'monospace', fontSize: '20px' } })
);
document.body.appendChild(explicitClock);

setInterval(() => {
  const host = $('#clockExplicit');
  const next = document.createTextNode(new Date().toLocaleTimeString());
  if (host.firstChild) host.removeChild(host.firstChild); // remove old node
  host.appendChild(next); // append new node
}, 1000);

/* ============================================================
   SECTION 21 — Edge cases + Safety Checks (matches/closest)
   ============================================================ */

/**
 * Use .matches() and .closest() to ensure strict node targeting,
 * especially in delegated handlers.
 */
const strictBox = h('div', { style: { marginTop: '16px', padding: '10px', border: '1px solid #ddd' } },
  h('h3', {}, 'Strict Delegation with .matches() / .closest()'),
  h('ul', { id: 'strictList', style: { listStyle: 'none', paddingLeft: 0 } },
    ...['One', 'Two', 'Three'].map(txt =>
      h('li', {}, h('button', { className: 'del', style: { marginRight: '6px' } }, 'Delete'), h('span', {}, txt))
    )
  )
);
document.body.appendChild(strictBox);

$('#strictList').addEventListener('click', (e) => {
  if (e.target.matches('.del')) {
    const li = e.target.closest('li');
    if (li) li.remove();
  }
});

/* ============================================================
   SECTION 22 — Summary Cheatsheet (as comments)
   ============================================================ */

/**
 * QUICK CHEATSHEET:
 * 
 * PROPAGATION:
 *  - Bubbling (default): child → parent → document
 *  - Capturing: document → parent → child (use third arg true)
 *  - stopPropagation(): stop moving further in the phase
 *  - stopImmediatePropagation(): also block other handlers on same node
 * 
 * DEFAULTS:
 *  - preventDefault(): stop browser default (e.g., a link navigation, form submit)
 *  - e.defaultPrevented: boolean, if preventDefault was called
 * 
 * TARGETING:
 *  - e.target: element where event actually occurred
 *  - e.currentTarget: element where the listener is attached
 *  - .matches(selector): check if element would match a CSS selector
 *  - .closest(selector): climb up to nearest ancestor matching selector
 * 
 * MOUSE/POINTER COORDS:
 *  - clientX/Y: viewport coordinates
 *  - pageX/Y: document coordinates (scroll included)
 *  - screenX/Y: monitor coordinates
 *  - offsetX/Y: target’s padding box relative coords
 * 
 * TIME:
 *  - e.timeStamp: ms since navigation start (High Resolution)
 *  - Date.now(): ms since UNIX epoch
 * 
 * KEYBOARD:
 *  - e.key: layout-aware string, e.g., "a", "Enter"
 *  - e.code: physical key, e.g., "KeyA", "Enter"
 *  - e.keyCode: deprecated, still in interviews
 * 
 * LISTENERS:
 *  - element.addEventListener(type, handler, { once, passive, signal, capture })
 *  - once: auto-remove on first call
 *  - passive: promise not to call preventDefault (scroll optimizations)
 *  - signal: AbortController to cancel listener
 *  - capture: true for capturing phase
 * 
 * DELEGATION:
 *  - Attach listener to a stable parent; use e.target + matches/closest
 *  - Useful for dynamic lists (todos, tables, galleries)
 * 
 * PERFORMANCE:
 *  - Avoid unnecessary innerHTML parsing for plain text → use textContent
 *  - Debounce inputs; throttle scroll/resize
 *  - Prefer pointer events to unify mouse/touch
 * 
 * SECURITY:
 *  - Avoid setting untrusted HTML via innerHTML (XSS risk)
 *  - Use textContent/createTextNode for user input
 */