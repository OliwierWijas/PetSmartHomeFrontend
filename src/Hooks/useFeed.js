const useFeed = () => {
    const handleFeedClick = () => {
        fetch('http://localhost:5172/feed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'Feed button clicked' }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Request failed');
                }

                return res.text();
            })
            .then((data) => {
                alert('Success: ' + data);
            })
            .catch((err) => {
                alert('Error: ' + err.message);
                console.error('API Error:', err);
            });
    };

    return { handleFeedClick };
};

export default useFeed;
