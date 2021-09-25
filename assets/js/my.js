var link = document.createElement('a');
link.href = url;
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));