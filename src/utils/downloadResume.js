export const handleResumeDownload = (e, onComplete) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  if (onComplete && typeof onComplete === 'function') {
    onComplete();
  }

  const fileUrl = '/My_Resume.pdf';
  const fileName = 'Muthu_Raja_Guru_Resume.pdf';

  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch resume file');
      }
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1000);
    })
    .catch(() => {
      // Fallback for browsers blocking blob downloads
      const fallbackLink = document.createElement('a');
      fallbackLink.href = fileUrl;
      fallbackLink.download = fileName;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    });
};

