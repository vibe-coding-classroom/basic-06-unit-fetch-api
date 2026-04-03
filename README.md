Viewed basic-06-unit-fetch-api.html:1-392

針對 **`basic-06-unit-fetch-api` (JavaScript 非同步編程：Fetch API 基礎)** 單元，這是學員從「靜態網頁」跨向「動態交互應用」的技術分水嶺。它要求學員具備 **非同步編程 (Asynchronous Programming)** 的思維，學習如何優雅地處理背景請求、解析 JSON 數據，並實作具備 **「容錯能力 (Resilience)」** 的強韌通訊模組，以應對不穩定的物聯網網路環境。

以下是在 **GitHub Classroom** 部署其作業 (Assignments) 的具體建議：

### 1. 範本倉庫 (Template Repo) 配置建議
Fetch API 作業的核心在於「非同步邏輯」與「UI 狀態管理」，範本應包含前端介面骨架與模擬 API，建議包含：
*   **📂 `index.html`**：**前端介面骨架**。包含資料顯示區域、提交表單、Loading 動畫元件以及錯誤訊息提示框。
*   **📂 `main.js`**：**非同步邏輯實作區**。提供 `async/await` 函式結構，學員需填補其中的 `fetch` 邏輯、`json()` 解析以及 `try...catch` 異常處理。
*   **📂 `README.md`**：**通訊實驗報告**。要求學員記錄「正常獲取」、「404 報錯」以及「逾時中斷」三種場景下的網路控制台 (Network Tab) 截圖。
*   **📂 `server/` (選配)**：若學員手邊暫無 ESP32，可提供一個簡單的 `json-server` 配置供本地模擬測試。

---

### 2. 作業任務部署細節

#### 任務 1：「動態資料看板」JSON 獲取與渲染 (Dynamic Dashboard Lab)
*   **目標**：掌握 `fetch` 的基本 GET 用法與 `Fulfilled` 狀態處理，實作非阻塞式的內容加載。
*   **Classroom 部署建議**：
    *   **非同步渲染流程**：點擊「重新整理」後，先顯示 Loading 轉圈。
    *   **資料遍歷**：成功獲取 JSON 陣列後，使用 `map()` 或 `forEach()` 動態將資料產生為 HTML 列表。
    *   **驗證要點**：資料加載結束後 Loading 元件是否正確隱藏？資料是否完整渲染至指定 DOM 節點？

#### 任務 2：「留言板實作」POST 請求提交 (Bulletin Board Lab)
*   **目標**：學會配置 HTTP 請求標頭 (Headers) 與資料序列化 (Serialization)，理解 RESTful API 的寫入規範。
*   **Classroom 部署建議**：
    *   **提交配置**：實作 `method: "POST"`。**核心考點**：必須正確設置 `"Content-Type": "application/json"`。
    *   **序列化實作**：使用 `JSON.stringify(data)` 將物件轉化為字串傳輸。
    *   **互動閉環**：提交成功後，需自動清空輸入框，並彈出「提交成功」提示。
    *   **驗證要點**：在網路面板中檢查 Request Payload 的格式是否符合 JSON 規範。

#### 任務 3：「強韌通訊官」斷網與逾時保護 (Robust Fetch Lab)
*   **目標**：掌握防禦性編程 (Defensive Programming)，利用 `AbortController` 與 `res.ok` 機制建立商業級的容錯系統。
*   **Classroom 部署建議**：
    *   **逾時機制**：設定 5 秒超時保護。若 ESP32 因繁忙或斷網無響應，主動拋出 `AbortError`。
    *   **邏輯攔截**：**關鍵技術審查**。必須檢查 `if (!res.ok)` 拋出錯誤（因為 `fetch` 遇到 404/500 不會自動拋錯）。
    *   **異常捕獲**：在 `catch` 塊中區分「網路失敗」與「逾時失敗」，並分別給予使用者友善的 UI 提示。
    *   **最終 Commit**：Push 具備完整超時與容錯處理的 Web 客戶端程式碼。

---

### 3. 非同步通訊與體驗優化點評標準 (Asynchronous UX & Robustness Standards)
此單元的價值在於 **「對通訊生命週期的全面掌控與對異常狀態的優雅處理」**：
*   [ ] **Body 解析深度**：是否理解 `await res.json()` 的必要性（解析 Body 是耗時操作）？
*   [ ] **HTTP 狀態檢核**：是否具備 `res.ok` 的檢查意識？
*   [ ] **系統穩健度**：在模擬斷網或伺服器宕機情況下，網頁是否能正確顯示錯誤訊息而非「靜默卡死」？

### 📁 推薦範本結構 (GitHub Classroom Template)：
```text
.
├── index.html        # UI：資料看板與提交表單的 HTML 結構
├── style.css         # 樣式：包含 Loading 動畫與 Error 提示樣式
├── main.js           # 邏輯：fetch() 請求發送、JSON 解析與 DOM 注入
├── docs/Network.md   # 圖檔：學員擷取的 Fetch 各階段網絡分析圖
└── README.md         # 總結：我如何透過非同步技術提升 Web 與硬體的互動體驗
```

透過這種部署方式，學生能體驗到 **「好的前端工程師，不是在寫畫面的人，而是能預見網路的不確定性、並用非同步技術為使用者建立起『永不卡死、處處有反饋』流暢體驗的通訊大師」**。掌握 Fetch API 與強韌通訊技術後，學員將擁有了開發「實時監控儀表板、雲端指令中心、大數據通訊模型」最專業也最核心的 Web 研發實力！_
|
|
太精采了！我們已經將 **基礎 06**（非同步與安全）系列中關於 CORS 安全性與 Fetch API 的 Classroom 部署定義全部完成了。這標誌著學員終於能像開發 API Pro 一樣，隨心所欲地控制網頁與硬體間的數據流動。恭喜！全端開發的最後一塊拼圖已經拼上！
