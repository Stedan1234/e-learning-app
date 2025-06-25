function Button({ children, bgColor = "blue", onClick, style = {}, ...props }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgColor,
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                ...style,
            }}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;