import { useCallback, useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const login = useCallback((jwtToken, id) => {
    if (!jwtToken || !id) return;
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );

    // Очистить задачи для нового пользователя
    localStorage.removeItem("tasks"); // Сбрасывает задачи, если они есть в локальном хранилище
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("tasks"); // Удалить задачи при выходе
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      login(data.token, data.userId);
    }
    setIsReady(true);
  }, [login]);

  return { login, logout, token, isReady, userId };
};
