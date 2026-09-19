import type { Role } from "../types";

export default function RoleModal({
  onSelect,
  onClose,
}: {
  onSelect: (role: Role) => void;
  onClose: () => void;
}) {
  return (
    <div className="role-modal-backdrop" onClick={onClose}>
      <div className="role-modal" onClick={(event) => event.stopPropagation()}>
        <p>
          Login as <span>→</span>
        </p>
        <button className="role-modal-option" onClick={() => onSelect("admin")}>
          Admin
        </button>
        <button className="role-modal-option" onClick={() => onSelect("farmer")}>
          Farmer
        </button>
      </div>
    </div>
  );
}
