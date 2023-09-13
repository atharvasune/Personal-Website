export default function BlogsContainer({children}: {children: React.ReactNode}) {
    return (
        <div className="w-2/5 lg:w-1/2 mx-auto h-full min-h-full max-h-full overflow-y-auto p-2 py-4">
            {children}
        </div>
    );
}