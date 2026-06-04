import Badge from "./Badge";

export default function ServiceStatusBadge({ status }) {
  const statusMap = {
    Completed: "success",
    Pending: "warning",
    Cancelled: "danger",
  };
  return <Badge type={statusMap[status] || "primary"}>{status}</Badge>;
}