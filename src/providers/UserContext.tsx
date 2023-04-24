import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { IRegisterFormData } from "../components/Form/RegisterForm";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  registerUserApi: (formData: IRegisterFormData) => Promise<void>;
  loginUserApi: (formData: IRegisterFormData) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem("@KenzieBurger:token") || "null"
    );
    const userId = localStorage.getItem("@KenzieBurger:userID");

    const userAutoLogin = async () => {
      try {
        const { data } = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/shop");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@KenzieBurger:token");
        localStorage.removeItem("@KenzieBurger:userID");
      }
    };

    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const loginUserApi = async (formData: IRegisterFormData) => {
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem(
        "@KenzieBurger:token",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem(
        "@KenzieBurger:userID",
        JSON.stringify(response.data.user.id)
      );
      navigate("/shop");
    } catch (error) {
      toast.error("Email ou senha inválidos");
      console.error(error);
    }
  };

  const registerUserApi = async (formData: IRegisterFormData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta cadastrada com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      toast.error("Dados inválidos");
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ registerUserApi, loginUserApi }}>
      {children}
    </UserContext.Provider>
  );
};
