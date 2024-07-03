import { Container } from "@mui/material";
import React, { useState } from "react";
import Backend from "../components/Backend";
import Frontend from "../components/Frontend";
import Ui from "../components/Ux/Ui";
import Ios from "../components/Ios";
import Android from "../components/Android";

const VALUES = {
    frontend: "Frontend",
    backend: "Backend",
    ios: "Ios",
    android: "Android",
    ui: "Ux/Ui",
};

const GetCategories = ({ tab }) => {
    switch (tab) {
        case VALUES.frontend:
            return <Frontend />;
        case VALUES.backend:
            return <Backend/>;
        case VALUES.android:
            return <Android/>;
        case VALUES.ios:
            return <Ios/>;
        case VALUES.ui:
            return <Ui/>;
        default:
            return <div>frontend</div>;
    }
};

const MainPage = () => {
    const categoriesSelect = [
        { value: VALUES.frontend, label: "Frontend" },
        { value: VALUES.backend, label: "Backend" },
        { value: VALUES.ios, label: "Ios" },
        { value: VALUES.android, label: "Android" },
        { value: VALUES.ui, label: "Ux/Ui" },
    ];
    const [value, setValue] = useState(categoriesSelect?.[0].value);


    return (
        <Container>
            <Frontend
                value={value}
                setValue={setValue}
                categoriesSelect={categoriesSelect}
            />
            <GetCategories tab={value} />
        </Container>
    );
};

export default MainPage;