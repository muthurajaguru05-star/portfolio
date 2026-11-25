export const RESUME_URL = '/Muthu_Raja_Guru_Resume.pdf';
export const RESUME_FILE_NAME = 'Muthu_Raja_Guru_Resume.pdf';

export const handleResumeDownload = (e, onComplete) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  if (onComplete && typeof onComplete === 'function') {
    onComplete();
  }

  // Bypass browser cache so updated resume files are always fetched fresh
  fetch(RESUME_URL, { cache: 'no-store' })
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
      link.download = RESUME_FILE_NAME;
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
      fallbackLink.href = RESUME_URL;
      fallbackLink.download = RESUME_FILE_NAME;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    });
};

