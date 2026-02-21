// ================================================================
//  FROZEN EMPIRES — Force Builder Application Logic
// ================================================================

// ── STATE ──────────────────────────────────────────────────────────
let state = {
  nationality: null,
  factionId: null,
  commanderId: null,
  roster: [],          // Array of rosterUnit objects
  forceOptions: {},    // Map of optionIndex -> boolean
  nextId: 1,
};

// rosterUnit shape:
// { _id, unitId, type: 'core'|'support', modelCount, selectedOptions: [] }

function getFaction() { return state.factionId ? FACTIONS.find(f => f.id === state.factionId) : null; }
function getCommander() { return state.commanderId ? COMMANDERS[state.commanderId] : null; }

// ── POINTS ─────────────────────────────────────────────────────────
function calcUnitPts(rosterUnit) {
  const unit = UNITS[rosterUnit.unitId];
  if (!unit) return 0;
  return unit.ptsPerModel * rosterUnit.modelCount;
}

function calcCommanderPts() {
  const cmd = getCommander();
  return cmd ? cmd.pts : 0;
}

function calcTotalPts() {
  const unitPts = state.roster.reduce((sum, ru) => sum + calcUnitPts(ru), 0);
  return calcCommanderPts() + unitPts;
}

// ── RENDER: NATIONALITY GRID ────────────────────────────────────────
function renderNationalityGrid() {
  const grid = document.getElementById('nationalityGrid');
  const nats = Object.values(NATIONALITIES);
  grid.innerHTML = nats.map(nat => {
    // Shorten labels
    const short = {
      'Denmark-Norway': 'Denmark-Norway',
      'Saxony & Polish-Lithuanian Commonwealth': 'Saxony & Poland',
      'Russia': 'Russia',
      'Sweden': 'Sweden',
      'Unaligned (Cossack)': 'Cossacks',
    }[nat] || nat;
    return `<button class="nat-btn ${state.nationality === nat ? 'active' : ''}" data-nat="${nat}">${short}</button>`;
  }).join('');
  grid.querySelectorAll('.nat-btn').forEach(btn => {
    btn.addEventListener('click', () => selectNationality(btn.dataset.nat));
  });
}

function selectNationality(nat) {
  state.nationality = nat;
  state.factionId = null;
  state.commanderId = null;
  state.roster = [];
  state.forceOptions = {};
  renderNationalityGrid();
  renderFactionSection();
  renderCommanderSection();
  renderForceOptionsSection();
  renderRoster();
  renderUnitLibrary();
  updatePoints();
}

// ── RENDER: FACTION SECTION ─────────────────────────────────────────
function renderFactionSection() {
  const section = document.getElementById('factionSection');
  const select = document.getElementById('factionSelect');
  const info = document.getElementById('factionInfo');

  if (!state.nationality) { section.style.display = 'none'; return; }

  const factions = FACTIONS.filter(f => f.nationality === state.nationality);
  select.innerHTML = '<option value="">— Choose Faction —</option>' +
    factions.map(f => `<option value="${f.id}" ${state.factionId === f.id ? 'selected' : ''}>${f.name}</option>`).join('');

  const faction = getFaction();
  info.textContent = faction ? faction.description : '';

  section.style.display = '';

  select.onchange = () => {
    state.factionId = select.value || null;
    state.commanderId = null;
    state.roster = [];
    state.forceOptions = {};
    renderFactionSection();
    renderCommanderSection();
    renderForceOptionsSection();
    renderRoster();
    renderUnitLibrary();
    renderRulesTab();
    updatePoints();
  };
}

// ── RENDER: COMMANDER SECTION ───────────────────────────────────────
function renderCommanderSection() {
  const section = document.getElementById('commanderSection');
  const select = document.getElementById('commanderSelect');
  const card = document.getElementById('commanderCard');

  const faction = getFaction();
  if (!faction) { section.style.display = 'none'; return; }

  const cmds = faction.availableCommanders.map(id => COMMANDERS[id]).filter(Boolean);
  select.innerHTML = '<option value="">— Choose Commander —</option>' +
    cmds.map(c => {
      const tier = c.tier !== 'standard' ? ` [${c.tier.charAt(0).toUpperCase() + c.tier.slice(1)}]` : '';
      return `<option value="${c.id}" ${state.commanderId === c.id ? 'selected' : ''}>${c.name} — ${c.pts}pts${tier}</option>`;
    }).join('');

  section.style.display = '';

  const cmd = getCommander();
  if (cmd) {
    card.style.display = '';
    card.innerHTML = renderCommanderCard(cmd);
  } else {
    card.style.display = 'none';
  }

  select.onchange = () => {
    state.commanderId = select.value || null;
    renderCommanderSection();
    updatePoints();
    renderSummary();
  };
}

function renderCommanderCard(cmd) {
  const tierColors = { standard: 'tier-standard', historic: 'tier-historic', legendary: 'tier-legendary' };
  const tierLabel = { standard: 'Standard', historic: 'Historic', legendary: 'Legendary' };
  return `
    <div class="commander-name">${cmd.name}</div>
    <span class="commander-tier ${tierColors[cmd.tier]}">${tierLabel[cmd.tier]}</span>
    <div class="commander-stats">
      <div class="stat-box">
        <span class="stat-label">Range</span>
        <span class="stat-value">${cmd.commandRange}"</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">CP</span>
        <span class="stat-value">${cmd.commandPoints}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Cost</span>
        <span class="stat-value">${cmd.pts}pts</span>
      </div>
    </div>
    ${cmd.mainWeapons ? `<div class="commander-rules"><em>Weapons:</em> ${cmd.mainWeapons}</div>` : ''}
    ${cmd.specialRules && cmd.specialRules.length ? `<div class="commander-rules"><em>Rules:</em> ${cmd.specialRules.join(', ')}</div>` : ''}
    ${cmd.notes ? `<div class="commander-rules"><em>Note:</em> ${cmd.notes}</div>` : ''}
    ${cmd.bio ? `<div class="commander-bio">${cmd.bio}</div>` : ''}
  `;
}

// ── RENDER: FORCE OPTIONS SECTION ──────────────────────────────────
function renderForceOptionsSection() {
  const section = document.getElementById('forceOptionsSection');
  const list = document.getElementById('forceOptionsList');
  const faction = getFaction();

  if (!faction || !faction.forceOptions || faction.forceOptions.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  list.innerHTML = faction.forceOptions.map((opt, i) => `
    <label class="force-option-item">
      <input type="checkbox" data-idx="${i}" ${state.forceOptions[i] ? 'checked' : ''} />
      <span>${opt}</span>
    </label>
  `).join('');

  list.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', () => {
      const idx = parseInt(cb.dataset.idx);
      state.forceOptions[idx] = cb.checked;
    });
  });
}

// ── RENDER: UNIT ADD CONTROLS ───────────────────────────────────────
function renderUnitAddControls() {
  const controls = document.getElementById('unitAddControls');
  const unitTypeSelect = document.getElementById('unitTypeSelect');
  const unitSelect = document.getElementById('unitSelect');
  const faction = getFaction();

  if (!faction) { controls.style.display = 'none'; return; }
  controls.style.display = 'flex';

  unitTypeSelect.onchange = () => populateUnitSelect();
  populateUnitSelect();

  function populateUnitSelect() {
    const type = unitTypeSelect.value;
    let unitIds = [];
    if (type === 'core') unitIds = faction.coreUnits;
    else if (type === 'support') unitIds = faction.supportUnits;

    unitSelect.innerHTML = '<option value="">— Select Unit —</option>' +
      unitIds.map(id => {
        const u = UNITS[id];
        return u ? `<option value="${id}">${u.name} — ${u.ptsPerModel}pts/model</option>` : '';
      }).join('');
  }

  document.getElementById('btnAddUnit').onclick = () => {
    const unitId = unitSelect.value;
    const type = unitTypeSelect.value;
    if (!unitId || !type) { alert('Please select a unit type and unit.'); return; }
    const unit = UNITS[unitId];
    addRosterUnit({ unitId, type, modelCount: unit.minModels || 4, selectedOptions: [] });
  };
}

function addRosterUnit(data) {
  const ru = { _id: state.nextId++, ...data };
  state.roster.push(ru);
  renderRoster();
  renderSummary();
  updatePoints();
}

// ── RENDER: ROSTER ──────────────────────────────────────────────────
function renderRoster() {
  const list = document.getElementById('rosterList');
  const emptyState = document.getElementById('emptyState');
  renderUnitAddControls();

  if (!getFaction()) {
    emptyState.style.display = 'flex';
    list.innerHTML = '';
    return;
  }

  if (state.roster.length === 0) {
    emptyState.style.display = 'flex';
    list.innerHTML = '<div class="ornament-divider">✦ ✦ ✦</div>';
    return;
  }

  emptyState.style.display = 'none';

  const coreUnits = state.roster.filter(ru => ru.type === 'core');
  const supportUnits = state.roster.filter(ru => ru.type === 'support');

  let html = '';
  if (coreUnits.length) {
    html += `<div class="roster-section-title">Core Units</div>`;
    html += coreUnits.map(ru => renderRosterUnitCard(ru)).join('');
  }
  if (supportUnits.length) {
    html += `<div class="roster-section-title">Support Units</div>`;
    html += supportUnits.map(ru => renderRosterUnitCard(ru)).join('');
  }

  list.innerHTML = html;

  list.querySelectorAll('.roster-unit').forEach(card => {
    const id = parseInt(card.dataset.ruid);
    card.querySelector('.count-btn.minus').addEventListener('click', (e) => {
      e.stopPropagation();
      changeModelCount(id, -1);
    });
    card.querySelector('.count-btn.plus').addEventListener('click', (e) => {
      e.stopPropagation();
      changeModelCount(id, +1);
    });
    card.addEventListener('click', () => openUnitModal(id));
  });
}

function renderRosterUnitCard(ru) {
  const unit = UNITS[ru.unitId];
  if (!unit) return '';
  const pts = calcUnitPts(ru);

  return `
    <div class="roster-unit type-${ru.type}" data-ruid="${ru._id}">
      <div class="unit-card-header">
        <span class="unit-card-name">${unit.name}</span>
        <span class="unit-type-badge badge-${ru.type}">${ru.type}</span>
      </div>
      <div class="unit-card-body">
        <div class="unit-stats-grid">
          <div class="unit-stat">
            <span class="stat-label">Fight</span>
            <span class="stat-value">${unit.fight}</span>
          </div>
          <div class="unit-stat">
            <span class="stat-label">Shoot</span>
            <span class="stat-value">${unit.shoot}</span>
          </div>
          <div class="unit-stat">
            <span class="stat-label">Resolve</span>
            <span class="stat-value">${unit.resolve}</span>
          </div>
        </div>
        <div class="unit-card-right">
          <div class="unit-rules-mini">${unit.specialRules.slice(0,3).join(', ')}${unit.specialRules.length > 3 ? '…' : ''}</div>
          <div class="unit-rules-mini"><em>${unit.weapons}${unit.equipment ? ' / ' + unit.equipment : ''}</em></div>
        </div>
      </div>
      <div class="unit-card-footer">
        <div class="model-count-control">
          <button class="count-btn minus">−</button>
          <span class="count-display">${ru.modelCount}</span>
          <button class="count-btn plus">+</button>
          <span style="font-size:0.72rem; color:var(--ink-muted); margin-left:0.25rem">models</span>
        </div>
        <div class="unit-pts-display">${pts} <span>pts</span></div>
      </div>
    </div>
  `;
}

function changeModelCount(ruid, delta) {
  const ru = state.roster.find(r => r._id === ruid);
  if (!ru) return;
  const unit = UNITS[ru.unitId];
  const min = unit.minModels || 4;
  const max = unit.maxModels || 20;
  ru.modelCount = Math.max(min, Math.min(max, ru.modelCount + delta));
  renderRoster();
  renderSummary();
  updatePoints();
}

// ── UNIT MODAL ──────────────────────────────────────────────────────
let _editingRuId = null;

function openUnitModal(ruid) {
  _editingRuId = ruid;
  const ru = state.roster.find(r => r._id === ruid);
  const unit = UNITS[ru.unitId];
  if (!unit || !ru) return;

  document.getElementById('modalTitle').textContent = `Edit: ${unit.name}`;

  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="unit-editor-stats">
      <div class="editor-stat"><span class="stat-label">Experience</span><span class="stat-value">${unit.experienceLevel}</span></div>
      <div class="editor-stat"><span class="stat-label">Fight</span><span class="stat-value">${unit.fight}</span></div>
      <div class="editor-stat"><span class="stat-label">Shoot</span><span class="stat-value">${unit.shoot}</span></div>
      <div class="editor-stat"><span class="stat-label">Resolve</span><span class="stat-value">${unit.resolve}</span></div>
      <div class="editor-stat"><span class="stat-label">Base Cost</span><span class="stat-value">${unit.ptsPerModel}pts/model</span></div>
      <div class="editor-stat"><span class="stat-label">Type</span><span class="stat-value" style="font-size:0.8rem">${ru.type}</span></div>
    </div>

    <div class="unit-editor-section">
      <div class="unit-editor-section-title">Weapons & Equipment</div>
      <p style="font-size:0.82rem; color:var(--ink-faded); line-height:1.5">${unit.weapons}${unit.sidearms ? '<br><em>Sidearms: ' + unit.sidearms + '</em>' : ''}${unit.equipment ? '<br><em>Equipment: ' + unit.equipment + '</em>' : ''}</p>
    </div>

    <div class="unit-editor-section">
      <div class="unit-editor-section-title">Special Rules</div>
      <p style="font-size:0.82rem; color:var(--ink-faded); line-height:1.5">${unit.specialRules.join(' · ')}</p>
    </div>

    ${unit.options && unit.options.length ? `
    <div class="unit-editor-section">
      <div class="unit-editor-section-title">Unit Options <span style="font-weight:400; color:var(--ink-muted)">(for reference)</span></div>
      ${unit.options.map((opt, i) => `
        <label class="option-checkbox">
          <input type="checkbox" data-opt="${i}" ${(ru.selectedOptions || []).includes(i) ? 'checked' : ''} />
          <span>${opt}</span>
        </label>
      `).join('')}
    </div>
    ` : ''}

    ${unit.note ? `<div class="unit-editor-section"><p style="font-size:0.78rem; font-style:italic; color:var(--red)">⚠ ${unit.note}</p></div>` : ''}

    <div class="unit-editor-section">
      <div class="unit-editor-section-title">Model Count</div>
      <div class="model-count-editor">
        <label>Models:</label>
        <input type="number" id="modalModelCount" value="${ru.modelCount}" min="${unit.minModels || 4}" max="${unit.maxModels || 20}" step="1" />
        <div class="pts-preview" id="modalPtsPreview">${calcUnitPts(ru)}pts</div>
      </div>
      <p style="font-size:0.72rem; color:var(--ink-muted); margin-top:0.3rem">Min: ${unit.minModels || 4} / Max: ${unit.maxModels || 20}</p>
    </div>
  `;

  // Live pts preview
  document.getElementById('modalModelCount').addEventListener('input', (e) => {
    const count = Math.max(unit.minModels || 4, Math.min(unit.maxModels || 20, parseInt(e.target.value) || 0));
    document.getElementById('modalPtsPreview').textContent = (unit.ptsPerModel * count) + 'pts';
  });

  // Track option selections
  body.querySelectorAll('input[data-opt]').forEach(cb => {
    cb.addEventListener('change', () => {
      const idx = parseInt(cb.dataset.opt);
      if (!ru.selectedOptions) ru.selectedOptions = [];
      if (cb.checked) {
        if (!ru.selectedOptions.includes(idx)) ru.selectedOptions.push(idx);
      } else {
        ru.selectedOptions = ru.selectedOptions.filter(i => i !== idx);
      }
    });
  });

  document.getElementById('unitModal').style.display = 'flex';
}

document.getElementById('modalClose').addEventListener('click', closeUnitModal);
document.getElementById('unitModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeUnitModal();
});

document.getElementById('btnSaveUnit').addEventListener('click', () => {
  const ru = state.roster.find(r => r._id === _editingRuId);
  if (!ru) return;
  const unit = UNITS[ru.unitId];
  const count = parseInt(document.getElementById('modalModelCount').value);
  ru.modelCount = Math.max(unit.minModels || 4, Math.min(unit.maxModels || 20, count));
  closeUnitModal();
  renderRoster();
  renderSummary();
  updatePoints();
});

document.getElementById('btnRemoveUnit').addEventListener('click', () => {
  if (confirm('Remove this unit from the force?')) {
    state.roster = state.roster.filter(r => r._id !== _editingRuId);
    closeUnitModal();
    renderRoster();
    renderSummary();
    updatePoints();
  }
});

function closeUnitModal() {
  document.getElementById('unitModal').style.display = 'none';
  _editingRuId = null;
}

// ── RENDER: UNIT LIBRARY ────────────────────────────────────────────
function renderUnitLibrary() {
  const lib = document.getElementById('unitLibrary');
  const faction = getFaction();

  if (!faction) {
    lib.innerHTML = '<div class="empty-state"><div class="empty-text">Select a faction to browse units.</div></div>';
    return;
  }

  const query = (document.getElementById('unitSearch').value || '').toLowerCase();
  const allIds = [...new Set([...faction.coreUnits, ...faction.supportUnits])];
  const units = allIds
    .map(id => ({ id, unit: UNITS[id], isCore: faction.coreUnits.includes(id) }))
    .filter(({ id, unit }) => unit && (
      !query ||
      unit.name.toLowerCase().includes(query) ||
      unit.specialRules.some(r => r.toLowerCase().includes(query))
    ));

  if (units.length === 0) {
    lib.innerHTML = '<div class="empty-state"><div class="empty-text">No units match your search.</div></div>';
    return;
  }

  lib.innerHTML = units.map(({ id, unit, isCore }) => `
    <div class="lib-unit-card" title="Click to add to roster" data-uid="${id}" data-iscore="${isCore}">
      <div class="lib-unit-header">
        <span class="lib-unit-name">${unit.name}</span>
        <span class="lib-unit-pts">${unit.ptsPerModel}pts/model</span>
      </div>
      <div class="lib-unit-body">
        <div class="lib-unit-exp">${unit.experienceLevel} · ${isCore ? 'Core' : 'Support'}</div>
        <div class="lib-unit-rules">${unit.specialRules.join(', ')}</div>
      </div>
      <div class="lib-unit-stats">
        <span class="lib-stat">Fight <strong>${unit.fight}</strong></span>
        <span class="lib-stat">Shoot <strong>${unit.shoot}</strong></span>
        <span class="lib-stat">Resolve <strong>${unit.resolve}</strong></span>
      </div>
    </div>
  `).join('');

  lib.querySelectorAll('.lib-unit-card').forEach(card => {
    card.addEventListener('click', () => {
      const uid = card.dataset.uid;
      const isCore = card.dataset.iscore === 'true';
      const unit = UNITS[uid];
      if (!unit) return;
      addRosterUnit({ unitId: uid, type: isCore ? 'core' : 'support', modelCount: unit.minModels || 4, selectedOptions: [] });
    });
  });
}

document.getElementById('unitSearch').addEventListener('input', renderUnitLibrary);

// ── RENDER: SUMMARY ─────────────────────────────────────────────────
function renderSummary() {
  const panel = document.getElementById('summaryPanel');
  const cmd = getCommander();

  if (!getFaction()) {
    panel.innerHTML = '<div class="empty-state"><div class="empty-text">Add units to see your force summary.</div></div>';
    return;
  }

  const coreUnits = state.roster.filter(ru => ru.type === 'core');
  const supportUnits = state.roster.filter(ru => ru.type === 'support');
  const totalPts = calcTotalPts();

  const renderRows = (units) => units.map(ru => {
    const unit = UNITS[ru.unitId];
    if (!unit) return '';
    return `
      <div class="summary-row">
        <span class="summary-row-name">${unit.name} ×${ru.modelCount}</span>
        <span class="summary-row-pts">${calcUnitPts(ru)}pts</span>
      </div>
    `;
  }).join('');

  panel.innerHTML = `
    ${cmd ? `
    <div class="summary-section">
      <div class="summary-title">Commander</div>
      <div class="summary-row">
        <span class="summary-row-name">${cmd.name}</span>
        <span class="summary-row-pts">${cmd.pts}pts</span>
      </div>
    </div>
    ` : ''}

    ${coreUnits.length ? `
    <div class="summary-section">
      <div class="summary-title">Core Units</div>
      ${renderRows(coreUnits)}
    </div>
    ` : ''}

    ${supportUnits.length ? `
    <div class="summary-section">
      <div class="summary-title">Support Units</div>
      ${renderRows(supportUnits)}
    </div>
    ` : ''}

    <div class="summary-total">
      <span>Total</span>
      <span class="summary-total-val">${totalPts} pts</span>
    </div>

    <div class="summary-section" style="margin-top:0.5rem">
      <div class="summary-title">Force Composition</div>
      <div class="summary-row">
        <span class="summary-row-name">Core units</span>
        <span class="summary-row-pts">${coreUnits.length}</span>
      </div>
      <div class="summary-row">
        <span class="summary-row-name">Support units</span>
        <span class="summary-row-pts">${supportUnits.length}</span>
      </div>
      <div class="summary-row">
        <span class="summary-row-name">Total models</span>
        <span class="summary-row-pts">${state.roster.reduce((s, ru) => s + ru.modelCount, 0)}</span>
      </div>
    </div>
  `;
}

// ── RENDER: RULES TAB ───────────────────────────────────────────────
function renderRulesTab() {
  const faction = getFaction();
  const rulesDiv = document.getElementById('factionRulesDisplay');
  const optionsDiv = document.getElementById('factionOptionsDisplay');

  if (!faction) {
    rulesDiv.innerHTML = '<p class="muted">Select a faction to see its rules.</p>';
    optionsDiv.innerHTML = '<p class="muted">Select a faction to see force options.</p>';
    return;
  }

  rulesDiv.innerHTML = faction.forceSpecialRules.length
    ? faction.forceSpecialRules.map(r => `<div class="faction-rule-item">• ${r}</div>`).join('')
    : '<p class="muted">No special faction rules.</p>';

  optionsDiv.innerHTML = faction.forceOptions.length
    ? faction.forceOptions.map(o => `<div class="faction-rule-item">◈ ${o}</div>`).join('')
    : '<p class="muted">No force options.</p>';
}

// ── POINTS DISPLAY ──────────────────────────────────────────────────
function updatePoints() {
  document.getElementById('totalPoints').textContent = calcTotalPts();
}

// ── TABS ────────────────────────────────────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    if (tab.dataset.tab === 'summary') renderSummary();
  });
});

// ── EXPORT / IMPORT ─────────────────────────────────────────────────
document.getElementById('btnNew').addEventListener('click', () => {
  if (state.roster.length > 0 || state.commanderId) {
    if (!confirm('Start a new force? All current progress will be lost.')) return;
  }
  state = { nationality: null, factionId: null, commanderId: null, roster: [], forceOptions: {}, nextId: 1 };
  renderAll();
});

document.getElementById('btnExport').addEventListener('click', () => {
  const modal = document.getElementById('exportModal');
  const textarea = document.getElementById('exportText');

  // Generate readable text export + JSON
  const faction = getFaction();
  const cmd = getCommander();
  const lines = [];
  lines.push('══════════════════════════════════════════');
  lines.push('  FROZEN EMPIRES — Force List');
  lines.push('══════════════════════════════════════════');
  if (faction) lines.push(`  Faction: ${faction.name}`);
  if (cmd) lines.push(`  Commander: ${cmd.name} (${cmd.pts}pts)`);
  lines.push('');
  const coreUnits = state.roster.filter(ru => ru.type === 'core');
  const supportUnits = state.roster.filter(ru => ru.type === 'support');
  if (coreUnits.length) {
    lines.push('── CORE UNITS ──');
    coreUnits.forEach(ru => {
      const unit = UNITS[ru.unitId];
      if (unit) lines.push(`  • ${unit.name} ×${ru.modelCount}  (${calcUnitPts(ru)}pts)`);
    });
  }
  if (supportUnits.length) {
    lines.push('');
    lines.push('── SUPPORT UNITS ──');
    supportUnits.forEach(ru => {
      const unit = UNITS[ru.unitId];
      if (unit) lines.push(`  • ${unit.name} ×${ru.modelCount}  (${calcUnitPts(ru)}pts)`);
    });
  }
  lines.push('');
  lines.push(`  TOTAL: ${calcTotalPts()} pts`);
  lines.push('══════════════════════════════════════════');
  lines.push('');
  lines.push('── IMPORT JSON (paste into Import) ──');
  lines.push(JSON.stringify(state, null, 2));

  textarea.value = lines.join('\n');
  modal.style.display = 'flex';
});

document.getElementById('exportModalClose').addEventListener('click', () => {
  document.getElementById('exportModal').style.display = 'none';
});

document.getElementById('exportModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) document.getElementById('exportModal').style.display = 'none';
});

document.getElementById('btnCopyExport').addEventListener('click', () => {
  const text = document.getElementById('exportText').value;
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById('btnCopyExport').textContent = 'Copied!';
    setTimeout(() => document.getElementById('btnCopyExport').textContent = 'Copy to Clipboard', 2000);
  });
});

document.getElementById('btnDownloadExport').addEventListener('click', () => {
  const text = document.getElementById('exportText').value;
  const faction = getFaction();
  const filename = `frozen-empires-${faction ? faction.id : 'force'}-${Date.now()}.txt`;
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
});

document.getElementById('btnImport').addEventListener('click', () => {
  document.getElementById('importText').value = '';
  document.getElementById('importModal').style.display = 'flex';
});

document.getElementById('importModalClose').addEventListener('click', () => {
  document.getElementById('importModal').style.display = 'none';
});

document.getElementById('importModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) document.getElementById('importModal').style.display = 'none';
});

document.getElementById('btnDoImport').addEventListener('click', () => {
  const text = document.getElementById('importText').value.trim();
  // Try to extract JSON — could be just JSON or embedded in the export text
  let jsonStr = text;
  const jsonStart = text.indexOf('{\n  "nationality"');
  if (jsonStart !== -1) jsonStr = text.slice(jsonStart);

  try {
    const imported = JSON.parse(jsonStr);
    // Basic validation
    if (typeof imported.nationality === 'undefined') throw new Error('Invalid format');
    state = { ...imported, nextId: imported.nextId || (imported.roster ? imported.roster.length + 1 : 1) };
    document.getElementById('importModal').style.display = 'none';
    renderAll();
  } catch (e) {
    alert('Could not parse force data. Please paste the JSON section from an exported force.');
  }
});

// ── INIT ────────────────────────────────────────────────────────────
function renderAll() {
  renderNationalityGrid();
  renderFactionSection();
  renderCommanderSection();
  renderForceOptionsSection();
  renderRoster();
  renderUnitLibrary();
  renderSummary();
  renderRulesTab();
  updatePoints();
}

renderAll();
