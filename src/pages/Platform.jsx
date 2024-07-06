import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/common/DefaultLayout/DefaultLayout";
import routesConfig from "../utils/routesConfig";
import { axiosInstance } from "../services/axiosService";

const Platform = () => {
  // useEffect(() => {
  //   axiosInstance
  //     .post("https://api.safe.madvil2.me/api/v1/me", {
  //       telegram_id: "000000000",
  //       hash: "0000a000a",
  //     })
  //     .then((r) => console.log(r))
  //     .catch((error) => {
  //       console.error("Error during login:", error);
  //       throw error;
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {routesConfig.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default Platform;
