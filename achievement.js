/* ===================================================
   🏆 連勝＆実績システム（CSS + HTML + JS 一体型パック）
=================================================== */

// ---------------------------------------------------
// 1. 🎨 CSSを自動的に本体（<head>）へ読み込ませる
// ---------------------------------------------------
const achievementStyle = document.createElement('style');
achievementStyle.textContent = `
  /* 画面全体を覆う背景 */
  .reward-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

 /* ポップアップの箱（コンパクト化版） */
.reward-modal-box {
  background: #111827;
  border: 2px solid #facc15;
  border-radius: 16px;
  padding: 16px; /* 24px ➔ 16px にして内側の余白をスッキリ */
  text-align: center;
  width: 78%;   /* 85% ➔ 78% にして画面左右に適度なゆとりを確保 */
  max-width: 270px; /* 320px ➔ 270px に縮小 */
  box-shadow: 0 0 30px rgba(250, 204, 21, 0.4);
  animation: rewardPopUp 0.4s ease-out;
  color: white;
  font-family: sans-serif;
}

  /* メダル枠 */
.reward-medal-container {
  position: relative;
  display: inline-block;
  margin: 15px 0;
  padding: 10px;
}

/* 🏅 SVGメダルの共通設定 */
.reward-medal-icon {
  display: inline-block;
  width: 95px;
  height: 95px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.5));
}

/* ===================================================
   🥉 銅メダル (星の位置を大幅ダウン・目視中央調整版)
   =================================================== */
.medal-bronze {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFCCBC"/><stop offset="18%" stop-color="%23FFE0B2"/><stop offset="45%" stop-color="%23D87A51"/><stop offset="70%" stop-color="%238D3C1B"/><stop offset="85%" stop-color="%23E0A98B"/><stop offset="95%" stop-color="%235D220A"/><stop offset="100%" stop-color="%232A0B00"/></linearGradient><linearGradient id="body" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FFCCBC"/><stop offset="20%" stop-color="%23FFE0B2"/><stop offset="45%" stop-color="%23D87A51"/><stop offset="70%" stop-color="%238D3C1B"/><stop offset="85%" stop-color="%23E0A98B"/><stop offset="100%" stop-color="%235D220A"/></linearGradient><linearGradient id="star" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFF3E0"/><stop offset="30%" stop-color="%23FFCCBC"/><stop offset="75%" stop-color="%23D87A51"/><stop offset="100%" stop-color="%234A1D0D"/></linearGradient><linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.35"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="emboss" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%231F0800" flood-opacity="0.85"/></filter></defs><circle cx="50" cy="50" r="47" fill="url(%23ring)" stroke="%23FFE0B2" stroke-width="0.8"/><circle cx="50" cy="50" r="37" fill="url(%23body)" stroke="%234A1D0D" stroke-width="1.2"/><path d="M 20 20 L 80 20 L 70 80 L 30 80 Z" fill="url(%23shine)" opacity="0.6"/><path d="M 50 37.5 L 53.6 45.6 L 62.1 46.4 L 55.7 52.2 L 57.6 60.5 L 50 55.8 L 42.4 60.5 L 44.3 52.2 L 37.9 46.4 L 46.4 45.6 Z" fill="none" stroke="%23FFE0B2" stroke-width="0.6" opacity="0.8"/><path d="M 50 38 L 53.2 45.8 L 61.5 46.6 L 55.3 52.2 L 57.1 60 L 50 55.5 L 42.9 60 L 44.7 52.2 L 38.5 46.6 L 46.8 45.8 Z" fill="url(%23star)" filter="url(%23emboss)"/></svg>');
}

/* ===================================================
   🥈 銀メダル (星の位置を大幅ダウン・目視中央調整版)
   =================================================== */
.medal-silver {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23ECEFF1"/><stop offset="18%" stop-color="%23FFFFFF"/><stop offset="45%" stop-color="%2390A4AE"/><stop offset="70%" stop-color="%23455A64"/><stop offset="85%" stop-color="%23CFD8DC"/><stop offset="95%" stop-color="%2337474F"/><stop offset="100%" stop-color="%23102027"/></linearGradient><linearGradient id="body" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ECEFF1"/><stop offset="20%" stop-color="%23FFFFFF"/><stop offset="45%" stop-color="%2390A4AE"/><stop offset="70%" stop-color="%23455A64"/><stop offset="85%" stop-color="%23CFD8DC"/><stop offset="100%" stop-color="%2337474F"/></linearGradient><linearGradient id="star" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="30%" stop-color="%23ECEFF1"/><stop offset="75%" stop-color="%2390A4AE"/><stop offset="100%" stop-color="%23263238"/></linearGradient><linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.45"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="emboss" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%23102027" flood-opacity="0.85"/></filter></defs><circle cx="50" cy="50" r="47" fill="url(%23ring)" stroke="%23FFFFFF" stroke-width="0.8"/><circle cx="50" cy="50" r="37" fill="url(%23body)" stroke="%23263238" stroke-width="1.2"/><path d="M 20 20 L 80 20 L 70 80 L 30 80 Z" fill="url(%23shine)" opacity="0.6"/><path d="M 50 37.5 L 53.6 45.6 L 62.1 46.4 L 55.7 52.2 L 57.6 60.5 L 50 55.8 L 42.4 60.5 L 44.3 52.2 L 37.9 46.4 L 46.4 45.6 Z" fill="none" stroke="%23FFFFFF" stroke-width="0.6" opacity="0.8"/><path d="M 50 38 L 53.2 45.8 L 61.5 46.6 L 55.3 52.2 L 57.1 60 L 50 55.5 L 42.9 60 L 44.7 52.2 L 38.5 46.6 L 46.8 45.8 Z" fill="url(%23star)" filter="url(%23emboss)"/></svg>');
}

/* ===================================================
   🥇 金メダル (星の位置を大幅ダウン・目視中央調整版)
   =================================================== */
.medal-gold {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFE082"/><stop offset="18%" stop-color="%23FFF59D"/><stop offset="45%" stop-color="%23FFB300"/><stop offset="70%" stop-color="%23FF6F00"/><stop offset="85%" stop-color="%23FFE082"/><stop offset="95%" stop-color="%23FF8F00"/><stop offset="100%" stop-color="%234E2600"/></linearGradient><linearGradient id="body" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FFE082"/><stop offset="20%" stop-color="%23FFF59D"/><stop offset="45%" stop-color="%23FFB300"/><stop offset="70%" stop-color="%23FF6F00"/><stop offset="85%" stop-color="%23FFE082"/><stop offset="100%" stop-color="%23FF8F00"/></linearGradient><linearGradient id="star" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="30%" stop-color="%23FFE082"/><stop offset="75%" stop-color="%23FFB300"/><stop offset="100%" stop-color="%23D84315"/></linearGradient><linearGradient id="shine" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.45"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="emboss" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%233E1C00" flood-opacity="0.85"/></filter></defs><circle cx="50" cy="50" r="47" fill="url(%23ring)" stroke="%23FFF8E1" stroke-width="0.8"/><circle cx="50" cy="50" r="37" fill="url(%23body)" stroke="%233E1C00" stroke-width="1.2"/><path d="M 20 20 L 80 20 L 70 80 L 30 80 Z" fill="url(%23shine)" opacity="0.6"/><path d="M 50 37.5 L 53.6 45.6 L 62.1 46.4 L 55.7 52.2 L 57.6 60.5 L 50 55.8 L 42.4 60.5 L 44.3 52.2 L 37.9 46.4 L 46.4 45.6 Z" fill="none" stroke="%23FFF8E1" stroke-width="0.6" opacity="0.8"/><path d="M 50 38 L 53.2 45.8 L 61.5 46.6 L 55.3 52.2 L 57.1 60 L 50 55.5 L 42.9 60 L 44.7 52.2 L 38.5 46.6 L 46.8 45.8 Z" fill="url(%23star)" filter="url(%23emboss)"/></svg>');
}

 

/* 🏆 SVGトロフィーの共通設定 */
.reward-trophy-icon {
  display: inline-block;
  width: 115px;  /* 👈 トロフィーのサイズはここで一括変更できます */
  height: 115px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,0.5));
}

/* 🥉 銅のトロフィー */
.trophy-bronze {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="tm-b" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FFCCBC"/><stop offset="18%" stop-color="%23FFE0B2"/><stop offset="45%" stop-color="%23D87A51"/><stop offset="70%" stop-color="%238D3C1B"/><stop offset="85%" stop-color="%23E0A98B"/><stop offset="95%" stop-color="%235D220A"/><stop offset="100%" stop-color="%232A0B00"/></linearGradient><linearGradient id="tb-b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23A14723"/><stop offset="50%" stop-color="%234A1D0D"/><stop offset="100%" stop-color="%231F0800"/></linearGradient><linearGradient id="ts-b" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFF3E0"/><stop offset="30%" stop-color="%23FFCCBC"/><stop offset="75%" stop-color="%23D87A51"/><stop offset="100%" stop-color="%234A1D0D"/></linearGradient><linearGradient id="t-sh" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.4"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="f-tb" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%231F0800" flood-opacity="0.85"/></filter></defs><path d="M 32 26 C 10 26, 8 52, 32 54 L 32 46 C 18 45, 18 33, 32 33 Z" fill="url(%23tm-b)"/><path d="M 68 26 C 90 26, 92 52, 68 54 L 68 46 C 82 45, 82 33, 68 33 Z" fill="url(%23tm-b)"/><rect x="22" y="82" width="56" height="13" rx="3" fill="url(%23tb-b)" stroke="%233E1608" stroke-width="0.8"/><rect x="28" y="75" width="44" height="9" rx="2" fill="url(%23tm-b)"/><path d="M 42 56 L 58 56 L 55 76 L 45 76 Z" fill="url(%23tm-b)"/><ellipse cx="50" cy="57" rx="9" ry="2.5" fill="%23FFE0B2"/><path d="M 26 18 L 74 18 C 74 44, 62 60, 50 60 C 38 60, 26 44, 26 18 Z" fill="url(%23tm-b)"/><ellipse cx="50" cy="18" rx="24" ry="5" fill="url(%23tm-b)"/><ellipse cx="50" cy="19" rx="22" ry="4" fill="url(%23tm-b)"/><path d="M 43 18 L 51 18 L 49 60 L 46 60 Z" fill="url(%23t-sh)"/><path d="M 50 26.5 L 52.8 32.8 L 59.5 33.4 L 54.5 38.0 L 56.0 44.5 L 50 40.8 L 44 44.5 L 45.5 38.0 L 40.5 33.4 L 47.2 32.8 Z" fill="none" stroke="%23FFE0B2" stroke-width="0.6" opacity="0.8"/><path d="M 50 27 L 52.5 33 L 59 33.6 L 54.2 38.0 L 55.6 44 L 50 40.5 L 44.4 44 L 45.8 38.0 L 41 33.6 L 47.5 33 Z" fill="url(%23ts-b)" filter="url(%23f-tb)"/></svg>');
}

/* 🥈 銀のトロフィー */
.trophy-silver {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="tm-s" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ECEFF1"/><stop offset="18%" stop-color="%23FFFFFF"/><stop offset="45%" stop-color="%2390A4AE"/><stop offset="70%" stop-color="%23455A64"/><stop offset="85%" stop-color="%23CFD8DC"/><stop offset="95%" stop-color="%2337474F"/><stop offset="100%" stop-color="%23102027"/></linearGradient><linearGradient id="tb-s" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%2378909C"/><stop offset="50%" stop-color="%23263238"/><stop offset="100%" stop-color="%230D171D"/></linearGradient><linearGradient id="ts-s" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="30%" stop-color="%23ECEFF1"/><stop offset="75%" stop-color="%2390A4AE"/><stop offset="100%" stop-color="%23263238"/></linearGradient><linearGradient id="t-sh" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.4"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="f-ts" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%23102027" flood-opacity="0.85"/></filter></defs><path d="M 32 26 C 10 26, 8 52, 32 54 L 32 46 C 18 45, 18 33, 32 33 Z" fill="url(%23tm-s)"/><path d="M 68 26 C 90 26, 92 52, 68 54 L 68 46 C 82 45, 82 33, 68 33 Z" fill="url(%23tm-s)"/><rect x="22" y="82" width="56" height="13" rx="3" fill="url(%23tb-s)" stroke="%231C282E" stroke-width="0.8"/><rect x="28" y="75" width="44" height="9" rx="2" fill="url(%23tm-s)"/><path d="M 42 56 L 58 56 L 55 76 L 45 76 Z" fill="url(%23tm-s)"/><ellipse cx="50" cy="57" rx="9" ry="2.5" fill="%23FFFFFF"/><path d="M 26 18 L 74 18 C 74 44, 62 60, 50 60 C 38 60, 26 44, 26 18 Z" fill="url(%23tm-s)"/><ellipse cx="50" cy="18" rx="24" ry="5" fill="url(%23tm-s)"/><ellipse cx="50" cy="19" rx="22" ry="4" fill="url(%23tm-s)"/><path d="M 43 18 L 51 18 L 49 60 L 46 60 Z" fill="url(%23t-sh)"/><path d="M 50 26.5 L 52.8 32.8 L 59.5 33.4 L 54.5 38.0 L 56.0 44.5 L 50 40.8 L 44 44.5 L 45.5 38.0 L 40.5 33.4 L 47.2 32.8 Z" fill="none" stroke="%23FFFFFF" stroke-width="0.6" opacity="0.8"/><path d="M 50 27 L 52.5 33 L 59 33.6 L 54.2 38.0 L 55.6 44 L 50 40.5 L 44.4 44 L 45.8 38.0 L 41 33.6 L 47.5 33 Z" fill="url(%23ts-s)" filter="url(%23f-ts)"/></svg>');
}

/* 🥇 金のトロフィー */
.trophy-gold {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="tm-g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FFE082"/><stop offset="18%" stop-color="%23FFF59D"/><stop offset="45%" stop-color="%23FFB300"/><stop offset="70%" stop-color="%23FF6F00"/><stop offset="85%" stop-color="%23FFE082"/><stop offset="95%" stop-color="%23FF8F00"/><stop offset="100%" stop-color="%234E2600"/></linearGradient><linearGradient id="tb-g" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFB300"/><stop offset="50%" stop-color="%238D4000"/><stop offset="100%" stop-color="%233E1C00"/></linearGradient><linearGradient id="ts-g" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="30%" stop-color="%23FFE082"/><stop offset="75%" stop-color="%23FFB300"/><stop offset="100%" stop-color="%23D84315"/></linearGradient><linearGradient id="t-sh" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0"/><stop offset="50%" stop-color="%23ffffff" stop-opacity="0.4"/><stop offset="100%" stop-color="%23ffffff" stop-opacity="0"/></linearGradient><filter id="f-tg" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%233E1C00" flood-opacity="0.85"/></filter></defs><path d="M 32 26 C 10 26, 8 52, 32 54 L 32 46 C 18 45, 18 33, 32 33 Z" fill="url(%23tm-g)"/><path d="M 68 26 C 90 26, 92 52, 68 54 L 68 46 C 82 45, 82 33, 68 33 Z" fill="url(%23tm-g)"/><rect x="22" y="82" width="56" height="13" rx="3" fill="url(%23tb-g)" stroke="%234E2600" stroke-width="0.8"/><rect x="28" y="75" width="44" height="9" rx="2" fill="url(%23tm-g)"/><path d="M 42 56 L 58 56 L 55 76 L 45 76 Z" fill="url(%23tm-g)"/><ellipse cx="50" cy="57" rx="9" ry="2.5" fill="%23FFF59D"/><path d="M 26 18 L 74 18 C 74 44, 62 60, 50 60 C 38 60, 26 44, 26 18 Z" fill="url(%23tm-g)"/><ellipse cx="50" cy="18" rx="24" ry="5" fill="url(%23tm-g)"/><ellipse cx="50" cy="19" rx="22" ry="4" fill="url(%23tm-g)"/><path d="M 43 18 L 51 18 L 49 60 L 46 60 Z" fill="url(%23t-sh)"/><path d="M 50 26.5 L 52.8 32.8 L 59.5 33.4 L 54.5 38.0 L 56.0 44.5 L 50 40.8 L 44 44.5 L 45.5 38.0 L 40.5 33.4 L 47.2 32.8 Z" fill="none" stroke="%23FFF8E1" stroke-width="0.6" opacity="0.8"/><path d="M 50 27 L 52.5 33 L 59 33.6 L 54.2 38.0 L 55.6 44 L 50 40.5 L 44.4 44 L 45.8 38.0 L 41 33.6 L 47.5 33 Z" fill="url(%23ts-g)" filter="url(%23f-tg)"/></svg>');
}




/* 👑 王冠の共通設定 */
  .reward-crown-icon {
    display: inline-block;
    width: 120px;
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
  }

/* ===================================================
   🥉 銅の王冠 (メダル完全同期カラー版)
   =================================================== */
.crown-bronze {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="bm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%235D220A"/><stop offset="15%" stop-color="%23D87A51"/><stop offset="35%" stop-color="%23FFCCBC"/><stop offset="42%" stop-color="%23FFE0B2"/><stop offset="65%" stop-color="%238D3C1B"/><stop offset="85%" stop-color="%23E0A98B"/><stop offset="100%" stop-color="%232A0B00"/></linearGradient><linearGradient id="br" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%235D220A"/><stop offset="20%" stop-color="%23D87A51"/><stop offset="40%" stop-color="%23FFCCBC"/><stop offset="60%" stop-color="%238D3C1B"/><stop offset="100%" stop-color="%232A0B00"/></linearGradient><radialGradient id="gem-b" cx="35%" cy="25%" r="70%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="25%" stop-color="%236EE7B7"/><stop offset="60%" stop-color="%23047857"/><stop offset="100%" stop-color="%23064E3B"/></radialGradient><filter id="f3d-b" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%231F0800" flood-opacity="0.85"/></filter></defs><g filter="url(%23f3d-b)"><path d="M 15 75 Q 50 77 85 75 C 88 60 86 46 84 36 C 79 46 71 46 66 26 C 61 40 55 40 50 18 C 45 40 39 40 34 26 C 29 46 21 46 16 36 C 14 46 12 60 15 75 Z" fill="url(%23bm)" stroke="%234A1D0D" stroke-width="1"/><path d="M 15 75 Q 50 77 85 75 L 85 60 Q 50 62 15 60 Z" fill="url(%23br)" stroke="%234A1D0D" stroke-width="1"/><circle cx="16" cy="36" r="3" fill="url(%23br)" stroke="%234A1D0D" stroke-width="0.8"/><circle cx="34" cy="26" r="3.5" fill="url(%23br)" stroke="%234A1D0D" stroke-width="0.8"/><circle cx="50" cy="18" r="4" fill="url(%23br)" stroke="%234A1D0D" stroke-width="0.8"/><circle cx="66" cy="26" r="3.5" fill="url(%23br)" stroke="%234A1D0D" stroke-width="0.8"/><circle cx="84" cy="36" r="3" fill="url(%23br)" stroke="%234A1D0D" stroke-width="0.8"/><circle cx="50" cy="48" r="7.5" fill="url(%23gem-b)" stroke="%234A1D0D" stroke-width="1"/><path d="M 45 52 A 5 5 0 0 0 55 52" fill="none" stroke="%23A7F3D0" stroke-width="1.2" opacity="0.8"/><circle cx="47.5" cy="45" r="2.5" fill="%23ffffff"/><circle cx="52" cy="49" r="1" fill="%23ffffff" opacity="0.8"/></g></svg>');
}

/* ===================================================
   🥈 銀の王冠 (メダル完全同期カラー版)
   =================================================== */
.crown-silver {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="sm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%2337474F"/><stop offset="15%" stop-color="%2390A4AE"/><stop offset="35%" stop-color="%23ECEFF1"/><stop offset="42%" stop-color="%23FFFFFF"/><stop offset="65%" stop-color="%23455A64"/><stop offset="85%" stop-color="%23CFD8DC"/><stop offset="100%" stop-color="%23102027"/></linearGradient><linearGradient id="sr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%2337474F"/><stop offset="20%" stop-color="%2390A4AE"/><stop offset="40%" stop-color="%23ECEFF1"/><stop offset="60%" stop-color="%23455A64"/><stop offset="100%" stop-color="%23102027"/></linearGradient><radialGradient id="gem-s" cx="35%" cy="25%" r="70%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="25%" stop-color="%2338BDF8"/><stop offset="60%" stop-color="%230369A1"/><stop offset="100%" stop-color="%23075985"/></radialGradient><filter id="f3d-s" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%23102027" flood-opacity="0.85"/></filter></defs><g filter="url(%23f3d-s)"><path d="M 15 75 Q 50 77 85 75 C 88 60 86 46 84 36 C 79 46 71 46 66 26 C 61 40 55 40 50 18 C 45 40 39 40 34 26 C 29 46 21 46 16 36 C 14 46 12 60 15 75 Z" fill="url(%23sm)" stroke="%23263238" stroke-width="1"/><path d="M 15 75 Q 50 77 85 75 L 85 60 Q 50 62 15 60 Z" fill="url(%23sr)" stroke="%23263238" stroke-width="1"/><circle cx="16" cy="36" r="3" fill="url(%23sr)" stroke="%23263238" stroke-width="0.8"/><circle cx="34" cy="26" r="3.5" fill="url(%23sr)" stroke="%23263238" stroke-width="0.8"/><circle cx="50" cy="18" r="4" fill="url(%23sr)" stroke="%23263238" stroke-width="0.8"/><circle cx="66" cy="26" r="3.5" fill="url(%23sr)" stroke="%23263238" stroke-width="0.8"/><circle cx="84" cy="36" r="3" fill="url(%23sr)" stroke="%23263238" stroke-width="0.8"/><circle cx="50" cy="48" r="7.5" fill="url(%23gem-s)" stroke="%23263238" stroke-width="1"/><path d="M 45 52 A 5 5 0 0 0 55 52" fill="none" stroke="%23BAE6FD" stroke-width="1.2" opacity="0.85"/><circle cx="47.5" cy="45" r="2.5" fill="%23ffffff"/><circle cx="52" cy="49" r="1" fill="%23ffffff" opacity="0.9"/></g></svg>');
}

/* ===================================================
   🥇 金の王冠 (メダル完全同期カラー版)
   =================================================== */
.crown-gold {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="gm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FF8F00"/><stop offset="15%" stop-color="%23FFB300"/><stop offset="35%" stop-color="%23FFE082"/><stop offset="42%" stop-color="%23FFF59D"/><stop offset="65%" stop-color="%23FF6F00"/><stop offset="85%" stop-color="%23FFE082"/><stop offset="100%" stop-color="%234E2600"/></linearGradient><linearGradient id="gr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23FF8F00"/><stop offset="20%" stop-color="%23FFB300"/><stop offset="40%" stop-color="%23FFE082"/><stop offset="60%" stop-color="%23FF6F00"/><stop offset="100%" stop-color="%234E2600"/></linearGradient><radialGradient id="gem-r" cx="35%" cy="25%" r="70%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="25%" stop-color="%23FB7185"/><stop offset="60%" stop-color="%23BE123C"/><stop offset="100%" stop-color="%23881337"/></radialGradient><filter id="f3d" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="%233E1C00" flood-opacity="0.85"/></filter></defs><g filter="url(%23f3d)"><path d="M 15 75 Q 50 77 85 75 C 88 60 86 46 84 36 C 79 46 71 46 66 26 C 61 40 55 40 50 18 C 45 40 39 40 34 26 C 29 46 21 46 16 36 C 14 46 12 60 15 75 Z" fill="url(%23gm)" stroke="%233E1C00" stroke-width="1"/><path d="M 15 75 Q 50 77 85 75 L 85 60 Q 50 62 15 60 Z" fill="url(%23gr)" stroke="%233E1C00" stroke-width="1"/><circle cx="16" cy="36" r="3" fill="url(%23gr)" stroke="%233E1C00" stroke-width="0.8"/><circle cx="34" cy="26" r="3.5" fill="url(%23gr)" stroke="%233E1C00" stroke-width="0.8"/><circle cx="50" cy="18" r="4" fill="url(%23gr)" stroke="%233E1C00" stroke-width="0.8"/><circle cx="66" cy="26" r="3.5" fill="url(%23gr)" stroke="%233E1C00" stroke-width="0.8"/><circle cx="84" cy="36" r="3" fill="url(%23gr)" stroke="%233E1C00" stroke-width="0.8"/><circle cx="50" cy="48" r="7.5" fill="url(%23gem-r)" stroke="%233E1C00" stroke-width="1"/><path d="M 45 52 A 5 5 0 0 0 55 52" fill="none" stroke="%23FECDD3" stroke-width="1.2" opacity="0.85"/><circle cx="47.5" cy="45" r="2.5" fill="%23ffffff"/><circle cx="52" cy="49" r="1" fill="%23ffffff" opacity="0.9"/></g></svg>');
}



/* ===================================================
   ✨ エフェクト＆光演出系（元々の光を常時固定＋星演出）
   =================================================== */

/* 1. 本体（メダル・王冠・トロフィー共通）のコンテナ
   👉 アニメーションにせず、元々パッと光っていた最大の輝きを常時固定 */
.sparkle-frame {
  position: relative;
  display: inline-block;
  filter: drop-shadow(0 0 25px rgba(255, 215, 0, 0.9)) brightness(1.25);
}

/* 2. 手前に浮かぶキラキラ星の共通設定 */
.sparkle-frame .sparkle-star {
  position: absolute;
  font-style: normal;
  color: #ffffff;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  display: block;
  line-height: 1;
  width: 1em;
  height: 1em;
  text-align: center;
  transform-origin: center center;

  /* 💡 発光の広がりを抑えた金色のシャドウ */
  text-shadow: 
    0 0 6px #ffffff,
    0 0 12px #fef08a,
    0 0 18px #eab308;
}

/* 📍 星の配置 1：左上 */
.sparkle-frame .star-1 {
  top: 4px;
  left: 8px;
  font-size: 22px;
  animation: popInPlace 2.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
}

/* 📍 星の配置 2：右上 */
.sparkle-frame .star-2 {
  top: 14px;
  right: 8px;
  font-size: 14px;
  animation: popInPlace 3.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.9s infinite;
}

/* 📍 星の配置 3：左下 */
.sparkle-frame .star-3 {
  bottom: 10px;
  left: 12px;
  font-size: 18px;
  animation: popInPlace 4.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.8s infinite;
}

/* 📍 星の配置 4：右下 */
.sparkle-frame .star-4 {
  bottom: 6px;
  right: 10px;
  font-size: 24px;
  animation: popInPlace 3.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s infinite;
}

/* ---------------------------------------------------
   🎬 アニメーション定義（星のポンポン用）
   --------------------------------------------------- */

/* 🌟 星がポンッと現れて点滅する動き */
@keyframes popInPlace {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  20% {
    opacity: 1;
    transform: scale(1.1);
  }
  55% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.1);
  }
}


 
 /* ボタン */
  .reward-close-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(to right, #facc15, #f59e0b);
    color: #000;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
  }

  /* アニメーション */
  @keyframes rewardPopUp {
    0% { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

 

  /* 難易度ボタンの横につくミニアイコン用 */
  .diff-icon {
    margin-left: 6px;
    font-size: 1.1em;
  }



//* ==============================================
   1. 級バッジ（丸型）＆ 位置調整（上基準で動く設定）
   ============================================== */

/* 💡 アイコン自体をバッジの基準点にする設定 */
.sparkle-frame {
  position: relative;
}

.badge-grade {
  position: absolute;
  
  /* 💡 bottom ではなく top（上基準）にするのがコツ！
     数字を -8px, -12px みたいに増やすとどんどん上に持ち上がります */
  top: 80px;          
  right: 5px;        
  
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;       /* 白枠削除 */
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 11px;
  font-weight: 900;
  
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  z-index: 10;
}

/* 2. 【マスター称号】上寄せ調整 */
.badge-title-container {
  /* 💡 数字をマイナスに大きくするとアイコンに近づきます（上へ引っ張る） */
  margin-top: -40px; 
}

.badge-title {
  display: inline-block;
  padding: 4px 18px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.5px;
  
  /* V字リボン型 */
  clip-path: polygon(0% 0%, 100% 0%, 92% 50%, 100% 100%, 0% 100%, 8% 50%);
  
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
}


/* ==============================================
   ✨ なめらかツヤツヤグラデーション（決定版）
   ============================================== */

/* 🥉 ブロンズ（自然な光沢のコッパー・銅） */
.rank-bronze {
  background: linear-gradient(135deg, #fce2c4 0%, #e09b53 50%, #9e5318 100%);
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}

/* 🥈 シルバー（自然な光沢の上品な銀） */
.rank-silver {
  background: linear-gradient(135deg, #ffffff 0%, #d8dce3 50%, #8f95a1 100%);
  color: #1a1a24;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
}

/* 🥇 ゴールド（ボタン風の鮮やかでつややかな金） */
.rank-gold {
  background: linear-gradient(135deg, #fff5b8 0%, #facc15 50%, #d97706 100%);
  color: #3d2b00;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
}





`;
document.head.appendChild(achievementStyle);






// ---------------------------------------------------
// ⚙️ 報酬設定データ（5勝=メダル / 10勝=トロフィー / 20勝=王冠）
// ---------------------------------------------------
const REWARD_CONFIG = {
  5: {
    baseClass: 'reward-medal-icon', // 🏅 メダル用
   easy:   { colorClass: 'medal-bronze', name: '銅メダル', grade: '9級', title: null },
    medium: { colorClass: 'medal-silver', name: '銀メダル', grade: '6級', title: null },
    hard:   { colorClass: 'medal-gold',   name: '金メダル', grade: '3級', title: null }
  },
 
  10: {
    baseClass: 'reward-trophy-icon', // 🏆 トロフィー用
   easy:   { colorClass: 'trophy-bronze', name: '銅のトロフィー', grade: '8級', title: null },
    medium: { colorClass: 'trophy-silver', name: '銀のトロフィー', grade: '5級', title: null },
    hard:   { colorClass: 'trophy-gold',   name: '金のトロフィー', grade: '2級', title: null }
  },

 20: {
    baseClass: 'reward-crown-icon', // 👑 王冠用
    easy:   { colorClass: 'crown-bronze', name: '銅の王冠', grade: '7級', title: 'ブロンズマスター' },
    medium: { colorClass: 'crown-silver', name: '銀の王冠', grade: '4級', title: 'シルバーマスター' },
    hard:   { colorClass: 'crown-gold',   name: '金の王冠', grade: '1級', title: 'ゴールドマスター' }
  }

};




// ---------------------------------------------------
// 3. 📦 本体の難易度ボタン横にメダルアイコンを自動で差し込む処理
// ---------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // id="btn-easy", "btn-medium", "btn-hard" のボタンを探してアイコンをつける
  const btnEasy   = document.getElementById('btn-easy');
  const btnMedium = document.getElementById('btn-medium');
  const btnHard   = document.getElementById('btn-hard');

  if (btnEasy)   btnEasy.innerHTML   += ` <span class="diff-icon">${DIFFICULTY_CONFIG.easy.icon}</span>`;
  if (btnMedium) btnMedium.innerHTML += ` <span class="diff-icon">${DIFFICULTY_CONFIG.medium.icon}</span>`;
  if (btnHard)   btnHard.innerHTML   += ` <span class="diff-icon">${DIFFICULTY_CONFIG.hard.icon}</span>`;
});


// ---------------------------------------------------
// 4. 🎯 勝利時に呼ぶメイン関数（5勝・10勝判定＆ポップアップ表示）
// ---------------------------------------------------
function checkAndShowReward(winCount, difficulty = 'easy') {
 
  // 5勝・10勝・20勝の時だけ発動
  if (winCount !== 5 && winCount !== 10 && winCount !== 20) return;

  // 設定を取得
  const rewardGroup = REWARD_CONFIG[winCount];
  const diffData = rewardGroup[difficulty] || rewardGroup.easy;

  // ✨ すべてCSSクラス表示に統一されたため、1行でスッキリ取得できます！
  const iconHtml = `<div class="${rewardGroup.baseClass} ${diffData.colorClass}"></div>`;

    closeRewardModal();

 


// ① 最前面でクラッカー🎉を発射＆連続発射ループを開始
  if (typeof confetti === 'function') {
    const count = winCount === 20 ? 200 : (winCount === 10 ? 100 : 60);

    // 💡 最初のドカンと同じライブラリ標準の全11色
    const defaultPalette = [
      '#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42',
      '#ffa62d', '#ff36ff', '#00ffcc', '#ff3366', '#33ccff', '#99ff33'
    ];

    // 💡 色をランダムに1色選ぶ小さな関数
    const getRandomColor = () => [defaultPalette[Math.floor(Math.random() * defaultPalette.length)]];

    // 1. 最初の下からの豪華なドカン！🎉（完全そのまま）
    confetti({
      particleCount: count,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      zIndex: 99999
    });
    confetti({
      particleCount: count,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      zIndex: 99999
    });

    // 2. 中央より下まで、ずっと紙吹雪が降り続けるループ✨
    window.confettiLoop = setInterval(() => {
      // 【左上から：1発ずつ別々の色で飛ばす】
      confetti({
        particleCount: 1,
        angle: 35,
        spread: 55,
        startVelocity: 30,
        origin: { x: -0.05, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(), // 💡 1発ごとにランダムな1色を個別指定！
        zIndex: 99999,
        scalar: 1.15
      });
      confetti({
        particleCount: 1,
        angle: 35,
        spread: 55,
        startVelocity: 30,
        origin: { x: -0.05, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(), // 💡 もう1発も別のランダム色！
        zIndex: 99999,
        scalar: 1.15
      });

      // 【真ん中上から：1発ずつ別々の色で飛ばす】
      confetti({
        particleCount: 1,
        angle: 90,
        spread: 80,
        startVelocity: 15,
        origin: { x: 0.5, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(),
        zIndex: 99999,
        scalar: 1.15
      });
      confetti({
        particleCount: 1,
        angle: 90,
        spread: 80,
        startVelocity: 15,
        origin: { x: 0.5, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(),
        zIndex: 99999,
        scalar: 1.15
      });

      // 【右上から：1発ずつ別々の色で飛ばす】
      confetti({
        particleCount: 1,
        angle: 145,
        spread: 55,
        startVelocity: 30,
        origin: { x: 1.05, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(),
        zIndex: 99999,
        scalar: 1.15
      });
      confetti({
        particleCount: 1,
        angle: 145,
        spread: 55,
        startVelocity: 30,
        origin: { x: 1.05, y: -0.15 },
        gravity: 0.82,
        ticks: 500,
        colors: getRandomColor(),
        zIndex: 99999,
        scalar: 1.15
      });
    }, 220);
  }



// 💡 エラー防止ガード付きの色判定（modalHtml の直前に貼り付け）
const color = (diffData && diffData.colorClass) ? diffData.colorClass : '';
const rankClass = color.includes('bronze') ? 'rank-bronze' 
                : color.includes('silver') ? 'rank-silver' 
                : 'rank-gold';



 // ② ポップアップ（HTML）を組み立てて表示
  const modalHtml = `
    <div id="rewardModalOverlay" class="reward-modal-overlay">
      <div class="reward-modal-box">
        <div style="color: #facc15; font-size: 12px; font-weight: bold;">
          ★ ACHIEVEMENTS UNLOCKED ★
        </div>

        <!-- 🏅 アイコン ＋ 級バッジ -->
       <div class="reward-medal-container">

          <!-- ✨ メダル・王冠・トロフィー共通（CSS背景画像＋キラキラ表示） -->
          <span class="${rewardGroup.baseClass} ${diffData.colorClass} sparkle-frame">
            <i class="sparkle-star star-1">✦</i>
            <i class="sparkle-star star-2">✦</i>
            <i class="sparkle-star star-3">✦</i>
            <i class="sparkle-star star-4">✦</i>
          </span>



         ${diffData.grade ? `<span class="badge-grade ${rankClass}">${diffData.grade}</span>` : ''}
          </span>
        </div>

       <!-- 💡 マスター称号バッジ（アイコンのすぐ下） -->
        ${diffData.title ? `<div class="badge-title-container"><span class="badge-title ${rankClass}">👑 ${diffData.title}</span></div>` : ''}




        <h2 style="margin: 10px 0 5px 0; font-size: 22px;">${winCount}連勝達成！</h2>
    
        <!-- 1. メダル・トロフィー・王冠名 -->
        <p style="font-size: 12px; color: #ccc; margin: 0;">${diffData.name}を獲得しました！</p>
        
       <!-- 2. 級の授与（grade が存在する場合のみ表示） -->
        ${diffData.grade ? `<p style="font-size: 13px; color: #bae6fd; margin: 8px 0 0 0; font-weight: 500;">「${diffData.grade}」の称号が<br>授与されました！</p>` : ''}
        
        <!-- 3. マスター称号の獲得（title が存在する場合のみ表示） -->
        ${diffData.title ? `<p style="font-size: 12px; color: #ffd700; margin: 2px 0 0 0; font-weight: bold;">称号「${diffData.title}」を<br>獲得しました！</p>` : ''}

        <button class="reward-close-btn" onclick="closeRewardModal()" style="margin-top: 15px;">受け取る！</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
}



// 🎁 「受け取る！」ボタンを押した時
function closeRewardModal() {
  // ① これから出る紙吹雪のタイマーをストップ！
  if (window.confettiLoop) {
    clearInterval(window.confettiLoop);
    window.confettiLoop = null;
  }

  // ② 【追加】今画面で舞っている紙吹雪を一瞬でピタッと完全消去！✨
  if (typeof confetti === 'function' && typeof confetti.reset === 'function') {
    confetti.reset();
  }

  // ③ 🌟 将来ここにメダル授与などの保存処理を入れる

  // ④ モーダルを閉じる
  const modal = document.getElementById('rewardModalOverlay');
  if (modal) modal.remove();
}
