# logger寫在service或middleware差別？

在 Nest.js 專案中，將 logger 寫在 service 或 middleware 中會有一些差異，這取決於你的需求和應用的特性。

## 將 Logger 寫在 Service 中的優點：

1. 業務邏輯分離：將 Logger 放在 Service 中可以將業務邏輯和日誌記錄分離開來，使得 Service 更專注於處理業務邏輯，增強了代碼的可讀性和可維護性。
2. 單一職責原則：Service 通常應該只負責處理特定的業務邏輯，將 Logger 放在 Service 中有助於遵循單一職責原則。
3. 更好的測試性：將 Logger 放在 Service 中使得在測試時更容易控制日誌輸出，可以更輕鬆地模擬不同的情況和錯誤。


## 將 Logger 寫在 Middleware 中的優點：
1. 全局性：Middleware 可以在每個請求處理過程中都被調用，因此將 Logger 放在 Middleware 中可以方便地記錄每個請求的詳細信息，如請求 URL、HTTP 方法、請求參數等。
2. 統一管理：將 Logger 放在 Middleware 中可以方便地統一管理日誌記錄，例如設置日誌格式、級別、輸出目的地等。
3. 請求/回應上下文：Middleware 可以輕鬆訪問請求和回應對象，因此可以輕鬆地在日誌中包含諸如請求 ID、用戶 IP 等相關信息。

## 如何選擇？
- 如果你需要在每個請求處理過程中都記錄日誌，或者需要在日誌中包含請求/回應的相關信息，那麼將 Logger 放在 Middleware 中可能是一個更好的選擇。
- 如果你希望業務邏輯更為清晰，並希望在測試時更容易控制日誌輸出，那麼將 Logger 放在 Service 中可能更適合你的需求。
- 最佳做法可能是結合使用，將 Logger 放在 Middleware 中用於全局記錄，並且在需要特定業務邏輯的地方將 Logger 放在相應的 Service 中。這樣可以確保既滿足全局日誌記錄的需求，又保持業務邏輯的清晰性和可測試性。


## Reference
- [Introduction to logging with the built-in logger and TypeORM](https://wanago.io/2021/10/04/api-nestjs-logging-typeorm/)