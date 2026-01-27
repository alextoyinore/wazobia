import { createContext } from "react";

export const ThemeContext = createContext("light");

export const CartContext = createContext(['item1', 'item2']);

export const UserContext = createContext({ name: "Guest", loggedIn: false });

