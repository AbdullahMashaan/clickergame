const calculateIncrement = (activeUpgrades) => {
    let increment = 1;
    activeUpgrades.forEach(upgrade => {
        switch (upgrade.effect) {
            case "double":
                increment *= 2;
                break;
            case "triple":
                increment *= 3;
                break;
            case "quadruple":
                increment *= 4;
                break;
            default:
                break;
        }
    });
    return increment;
};

export default calculateIncrement;
