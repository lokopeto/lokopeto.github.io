fetch('/videos/demos')
.then(response => response.json())
.then(videoFiles => {
    const videoList = document.getElementById('video-list');
    videoFiles.forEach(videoFile => {
        const listItem = document.createElement('li');
        listItem.textContent = videoFile;
        videoList.appendChild(listItem);
    });
})
.catch(error => {
    console.error('Error fetching video list:', error);
});