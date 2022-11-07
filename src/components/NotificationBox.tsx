export const NotificationBox = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex space-x-4 justify-center">
            <div>
                <div className="text-xl font-medium text-black">
                    Notification
                </div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
    );
};
