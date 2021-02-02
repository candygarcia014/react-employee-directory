import React from "react";

const styles = {
    header: {
        backgroundColor: "#D99E6A",
        color: "#8C4332",
           
    }
};

function Header() {
    return (
        <div className="jumbotron" style={styles.header}>
            <h1 className="display-1 text-center font-weight-normal">React Employee Directory</h1>
        </div>
    );
};

export default Header;