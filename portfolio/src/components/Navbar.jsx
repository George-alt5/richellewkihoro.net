import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Research", to: "/research"},
    {label: "Speaking", to: "/speaking"},
    { label: "Contact", to: "/contact" },
];

