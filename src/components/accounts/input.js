export default function Input({ type, name, id, placeholder, ref }) {
    return (
        <input 
            type={type ?? "text"} 
            id={id ?? ""}
            name={name ?? ""} 
            className={`border rounded p-2 w-full`}
            placeholder={placeholder}
            ref={ref}
            required />
    );
}