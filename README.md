# AC_HW 密碼產生器
使用 Express 框架，指定密碼長度 4~16個字元，可以選擇是否包含大小寫字母、數字、符號。
## 環境建置
1. [Node.js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/zh-tw/)
3. [Handlebars](https://handlebarsjs.com/)
## 安裝流程
1. 打開你的 terminal，Clone 此專案至本機電腦，在終端機輸入
```
git clone https://github.com/leoutan/passwordGenerator.git
```
2. 在終端機移動到存放此專案的資料夾
```
cd passwordGenerator
```
3. 依據 package.json 套件清單，安裝 npm 套件，在終端機輸入
```
npm install
```
4. 啟動伺服器，在終端機輸入以下，會執行 npm script 定義的指令
```
npm run dev
```
終端顯示 `passwordGenerator Server on http://localhost:3000` 即啟動完成，請至 http://localhost:3000/ 開始使用程式
## 功能
- 使用者可以調整產生的密碼長度
- 使用者可以選擇產生的密碼中是否包含大小寫英文字母、數字、符號在內
- 使用者可以選擇哪些字元不要出現在產出來的密碼中
- 將使用者填寫的資料保留在表單
- 處理未填寫或錯誤填寫資料的情況
