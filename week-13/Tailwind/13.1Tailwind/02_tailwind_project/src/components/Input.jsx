export default function Input({ onClick, type, placeholder }) {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl text-4xl px-2 py-2 text-white cursor-pointer bg-blue-200 `}
    >
      <input type={type} placeholder={placeholder}></input>
    </span>
  );
}
