export function calcHowLongAgoWasCreated(createdDatetime: string): string {
    const date = new Date(createdDatetime);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days === 0) {
        if (hours === 0) {
            if (minutes < 1) {
                return "Just now";
            }
            if (minutes === 1) {
                return "1 min ago";
            }
            if (minutes < 60) {
                return `${minutes} mins ago`;
            }
        }
        if (hours === 1) {
            return "1 hour ago";
        }
        return `${hours} hours ago`;
    }
    if (days === 1) {
        return "Yesterday";
    }
    if (date.getMonth() === now.getMonth()) {
        return `${days} days ago`;
    }
    if (date.getFullYear() === now.getFullYear()) {
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' });
}
