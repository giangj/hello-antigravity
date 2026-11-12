const terminalBody = document.getElementById('terminalBody');
const cmdInput = document.getElementById('cmdInput');
const sendCmdBtn = document.getElementById('sendCmdBtn');
const runDemoBtn = document.getElementById('runDemoBtn');
const compactBtn = document.getElementById('compactBtn');
const themeBtn = document.getElementById('themeBtn');

const tokenBar = document.getElementById('tokenBar');
const tokenPercent = document.getElementById('tokenPercent');
const tokenCountText = document.getElementById('tokenCountText');
const countdownText = document.getElementById('countdownText');

let currentPercent = 42;
let remainingSeconds = 4 * 3600 + 59 * 60 + 12;

function appendLine(text, type = '') {
  const div = document.createElement('div');
  if (type === 'cmd') {
    div.className = 'term-line';
    div.innerHTML = `<span class="prompt">$</span> <span class="cmd">${escapeHtml(text)}</span>`;
  } else {
    div.className = `term-output ${type}`;
    div.textContent = text;
  }
  terminalBody.appendChild(div);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function updateTokenMeter(percent) {
  currentPercent = Math.max(8, Math.min(98, percent));
  tokenBar.style.width = `${currentPercent}%`;
  tokenPercent.textContent = `${currentPercent}%`;
  const used = Math.round((currentPercent / 100) * 2000000).toLocaleString('en-US');
  tokenCountText.textContent = `${used} / 2,000,000 tokens`;
}

function setAgentStatus(key, text, stateClass) {
  const badge = document.querySelector(`[data-agent="${key}"]`);
  if (!badge) return;
  badge.textContent = text;
  badge.className = `agent-state ${stateClass}`;
}

function runCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) return;

  appendLine(cmd, 'cmd');

  switch (cmd.toLowerCase()) {
    case 'help':
      appendLine('Các lệnh hỗ trợ: /plan, /compact, build, test, status, clear', 'info');
      break;
    case 'clear':
      terminalBody.innerHTML = '';
      appendLine('Terminal cleared.', 'info');
      break;
    case '/compact':
      appendLine('⚡ Đang nén ngữ cảnh cuộc trò chuyện...', 'info');
      setTimeout(() => {
        updateTokenMeter(Math.max(12, Math.round(currentPercent * 0.32)));
        appendLine('✓ Compaction hoàn tất! Đã giải phóng 68% token dư thừa.', 'success');
      }, 450);
      break;
    case '/plan':
      setAgentStatus('research', 'Planning...', 'running');
      appendLine('📋 Coordinator Agent đang lập kế hoạch 3 bước...', 'info');
      setTimeout(() => {
        appendLine('1. Phân tích cấu trúc UI • 2. Tối ưu CSS Grid • 3. Push lên GitHub', 'success');
        setAgentStatus('research', 'Planned', 'done');
        updateTokenMeter(currentPercent + 8);
      }, 550);
      break;
    case 'test':
      setAgentStatus('ui', 'Testing...', 'running');
      appendLine('🧪 Đang chạy kiểm thử giao diện trong Sandbox...', 'info');
      setTimeout(() => {
        appendLine('✓ 12/12 assertions passed (0ms layout shift, responsive OK)', 'success');
        setAgentStatus('ui', 'Active', 'running');
        updateTokenMeter(currentPercent + 5);
      }, 600);
      break;
    case 'build':
      appendLine('📦 Building production bundle...', 'info');
      setTimeout(() => {
        appendLine('✓ Build thành công! Output sẵn sàng tại E:\\AI_vin20k\\hello-antigravity', 'success');
        updateTokenMeter(currentPercent + 4);
      }, 500);
      break;
    case 'status':
      appendLine(`✓ Account: giangj • Context: ${currentPercent}% • Repo: origin/main synced`, 'success');
      break;
    default:
      appendLine(`→ Agent đang xử lý yêu cầu: "${cmd}"`, 'info');
      updateTokenMeter(currentPercent + 6);
  }
}

sendCmdBtn.addEventListener('click', () => {
  runCommand(cmdInput.value);
  cmdInput.value = '';
});

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCommand(cmdInput.value);
    cmdInput.value = '';
  }
});

document.querySelectorAll('.cmd-chip').forEach((btn) => {
  btn.addEventListener('click', () => {
    runCommand(btn.dataset.cmd);
  });
});

compactBtn.addEventListener('click', () => {
  runCommand('/compact');
});

runDemoBtn.addEventListener('click', () => {
  appendLine('agy dispatch --parallel 3', 'cmd');
  setAgentStatus('research', 'Scanning...', 'running');
  setAgentStatus('ui', 'Building...', 'running');
  setAgentStatus('git', 'Waiting...', 'running');
  appendLine('🚀 Đã kích hoạt 3 Subagents chạy song song dưới 1 tài khoản giangj...', 'info');

  setTimeout(() => {
    setAgentStatus('research', 'Done', 'done');
    appendLine('✓ [Research Agent] Đọc xong cấu trúc dự án.', 'success');
  }, 600);

  setTimeout(() => {
    setAgentStatus('ui', 'Active', 'running');
    appendLine('✓ [UI Architect] Render Bento Grid & Glassmorphism hoàn tất.', 'success');
  }, 1100);

  setTimeout(() => {
    setAgentStatus('git', 'Synced', 'done');
    appendLine('✓ [Git Agent] Sẵn sàng push lên github.com/giangj/hello-antigravity', 'success');
    updateTokenMeter(currentPercent + 14);
  }, 1600);
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('aurora-mode');
});

setInterval(() => {
  if (remainingSeconds > 0) remainingSeconds--;
  const h = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(remainingSeconds % 60).padStart(2, '0');
  countdownText.textContent = `${h}:${m}:${s}`;
}, 1000);
