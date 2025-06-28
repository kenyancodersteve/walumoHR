export default function RoleBadge({ role }) {
  return (
    <span style={{
      padding: "4px 10px",
    //   backgroundColor: role === "contractor" ? "#ffe0b2" : "#bbdefb",
      borderRadius: "20px",
      fontWeight: "bold",
      marginLeft: "8px",
      fontSize: "0.85rem",
      backgroundColor: "white",
      color:"#00796b"
    }}>
      {role}
    </span>
  );
}
