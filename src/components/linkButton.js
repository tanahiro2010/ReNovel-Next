export default function linkButton({ url, className, children }) {
    return (
        <a 
            href={url} 
            className={className}
            
        >{children}</a>
    )
}