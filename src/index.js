import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./utils/i18n";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { setTelegramData } from "./store/slices/telegramSlice";
import paths from "./pages/paths";

const root = ReactDOM.createRoot(document.getElementById("root"));

const InitApp = () => {
  const [isTg, setIsTg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      const isUserFromTelegram = !!tg.initDataUnsafe?.user?.id;
      // const isUserFromTelegram = true;
      setIsTg(isUserFromTelegram);
      if (!isUserFromTelegram) {
        window.location.href = "https://t.me/SafeWeb3Bot/discover";
      } else {
        const data = {
          initData: tg.initDataUnsafe,
          user: tg.initDataUnsafe.user,
          chat: tg.initDataUnsafe.chat,
          startParam: tg.initDataUnsafe.start_param,
          platform: tg.platform,
          theme: tg.themeParams,
          isExpanded: tg.isExpanded,
          viewportHeight: tg.viewportHeight,
          viewportStableHeight: tg.viewportStableHeight,
        };
        dispatch(setTelegramData(data));

        if (tg.SettingsButton) {
          tg.SettingsButton.show();
          tg.SettingsButton.onClick(() => {
            window.location.pathname = paths.settings;
          });
        }

        tg.onEvent("web_app_close", () => {
          const confirmed = window.confirm(
            "Are you sure you want to close the application?",
          );
          if (confirmed) {
            tg.close();
          }
        });
      }
    } else {
      console.log("Telegram WebApp API is not available");
      setIsTg(false);
    }
  }, [dispatch]);

  if (isTg === null) {
    return null;
  }

  if (!isTg) {
    return null;
  }

  return <App />;
};

root.render(
  <Provider store={store}>
    <InitApp />
  </Provider>,
);
