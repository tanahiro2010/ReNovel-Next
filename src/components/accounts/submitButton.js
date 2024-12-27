export default function SubmitButton({ color, children }) {
    return (
        <button type="submit" className={`submit bg-${color}-500 text-white py-2 px-4 rounded`}>
            { children }
        </button>
    )
}