export const handleResumeDownload = (e, onComplete) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  if (onComplete && typeof onComplete === 'function') {
    onComplete();
  }

  const fileUrl = '/Muthu_Raja_Guru_Resume.pdf';
  const fileName = 'Muthu_Raja_Guru_Resume.pdf';

  fetch(fileUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch resume file');
      }
      return response.arrayBuffer();
    })
    .then((buffer) => {
      // Force application/octet-stream MIME type so mobile (iOS Safari / Android Chrome)
      // and desktop browsers trigger a direct file download instead of inline PDF preview
      const blob = new Blob([buffer], { type: 'application/octet-stream' });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 2000);
    })
    .catch(() => {
      // Direct anchor download fallback
      const fallbackLink = document.createElement('a');
      fallbackLink.href = fileUrl;
      fallbackLink.download = fileName;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    });
};

